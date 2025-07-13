<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Animal;
use App\Models\Appointment;
use Carbon\Carbon;

class DashboardController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index()
    {
        $now = Carbon::now();

        // We use copy to not overwrite the original Carbon instance
        // and ensure we get the correct start and end of the week.
        $start = $now->copy()->startOfWeek()->startOfDay(); // monday 00:00:00
        $end = $now->copy()->endOfWeek()->endOfDay(); // sunday 23:59:59

        $appointments = Appointment::with([
            'client', 
            'animal', 
            'speciesGroomOption.groomOption' => function ($query) {
                $query->withTrashed();
            },
            'speciesGroomOption.species' => function ($query) {
                $query->withTrashed();
            }
            ])->whereBetween('date', [$start, $end])
            ->orderBy('date', 'DESC')->get();

        $animalsPerMonth = $this->countAnimalsPerMonth($now);
            
        return inertia('Admin/Dashboard', [
            'animalsPerMonth' => $animalsPerMonth,
            'appointments' => $appointments,
        ]);
    }

    private function countAnimalsPerMonth(Carbon $now) 
    {
        $allSpecies = \App\Models\Species::pluck('name')->toArray();

        // Count the number of animals per species that have appointments in the current month
        $counts = Animal::whereHas('appointments', function ($query) use ($now) {
                $query->whereBetween('date', [
                    $now->copy()->startOfMonth(),
                    $now
                ]);
            })
            ->with('speciesGroomOption.species')
            ->get()
            ->groupBy(fn ($animal) => optional($animal->speciesGroomOption->species)->name)
            ->map(fn ($group) => $group->count())
            ->toArray();

        // Fill in species that have no appointments with 0
        $result = [];
        foreach ($allSpecies as $species) {
            $result[$species] = $counts[$species] ?? 0;
        }

        return $result;
    }
}
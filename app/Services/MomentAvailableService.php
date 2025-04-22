<?php

namespace App\Services;

use App\Models\Appointment;
use Carbon\Carbon;

class MomentAvailableService
{

    /**
     * Get the dates that are fully booked because both moments are taken.
     *
     * @return array
     */
    public function getFullyBookedDates(): array
    {
        $fullDates = Appointment::selectRaw('date, COUNT(*) as total')
            ->where('date', '>=', now())
            ->groupBy('date')
            ->having('total', '>=', 2)
            ->get();
    
        return $fullDates->map(function ($item) {
            return Carbon::parse($item->date)->format('Y-m-d');
        })->toArray();
    }

    /**
     * Get the moments available for each date.
     *
     * @return array
     */
    public function getMomentsByDate(): array
    {
        $appointments = Appointment::select('date', 'moment')
            ->get()
            ->groupBy(fn ($item) => $item->date->format('Y-m-d'))
            ->map(fn ($group) => $group->pluck('moment'))
            ->toArray();

        return $appointments;
    }
}

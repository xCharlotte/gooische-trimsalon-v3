<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $appointments = Appointment::with(['client', 'animal', 'speciesGroomOption.groomOption', 'speciesGroomOption.species'])
            ->when($search, function ($query, $search) {
                $query->whereHas('client', function ($q) use ($search) {
                    $q->whereRaw("CONCAT(first_name, ' ', last_name) LIKE ?", ["%{$search}%"]);
                })
                ->orWhereHas('animal', function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%");
                })
                ->orWhereHas('speciesGroomOption.groomOption', function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%");
                })
                ->orWhereHas('speciesGroomOption.species', function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%");
                });
            })
            ->orderBy('date', 'desc')
            ->paginate(10);

        return Inertia::render('Admin/Appointment/Index', [
            'appointments' => $appointments,
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        return Inertia::render('Admin/Appointment/Show', [
            'appointment' => $appointment->load(['client', 'animal', 'speciesGroomOption.groomOption', 'speciesGroomOption.species']),
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        $appointment->delete();

        return redirect()->route('appointments.index');
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAppointmentRequest;
use App\Models\Animal;
use App\Models\Appointment;
use App\Models\Client;
use App\Models\GroomOption;
use App\Models\Species;
use App\Models\SpeciesGroomOption;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;

class AppointmentController extends Controller
{
    public function index() {
        $groomOptions = GroomOption::all();
        $species = Species::all();

        return Inertia::render('Appointment/Index', [
            'groomOptions' => $groomOptions,
            'species' => $species,
        ]);
    }

    // Store appointment
    public function store(StoreAppointmentRequest $request) {
        // Start DB transaction
        DB::beginTransaction();

        try {
            // Create or find client
            $client = Client::firstOrCreate(
                ['email' => $request->email],
                $request->only([
                    'first_name', 'last_name', 'phone', 'street', 
                    'postal_code', 'house_number', 'house_number_suffix', 
                    'city', 'client_remarks'
                ])
            );

            // Create species_groom_option link
            $speciesGroomOption = SpeciesGroomOption::create([
                'species_id' => $request->species_id,
                'groom_option_id' => $request->groom_option_id,
            ]);

            // Create animal
            $animal = Animal::create([
                'name' => $request->name,
                'breed' => $request->breed,
                'animal_remarks' => $request->animal_remarks,
                'species_groom_option_id' => $speciesGroomOption->id,
                'client_id' => $client->id,
            ]);

            // Create appointment
            $appointment = Appointment::create([
                'date' => $request->date,
                'moment' => $request->moment,
                'client_id' => $client->id,
                'animal_id' => $animal->id,
                'species_groom_option_id' => $speciesGroomOption->id,
            ]);

            // Commit DB transaction
            DB::commit();

            return redirect()->route('appointment.index')
                ->with('success', 'Een bevestiging is verstuurd naar uw e-mail');

        } catch (\Exception $e) {
            // Rollback DB transaction on error
            DB::rollback();
            return redirect()->back()->withErrors('Er is iets misgegaan. Probeer het opnieuw.');
        }
    }

    // Get available moments for a specific date
    public function postAvailableTimes(Request $request) {
        $moments = Appointment::where('date', $request->date)
                    ->pluck('moment');

        return response()->json($moments);
    }

    // Get unavailable dates
    public function countUnavailableDates() {
        $fullDates = Appointment::select('date', DB::raw('count(*) as totalDate'))
            ->where('date', '>=', Carbon::now())
            ->groupBy('date')
            ->having('totalDate', '>=', 2)
            ->pluck('date');

        return response()->json($fullDates);
    }
}

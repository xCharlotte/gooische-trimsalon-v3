<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAppointmentRequest;
use App\Models\Animal;
use App\Models\Appointment;
use App\Models\Client;
use App\Models\SpeciesGroomOption;
use App\Repositories\ClosedDayRepository;
use App\Models\GroomOption;
use App\Models\Species;
use DB;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    protected $appointmentRepo;
    protected $closedDayRepo;

    public function __construct(ClosedDayRepository $closedDayRepo)
    {
        $this->closedDayRepo = $closedDayRepo;
    }

    public function index()
    {
        return Inertia::render('Appointment/Index', [
            'groomOptions' => GroomOption::all(),
            'species' => Species::all(),
            'closedDays' => $this->closedDayRepo->getFutureClosedDays(),
        ]);
    }

    public function store(StoreAppointmentRequest $request) {
        try {
            DB::transaction(function () use ($request) {
                // First we will create a client so we can use the client_id in the animal and appointment
                $client = Client::firstOrCreate(
                    ['email' => $request->clientDetails['email']],
                    $request->clientDetails
                );
    
                // Same for the species_groom_option
                $speciesGroomOption = SpeciesGroomOption::create([
                    'species_id' => $request->animalDetails['species_id'],
                    'groom_option_id' => $request->animalDetails['groom_option_id'],
                ]);
    
                // And the animal
                $animal = Animal::create([
                    'name' => $request->animalDetails['name'],
                    'breed' => $request->animalDetails['breed'],
                    'animal_remarks' => $request->animalDetails['animal_remarks'],
                    'species_groom_option_id' => $speciesGroomOption->id,
                    'client_id' => $client->id,
                ]);
    
                // Now the appointment can be made
                Appointment::create([
                    'date' => $request->date,
                    'moment' => $request->moment,
                    'client_id' => $client->id,
                    'animal_id' => $animal->id,
                    'species_groom_option_id' => $speciesGroomOption->id,
                ]);
            });
    
            return redirect()->route('appointment.index')
                ->with('success', 'Een bevestiging is verstuurd naar uw e-mail');
    
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Er is iets misgegaan. Probeer het opnieuw.', $e->getMessage());
        }
    }
    

    // public function postAvailableTimes(Request $request)
    // {
    //     return response()->json($this->appointmentRepo->getAppointmentsByDate($request->date));
    // }

    // public function countUnavailableDates()
    // {
    //     return response()->json($this->appointmentRepo->getFullyBookedDates());
    // }
}

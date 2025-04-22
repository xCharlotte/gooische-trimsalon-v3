<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClosedDay;
use App\Repositories\ClosedDayRepository;
use App\Services\MomentAvailableService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClosedDayController extends Controller
{
    protected $closedDayRepo;
    protected $momentAvailableService;

    public function __construct(ClosedDayRepository $closedDayRepo,MomentAvailableService $momentAvailableService)
    {
        $this->closedDayRepo = $closedDayRepo;
        $this->momentAvailableService = $momentAvailableService;
    }

    public function index()
    {   
        return Inertia::render('Admin/ClosedDay/Index', [
            'closedDays' => $this->closedDayRepo->getFutureClosedDays(),
            'fullyBookedDates' => $this->momentAvailableService->getFullyBookedDates(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'date' => 'required',
        ]);

        ClosedDay::create([
            'date' => $request->input('date'),
        ]);

        return redirect()->route('closed_days.index')->with('success', 'Gesloten dag succesvol aangemaakt!');
    }

    public function destroy(ClosedDay $closedDay)
    {
        $closedDay->delete();

        return redirect()->route('closed_days.index')->with('success', 'Gesloten dag succesvol verwijderd!');
    }
}

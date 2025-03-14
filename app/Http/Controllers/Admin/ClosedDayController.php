<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClosedDay;
use App\Repositories\ClosedDayRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClosedDayController extends Controller
{
    protected $closedDayRepo;

    public function __construct(ClosedDayRepository $closedDayRepo)
    {
        $this->closedDayRepo = $closedDayRepo;
    }

    public function index()
    {   
        return Inertia::render('Admin/ClosedDay/Index', [
            'closedDays' => $this->closedDayRepo->getFutureClosedDays(),
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

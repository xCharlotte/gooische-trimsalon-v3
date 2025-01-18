<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClosedDay;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClosedDayController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $closedDays = ClosedDay::where('date', '>=', now())->orderBy('date', 'ASC')->get();
        
        return Inertia::render('Admin/ClosedDay/Index', [
            'closedDays' => $closedDays,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ClosedDay $closedDay)
    {
        $closedDay->delete();

        return redirect()->route('closed_days.index')->with('success', 'Gesloten dag succesvol verwijderd!');
    }
}

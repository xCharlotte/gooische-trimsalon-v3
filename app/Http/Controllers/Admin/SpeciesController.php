<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Species;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpeciesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $species = Species::all();
        return Inertia::render('Admin/Species/Index', [
            'species' => $species,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        Species::create([
            'name' => $request->input('name'),
        ]);

        return redirect()->route('species.index')->with('success', 'Species added successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Species $species)
    {
        $species->delete();

        return redirect()->route('species.index')->with('success', 'Species deleted successfully!');
    }
}

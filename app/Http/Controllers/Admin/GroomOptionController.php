<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GroomOption;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GroomOptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $groomOptions = GroomOption::all();
        
        return Inertia::render('Admin/GroomOption/Index', [
            'groomOptions' => $groomOptions,
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

        GroomOption::create([
            'name' => $request->input('name'),
        ]);

        return redirect()->route('groomoptions.index')->with('success', 'Trimoptie succesvol toegevoegd!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GroomOption $groomOption)
    {
        $groomOption->delete();

        return redirect()->route('groomoptions.index')->with('success', 'Trimoptie successvol verwijderd!');
    }
}

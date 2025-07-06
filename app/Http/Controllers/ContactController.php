<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        if (!empty($request->company)) {
            return back(); // prevent spam 
        }

        $validated = $request->validate([
            'name' => 'required|string|min:2|max:255',
            'email' => 'required|email|max:255',
            'phone' => ['required', 'string', 'regex:/^(\+31|0)[1-9][0-9]{8}$/'],
            'contactMessage' => 'required|string|max:5000',
            'company' => 'nullable|string|max:0',
        ]);

        Mail::to($validated['email'])->send(new \App\Mail\ContactFormClient($validated));
        Mail::to('info@gooischetrimsalon.nl')->send(new \App\Mail\ContactFormAdmin($validated));

        return redirect()->back()->with('success', 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.');
    }
}
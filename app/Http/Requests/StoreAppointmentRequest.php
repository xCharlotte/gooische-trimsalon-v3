<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAppointmentRequest extends FormRequest
{
    public function authorize() {
        return true;
    }

    public function rules() {
        return [
            // Client fields
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'street' => 'required|string|max:255',
            'postal_code' => 'required|string|max:10',
            'house_number' => 'required|integer',
            'house_number_suffix' => 'nullable|string|max:10',
            'city' => 'required|string|max:255',
            'client_remarks' => 'nullable|string',

            // Animal fields
            'name' => 'required|string|max:255',
            'breed' => 'required|string|max:255',
            'animal_remarks' => 'nullable|string',

            // Appointment fields
            'date' => 'required|date',
            'moment' => 'required|string',

            // Species & Groom Option
            'species_id' => 'required|exists:species,id',
            'groom_option_id' => 'required|exists:groom_options,id',
        ];
    }
}

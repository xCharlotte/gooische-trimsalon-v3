<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAppointmentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'date' => 'required|date|after_or_equal:today',
            'moment' => 'required|string|max:255',

            'clientDetails.first_name' => 'required|string|max:255',
            'clientDetails.last_name' => 'required|string|max:255',
            'clientDetails.street' => 'required|string|max:255',
            'clientDetails.house_number' => 'required|string|max:10',
            'clientDetails.house_number_suffix' => 'nullable|string|max:10',
            'clientDetails.postal_code' => 'required|string|regex:/^[1-9][0-9]{3}[A-Z]{2}$/', 
            'clientDetails.city' => 'required|string|max:255',
            'clientDetails.email' => 'required|email|max:255',
            'clientDetails.phone' => 'required|string|regex:/^\+?[0-9\s\-\(\)]{7,20}$/',
            'clientDetails.client_remarks' => 'nullable|string|max:1000',

            'animalDetails.species_id' => 'required|exists:species,id',
            'animalDetails.name' => 'required|string|max:255',
            'animalDetails.breed' => 'required|string|max:255',
            'animalDetails.groom_option_id' => 'required|exists:groom_options,id',
            'animalDetails.animal_remarks' => 'nullable|string|max:1000',
        ];
    }

    public function messages(): array
    {
        return [
            'date.required' => 'De datum is verplicht.',
            'date.date' => 'De datum moet een geldige datum zijn.',
            'date.after_or_equal' => 'De datum mag niet in het verleden liggen.',

            'clientDetails.first_name.required' => 'De voornaam is verplicht.',
            'clientDetails.email.required' => 'E-mail is verplicht.',
            'clientDetails.email.email' => 'E-mail moet een geldig adres zijn.',
            'clientDetails.phone.regex' => 'Voer een geldig Nederlands telefoonnummer in.',
            'clientDetails.postal_code.regex' => 'Voer een geldige Nederlandse postcode in (bijv. 1234AB).',
        ];
    }
}

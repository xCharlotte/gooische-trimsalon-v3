<?php

namespace App\Mail;

use App\Models\Animal;
use App\Models\Appointment;
use App\Models\Client;
use App\Models\SpeciesGroomOption;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AppointmentConfirmationClient extends Mailable
{
    use Queueable, SerializesModels;

    public $appointment;
    public $animal;
    public $client;
    public $speciesGroomOption;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Appointment $appointment, Animal $animal, Client $client, SpeciesGroomOption $speciesGroomOption) {

        $this->appointment                  = $appointment;
        $this->animal                       = $animal;
        $this->client                       = $client;
        $this->speciesGroomOption           = $speciesGroomOption;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('info@gooischetrimsalon.nl')
        ->subject('Bevestiging trimafspraak.')
        ->markdown('emails.appointments.confirmation-client');
    }
}

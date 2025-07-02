<x-mail::message>
Hoi Marja, <br>

{{ $client->first_name}} {{ $client->last_name }} heeft zojuist een afspraak gemaakt om {{ $animal->name }} te laten trimmen. <br>
De afspraak staat gepland voor {{ \Carbon\Carbon::parse($appointment->date)->translatedFormat('l d F Y') }} van {{ $appointment->moment }} uur. <br>

Ga naar het dashboard om de overige gegevens van de afspraak te bekijken. 

<x-mail::button :url="url('/admin/appointments')">
Ga naar dashboard
</x-mail::button>

Groetjes,<br>
Je website :-) <br>
</x-mail::message>

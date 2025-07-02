<x-mail::message>

# Beste {{ $client->first_name }} {{ $client->last_name }},

Bedankt voor het maken van een afspraak.  
De afspraak staat gepland op:

**{{ \Carbon\Carbon::parse($appointment->date)->translatedFormat('l d F Y') }} van {{ $appointment->moment }} uur**

Hieronder vindt u de gegevens die u heeft ingevuld.

---

## Gegevens huisdier

- **Naam**: {{ $animal->name }}
- **Soort dier**: {{ $speciesGroomOption->species->name }}
- **Ras**: {{ $animal->breed }}
- **Trimoptie**: {{ $speciesGroomOption->GroomOption->name }}
- **Opmerkingen over {{ $animal->name }}**:  
@if(!empty($animal->animal_remarks))
{{ $animal->animal_remarks }}
@else
Geen
@endif

---

## Uw gegevens

- **Naam**: {{ $client->first_name }} {{ $client->last_name }}
- **Adres**: {{ $client->street }} {{ $client->house_number }} {{  $client->house_number_suffix }}, {{ $client->postal_code }} {{ $client->city }}
- **E-mailadres**: {{ $client->email }}
- **Telefoon**: {{ $client->phone }}
- **Overige opmerkingen**:  
@if(!empty($client->client_remarks))
{{ $client->client_remarks }}
@else
Geen
@endif

---

Indien u verhinderd bent, laat het ons graag 24 uur van tevoren weten. Anders zijn we genoodzaakt om de kosten alsnog in rekening te brengen.  

Gelieve op tijd te komen en uw huisdier spoedig op te halen i.v.m. de volgende afspraak.

Met vriendelijke groet,  
**Marja de Ridder**

{{ config('app.name') }}
Van Linschotenlaan 242  
1212 GA Hilversum  
+31 6 23349398

</x-mail::message>
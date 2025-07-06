<x-mail::message>
# Nieuw bericht via contactformulier

**Naam:** {{ $contact['name'] }}  
**E-mail:** {{ $contact['email'] }}  
**Telefoon:** {{ $contact['phone'] }}  

**Bericht:**  
{{ $contact['contactMessage'] }}

{{ config('app.name') }}
</x-mail::message>

<?php 

namespace App\Services;
use Illuminate\Support\Facades\Http;

class PostCodeService 
{
    public function getPostCodeData(string $postalCode, int $houseNumber): ?array
    {
        $postalCode = strtoupper(str_replace(' ', '', $postalCode));

        $response = Http::withHeaders([
            'token' => config('services.postcode_api.key'),
        ])->get('https://json.api-postcode.nl', [
            'postcode' => $postalCode,
            'number' => $houseNumber,
        ]);

        if ($response->successful()) {
            return $response->json();
        }

        return [
            'error' => 'Unable to retrieve postcode data. Please check the postcode and house number.',
        ];
    }
}
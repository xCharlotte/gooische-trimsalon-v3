<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PostCodeService;

class PostcodeController extends Controller
{
    protected PostCodeService $postCodeService;

    public function __construct(PostCodeService $postCodeService)
    {
        $this->postCodeService = $postCodeService;
    }

    public function lookup(Request $request)
    {
        $postcode = $request->query('postcode');
        $number = $request->query('number');

        if (!$postcode || !$number) {
            return response()->json(['error' => 'Postcode en huisnummer zijn verplicht.'], 400);
        }

        $data = $this->postCodeService->getPostCodeData($postcode, (int) $number);

        return response()->json($data);
    }
}

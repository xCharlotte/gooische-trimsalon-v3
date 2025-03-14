<?php

namespace App\Repositories;

use App\Models\ClosedDay;
use Illuminate\Support\Collection;

class ClosedDayRepository
{
    public function getFutureClosedDays(): Collection
    {
        return ClosedDay::where('date', '>=', now())->orderBy('date', 'ASC')->get();
    }
}
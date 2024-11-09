<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'moment',
    ];

    protected $dates = ['date'];

    public function client(): BelongsTo 
    {
        return $this->belongsTo(Client::class);
    }

    public function animal(): BelongsTo 
    {
        return $this->belongsTo(Animal::class);
    }

    public function speciesGroomOption(): BelongsTo 
    {
        return $this->belongsTo(SpeciesGroomOption::class);
    }
}

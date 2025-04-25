<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'date',
        'moment',
        'client_id',
        'animal_id',
        'species_groom_option_id',
    ];

    protected $casts = [
        'date' => 'datetime'
    ];

    protected $dates = ['deleted_at'];

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

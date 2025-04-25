<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Animal extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'breed',
        'species',
        'animal_remarks',
        'client_id',
        'species_groom_option_id',
    ];

    protected $dates = ['deleted_at'];

    public function speciesGroomOption(): BelongsTo 
    {
        return $this->belongsTo(SpeciesGroomOption::class);
    }

    public function client(): BelongsTo 
    {
        return $this->belongsTo(Client::class);
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}

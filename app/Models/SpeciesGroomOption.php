<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class SpeciesGroomOption extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'species_groom_options';

    protected $fillable = [
        'species_id',
        'groom_option_id',
    ];

    protected $dates = ['deleted_at'];
    
    public function Species(): BelongsTo 
    {
        return $this->belongsTo(Species::class);
    }
    
    public function GroomOption(): BelongsTo 
    {
        return $this->belongsTo(GroomOption::class);
    }

    public function animals(): HasMany 
    {
        return $this->hasMany(Animal::class);
    }

    public function appointments(): BelongsToMany {
        return $this->belongsToMany(Appointment::class);
    }
}

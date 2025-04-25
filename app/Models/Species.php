<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Species extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'species';

    protected $fillable = [
        'name',
    ];

    protected $dates = ['deleted_at'];

    public function SpeciesGroomOption(): BelongsToMany {
        return $this->belongsToMany(SpeciesGroomOption::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'street',
        'postal_code',
        'house_number',
        'house_number_suffix',
        'city',
        'client_remarks',
    ];

    protected $dates = ['deleted_at'];

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }

    public function animals(): HasMany
    {
        return $this->hasMany(Animal::class);
    }
}

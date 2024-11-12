<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Species;

class SpeciesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Species::insert([
            ['name' => 'Hond'],
            ['name' => 'Kat'],
            ['name' => 'Konijn'],
        ]);
    }
}

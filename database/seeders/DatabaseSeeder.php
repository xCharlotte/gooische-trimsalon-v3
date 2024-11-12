<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(BlogSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(SpeciesSeeder::class);
        $this->call(GroomOptionSeeder::class);

    }
}

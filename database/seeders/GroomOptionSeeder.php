<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GroomOption;

class GroomOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        GroomOption::insert([
            ['name' => 'Alleen trimmen'],
            ['name' => 'Alleen wassen'],
            ['name' => 'Trimmen & wassen'],
            ['name' => 'Ontwollen'],
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Productos;
use App\Models\Clientes;

class Filler extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Clientes::factory(10)->create();
        Productos::factory(10)->create();
    }
}

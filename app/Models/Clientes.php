<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class clientes extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'direccion',
        'giro',
        'dia_de_visita',
    ];

    protected $table = 'clientes';
}


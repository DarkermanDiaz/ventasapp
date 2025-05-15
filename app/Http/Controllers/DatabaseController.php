<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class DatabaseController extends Controller
{
    public function ShowClients()
    {
        $base_clientes = \App\Models\Clientes::all();
        return Inertia::render('dashboard', [
            'base_clientes' => $base_clientes,
        ]);
    }

    public function ShowClient($id)
    {
        $base_clientes = \App\Models\Clientes::find($id);
        if (!$base_clientes) {
            return 'Cliente no encontrado';
        }
        $base_clientes = $base_clientes->toArray();
        error_log(print_r($base_clientes, true));
        return Inertia::render('vistacliente', [
            "base_clientes" => $base_clientes,
        ]);
    }

    public function CreateClient()
    {
        return Inertia::render('crearcliente');
    }

    public function EditClient($id)
    {
        return Inertia::render('editarcliente', [
            'id' => $id,
        ]);
    }

    public function DeleteClient($id)
    {
        return ;
    }

    public function ShowProducts()
    {
        $base_productos = \App\Models\Productos::all();
        return Inertia::render('productos', [
            'base_productos' => $base_productos,
        ]);
    }

    public function ShowProduct($id)
    {
        return Inertia::render('producto/' . $id);
    }

    public function CreateProduct()
    {
        return Inertia::render('crearproducto');
    }


}

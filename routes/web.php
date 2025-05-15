<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatabaseController;
use App\Models\Clientes;
use Dflydev\DotAccessData\Data;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/productos', function () {
    return Inertia::render('productos');
});

Route::get('/clientes/{id}', [DatabaseController::class, 'ShowClient']);
Route::get('/clientes/{id}/editar', [DatabaseController::class, 'EditClient']);
Route::get('/nuevo/cliente', [DatabaseController::class, 'CreateClient']);
Route::delete('/clientes/{id}', [DatabaseController::class, 'DeleteClient']);

Route::post('/nuevo/cliente', function ($nombre, $direccion, $giro, $dia_de_visita) {
    $nuevo = New Clientes;

    $nuevo->nombre = $nombre;
    $nuevo->direccion = $direccion;
    $nuevo->giro = $giro;
    $nuevo->dia_de_visita = $dia_de_visita;

    $nuevo->save();
    return $nuevo;
});

Route::get('/modificar/cliente/{id}', function ($id) {
    $modificar = Clientes::find($id);
    

});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard',[DatabaseController::class, 'ShowClients'], function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatabaseController;
use App\Models\Clientes;
use App\Models\Productos;
use Dflydev\DotAccessData\Data;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/productos', [DatabaseController::class, 'ShowProducts']);
Route::get('/productos/{id}', [DatabaseController::class, 'ShowProduct']);
Route::get('/productos/{id}/editar', [DatabaseController::class, 'EditProduct']);
Route::get('/nuevo/producto', [DatabaseController::class, 'CreateProduct']);
Route::delete('/productos/{id}', [DatabaseController::class, 'DeleteProduct']);

Route::post('/nuevo/producto', function (\Illuminate\Http\Request $request) {
    $nuevo = new Productos;

    $nuevo->nombre = $request->input('nombre');
    $nuevo->precio = $request->input('precio');

    $nuevo->save();
    return redirect('/productos')->with('success', 'Producto creado correctamente');
});

Route::get('/clientes/{id}', [DatabaseController::class, 'ShowClient']);
Route::get('/clientes/{id}/editar', [DatabaseController::class, 'EditClient']);
Route::get('/nuevo/cliente', [DatabaseController::class, 'CreateClient']);
Route::delete('/clientes/{id}', [DatabaseController::class, 'DeleteClient']);
Route::get('/clientes',[DatabaseController::class, 'ShowClients']);

Route::post('/nuevo/cliente', function (\Illuminate\Http\Request $request) {
    $nuevo = new Clientes;

    $nuevo->nombre = $request->input('nombre');
    $nuevo->direccion = $request->input('direccion');
    $nuevo->giro = $request->input('giro');
    $nuevo->dia_de_visita = $request->input('dia_de_visita');

    $nuevo->save();
    return redirect('/dashboard')->with('success', 'Cliente creado correctamente');
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

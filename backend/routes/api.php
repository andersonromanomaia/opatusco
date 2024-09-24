<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/addagendamento', [\App\Http\Controllers\AgendamentoController::class,'addagendamento']);
Route::get('/loadagendamentorecepcionista', [\App\Http\Controllers\AgendamentoController::class,'loadagendamentorecepcionista']);
Route::get('/loadagendamentomedico', [\App\Http\Controllers\AgendamentoController::class,'loadagendamentomedico']);
Route::post('/alteragendamento', [\App\Http\Controllers\AgendamentoController::class,'alteragendamento']);
Route::delete('/deleteagendamento/{id}', [\App\Http\Controllers\AgendamentoController::class,'deleteagendamento']);

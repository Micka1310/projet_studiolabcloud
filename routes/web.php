<?php

use App\Http\Controllers\authentification;
use App\Http\Controllers\accueil;
use Illuminate\Support\Facades\Route;

// URL menant à l'accueil
Route::get('/',[accueil::class, 'accueil'])->name('accueil');

// URL menant vers la page de connexion/inscription
Route::get('/authentification',[authentification::class, 'authentification'])->name('authentification');    // ['nomm de classe', 'nom de la fonction']
Route::post('/authentification', [authentification::class, 'connexion'])->name('connexion');
Route::post('/authentification', [authentification::class, 'inscription'])->name('inscription');

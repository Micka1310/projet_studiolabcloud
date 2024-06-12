<?php

use App\Http\Controllers\authentification;
use App\Http\Controllers\accueil;
use Illuminate\Support\Facades\Route;

// URL menant à l'accueil
Route::get('/', [accueil::class, 'accueil'])->name('accueil');
Route::get('/deconnexion', [authentification::class, 'deconnexion'])->name('deconnexion');

// URL menant vers la page de connexion/inscription
Route::get('/authentification', [authentification::class, 'authentification'])->name('authentification');    // ['nomm de classe', 'nom de la fonction']
Route::post('/connexion', [authentification::class, 'connexion'])->name('connexion');
Route::post('/inscription', [authentification::class, 'inscription'])->name('inscription');

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class accueil extends Controller
{
    function accueil()
    {
        return view('accueil');
    }
}

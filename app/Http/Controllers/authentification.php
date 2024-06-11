<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

use App\Models\User;

class authentification extends Controller
{
    function authentification()
    {
        if (Auth::check())
        {
            // Si un utilisateur est déja connecter et que l'on force
            // à revenir dans la page de connexion sans se déconnecter,
            // on est rediriger vers la page d'accueil
            return redirect(route('home'));
        }

        return view('studiolab_connexion_inscription_v2');
    }


    function connexion(Request $request)
    {
        // On indique que l'email et le mdp sont indispensable pour valider
        $request->validate([
            'email'=>'required',
            'password'=>'required'
        ]);

        // Extrait les informations d'identification de la requête
        $credentials=$request->only('nom', 'prenom', 'email', 'password');

        // Essayer d'authentifier l'utilisateur
        if(Auth::attempt($credentials)){
            return redirect()->intended(route('accueil'))->with("success", "Connexion réussis !");
        }

        // Si l'authentification échoue, rediriger vers la page de connexion avec un message d'erreur
        return redirect(route('authentification'))->with("error", "Connexion échouer. Les données fournis ne sont pas valide. Réessayer svp."); // "with" permet d'afficher un message
    }


    function inscription(Request $request)
    {
        // On indique que l'email et le mdp sont indispensable pour valider
        $request->validate([
            'nom'=>'required',
            'prenom'=>'required',
            'email'=> 'required|email|unique:utilisateur', // "|email" indique de vérifier si c'est bien un email. Par exemple de type ".com"
            'password'=>'required'
        ]);

        // Pour créer le nouvel utilisateur dans la base de donnée
        $data['nom']=$request->name;
        $data['prenom']=$request->prenom;
        $data['email']=$request->email;
        $data['password']=Hash::make($request->password);   // On crypte le mdp
        $user=User::create($data);  // On créer la base de donnée dans la table

        // si la variable "$user"(soit la table crée) et vide ou fausse, renvoie une erreur
        if(!$user)
        {
            return redirect(route('authentification'))->with("error", "Inscription échouer. Les données fournis ne sont pas valide. Réessayer svp.");
        }

        // sinon, le compte utilisateur à été crée avec succès et on renvoie vers la page de connexion
        return redirect(route('login'))->with("success", "Connexion réussis !");
    }

}

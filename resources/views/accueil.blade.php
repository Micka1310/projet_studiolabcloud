<!DOCTYPE html>

<!-- En francais -->
<html lang = "fr">

<head>

    <!-- Quelques informations sur ce fichier -->
    <meta charset="utf-8"/>
    <meta name="mot_clé" content="HTML, CSS, JavaScript">
    <meta name="description" content="Page d'accueil">
    <meta name="auteur" content="King Mickaël">
    <meta name="date_de_mise_a_jour" content="11/06/2024">

    <!-- Titre de l'onglet -->
    <title>Studiolab cloud | accueil</title>

    <!-- Lien CSS et JavaScript -->
    <link href="studiolab_accueil_v3.css" rel="stylesheet" type="text/css" media="">
    <script src="prosit2js/prosit2.js"></script>

</head>

<body>

    <main>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">

            <div class="container-fluid">

                <a class="navbar-brand" href="#">{{config('app.name')}}</a>   <!-- indique la variable "name" dans le fichier "app.name" du dossier "config"-->

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarText">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                        </li>

                        <!-- Le lien de déconnexion apparaitra seulement si un utilisateur est connecter -->
                        @auth

                            <li class="nav-item">
                                <a class="nav-link" href="{{route('accueil')}}">Déconnexion</a>
                            </li>

                        <!-- Sinon fait apparaitre ce lien -->
                        @else

                            <li class="nav-item">
                                <a class="nav-link" href="{{route('authentification')}}">Se connecter</a>
                            </li>

                        @endauth

                    </ul>

                    <span class="navbar-text">

                        <!-- Fait apparaître le nom et prénom de l'utilisateur -->
                        @auth

                            {{auth()->user()->nom}}
                            {{auth()->user()->prenom}}

                        @endauth

                    </span>

                </div>

            </div>

        </nav>

        <h1>Bienvenue !</h1>

    </main>

</body>

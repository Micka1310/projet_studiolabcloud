const bouton_gauche = document.getElementById('bouton_succes_client_gauche');
const bouton_droite = document.getElementById('bouton_succes_client_droite');
const images = document.getElementsByClassName('img_succes_client')
const img_succes_client_1 = document.getElementById('img_succes_client_1');

var position_img = [1, 2, 3, 4, 0]; // position initial des images

var distance_gauche_1 = -350;
var distance_gauche_2 = -350;
var distance_gauche_3 = -390;
var distance_gauche_4 = -430;
var distance_gauche_5 = -430;
//var distance_gauche_6 = 0;

var nb_deplacement_1_total = 0; //  Pour indiquer le nombre de déplacement total effectuer (par clique)

//var nb_deplacement_6_total = 0;

let nb_retour = [0, 0, 0, 0, 0];    //  Pour indiquer le nombre de retour à la position inital pour chaque image

var nb_images = images.length;  //  nombre d'image au total appartenant à la classe "img_succes_client"
 


function clique_bouton_gauche() 
{
    // Pour retirer l'effet de déplacement instantané
    for (let i = 0; i < nb_images; i++)
    {
        images[i].classList.remove('mouvement_retour_gauche');
    }

    // On incrémente la variable de 1
    nb_deplacement_1_total++;

    //On décrémente les variables des positions de 1
    for (let i = 0; i < nb_images; i++)
    {
        position_img[i]--;
    }

    if (position_img[0] < 0) 
    {
        distance_gauche_1 = 1100;    // Variable à changer
        distance_gauche_2 = -850;
        distance_gauche_3 = -850;
        distance_gauche_4 = -750;
        distance_gauche_5 = -750;
        //distance_gauche_6 = -300;

        position_img[0] = nb_images -1;    // Variable à changer

        images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');

        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;

        nb_retour[0]++;
    }


    if (position_img[1] < 0) 
    {
        distance_gauche_1 = 800;    // Variable à changer
        distance_gauche_2 = 1000;
        distance_gauche_3 = -1150;
        distance_gauche_4 = -1150;
        distance_gauche_5 = -1150;
        //distance_gauche_6 = -550;

        position_img[1] = nb_images - 1;    // Variable à changer

        images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
    
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
        nb_retour[1]++;
    }

        
    if (position_img[2] < 0) 
    {
        distance_gauche_1 = 320;    // Variable à changer
        distance_gauche_2 = 320;
        distance_gauche_3 = 1000;
        distance_gauche_4 = -1600;
        distance_gauche_5 = -1600;

        position_img[2] = nb_images - 1;    // Variable à changer

        images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
    
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
        nb_retour[2]++;
    }


    if (position_img[3] < 0) 
    {
        distance_gauche_1 = 0;    // Variable à changer
        distance_gauche_2 = 0;
        distance_gauche_3 = 0;
        distance_gauche_4 = -100;
        distance_gauche_5 = -2000;

        position_img[3] = nb_images - 1;    // Variable à changer
        images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
        
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
        nb_retour[3]++;
    }


    if (position_img[4] < 0) 
    {
        distance_gauche_1 = -350;
        distance_gauche_2 = -350;
        distance_gauche_3 = -390;
        distance_gauche_4 = -430;
        distance_gauche_5 = -430;

        position_img[4] = nb_images - 1;    // Variable à changer
        images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
            
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
        nb_retour[4]++;
        //resetTransformations();
    }


    // Quand on revient à la situation de départ
    else
    {
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    }

    /*    
    // On met à jour les variables
    document.getElementById("position_img_1").innerHTML = "Position img 1 : " +  position_img[0];
    document.getElementById("position_img_2").innerHTML = "Position img 2 : " +  position_img[1];
    document.getElementById("position_img_3").innerHTML = "Position img 3 : " +  position_img[2];
    document.getElementById("position_img_4").innerHTML = "Position img 4 : " +  position_img[3];
    document.getElementById("position_img_5").innerHTML = "Position img 5 : " +  position_img[4];
    //document.getElementById("position_img_6").innerHTML = "Position img 5 : " +  position_img[5];

    // On affiche le nombre de déplacement effectuer au total
    document.getElementById("nb_deplacement_1").innerHTML = "Nombre de déplacement avant rénitialisation de img 1 : " +  nb_deplacement_1_total;

    // On affiche le nombre de retour à la position d'origine de chaque image
    document.getElementById("compteur_retour_1").innerHTML = "Nombre de retour effectuer pour img 1 : " +  nb_retour[0];
    document.getElementById("compteur_retour_2").innerHTML = "Nombre de retour effectuer pour img 2 : " +  nb_retour[1];
    document.getElementById("compteur_retour_3").innerHTML = "Nombre de retour effectuer pour img 3 : " +  nb_retour[2];
    document.getElementById("compteur_retour_4").innerHTML = "Nombre de retour effectuer pour img 4 : " +  nb_retour[3];
    document.getElementById("compteur_retour_5").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[4];
    //document.getElementById("compteur_retour_6").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[5];

    document.getElementById("nb_images").innerHTML = "Nombre d'images : " +  nb_images;
    */
}


function clique_bouton_droite() 
{
    // Pour retirer l'effet de déplacement instantané
    for (let i = 0; i < nb_images; i++)
    {
        images[i].classList.remove('mouvement_retour_gauche');
    }

    // On incrémente la variable de 1
    nb_deplacement_1_total++;

    //On décrémente les variables des positions de 1
    for (let i = 0; i < nb_images; i++)
    {
        position_img[i]++;
    }


    if (position_img[0] > 4) 
    {
        distance_gauche_1 = -350;
        distance_gauche_2 = -350;
        distance_gauche_3 = -390;
        distance_gauche_4 = -430;
        distance_gauche_5 = -430;

        position_img[0] = 0;    // Variable à changer
        images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
            
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
        nb_retour[0]++;
        //resetTransformations();
    }


    if (position_img[1] > 4) 
    {
        distance_gauche_1 = 1100;    // Variable à changer
        distance_gauche_2 = -850;
        distance_gauche_3 = -850;
        distance_gauche_4 = -750;
        distance_gauche_5 = -750;
        //distance_gauche_6 = -550;

        position_img[1] = 0;    // Variable à changer

        images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
    
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
        nb_retour[1]++;
    }


    if (position_img[2] > 4) 
    {
        distance_gauche_1 = 800;    // Variable à changer
        distance_gauche_2 = 1000;
        distance_gauche_3 = -1150;
        distance_gauche_4 = -1150;
        distance_gauche_5 = -1150;

        position_img[2] = 0;    // Variable à changer

        images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
    
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
        nb_retour[2]++;
    }


    if (position_img[3] > 4) 
    {
        distance_gauche_1 = 320;
        distance_gauche_2 = 320;
        distance_gauche_3 = 1000;
        distance_gauche_4 = -1600;
        distance_gauche_5 = -1600;

        position_img[3] = 0;    // Variable à changer
        images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
        
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
        nb_retour[3]++;
    }


    if (position_img[4] > 4) 
    {
        distance_gauche_1 = 0;
        distance_gauche_2 = 0;
        distance_gauche_3 = 0;
        distance_gauche_4 = -100;
        distance_gauche_5 = -2000;

        position_img[4] = 0;    // Variable à changer
        images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
        //images[0].classList.add('mouvement_gauche');
            
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
        nb_retour[4]++;
        //resetTransformations();
    }


    // Quand on revient à la situation de départ
    else
    {
        // déplace les images
        images[0].style.transform = `translateX(${distance_gauche_1}px)`;
        images[1].style.transform = `translateX(${distance_gauche_2}px)`;
        images[2].style.transform = `translateX(${distance_gauche_3}px)`;
        images[3].style.transform = `translateX(${distance_gauche_4}px)`;
        images[4].style.transform = `translateX(${distance_gauche_5}px)`;
        //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    }

    /*    
    // On met à jour les variables
    document.getElementById("position_img_1").innerHTML = "Position img 1 : " +  position_img[0];
    document.getElementById("position_img_2").innerHTML = "Position img 2 : " +  position_img[1];
    document.getElementById("position_img_3").innerHTML = "Position img 3 : " +  position_img[2];
    document.getElementById("position_img_4").innerHTML = "Position img 4 : " +  position_img[3];
    document.getElementById("position_img_5").innerHTML = "Position img 5 : " +  position_img[4];
    //document.getElementById("position_img_6").innerHTML = "Position img 5 : " +  position_img[5];

    // On affiche le nombre de déplacement effectuer au total
    document.getElementById("nb_deplacement_1").innerHTML = "Nombre de déplacement avant rénitialisation de img 1 : " +  nb_deplacement_1_total;

    // On affiche le nombre de retour à la position d'origine de chaque image
    document.getElementById("compteur_retour_1").innerHTML = "Nombre de retour effectuer pour img 1 : " +  nb_retour[0];
    document.getElementById("compteur_retour_2").innerHTML = "Nombre de retour effectuer pour img 2 : " +  nb_retour[1];
    document.getElementById("compteur_retour_3").innerHTML = "Nombre de retour effectuer pour img 3 : " +  nb_retour[2];
    document.getElementById("compteur_retour_4").innerHTML = "Nombre de retour effectuer pour img 4 : " +  nb_retour[3];
    document.getElementById("compteur_retour_5").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[4];
    //document.getElementById("compteur_retour_6").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[5];

    document.getElementById("nb_images").innerHTML = "Nombre d'images : " +  nb_images;
    */
}

/*
// On affiche les variables
document.getElementById("position_img_1").innerHTML = "Position img 1 : " +  position_img[0];
document.getElementById("position_img_2").innerHTML = "Position img 2 : " +  position_img[1];
document.getElementById("position_img_3").innerHTML = "Position img 3 : " +  position_img[2];
document.getElementById("position_img_4").innerHTML = "Position img 4 : " +  position_img[3];
document.getElementById("position_img_5").innerHTML = "Position img 5 : " +  position_img[4];
//document.getElementById("position_img_6").innerHTML = "Position img 5 : " +  position_img[5];

// On affiche le nombre de déplacement effectuer au total
document.getElementById("nb_deplacement_1").innerHTML = "Nombre de déplacement avant rénitialisation de img 1 : " +  nb_deplacement_1_total;

// On affiche le nombre de retour à la position d'origine de chaque image
document.getElementById("compteur_retour_1").innerHTML = "Nombre de retour effectuer pour img 1 : " +  nb_retour[0];
document.getElementById("compteur_retour_2").innerHTML = "Nombre de retour effectuer pour img 2 : " +  nb_retour[1];
document.getElementById("compteur_retour_3").innerHTML = "Nombre de retour effectuer pour img 3 : " +  nb_retour[2];
document.getElementById("compteur_retour_4").innerHTML = "Nombre de retour effectuer pour img 4 : " +  nb_retour[3];
document.getElementById("compteur_retour_5").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[4];
//document.getElementById("compteur_retour_6").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[5];

document.getElementById("nb_images").innerHTML = "Nombre d'images : " +  nb_images;
*/

// Si on appuie sur le bouton de flèche gauche
bouton_gauche.addEventListener('click', clique_bouton_gauche)

// Si on appuie sur le bouton de flèche droite
bouton_droite.addEventListener('click', clique_bouton_droite)
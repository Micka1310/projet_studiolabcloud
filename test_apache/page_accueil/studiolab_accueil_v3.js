const bouton_gauche = document.getElementById('bouton_succes_client_gauche');
const bouton_droite = document.getElementById('bouton_succes_client_droite');
const images = document.getElementsByClassName('img_succes_client')
//const img_succes_client_1 = document.getElementById('img_succes_client_1');
const img_container = document.querySelector('.img_container');

var position_img = [1, 2, 3, 4, 0]; // position initial des images

var distance_gauche_1 = 0;
var distance_gauche_2 = 0;
var distance_gauche_3 = 0;
var distance_gauche_4 = 0;
var distance_gauche_5 = 0;
//var distance_gauche_6 = 0;

var nb_deplacement_1_total = 0; //  Pour indiquer le nombre de déplacement total effectuer (par clique)

//var nb_deplacement_6_total = 0;

let nb_retour = [0, 0, 0, 0, 0];    //  Pour indiquer le nombre de retour à la position inital pour chaque image

var nb_images = images.length;  //  nombre d'image au total appartenant à la classe "img_succes_client"


/* Pour rendre la page responsive */
window.addEventListener('resize', () => 
{
    var taille_fenetre = window.innerWidth; // prend en valeur la taille de la fenêtre
    
    /*
    document.getElementById("taille_fenetre").innerHTML = "Taille actuel de la fenêtre : " +  taille_fenetre;
    */

    distance_gauche_1 = 0;
    distance_gauche_2 = 0;
    distance_gauche_3 = -20;
    distance_gauche_4 = 0;
    distance_gauche_5 = 0;
    
    position_img[0] = 1;
    position_img[1] = 2;
    position_img[2] = 3;
    position_img[3] = 4;
    position_img[4] = 0;
    
    
    images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    //images[0].classList.add('mouvement_gauche');
    
    
    // déplace les images
    images[0].style.transform = `translateX(${distance_gauche_1}px)`;
    images[1].style.transform = `translateX(${distance_gauche_2}px)`;
    images[2].style.transform = `translateX(${distance_gauche_3}px)`;
    images[3].style.transform = `translateX(${distance_gauche_4}px)`;
    images[4].style.transform = `translateX(${distance_gauche_5}px)`;
    //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
    /*
    nb_retour[0]++;
    nb_retour[1]++;
    nb_retour[2]++;
    nb_retour[3]++;
    nb_retour[4]++;
    */


    var taille_fenetre_partenaire = window.innerWidth; // prend en valeur la taille de la fenêtre
    
    /*
    document.getElementById("taille_fenetre").innerHTML = "Taille actuel de la fenêtre : " +  taille_fenetre;
    */

    distance_gauche_1_partenaire = 0;
    distance_gauche_2_partenaire = 0;
    distance_gauche_3_partenaire = -20;
    distance_gauche_4_partenaire = 0;
    distance_gauche_5_partenaire = 0;
    
    position_img_partenaire[0] = 1;
    position_img_partenaire[1] = 2;
    position_img_partenaire[2] = 3;
    position_img_partenaire[3] = 4;
    position_img_partenaire[4] = 0;
    
    
    images_partenaire[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    images_partenaire[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    images_partenaire[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    images_partenaire[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    images_partenaire[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
    //images[0].classList.add('mouvement_gauche');
    
    
    // déplace les images
    images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
    images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
    images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
    images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
    images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
    //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
    /*
    nb_retour_partenaire[0]++;
    nb_retour_partenaire[1]++;
    nb_retour_partenaire[2]++;
    nb_retour_partenaire[3]++;
    nb_retour_partenaire[4]++;
    */
});


function img_container_width() 
{
    return parseInt(window.getComputedStyle(img_container).width);   //  "parseInt" permet de convertir l'élément en nombre entier
}

/* Pour avoir la valeur de la taille du container */
const val_img_container_width = img_container_width();

/*
window.addEventListener('resize', () => 
{

});
*/

function clique_bouton_gauche() 
{
    var taille_fenetre = window.innerWidth; // prend en valeur la taille de la fenêtre

    /* Si la taile de la fenêtre dépasse 1230px de largeur */
    if (taille_fenetre > 1230)
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
            distance_gauche_1 = 1150;
            distance_gauche_2 = 1000;
            distance_gauche_3 = -850;
            distance_gauche_4 = -750;
            distance_gauche_5 = -750;
            //distance_gauche_6 = -300;

            position_img[0] = nb_images -1;

            images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 700;
            distance_gauche_2 = 660;
            distance_gauche_3 = 800;
            distance_gauche_4 = -1150;
            distance_gauche_5 = -1180;
            //distance_gauche_6 = -550;

            position_img[1] = nb_images - 1;

            images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 330;
            distance_gauche_2 = 350;
            distance_gauche_3 = 350;
            distance_gauche_4 = 400;
            distance_gauche_5 = -1600;

            position_img[2] = nb_images - 1;

            images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 0;
            distance_gauche_2 = 0;
            distance_gauche_3 = -20;
            distance_gauche_4 = 0;
            distance_gauche_5 = 0;

            position_img[3] = nb_images - 1;

            images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 1400;
            distance_gauche_2 = -400;
            distance_gauche_3 = -500;
            distance_gauche_4 = -350;
            distance_gauche_5 = -330;

            position_img[4] = nb_images - 1;

            images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche'); // Pour ajouter l'effet de déplacement instantané
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
    }


    /* Si la taile de la fenêtre est entre 1230px et 792px de largeur */
    if (taille_fenetre <= 1230 && taille_fenetre > 792)
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
            distance_gauche_1 = 900;
            distance_gauche_2 = 1000;
            distance_gauche_3 = -850;
            distance_gauche_4 = -560;
            distance_gauche_5 = -520;
            //distance_gauche_6 = -300;
    
            position_img[0] = nb_images -1;
    
            images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 600;
            distance_gauche_2 = 660;
            distance_gauche_3 = 800;
            distance_gauche_4 = -1150;
            distance_gauche_5 = -900;
            //distance_gauche_6 = -550;
    
            position_img[1] = nb_images - 1;
    
            images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 260;
            distance_gauche_2 = 240;
            distance_gauche_3 = 350;
            distance_gauche_4 = 400;
            distance_gauche_5 = -1200;
    
            position_img[2] = nb_images - 1;
    
            images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 0;
            distance_gauche_2 = 0;
            distance_gauche_3 = -20;
            distance_gauche_4 = 0;
            distance_gauche_5 = 0;
    
            position_img[3] = nb_images - 1;
    
            images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 1400;
            distance_gauche_2 = -400;
            distance_gauche_3 = -380;
            distance_gauche_4 = -270;
            distance_gauche_5 = -330;
    
            position_img[4] = nb_images - 1;
    
            images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
    }


    /* Si la taile de la fenêtre est plus petit que 792px de largeur */
    if (taille_fenetre <= 792)
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
            distance_gauche_1 = 400;
            distance_gauche_2 = 400;
            distance_gauche_3 = -450;
            distance_gauche_4 = -350;
            distance_gauche_5 = -300;
            //distance_gauche_6 = -300;
        
            position_img[0] = nb_images -1;
        
            images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 400;
            distance_gauche_2 = 400;
            distance_gauche_3 = 400;
            distance_gauche_4 = -600;
            distance_gauche_5 = -540;
            //distance_gauche_6 = -550;
        
            position_img[1] = nb_images - 1;
        
            images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 200;
            distance_gauche_2 = 240;
            distance_gauche_3 = 350;
            distance_gauche_4 = 400;
            distance_gauche_5 = -800;
        
            position_img[2] = nb_images - 1;
        
            images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 0;
            distance_gauche_2 = 0;
            distance_gauche_3 = 100;
            distance_gauche_4 = -100;
            distance_gauche_5 = 0;
        
            position_img[3] = nb_images - 1;
        
            images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 400;
            distance_gauche_2 = -300;
            distance_gauche_3 = -180;
            distance_gauche_4 = -100;
            distance_gauche_5 = 0;
        
            position_img[4] = nb_images - 1;
        
            images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
    }


    // Pour faire des teste (dev) 
    /*
    // On met à jour les variables
    document.getElementById("position_img_1").innerHTML = "Position img 1 : " +  position_img[0];
    document.getElementById("position_img_2").innerHTML = "Position img 2 : " +  position_img[1];
    document.getElementById("position_img_3").innerHTML = "Position img 3 : " +  position_img[2];
    document.getElementById("position_img_4").innerHTML = "Position img 4 : " +  position_img[3];
    document.getElementById("position_img_5").innerHTML = "Position img 5 : " +  position_img[4];
    //document.getElementById("position_img_6").innerHTML = "Position img 5 : " +  position_img[5];

    // On affiche le nombre de déplacement effectuer au total
    document.getElementById("nb_deplacement_1").innerHTML = "Nombre de déplacement efffectuer au total : " +  nb_deplacement_1_total;

    // On affiche le nombre de retour à la position d'origine de chaque image
    document.getElementById("compteur_retour_1").innerHTML = "Nombre de retour effectuer pour img 1 : " +  nb_retour[0];
    document.getElementById("compteur_retour_2").innerHTML = "Nombre de retour effectuer pour img 2 : " +  nb_retour[1];
    document.getElementById("compteur_retour_3").innerHTML = "Nombre de retour effectuer pour img 3 : " +  nb_retour[2];
    document.getElementById("compteur_retour_4").innerHTML = "Nombre de retour effectuer pour img 4 : " +  nb_retour[3];
    document.getElementById("compteur_retour_5").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[4];
    //document.getElementById("compteur_retour_6").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[5];

    //document.getElementById("depart").innerHTML = "Valeur de départ : " +  depart;

    document.getElementById("nb_images").innerHTML = "Nombre d'images : " +  nb_images;
    */
}


function clique_bouton_droite() 
{
    var taille_fenetre = window.innerWidth; // prend en valeur la taille de la fenêtre
    
    /* Si la taile de la fenêtre dépasse 1230px */
    if (taille_fenetre > 1230)
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
            distance_gauche_1 = 1400;
            distance_gauche_2 = -400;
            distance_gauche_3 = -500;
            distance_gauche_4 = -350;
            distance_gauche_5 = -330;

            position_img[0] = 0;

            images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 1150;
            distance_gauche_2 = 1000;
            distance_gauche_3 = -850;
            distance_gauche_4 = -750;
            distance_gauche_5 = -750;
            //distance_gauche_6 = -550;

            position_img[1] = 0;

            images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 700;
            distance_gauche_2 = 660;
            distance_gauche_3 = 800;
            distance_gauche_4 = -1150;
            distance_gauche_5 = -1180;

            position_img[2] = 0;

            images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 330;
            distance_gauche_2 = 350;
            distance_gauche_3 = 350;
            distance_gauche_4 = 400;
            distance_gauche_5 = -1600;

            position_img[3] = 0;

            images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_3 = -20;
            distance_gauche_4 = 0;
            distance_gauche_5 = 0;

            position_img[4] = 0;    

            images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
    }

    /* Si la taile de la fenêtre est en dessous de 1230px de largeur */
    if (taille_fenetre <= 1230 && taille_fenetre > 792)
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
            distance_gauche_1 = 1400;
            distance_gauche_2 = -400;
            distance_gauche_3 = -380;
            distance_gauche_4 = -270;
            distance_gauche_5 = -330;
    
            position_img[0] = 0;
    
            images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 900;
            distance_gauche_2 = 1000;
            distance_gauche_3 = -850;
            distance_gauche_4 = -560;
            distance_gauche_5 = -520;
            //distance_gauche_6 = -550;
    
            position_img[1] = 0;
    
            images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 600;
            distance_gauche_2 = 660;
            distance_gauche_3 = 800;
            distance_gauche_4 = -1150;
            distance_gauche_5 = -900;
    
            position_img[2] = 0;
    
            images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 260;
            distance_gauche_2 = 240;
            distance_gauche_3 = 350;
            distance_gauche_4 = 400;
            distance_gauche_5 = -1200;
    
            position_img[3] = 0;
    
            images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_3 = -20;
            distance_gauche_4 = 0;
            distance_gauche_5 = 0;
    
            position_img[4] = 0;    
    
            images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
    }


    /* Si la taile de la fenêtre est en dessous de 1230px de largeur */
    if (taille_fenetre <= 792)
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
            distance_gauche_1 = 400;
            distance_gauche_2 = -300;
            distance_gauche_3 = -180;
            distance_gauche_4 = -100;
            distance_gauche_5 = 0;
        
            position_img[0] = 0;
        
            images[1].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 400;
            distance_gauche_2 = 400;
            distance_gauche_3 = -450;
            distance_gauche_4 = -350;
            distance_gauche_5 = -300;
            //distance_gauche_6 = -550;
        
            position_img[1] = 0;
        
            images[2].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 400;
            distance_gauche_2 = 400;
            distance_gauche_3 = 400;
            distance_gauche_4 = -600;
            distance_gauche_5 = -540;
        
            position_img[2] = 0;
        
            images[3].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_1 = 200;
            distance_gauche_2 = 240;
            distance_gauche_3 = 350;
            distance_gauche_4 = 400;
            distance_gauche_5 = -800;
        
            position_img[3] = 0;
        
            images[4].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
            distance_gauche_3 = 100;
            distance_gauche_4 = -100;
            distance_gauche_5 = 0;
        
            position_img[4] = 0;    
        
            images[0].classList.add('mouvement_retour_gauche'); // Pour ajouter l'effet de déplacement instantané
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
    }

    // Pour faire des teste (dev) 
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

// Pour faire des teste (dev) 
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

document.getElementById("taille_container").innerHTML = "Taille du container : " +  val_img_container_width;
*/

// Si on appuie sur le bouton de flèche gauche
bouton_gauche.addEventListener('click', clique_bouton_gauche)

// Si on appuie sur le bouton de flèche droite
bouton_droite.addEventListener('click', clique_bouton_droite)



















const bouton_gauche_partenaire = document.getElementById('bouton_partenaire_gauche');
const bouton_droite_partenaire = document.getElementById('bouton_partenaire_droite');
const images_partenaire = document.getElementsByClassName('partenaire_img')
//const img_partenaire_1 = document.getElementById('img_partenaire_1');
const img_container_partenaire = document.querySelector('.img_container_partenaire');

var position_img_partenaire = [1, 2, 3, 4, 0]; // position initial des images

var distance_gauche_1_partenaire = 0;
var distance_gauche_2_partenaire = 0;
var distance_gauche_3_partenaire = 0;
var distance_gauche_4_partenaire = 0;
var distance_gauche_5_partenaire = 0;
//var distance_gauche_6 = 0;

var nb_deplacement_1_total_partenaire = 0; //  Pour indiquer le nombre de déplacement total effectuer (par clique)

//var nb_deplacement_6_total = 0;

let nb_retour_partenaire = [0, 0, 0, 0, 0];    //  Pour indiquer le nombre de retour à la position inital pour chaque image

var nb_images_partenaire = images_partenaire.length;  //  nombre d'image au total appartenant à la classe "img_succes_client"


/* Pour rendre la page responsive */
/*
window.addEventListener('resize', () => 
{
    
});
*/

function img_container_width_partenaire() 
{
    return parseInt(window.getComputedStyle(img_container_partenaire).width);   //  "parseInt" permet de convertir l'élément en nombre entier
}

/* Pour avoir la valeur de la taille du container */
const val_img_container_width_partenaire = img_container_width();

/*
window.addEventListener('resize', () => 
{

});
*/

function clique_bouton_gauche_partenaire() 
{
    var taille_fenetre_partenaire = window.innerWidth; // prend en valeur la taille de la fenêtre

    /* Si la taile de la fenêtre dépasse 1230px de largeur */
    if (taille_fenetre_partenaire > 1230)
    {

        // Pour retirer l'effet de déplacement instantané
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            images_partenaire[i].classList.remove('mouvement_retour_gauche_partenaire');
        }

        // On incrémente la variable de 1
        nb_deplacement_1_total_partenaire++;

        //On décrémente les variables des positions de 1
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            position_img_partenaire[i]--;
        }

        if (position_img_partenaire[0] < 0) 
        {
            distance_gauche_1_partenaire = 1050;
            distance_gauche_2_partenaire = 1000;
            distance_gauche_3_partenaire = -850;
            distance_gauche_4_partenaire = -650;
            distance_gauche_5_partenaire = -700;
            //distance_gauche_6 = -300;

            position_img_partenaire[0] = nb_images_partenaire -1;

            images_partenaire[1].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');

            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;

            nb_retour_partenaire[0]++;
        }


        if (position_img_partenaire[1] < 0) 
        {
            distance_gauche_1_partenaire = 700;
            distance_gauche_2_partenaire = 660;
            distance_gauche_3_partenaire = 800;
            distance_gauche_4_partenaire = -1150;
            distance_gauche_5_partenaire = -1080;
            //distance_gauche_6 = -550;

            position_img_partenaire[1] = nb_images_partenaire - 1;

            images_partenaire[2].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
    
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
            nb_retour_partenaire[1]++;
        }

        
        if (position_img_partenaire[2] < 0) 
        {
            distance_gauche_1_partenaire = 330;
            distance_gauche_2_partenaire = 300;
            distance_gauche_3_partenaire = 350;
            distance_gauche_4_partenaire = 400;
            distance_gauche_5_partenaire = -1600;

            position_img_partenaire[2] = nb_images_partenaire - 1;

            images_partenaire[3].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
    
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
            nb_retour_partenaire[2]++;
        }


        if (position_img_partenaire[3] < 0) 
        {
            distance_gauche_1_partenaire = 0;
            distance_gauche_2_partenaire = 0;
            distance_gauche_3_partenaire = -20;
            distance_gauche_4_partenaire = 0;
            distance_gauche_5_partenaire = 0;

            position_img_partenaire[3] = nb_images_partenaire - 1;

            images_partenaire[4].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
        
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
            nb_retour_partenaire[3]++;
        }


        if (position_img_partenaire[4] < 0) 
        {
            distance_gauche_1_partenaire = 1400;
            distance_gauche_2_partenaire = -400;
            distance_gauche_3_partenaire = -400;
            distance_gauche_4_partenaire = -300;
            distance_gauche_5_partenaire = -330;

            position_img_partenaire[4] = nb_images_partenaire - 1;

            images_partenaire[0].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[4]++;
            //resetTransformations();
        }
    }


    /* Si la taile de la fenêtre est entre 1230px et 792px de largeur */
    if (taille_fenetre_partenaire <= 1230 && taille_fenetre_partenaire > 792)
    {
    
        // Pour retirer l'effet de déplacement instantané
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            images_partenaire[i].classList.remove('mouvement_retour_gauche_partenaire');
        }
    
        // On incrémente la variable de 1
        nb_deplacement_1_total_partenaire++;
    
        //On décrémente les variables des positions de 1
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            position_img_partenaire[i]--;
        }
    
        if (position_img_partenaire[0] < 0) 
        {
            distance_gauche_1_partenaire = 900;
            distance_gauche_2_partenaire = 1000;
            distance_gauche_3_partenaire = -850;
            distance_gauche_4_partenaire = -560;
            distance_gauche_5_partenaire = -520;
            //distance_gauche_6 = -300;
    
            position_img_partenaire[0] = nb_images_partenaire -1;
    
            images_partenaire[1].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
    
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
            nb_retour_partenaire[0]++;
        }
    
    
        if (position_img_partenaire[1] < 0) 
        {
            distance_gauche_1_partenaire = 600;
            distance_gauche_2_partenaire = 660;
            distance_gauche_3_partenaire = 800;
            distance_gauche_4_partenaire = -1150;
            distance_gauche_5_partenaire = -900;
            //distance_gauche_6 = -550;
    
            position_img_partenaire[1] = nb_images - 1;
    
            images_partenaire[2].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
        
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
            nb_retour_partenaire[1]++;
        }
    
            
        if (position_img_partenaire[2] < 0) 
        {
            distance_gauche_1_partenaire = 260;
            distance_gauche_2_partenaire = 240;
            distance_gauche_3_partenaire = 350;
            distance_gauche_4_partenaire = 400;
            distance_gauche_5_partenaire = -1200;
    
            position_img_partenaire[2] = nb_images_partenaire - 1;
    
            images_partenaire[3].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
        
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
            nb_retour_partenaire[2]++;
        }
    
    
        if (position_img_partenaire[3] < 0) 
        {
            distance_gauche_1_partenaire = 0;
            distance_gauche_2_partenaire = 0;
            distance_gauche_3_partenaire = -20;
            distance_gauche_4_partenaire = 0;
            distance_gauche_5_partenaire = 0;
    
            position_img_partenaire[3] = nb_images_partenaire - 1;
    
            images_partenaire[4].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[3]++;
        }
    
    
        if (position_img_partenaire[4] < 0) 
        {
            distance_gauche_1_partenaire = 1400;
            distance_gauche_2_partenaire = -400;
            distance_gauche_3_partenaire = -380;
            distance_gauche_4_partenaire = -270;
            distance_gauche_5_partenaire = -330;
    
            position_img_partenaire[4] = nb_images_partenaire - 1;
    
            images_partenaire[0].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
                
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
                
            nb_retour_partenaire[4]++;
            //resetTransformations();
        }
    }


    /* Si la taile de la fenêtre est plus petit que 792px de largeur */
    if (taille_fenetre_partenaire <= 792)
    {
        // Pour retirer l'effet de déplacement instantané
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            images_partenaire[i].classList.remove('mouvement_retour_gauche_partenaire');
        }
        
        // On incrémente la variable de 1
        nb_deplacement_1_total_partenaire++;
        
        //On décrémente les variables des positions de 1
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            position_img_partenaire[i]--;
        }
        
        if (position_img_partenaire[0] < 0) 
        {
            distance_gauche_1_partenaire = 400;
            distance_gauche_2_partenaire = 400;
            distance_gauche_3_partenaire = -450;
            distance_gauche_4_partenaire = -350;
            distance_gauche_5_partenaire = -300;
            //distance_gauche_6 = -300;
        
            position_img_partenaire[0] = nb_images_partenaire -1;
        
            images_partenaire[1].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
        
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
            nb_retour_partenaire[0]++;
        }
        
        
        if (position_img_partenaire[1] < 0) 
        {
            distance_gauche_1_partenaire = 400;
            distance_gauche_2_partenaire = 400;
            distance_gauche_3_partenaire = 400;
            distance_gauche_4_partenaire = -600;
            distance_gauche_5_partenaire = -540;
            //distance_gauche_6 = -550;
        
            position_img_partenaire[1] = nb_images_partenaire - 1;
        
            images_partenaire[2].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[1]++;
        }
        
                
        if (position_img_partenaire[2] < 0) 
        {
            distance_gauche_1_partenaire = 200;
            distance_gauche_2_partenaire = 240;
            distance_gauche_3_partenaire = 350;
            distance_gauche_4_partenaire = 400;
            distance_gauche_5_partenaire = -800;
        
            position_img_partenaire[2] = nb_images_partenaire - 1;
        
            images_partenaire[3].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[2]++;
        }
        
        
        if (position_img_partenaire[3] < 0) 
        {
            distance_gauche_1_partenaire = 0;
            distance_gauche_2_partenaire = 0;
            distance_gauche_3_partenaire = 100;
            distance_gauche_4_partenaire = -100;
            distance_gauche_5_partenaire = 0;
        
            position_img_partenaire[3] = nb_images_partenaire - 1;
        
            images_partenaire[4].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
                
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
                
            nb_retour_partenaire[3]++;
        }
        
        
        if (position_img_partenaire[4] < 0) 
        {
            distance_gauche_1_partenaire = 400;
            distance_gauche_2_partenaire = -300;
            distance_gauche_3_partenaire = -180;
            distance_gauche_4_partenaire = -100;
            distance_gauche_5_partenaire = 0;
        
            position_img_partenaire[4] = nb_images_partenaire - 1;
        
            images_partenaire[0].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
                    
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
                    
            nb_retour_partenaire[4]++;
            //resetTransformations();
        }
    }


    // Pour faire des teste (dev) 
    /*
    // On met à jour les variables
    document.getElementById("position_img_1_partenaire").innerHTML = "Position img 1 : " +  position_img_partenaire[0];
    document.getElementById("position_img_2_partenaire").innerHTML = "Position img 2 : " +  position_img_partenaire[1];
    document.getElementById("position_img_3_partenaire").innerHTML = "Position img 3 : " +  position_img_partenaire[2];
    document.getElementById("position_img_4_partenaire").innerHTML = "Position img 4 : " +  position_img_partenaire[3];
    document.getElementById("position_img_5_partenaire").innerHTML = "Position img 5 : " +  position_img_partenaire[4];
    //document.getElementById("position_img_6").innerHTML = "Position img 5 : " +  position_img[5];

    // On affiche le nombre de déplacement effectuer au total
    document.getElementById("nb_deplacement_1_partenaire").innerHTML = "Nombre de déplacement efffectuer au total : " +  nb_deplacement_1_total_partenaire;

    // On affiche le nombre de retour à la position d'origine de chaque image
    document.getElementById("compteur_retour_1_partenaire").innerHTML = "Nombre de retour effectuer pour img 1 : " +  nb_retour_partenaire[0];
    document.getElementById("compteur_retour_2_partenaire").innerHTML = "Nombre de retour effectuer pour img 2 : " +  nb_retour_partenaire[1];
    document.getElementById("compteur_retour_3_partenaire").innerHTML = "Nombre de retour effectuer pour img 3 : " +  nb_retour_partenaire[2];
    document.getElementById("compteur_retour_4_partenaire").innerHTML = "Nombre de retour effectuer pour img 4 : " +  nb_retour_partenaire[3];
    document.getElementById("compteur_retour_5_partenaire").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour_partenaire[4];
    //document.getElementById("compteur_retour_6").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[5];

    //document.getElementById("depart_partenaire").innerHTML = "Valeur de départ : " +  depart_partenaire;

    document.getElementById("nb_images_partenaire").innerHTML = "Nombre d'images : " +  nb_images_partenaire;
    */
}


function clique_bouton_droite_partenaire() 
{
    var taille_fenetre_partenaire = window.innerWidth; // prend en valeur la taille de la fenêtre
    
    /* Si la taile de la fenêtre dépasse 1230px */
    if (taille_fenetre_partenaire > 1230)
    {
        // Pour retirer l'effet de déplacement instantané
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            images_partenaire[i].classList.remove('mouvement_retour_gauche_partenaire');
        }

        // On incrémente la variable de 1
        nb_deplacement_1_total_partenaire++;

        //On décrémente les variables des positions de 1
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            position_img_partenaire[i]++;
        }


        if (position_img_partenaire[0] > 4) 
        {
            distance_gauche_1_partenaire = 1400;
            distance_gauche_2_partenaire = -400;
            distance_gauche_3_partenaire = -400;
            distance_gauche_4_partenaire = -300;
            distance_gauche_5_partenaire = -330;

            position_img_partenaire[0] = 0;

            images_partenaire[1].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[0]++;
            //resetTransformations();
        }


        if (position_img_partenaire[1] > 4) 
        {
            distance_gauche_1_partenaire = 1050;
            distance_gauche_2_partenaire = 1000;
            distance_gauche_3_partenaire = -850;
            distance_gauche_4_partenaire = -650;
            distance_gauche_5_partenaire = -700;
            //distance_gauche_6 = -550;

            position_img_partenaire[1] = 0;

            images_partenaire[2].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
    
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
            nb_retour_partenaire[1]++;
        }


        if (position_img_partenaire[2] > 4) 
        {
            distance_gauche_1_partenaire = 700;
            distance_gauche_2_partenaire = 660;
            distance_gauche_3_partenaire = 800;
            distance_gauche_4_partenaire = -1150;
            distance_gauche_5_partenaire = -1080;

            position_img_partenaire[2] = 0;

            images_partenaire[3].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
    
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
    
            nb_retour_partenaire[2]++;
        }


        if (position_img_partenaire[3] > 4) 
        {
            distance_gauche_1_partenaire = 330;
            distance_gauche_2_partenaire = 350;
            distance_gauche_3_partenaire = 350;
            distance_gauche_4_partenaire = 400;
            distance_gauche_5_partenaire = -1600;

            position_img_partenaire[3] = 0;

            images_partenaire[4].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
        
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
            nb_retour_partenaire[3]++;
        }


        if (position_img_partenaire[4] > 4) 
        {
            distance_gauche_1_partenaire = 0;
            distance_gauche_2_partenaire = 0;
            distance_gauche_3_partenaire = -20;
            distance_gauche_4_partenaire = 0;
            distance_gauche_5_partenaire = 0;

            position_img_partenaire[4] = 0;    

            images_partenaire[0].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[4]++;
            //resetTransformations();
        }
    }

    /* Si la taile de la fenêtre est en dessous de 1230px de largeur */
    if (taille_fenetre_partenaire <= 1230 && taille_fenetre_partenaire > 792)
    {
        // Pour retirer l'effet de déplacement instantané
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            images_partenaire[i].classList.remove('mouvement_retour_gauche_partenaire');
        }
    
        // On incrémente la variable de 1
        nb_deplacement_1_total_partenaire++;
    
        //On décrémente les variables des positions de 1
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            position_img_partenaire[i]++;
        }
    
    
        if (position_img_partenaire[0] > 4) 
        {
            distance_gauche_1_partenaire = 1400;
            distance_gauche_2_partenaire = -400;
            distance_gauche_3_partenaire = -380;
            distance_gauche_4_partenaire = -270;
            distance_gauche_5_partenaire = -330;
    
            position_img_partenaire[0] = 0;
    
            images_partenaire[1].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
                
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
                
            nb_retour_partenaire[0]++;
            //resetTransformations();
        }
    
    
        if (position_img_partenaire[1] > 4) 
        {
            distance_gauche_1_partenaire = 900;
            distance_gauche_2_partenaire = 1000;
            distance_gauche_3_partenaire = -850;
            distance_gauche_4_partenaire = -560;
            distance_gauche_5_partenaire = -520;
            //distance_gauche_6 = -550;
    
            position_img_partenaire[1] = 0;
    
            images_partenaire[2].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
        
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
            nb_retour_partenaire[1]++;
        }
    
    
        if (position_img_partenaire[2] > 4) 
        {
            distance_gauche_1_partenaire = 600;
            distance_gauche_2_partenaire = 660;
            distance_gauche_3_partenaire = 800;
            distance_gauche_4_partenaire = -1150;
            distance_gauche_5_partenaire = -900;
    
            position_img_partenaire[2] = 0;
    
            images_partenaire[3].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
        
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
        
            nb_retour_partenaire[2]++;
        }
    
    
        if (position_img_partenaire[3] > 4) 
        {
            distance_gauche_1_partenaire = 260;
            distance_gauche_2_partenaire = 240;
            distance_gauche_3_partenaire = 350;
            distance_gauche_4_partenaire = 400;
            distance_gauche_5_partenaire = -1200;
    
            position_img_partenaire[3] = 0;
    
            images_partenaire[4].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[3]++;
        }
    
    
        if (position_img_partenaire[4] > 4) 
        {
            distance_gauche_1_partenaire = 0;
            distance_gauche_2_partenaire = 0;
            distance_gauche_3_partenaire = -20;
            distance_gauche_4_partenaire = 0;
            distance_gauche_5_partenaire = 0;
    
            position_img_partenaire[4] = 0;    
    
            images_partenaire[0].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
                
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
                
            nb_retour_partenaire[4]++;
            //resetTransformations();
        }
    }


    /* Si la taile de la fenêtre est en dessous de 1230px de largeur */
    if (taille_fenetre_partenaire <= 792)
    {
        // Pour retirer l'effet de déplacement instantané
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            images_partenaire[i].classList.remove('mouvement_retour_gauche_partenaire');
        }
        
        // On incrémente la variable de 1
        nb_deplacement_1_total_partenaire++;
        
        //On décrémente les variables des positions de 1
        for (let i = 0; i < nb_images_partenaire; i++)
        {
            position_img_partenaire[i]++;
        }
        
        
        if (position_img_partenaire[0] > 4) 
        {
            distance_gauche_1_partenaire = 400;
            distance_gauche_2_partenaire = -300;
            distance_gauche_3_partenaire = -180;
            distance_gauche_4_partenaire = -100;
            distance_gauche_5_partenaire = 0;
        
            position_img_partenaire[0] = 0;
        
            images_partenaire[1].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
                    
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
                    
            nb_retour_partenaire[0]++;
            //resetTransformations();
        }
        
        
        if (position_img_partenaire[1] > 4) 
        {
            distance_gauche_1_partenaire = 400;
            distance_gauche_2_partenaire = 400;
            distance_gauche_3_partenaire = -450;
            distance_gauche_4_partenaire = -350;
            distance_gauche_5_partenaire = -300;
            //distance_gauche_6 = -550;
        
            position_img_partenaire[1] = 0;
        
            images_partenaire[2].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[1]++;
        }
        
        
        if (position_img_partenaire[2] > 4) 
        {
            distance_gauche_1_partenaire = 400;
            distance_gauche_2_partenaire = 400;
            distance_gauche_3_partenaire = 400;
            distance_gauche_4_partenaire = -600;
            distance_gauche_5_partenaire = -540;
        
            position_img_partenaire[2] = 0;
        
            images_partenaire[3].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
            
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
            
            nb_retour_partenaire[2]++;
        }
        
        
        if (position_img_partenaire[3] > 4) 
        {
            distance_gauche_1_partenaire = 200;
            distance_gauche_2_partenaire = 240;
            distance_gauche_3_partenaire = 350;
            distance_gauche_4_partenaire = 400;
            distance_gauche_5_partenaire = -800;
        
            position_img_partenaire[3] = 0;
        
            images_partenaire[4].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
                
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
                
            nb_retour_partenaire[3]++;
        }
        
        
        if (position_img_partenaire[4] > 4) 
        {
            distance_gauche_1_partenaire = 0;
            distance_gauche_2_partenaire = 0;
            distance_gauche_3_partenaire = 100;
            distance_gauche_4_partenaire = -100;
            distance_gauche_5_partenaire = 0;
        
            position_img_partenaire[4] = 0;    
        
            images_partenaire[0].classList.add('mouvement_retour_gauche_partenaire'); // Pour ajouter l'effet de déplacement instantané
            //images[0].classList.add('mouvement_gauche');
                    
            // déplace les images
            images_partenaire[0].style.transform = `translateX(${distance_gauche_1_partenaire}px)`;
            images_partenaire[1].style.transform = `translateX(${distance_gauche_2_partenaire}px)`;
            images_partenaire[2].style.transform = `translateX(${distance_gauche_3_partenaire}px)`;
            images_partenaire[3].style.transform = `translateX(${distance_gauche_4_partenaire}px)`;
            images_partenaire[4].style.transform = `translateX(${distance_gauche_5_partenaire}px)`;
            //images[5].style.transform = `translateX(${distance_gauche_6}px)`;
                    
            nb_retour_partenaire[4]++;
            //resetTransformations();
        }
    }


    // Pour faire des teste (dev) 
    /*
    // On met à jour les variables
    document.getElementById("position_img_1_partenaire").innerHTML = "Position img 1 : " +  position_img_partenaire[0];
    document.getElementById("position_img_2_partenaire").innerHTML = "Position img 2 : " +  position_img_partenaire[1];
    document.getElementById("position_img_3_partenaire").innerHTML = "Position img 3 : " +  position_img_partenaire[2];
    document.getElementById("position_img_4_partenaire").innerHTML = "Position img 4 : " +  position_img_partenaire[3];
    document.getElementById("position_img_5_partenaire").innerHTML = "Position img 5 : " +  position_img_partenaire[4];
    //document.getElementById("position_img_6").innerHTML = "Position img 5 : " +  position_img[5];

    // On affiche le nombre de déplacement effectuer au total
    document.getElementById("nb_deplacement_1_partenaire").innerHTML = "Nombre de déplacement avant rénitialisation de img 1 : " +  nb_deplacement_1_total_partenaire;

    // On affiche le nombre de retour à la position d'origine de chaque image
    document.getElementById("compteur_retour_1_partenaire").innerHTML = "Nombre de retour effectuer pour img 1 : " +  nb_retour_partenaire[0];
    document.getElementById("compteur_retour_2_partenaire").innerHTML = "Nombre de retour effectuer pour img 2 : " +  nb_retour_partenaire[1];
    document.getElementById("compteur_retour_3_partenaire").innerHTML = "Nombre de retour effectuer pour img 3 : " +  nb_retour_partenaire[2];
    document.getElementById("compteur_retour_4_partenaire").innerHTML = "Nombre de retour effectuer pour img 4 : " +  nb_retour_partenaire[3];
    document.getElementById("compteur_retour_5_partenaire").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour_partenaire[4];
    //document.getElementById("compteur_retour_6").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[5];

    document.getElementById("nb_images_partenaire").innerHTML = "Nombre d'images : " +  nb_images_partenaire;
    */
}

// Pour faire des teste (dev) 
/*
// On affiche les variables
document.getElementById("position_img_1_partenaire").innerHTML = "Position img 1 : " +  position_img_partenaire[0];
document.getElementById("position_img_2_partenaire").innerHTML = "Position img 2 : " +  position_img_partenaire[1];
document.getElementById("position_img_3_partenaire").innerHTML = "Position img 3 : " +  position_img_partenaire[2];
document.getElementById("position_img_4_partenaire").innerHTML = "Position img 4 : " +  position_img_partenaire[3];
document.getElementById("position_img_5_partenaire").innerHTML = "Position img 5 : " +  position_img_partenaire[4];
//document.getElementById("position_img_6").innerHTML = "Position img 5 : " +  position_img[5];

// On affiche le nombre de déplacement effectuer au total
document.getElementById("nb_deplacement_1_partenaire").innerHTML = "Nombre de déplacement avant rénitialisation de img 1 : " +  nb_deplacement_1_total_partenaire;

// On affiche le nombre de retour à la position d'origine de chaque image
document.getElementById("compteur_retour_1_partenaire").innerHTML = "Nombre de retour effectuer pour img 1 : " +  nb_retour_partenaire[0];
document.getElementById("compteur_retour_2_partenaire").innerHTML = "Nombre de retour effectuer pour img 2 : " +  nb_retour_partenaire[1];
document.getElementById("compteur_retour_3_partenaire").innerHTML = "Nombre de retour effectuer pour img 3 : " +  nb_retour_partenaire[2];
document.getElementById("compteur_retour_4_partenaire").innerHTML = "Nombre de retour effectuer pour img 4 : " +  nb_retour_partenaire[3];
document.getElementById("compteur_retour_5_partenaire").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour_partenaire[4];
//document.getElementById("compteur_retour_6").innerHTML = "Nombre de retour effectuer pour img 5 : " +  nb_retour[5];

document.getElementById("nb_images_partenaire").innerHTML = "Nombre d'images : " +  nb_images_partenaire;

document.getElementById("taille_container_partenaire").innerHTML = "Taille du container : " +  val_img_container_width_partenaire;
*/

// Si on appuie sur le bouton de flèche gauche
bouton_gauche_partenaire.addEventListener('click', clique_bouton_gauche_partenaire)

// Si on appuie sur le bouton de flèche droite
bouton_droite_partenaire.addEventListener('click', clique_bouton_droite_partenaire)
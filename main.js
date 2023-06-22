'use strict'

/*
 - Déclarez une variable "ball" qui représente la balle dans votre page HTML.

 - Initialisez une variable "ballDirectionX" à 1. Cette dernière représente la direction initial de la balle. (1 à droite, -1 à gauche).

 - Initialisez une variable "ballPosX" à 0. Elle représente la position initiale de la balle sur l'axe X.

 - Initialisez une variable  "speed" à 6. Elle représente la vitesse de la balle. plus cete valeur sera élevée, plus se déplacera rapidement.

 - Déclarez une variable "limiRightX" . Elle représente la largeur du navigateur et donc la limite à droite de l'écran.

 - Créez une fonction "animateBall". C'est elle qui se chargera de déplacer la balle.
    - modifiez la position de la ball en y ajoutant 1 ou en soustrayant 1 selon la direction.
    - modifiez le style de l'objet DOM.
    - si la balle atteint les limites droite OU gauche de l'écran - On multiplie par -1 la direction pour l'inverser !
    - appeler cette fonction au prochain rafraîchissement.
 - Déclarez un évènement "DOMContentLoaded"
*/

document.addEventListener("DOMContentLoaded", () => {

    // variable globale permettant de sélectionner  balle
    const Ball = document.getElementById('ball');
    const startButton = document.getElementById("startBtn");
    const stopButton = document.getElementById("stopBtn");

    let position = 0
    let speed = 10;
    let direction = 1;
    let animation;

    // calcul du largeur du navigateur
    const windowWidth = window.innerWidth;

    let width = windowWidth - Ball.scrollWidth;

    let moveWidthRAF = () => {

        position += speed * direction;

        if (position >= width && position === width) {
            direction = -1;
        }
        else if (position <= 0 && position === 0) {
            direction = 1;
        }

        Ball.style.transform = "translateX(" + position + "px)";

        animation = requestAnimationFrame(moveWidthRAF);

    };

    moveWidthRAF();

    startButton.addEventListener("click", () => {
        // Changer l'état des boutons

        startButton.disabled = true;
        stopButton.disabled = false;

        // Démarrer l'animation
        requestAnimationFrame(moveWidthRAF);
    });

    stopButton.addEventListener("click", () => {

        // Changer l'état des boutons
        startButton.disabled = false;
        stopButton.disabled = true;
        startButton.innerText = "continue";

        // Arrêter l'animation
        cancelAnimationFrame(animation);
    });
});

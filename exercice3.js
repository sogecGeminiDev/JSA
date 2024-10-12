/**
Partie 1 : Variables globales accidentelles

Écrivez un programme où vous utilisez une variable 
sans la déclarer explicitement avec var, let ou const. 
Observez le comportement et essayez de prédire ce qui 
se passe avant d'exécuter le code.
 */

// # you code here # 
function setGlobal() {
    myVar = 10; // Que pensez-vous qu'il va se passer ?
}

setGlobal();
console.log(myVar); // Que va afficher cette ligne ?

//Question : Qu'est-ce qui se passe lorsque myVar
//est utilisée sans déclaration explicite ?


/**
Partie 2 : Conflit de variables globales

Dans ce programme, vous allez créer deux fonctions qui utilisent
des variables globales et voyez comment elles peuvent entrer
en conflit.
 */

var counter = 0;

function incrementCounter() {
    counter++;
}

function resetCounter() {
    counter = 0;
}

incrementCounter();
incrementCounter();
console.log(counter); // Que pensez-vous que cela affichera ?

resetCounter();
console.log(counter); // Que pensez-vous que cela affichera ?

// Question : Pourquoi le comportement pourrait poser
// problème si plusieurs parties du code utilisent la même
// variable globale counter ?

/**
Partie 3 : Limitation du scope avec let et const

Réécrivez le programme ci-dessus pour éviter 
les conflits en utilisant des variables locales 
(avec let ou const) au lieu de variables globales.
 */

// # your code here 


// Question : Quel est l’avantage d’utiliser let ou const 
// dans ce cas ?
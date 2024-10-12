/**
Partie 1 : Comprendre __proto__ et l'héritage de propriétés

Créez deux objets, animal et chien. 
Faites en sorte que chien hérite des propriétés et méthodes 
de animal en utilisant Object.create(). Ensuite, 
vérifiez l'héritage avec __proto__. 
  
 */

// Créez l'objet parent
const animal = {
    espece: "générique",
    manger: function() {
        console.log("L'animal mange.");
    }
};

// Créez un nouvel objet qui hérite de 'animal'
const chien = Object.create(animal);
chien.nom = "Rex";
chien.aboyer = function() {
    console.log("Woof! Woof!");
};

// Utilisez les propriétés et méthodes
console.log(chien.espece); // Que va afficher cette ligne ?
chien.manger(); // Que va afficher cette ligne ?
chien.aboyer(); // Que va afficher cette ligne ?

// Vérifiez le prototype
console.log(chien.__proto__ === animal); // Que va afficher cette ligne ?


// Question : Comment chien hérite-t-il des propriétés
// et méthodes de animal ?
// Que montre l'utilisation de __proto__ ?

/***
Partie 2 : Propriétés propres vs héritées

Modifiez l'exercice pour vérifier si une propriété ou 
méthode est propre à chien ou héritée de animal en utilisant 
hasOwnProperty().
 */

console.log(chien.hasOwnProperty("espece")); // Que va afficher cette ligne ?
console.log(chien.hasOwnProperty("nom")); // Que va afficher cette ligne ?
console.log(chien.hasOwnProperty("manger")); // Que va afficher cette ligne ?

// Question : Quelle est la différence entre les propriétés propres et les propriétés héritées ?


/**
Partie 3 : Ajouter des méthodes au prototype d'un constructeur

Créez un constructeur Voiture, puis ajoutez une méthode au prototype de Voiture. 
Cela permet à toutes les instances de Voiture d'accéder à cette méthode
sans l'ajouter directement dans le constructeur.


 */

// Créez le constructeur

// code here ...

// Ajoutez une méthode au prototype de Voiture

// code here ...

// Créez des instances de Voiture voiture1 et voiture2

// code here ...

voiture1.demarrer(); // Que va afficher cette ligne ?
voiture2.demarrer(); // Que va afficher cette ligne ?

// Vérifiez le prototype
console.log(voiture1.__proto__ === Voiture.prototype); // Que va afficher cette ligne ?
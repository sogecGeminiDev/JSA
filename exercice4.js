/**
Partie 1 : Comprendre this en dehors et à l'intérieur 
des fonctions

Écrivez un programme pour observer comment this 
se comporte dans différents contextes. 
Essayez de prédire ce que chaque ligne va afficher 
avant de l'exécuter.
 */

console.log(this); // Affiche : objet global (window en navigateur, ou global en Node.js)

function showThis() {
    console.log(this); // En mode non strict, affiche : objet global. En mode strict, affiche : undefined
}

showThis();

// Question : Quelle est la valeur de this en dehors de
// la fonction et à l'intérieur de la fonction ?




/**
Partie 2 : Changement de contexte avec call, apply, et bind

Considérez l'objet suivant et essayez de l'utiliser 
dans différentes situations avec call(), apply(), et bind().
 */

const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Utilisez la méthode greet de l'objet person avec 
// un autre contexte
const anotherPerson = { name: "Bob" };

person.greet.call(anotherPerson); // Que va afficher cette ligne ?
person.greet.apply(anotherPerson); // Que va afficher cette ligne ?

const boundGreet = person.greet.bind(anotherPerson);
boundGreet(); // Que va afficher cette ligne ?


/***
Partie 3 : Problème de changement de contexte dans 
les callbacks

Écrivez une fonction qui utilise un callback pour voir comment 
le contexte peut changer et comment le fixer.
 */

const car = {
    brand: "Toyota",
    getBrand: function() {
        console.log(this.brand);
    },
    printBrandLater: function() {
        setTimeout(this.getBrand, 1000); // Que va-t-il se passer ici ?
    }
};

car.printBrandLater(); // Essayez de deviner ce qui sera affiché après 1 seconde.

/*
Question : Pourquoi this ne se comporte pas comme prévu ici ?
Comment pouvez-vous corriger le problème avec bind() ?
*/
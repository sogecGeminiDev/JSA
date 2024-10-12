/***
Partie 1 : Créer une classe de base (parent)

Créez une classe appelée Animal avec des propriétés nom et age, 
et une méthode manger() qui affiche un message.
 */

// Définissez la classe parent
class Animal {
    
}

// Créez une instance de la classe Animal
const animal1 = 
animal1.manger(); // Que va afficher cette ligne ?

// Question : Que fait la méthode manger() ?
// Comment est - elle appelée à partir d'une instance de Animal ?


/**
Partie 2 : Créer une classe enfant avec extends

Créez une nouvelle classe appelée Chien qui hérite de Animal. 
Ajoutez une méthode spécifique à Chien appelée aboyer(). 
Créez une instance de Chien et testez ses méthodes.
 */

// Définissez la classe enfant
class Chien extends Animal {
    
}

// Créez une instance de la classe Chien
const chien1 = 
chien1.manger(); // Que va afficher cette ligne ?
chien1.aboyer(); // Que va afficher cette ligne ?

// Question : Pourquoi Chien peut-elle utiliser la méthode
// manger() même si elle n'est pas définie dans Chien ?
// À quoi sert super() ?

/***
Partie 3 : Ajouter une méthode dans la classe enfant qui 
redéfinit une méthode de la classe parent

Modifiez la classe Chien pour redéfinir la méthode manger() 
afin d'ajouter un message spécifique pour les chiens.
 */

class Chien extends Animal {
    
}

// Créez une instance de Chien
const chien2 = new Chien("Buddy", 4, "Labrador");
chien2.manger(); // Que va afficher cette ligne ?

/**
Question : Que se passe-t-il lorsque vous redéfinissez manger() 
dans Chien ? Quelle version de manger() est appelée ?
 */
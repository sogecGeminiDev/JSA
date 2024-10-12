/**

Créez un objet simple représentant un livre avec des propriétés comme 
titre, auteur, et année. Utilisez la notation littérale pour le faire. 
Ensuite, accédez aux propriétés de cet objet et modifiez-les.
ajouter 2 méthodes getAuther() et setAuther()

 */




// Créez l'objet livre


// Accédez aux propriétés et modifiez-les
console.log(livre.titre); // Que va afficher cette ligne ?
livre.annee = 1950; // Modifier l'année 
console.log(livre.annee); // Que va afficher cette ligne ?
// Modifier l'auteur puis afficher 

// Question : Quelles sont les propriétés et méthodes de l'objet user ?


/**
Partie 2 : Créer un objet avec Object.create()

Utilisez Object.create() pour créer un nouvel objet qui hérite d'un autre objet. 
Par exemple, créez un objet vehicule avec des propriétés par défaut, 
puis créez un autre objet voiture qui hérite de vehicule.
 */

// Créez l'objet parent
const vehicule = {
    type: "général",
    rouler: function() {
        console.log("Le véhicule roule");
    }
};

// Créez un nouvel objet en héritant de vehicule
const voiture = 

console.log(voiture.type); // Que va afficher cette ligne ?
voiture.rouler(); // Que va afficher cette ligne ?

//Question : Quelles propriétés et méthodes voiture hérite-t-elle de vehicule ?


// Comment pouvez - vous ajouter de nouvelles propriétés à voiture ?

// # code here .... 

/**
Partie 3 : Créer un objet avec un constructeur personnalisé

Créez une fonction constructeur pour créer des objets représentant des personnes. 
Chaque personne doit avoir un nom, un âge, et une méthode pour dire bonjour.
 */

// Définissez le constructeur

// code here ...

// Créez de nouvelles instances de Personne

// code here ...

personne1.direBonjour(); // Que va afficher cette ligne ?
console.log(personne2.age); // Que va afficher cette ligne ?


/**
Question : Comment créez-vous de nouvelles instances de Personne avec le constructeur ?
Comment accédez-vous aux propriétés et méthodes des objets créés ?
 */


// app.js

function fetchUserData() {
    console.log("Récupération des données utilisateur depuis l'API...");
    // Simulation de la récupération des données
    return { name: "John Doe", age: 25 };
}

function displayUserData(user) {
    console.log(`Nom de l'utilisateur : ${user.name}, Âge : ${user.age}`);
}

function main() {
    const user = fetchUserData();
    displayUserData(user);
}

main();


/***
Objectif : Refactoriser ce code en séparant les fonctions dans
 différents fichiers :

Créer un fichier (dataService.js) pour la fonction fetchUserData.
Créer un autre fichier (ui.js) pour la fonction displayUserData.
Mettre à jour le fichier app.js pour utiliser ces modules. 
*/

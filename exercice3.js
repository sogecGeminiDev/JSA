// app.js

let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Tâche ajoutée : ${task}`);
}

function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        const removed = tasks.splice(index, 1);
        console.log(`Tâche supprimée : ${removed[0]}`);
    } else {
        console.log("Index de tâche invalide.");
    }
}

function listTasks() {
    console.log("Liste des tâches :");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function main() {
    addTask("Apprendre JavaScript");
    addTask("Faire les courses");
    listTasks();
    removeTask(0);
    listTasks();
}

main();


/***
Refactoriser ce code en le structurant de manière logique :

Créer un fichier taskManager.js pour gérer la logique des tâches (addTask, removeTask, listTasks).
Créer un fichier taskData.js pour gérer les données des tâches (tableau tasks).
Mettre à jour le fichier app.js pour utiliser ces modules.


*/
// errorDetection.js
let students = ["Alice", "Bob", "Charlie", "David"];
let grades = [85, 92, 78, 90];

function getStudentGrade(name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i] === name) {
            return grade[i]; // Erreur ici : Mauvais nom de variable
        }
    }
    throw new Error("Étudiant non trouvé");
}

let studentName = "Charlie";
console.log(`La note de ${studentName} est : `, getStudentGrade(studentName));

// Tentative de division par zéro, vérifier l'utilisation correcte des exceptions
function divideNumbers(a, b) {
    if (b = 0) {  // Erreur ici : Utilisation de `=` au lieu de `===`
        throw new Error("Division par zéro !");
    }
    return a / b;
}

console.log("Résultat de la division : ", divideNumbers(10, 0));

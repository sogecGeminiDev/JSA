const show = function (userName) {
    fetch('http://127.0.0.1:5500/json/users.json')
        .then(response => response.json()) // Convertir la réponse en JSON
        .then(data => {
            // Récupérer les informations de "Bob"

        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));
}

// UI 

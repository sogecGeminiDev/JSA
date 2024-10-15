const show = function (userName) {
    fetch('http://127.0.0.1:5500/json/users.json')
        .then(response => response.json()) // Convertir la réponse en JSON
        .then(data => {
            // Récupérer les informations de "Bob"
            const user = data.users.find(user => user.name === userName);

            if (user) {
                const coordinates = user.location.coordinates;
                const hasGuitarHobby = user.hobbies.includes("guitar");

                console.log(`Les coordonnées de Bob sont : Latitude ${coordinates.lat}, Longitude ${coordinates.long}`);

                if (hasGuitarHobby) {
                    console.log("Bob a 'guitar' comme hobby.");
                } else {
                    console.log("Bob n'a pas 'guitar' comme hobby.");
                }
            } else {
                console.log("Utilisateur 'Bob' non trouvé.");
            }
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));
}

const buttons = document.querySelectorAll('button');

const btn1 = buttons[0];
btn1.addEventListener('click', function () {
    show('Bob')
})
const btn2 = buttons[1];
btn2.addEventListener('click', function () {
    show('Alice')
})
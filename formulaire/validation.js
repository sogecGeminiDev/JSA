function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let error = document.getElementById('error');
    error.textContent = "";

    // Validation du nom d'utilisateur (lettres et chiffres, entre 3 et 15 caractères)
    let usernameRegex = ;
    if (!usernameRegex.test(username)) {
        error.textContent = "Nom d'utilisateur invalide.";
        return false;
    }

    // Validation de l'email forme générale
    // puis un email se termine par google.fr
    let emailRegex = ;
    if (!emailRegex.test(email)) {
        error.textContent = "Adresse e-mail invalide.";
        return false;
    }

    // Validation du mot de passe (au moins 8 caractères, majuscule, minuscule, chiffre, caractère spécial)
    let passwordRegex = ;
    if (!passwordRegex.test(password)) {
        error.textContent = "Mot de passe invalide.";
        return false;
    }

    // 1- Validation du numéro de téléphone (format 123-456-7890)
    // 2- il faut que le numero commence par 07 
    let phoneRegex = ;
    if (!phoneRegex.test(phone)) {
        error.textContent = "Numéro de téléphone invalide.";
        return false;
    }

    alert("Formulaire validé avec succès !");
    return true;
}

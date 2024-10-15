function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let error = document.getElementById('error');
    error.textContent = "";

    // Validation du nom d'utilisateur (lettres et chiffres, entre 3 et 15 caractères)
    let usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!usernameRegex.test(username)) {
        error.textContent = "Nom d'utilisateur invalide.";
        return false;
    }

    // Validation de l'email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.textContent = "Adresse e-mail invalide.";
        return false;
    }

    // Validation du mot de passe (au moins 8 caractères, majuscule, minuscule, chiffre, caractère spécial)
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        error.textContent = "Mot de passe invalide.";
        return false;
    }

    // Validation du numéro de téléphone (format 123-456-7890)
    let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        error.textContent = "Numéro de téléphone invalide.";
        return false;
    }

    alert("Formulaire validé avec succès !");
    return true;
}

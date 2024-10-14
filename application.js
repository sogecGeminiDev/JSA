/**
Fonctionnalités de l'Application de Gestion de Bibliothèque
Gestion des livres :

Ajouter, modifier et supprimer des livres de la bibliothèque.
Afficher la liste des livres disponibles avec des détails comme le titre, l'auteur, et la disponibilité.
Gestion des utilisateurs :

Ajouter, modifier et supprimer des utilisateurs (membres de la bibliothèque).
Afficher la liste des membres inscrits.
Emprunts et retours de livres :

Permettre aux utilisateurs d'emprunter des livres (dans la limite d'un nombre maximum de livres).
Gérer les retours de livres.
Suivre les livres empruntés et vérifier leur disponibilité.
Suivi et statistiques :

Suivi des livres en circulation (nombre de livres empruntés, disponibles).
Statistiques sur le nombre d'emprunts par utilisateur.
Structure des Classes
Classe Livre

Attributs : titre, auteur, isbn, disponible.
Méthodes : marquerCommeEmprunte(), marquerCommeRetourne(), afficherDetails().
Classe Utilisateur

Attributs : nom, email, emprunts.
Méthodes : ajouterEmprunt(), retirerEmprunt(), afficherEmprunts().
Classe Bibliotheque

Attributs : livres, utilisateurs.
Méthodes : ajouterLivre(), retirerLivre(), chercherLivre(), 
ajouterUtilisateur(), emprunterLivre(), retournerLivre(),
afficherStatistiques().

*/


/*

Exercice 1 
Task: Sélectionner tous les éléments <p> sur la page et changer leur couleur de fond en jaune.

<!DOCTYPE html>
<html>
<head>
    <title>Exercice 1 : Sélection de Base des Éléments</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
       # code here 
    </script>
</head>
<body>
    <p>Ceci est le paragraphe 1.</p>
    <p>Ceci est le paragraphe 2.</p>
    <p>Ceci est le paragraphe 3.</p>
</body>
</html>

*/


/**************************
 * Exercice 2
 * 
 Créer un bouton qui affiche une alerte avec le texte "Bouton cliqué !" lorsqu'il est cliqué.
  <!DOCTYPE html>
<html>
<head>
    <title>Exercice 2 : Gestion des Événements</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        # code here 
    </script>
</head>
<body>
    <button id="alertButton">Cliquez-moi</button>
</body>
</html>
 */



/*****
 * Exercice 3
 
 Créer deux boutons : un pour masquer une <div> et un autre pour la réafficher.

 <!DOCTYPE html>
<html>
<head>
    <title>Exercice 3 : Masquer et Afficher des Éléments</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        # code here 
    </script>
</head>
<body>
    <button id="hideButton">Masquer</button>
    <button id="showButton">Afficher</button>
    
    <div id="myDiv" style="width:200px; height:100px; background-color:lightblue; margin-top:20px;">
        Ceci est une div à masquer ou afficher.
    </div>
</body>
</html>
 
 
 */



/***
Exercice 4 

Ajouter un bouton qui bascule une classe "highlight" sur une liste d'éléments, 
changeant leur couleur de fond.

<!DOCTYPE html>
<html>
<head>
    <title>Exercice 4 : Basculer une Classe</title>
    <style>
        .highlight {
            background-color: #ffeb3b;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
       #code here 
    </script>
</head>
<body>
    <button id="toggleClassButton">Basculer Highlight</button>
    
    <ul>
        <li>Élément 1</li>
        <li>Élément 2</li>
        <li>Élément 3</li>
    </ul>
</body>
</html>


 */




/**

Créer un champ de saisie et un bouton qui, lorsqu'ils sont cliqués, 
afficheront la valeur du champ dans une alerte.

<!DOCTYPE html>
<html>
<head>
    <title>Exercice 5 : Manipulation des Entrées de Formulaire</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        #code here 
    </script>
</head>
<body>
    <input type="text" id="textInput" placeholder="Entrez quelque chose">
    <button id="showValueButton">Afficher la Valeur</button>
</body>
</html>


 */


/**
 * Exercice 6
Animer une <div> pour qu'elle se déplace de 200px vers la droite lorsqu'un bouton est cliqué.

<!DOCTYPE html>
<html>
<head>
    <title>Exercice 6 : Animer des Éléments</title>
    <style>
        #animateDiv {
            width: 100px;
            height: 100px;
            background-color: coral;
            position: relative;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        Code here 
    </script>
</head>
<body>
    <button id="animateButton">Animer la Div</button>
    <div id="animateDiv"></div>
</body>
</html>


*/

/***
Exercice 7 

Créer un bouton qui ajoute un nouvel 
élément <li> à une liste <ul> lorsqu'il est cliqué.

<!DOCTYPE html>
<html>
<head>
    <title>Exercice 7 : Manipulation du DOM</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        #code here
    </script>
</head>
<body>
    <button id="addItemButton">Ajouter un Élément</button>
    
    <ul id="myList">
        <li>Élément 1</li>
        <li>Élément 2</li>
    </ul>
</body>
</html>
*/

/*
Exercice 8 
Utiliser jQuery pour effectuer une requête AJAX vers une API (par exemple, JSONPlaceholder) et afficher les résultats sur la page.

<head>
    <title>Exercice 8 : Requête AJAX</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        https://jsonplaceholder.typicode.com/posts/1
        code here 
    </script>
</head>
<body>
    <button id="loadDataButton">Charger les Données</button>
    <div id="result" style="margin-top:20px;"></div>
</body>
</html>
*/


/* 
Exercice 9
Créer un formulaire simple avec les champs nom et email. Lors de la soumission, vérifier que les deux champs sont remplis et que l'email est valide.
Afficher des messages d'erreur si nécessaire.

<!DOCTYPE html>
<html>
<head>
    <title>Exercice 9 : Validation de Formulaire</title>
    <style>
        .error {
            color: red;
            font-size: 0.9em;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        #code here
    </script>
</head>
<body>
    <form id="myForm">
        <div>
            <label for="name">Nom :</label><br>
            <input type="text" id="name" name="name">
            <div id="nameError" class="error"></div>
        </div>
        <br>
        <div>
            <label for="email">Email :</label><br>
            <input type="text" id="email" name="email">
            <div id="emailError" class="error"></div>
        </div>
        <br>
        <button type="submit">Soumettre</button>
    </form>
</body>
</html>


*/


/***
Exercice 2
Créer un menu de navigation. Lors du clic sur chaque élément du menu, charger dynamiquement le contenu correspondant à partir de fichiers HTML séparés.

Pour cet exercice, nous aurons besoin de plusieurs fichiers HTML :

Fichier Principal (index.html)
Contenu Dynamique (page1.html, page2.html, page3.html)


index.html


<!DOCTYPE html>
<html>
<head>
    <title>Exercice 10 : Chargement Dynamique de Contenu</title>
    <style>
        #navMenu {
            list-style-type: none;
            padding: 0;
        }
        #navMenu li {
            display: inline;
            margin-right: 10px;
            cursor: pointer;
            color: blue;
            text-decoration: underline;
        }
        #content {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 15px;
            min-height: 100px;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
       # code here 
    </script>
</head>
<body>
    <ul id="navMenu">
        <li data-page="page1">Page 1</li>
        <li data-page="page2">Page 2</li>
        <li data-page="page3">Page 3</li>
    </ul>
    
    <div id="content">
        <p>Bienvenue ! Cliquez sur un élément du menu pour charger du contenu.</p>
    </div>
</body>
</html>


page1.html

<h2>Contenu de la Page 1</h2>
<p>Ceci est le contenu dynamique de la Page 1.</p>

page2.html

<h2>Contenu de la Page 2</h2>
<p>Ceci est le contenu dynamique de la Page 2.</p>

page3.html

<h2>Contenu de la Page 3</h2>
<p>Ceci est le contenu dynamique de la Page 3.</p>
 */


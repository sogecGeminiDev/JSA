/*
ES6 : import multiple 
********************

Vous allez créer un petit projet pour gérer une librairie musicale. Votre code sera organisé en plusieurs modules, chacun ayant des fonctions et des classes spécifiques. L'objectif est d'utiliser l'importation multiple pour organiser ces modules efficacement.

Étapes de l'exercice
Créez trois fichiers JavaScript :

albums.js
artists.js
utils.js
Dans albums.js :

Créez une classe Album qui contient les propriétés suivantes :
title (titre de l'album)
artist (artiste)
year (année de sortie)
Méthode getInfo() qui retourne une chaîne de caractères avec les informations de l'album.
Ajoutez une fonction getAlbumsByArtist(artistName) qui prend un nom d'artiste et retourne une liste d'albums correspondant à cet artiste.
Dans artists.js :

Créez une classe Artist qui contient les propriétés suivantes :
name (nom de l'artiste)
genre (genre musical)
albums (tableau d'albums)
Méthode addAlbum(album) pour ajouter un album à l'artiste.
Méthode getAllAlbums() pour obtenir tous les albums de l'artiste.
Ajoutez une fonction getArtistsByGenre(genre) qui retourne une liste d'artistes correspondant à un genre musical spécifique.
Dans utils.js :

Créez deux fonctions :
sortAlbumsByYear(albums) : trie un tableau d'albums par année.
findAlbumByTitle(albums, title) : recherche un album par son titre dans un tableau d'albums.
Dans un fichier index.js :

Importez toutes les classes et fonctions des trois fichiers (albums.js, artists.js, utils.js) en utilisant l'import multiple.
Créez des exemples d'artistes et d'albums, ajoutez des albums aux artistes, et utilisez les fonctions pour trier et rechercher des albums.
Affichez les résultats dans la console.

*/
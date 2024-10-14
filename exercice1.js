/**
On suppose qu’un guichet doit gérer plusieurs types de courrier recommandé. Les lettres recommandées simples,
les lettres recommandées avec accusé de réception, les lettres recommandées avec accusé de réception et service de
suivi personnalisé. Les envois sont gérés par des guichets qui peuvent être de plusieurs types (demi guichet, rapide,
lent), un guichet permet de déposer un courrier ou de le récupérer.
Le courrier peut être dans les différents états suivants :
1. En instance de tamponnement
2. En acheminement
3. Déposé chez le destinataire
4. Accepté par le destinataire
Deux types d’utilisateurs qui peuvent accéder aux données : les personnels de la poste et les particuliers dont le
courrier est du bon type.



 */


/*** Solution 1 */
// Fonction pour créer un courrier recommandé
function createCourrier(type, etat) {
    return {
        type: type,
        etat: etat,
        changerEtat: function(nouvelEtat) {
            this.etat = nouvelEtat;
            console.log(`L'état du courrier est maintenant : ${this.etat}`);
        }
    };
}

// Fonctions pour différents types de guichets
function demiGuichet() {
    return {
        deposerCourrier: function(courrier) {
            console.log(`Courrier de type ${courrier.type} déposé au demi-guichet.`);
            courrier.changerEtat("En instance de tamponnement");
        },
        recupererCourrier: function(courrier) {
            console.log(`Courrier de type ${courrier.type} récupéré au demi-guichet.`);
        }
    };
}

function guichetRapide() {
    return {
        deposerCourrier: function(courrier) {
            console.log(`Courrier de type ${courrier.type} déposé au guichet rapide.`);
            courrier.changerEtat("En acheminement");
        },
        recupererCourrier: function(courrier) {
            console.log(`Courrier de type ${courrier.type} récupéré au guichet rapide.`);
        }
    };
}

function guichetLent() {
    return {
        deposerCourrier: function(courrier) {
            console.log(`Courrier de type ${courrier.type} déposé au guichet lent.`);
            courrier.changerEtat("En instance de tamponnement");
        },
        recupererCourrier: function(courrier) {
            console.log(`Courrier de type ${courrier.type} récupéré au guichet lent.`);
        }
    };
}

// Création de différents types de courriers et guichets
const lettreSimple = createCourrier("lettre recommandée simple", "En instance de tamponnement");
const lettreAccuse = createCourrier("lettre recommandée avec accusé de réception", "En acheminement");

const demiGuichetService = demiGuichet();
const guichetRapideService = guichetRapide();

// Utilisation du système
demiGuichetService.deposerCourrier(lettreSimple);
guichetRapideService.recupererCourrier(lettreAccuse);



/*** Solution 2 */


// Classe de base pour un courrier recommandé
class Courrier {
    constructor(type, etat = "En instance de tamponnement") {
        this.type = type;
        this.etat = etat;
    }

    changerEtat(nouvelEtat) {
        this.etat = nouvelEtat;
        console.log(`L'état du courrier est maintenant : ${this.etat}`);
    }
}

// Classe pour un guichet
class Guichet {
    constructor(type) {
        this.type = type;
    }

    deposerCourrier(courrier) {
        console.log(`Courrier de type ${courrier.type} déposé au guichet ${this.type}.`);
        switch (this.type) {
            case "demi":
                courrier.changerEtat("En instance de tamponnement");
                break;
            case "rapide":
                courrier.changerEtat("En acheminement");
                break;
            case "lent":
                courrier.changerEtat("En instance de tamponnement");
                break;
            default:
                console.log("Type de guichet inconnu.");
        }
    }

    recupererCourrier(courrier) {
        console.log(`Courrier de type ${courrier.type} récupéré au guichet ${this.type}.`);
    }
}

// Classes pour différents types de courriers (optionnel pour un développement futur)
class LettreSimple extends Courrier {
    constructor() {
        super("lettre recommandée simple");
    }
}

class LettreAccuseReception extends Courrier {
    constructor() {
        super("lettre recommandée avec accusé de réception");
    }
}
/*
// Création de courriers et guichets
const lettreSimple = new LettreSimple();
const lettreAccuse = new LettreAccuseReception();

const demiGuichetService = new Guichet("demi");
const guichetRapideService = new Guichet("rapide");

// Utilisation du système
demiGuichetService.deposerCourrier(lettreSimple);
guichetRapideService.recupererCourrier(lettreAccuse);
*/
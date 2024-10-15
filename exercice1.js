/**
On suppose qu’un guichet doit gérer plusieurs types de courrier recommandé.

- Les lettres recommandées simples,
- les lettres recommandées avec accusé de réception,
- les lettres recommandées avec accusé de réception et service de suivi personnalisé. 

Les envois sont gérés par des guichets qui peuvent être de plusieurs types (demi guichet, rapide,lent),
un guichet permet de déposer un courrier ou de le récupérer.
Le courrier peut être dans les différents états suivants :
1. En instance de tamponnement
2. En acheminement
3. Déposé chez le destinataire
4. Accepté par le destinataire
Deux types d’utilisateurs qui peuvent accéder aux données : 
- les personnels de la poste
- les particuliers dont le courrier est du bon type.

*/


/*** Solution 1 Function */

class Courrier
{
    constructor(id, type, etat = 'En instance de tamponnement' )
    {
        this.id = id;
        this.type = type;
        this.etat = etat;
    }

    changerEtat(etat)
    {
        this.etat = etat;
        console.log(`L'etat a été modifié : ${etat}`)
    }

}


class Guichet
{
    constructor(type)
    {
        this.type = type;
        this.courriers = [];
    }

    deposerCourrier(courrier)
    {
        this.courriers.push(courrier);
        console.log(`Dépot du courrier au guichet : ${this.type}`)
    }

    recupererCourrier(id)
    {
        this.courriers.filter(courrier => courrier.id !== id)
    }
}


class LettreSimple extends Courrier
{
    constructor(id, type = 'Lettre recommandé simple', etat = 'En instance de tamponnement')
    {
        super(id, type, etat);
    }

}


class LettreAccuseReception extends Courrier
{
    constructor(id, type = 'Lettre recommandé avec accusé de réception', etat = 'En instance de tamponnement')
    {
        super(id, type, etat);
    }
}

const courrier = new LettreSimple(1);
const courrier2 = new LettreAccuseReception(2);
const courrier3 = new LettreAccuseReception(3);
const courrier4 = new LettreSimple(4);


const guichetRapide = new Guichet('Rapide');
const guichetDemi = new Guichet('Demi Guichet');



guichetDemi.deposerCourrier(courrier);
guichetDemi.recupererCourrier(courrier.id);


guichetRapide.deposerCourrier(courrier2);
guichetRapide.recupererCourrier(courrier2.id);



/*** Solution 2  POO */


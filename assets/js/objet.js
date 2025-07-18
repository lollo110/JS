// Les objet
// Un objet c'est une structure qui permet de stocker  des paires cle/valeur.

// Exemple

const PERSONNE = {
    prenom: "Lorenzo",
    nom: "Cilurzo",
    age: 27,
    naissance: "20 settembre 1997"
};

console.log(PERSONNE);

// Comment accéder aux valeurs d'un objet
// Deux maniére

console.log(PERSONNE["nom"]);
console.log(PERSONNE.nom);

// Modifier ou ajouter une propriété

PERSONNE.nom = "Taffuri";
console.log(PERSONNE);

PERSONNE.age = 28;
console.log(PERSONNE);

PERSONNE.prenom = "Clement";
console.log(PERSONNE);
PERSONNE.naissance = "Inconu";
console.log(PERSONNE);


// Ajouter une proppriété

PERSONNE.ville = "Anzio";
console.log(PERSONNE);

// Supprimer une propriété

delete PERSONNE.naissance;
console.log(PERSONNE);

// Boucler sur un objet avec la boucle for ... in

for(let cle in PERSONNE){
    console.log(cle + " : " + PERSONNE[cle]);
}

// Fonctions dans un objet

let classe = {
    nbEleve: 11,
    travaillentBien: true,
    bonjour : function(){
        document.writeln("Bonjour tout le monde " + this.nbEleve);
    },
    sousClasse : {
        nbEleve: 38,
        travaillentBien: false,
        salut : function(){
            document.writeln("Nous sommes " + this.nbEleve);
        }
    }
}

classe.bonjour();
classe.sousClasse.salut();

// Les t

let utilisateur = [
    {nom: "Maddie", nationalite: "peruvienne"},
    {nom: "Lollo", nationalite: "italien"}
];
 document.writeln(utilisateur[0].age);

//  for of : Itère sur les Valeurs seulement
// User represente les objets en eux même

 for (let user of utilisateur){
    console.log(user.age);
 }

//  For in
let utilisateurObj = {
    utilisateur1: {
        nom: "Alice",
        age: 30
    },

    utilisateur2: {
        nom: "Bob",
        age: 25,
    }
}

// User rapresente chaque clé de l'objet utilisateurObj (utilisateur1 et utilisateur2)
for(let user in utilisateurObj){
    console.log(utilisateurObj[user].age);
}
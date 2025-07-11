//  Operateurs logiques

// L'opérateurs et : &&

// prenom === prenomLogin && age === ageLogin

let email = prompt("Quelle est votre adresse mail");
let emailBDD = "groupe@gmail.com";

let mDp = prompt("Quelle est votre mot de passe ?");
let mDpBDD = "X3F6OOKM";

// if((A == B) && (C == D))

// base true et false;
// FALSE && FALSE = FALSE;
// FALSE && TRUE = FALSE;
// TRUE && TRUE = TRUE;

if (email == emailBDD && mDp == mDpBDD){
    console.log('Vous êtes connecté');
} else {
    console.log('Vous avez mal saisie ! Attention !!')
}

// L'opérateur ou : ||

// à la difference de &&, || ne demande que l'une des deux conditions soit vraie

// FALSE || FALSE = FALSE
// FALSE || TRUE = TRUE
// TRUE || TRUE = TRUE

let prenom = "Nadia";
let prenom2 = "N'Golo";

let age = 22;
let age2 = 22;

if(prenom == prenom2 || age == age2){
    console.log('Tu es dans la vérité !');
} else {
    console.log('Tu es dans le mensonge !');
}


// ^ XOR (Opérateur OU Exclusif)
// TRUE ^ TRUE = FALSE
// TRUE ^ FALSE = TRUE
// FALSE ^ FALSE = FALSE

// Entrée gratuit SOIT aux blondes, SOIT aux chatains

let cheveux = "Brune";

if (cheveux == "Blonde" ^ cheveux == "Chatain"){
    console.log("Vous pouvez entrer");
} else {
    console.log("Vous devez payer pour entrer, 50€");
}

// L'opérateurs pas (!) signifie que cest le contraire de 

let utiConnecte = true;

if(!utiConnecte) {
    console.log("Oui, il est connecté");
} else {
    console.log("Non, il n'estr pas connecté");
}

// egal

if(utiConnecte == false){
    console.log('Oui');
} else {
    console.log('Non');
}

// Syntax de base

// Commentaire sur une ligne

/* Commentaire
sur
plusieurs
lignes
*/

// 1 : Déclarer une variable en Javascript

// Déclarer une variable = le mot clé let suivi du nom de la variable

let prenom;
var prenomI;

// 2 : Affecter une va  leur à une variable

prenom = "Rayane";
console.log(prenom);
prenom = "Ilyes";
console.log(prenom);
prenom = "Nadia";
console.log(prenom);

// 3 : Une instruction se termine TOUJOURS par un point-virgule, il est aussi possible d'écrire plusieurs instructions sur une seule ligne

// inst_1;
// inst_2; inst_3;

// 4 : Afficher une boite de dialogue (2façons)

// alert("Super");
// window.alert("Super");

// 5 : Afficher dans la console

// console.log("CC je suis apprenant au poleS");

// 6 : Affficher dans la page web directement (writeln), ATTENTION , ne prennons pas l'habitude de l'utiliser

// document.writeln("<h1> Hello World ! </h1>");

// 7 : Demander à l'ultilisateur une valeur (2 façon de faire)

// prompt("Quel jour de la semaine sommes-nous?");

// window.prompt("Quelle age as tu ?");

// 8 : Et pour manipuler cette valeur, je dois la stocker;

// let jour = prompt("Qui a les plus beux cheveux de la terre ?");

// console.log(jour);
// document.writeln(jour);

// 9 : Attention !! Le JS est sensible à la casse ('case sensitive'): mavariable =/= maVariable =/= ma_variable

// mavariable;
// maVariable = camel case;
// ma_variable = snake case;

let journal;
let jOurnal;

// Sont 2 variables different

// 10 : Régles des noms de variable = Une variable ne peut pas commencer par une chiffre, elle doit contenir que des caractéres alphanumériques et ne peut pas être un mot reservé (var, let, for, if des éléments natifs du langage JS)

// LES TUPES DE VARIABLES

//  1. Chaînes de caractéres (string)
let vacance = "2017";
let destination = "Australie";

// 2. Nombre entier (Integrer ou Int)

let annee = 2017;
let age = 27;

// 3. Nombre decimaux (Float) Attention !!! En anglais les virgules sont des point

let decimal = 2.5;

// 4. Des booléens (Boolean = VRAI / FAUX + TRUE / FALSE);

let unBooleanFalse = false;
let unBooleanTrue = true;

// 5. Undefined (Non défini)

let quelqueChose; // il sera undefined tant que je ne lui aurai pas donné de valeur

// 6. Null

let nulle = null;

// 7. Les Constantes

// La déclaration const permet de créer une constante accessibile uniquement en lecture. Contrairement à une variable (let, var), sa valeur ne peut plus être modifiée par réaffectation plus bas dans le code, une constante ne peut pas être déclarée à nouveau dans le même script

// Par convention les constantes sont en majuscules :

const PAYS = "France"; // Type chaine de caractère (string)
const AN = "2025";
const BIRTH = 2025; // Type Nombre entier (Int)

// 8. TypeOf permet d'identifier le type de ma variable
console.log(PAYS);
console.log(typeof PAYS);
 

// LES FONCTIONS

// Les fonctions sont des structures qui permettent de réutiliser le code à l'interieur indéfiniment selon les besoins
// jaune c'est fonction
// Structure :
// function nomDeLaFunction(){
// ...CODE A EXECUTER !;
// }

// Les fonctions prédéfinies (native)
// indexOf : Cherche la position d'un element dans une chaine de caractére (si l'élément n'est pas trouve il retourn -1)
// document.writeln()

// let phrase = 'pate';
// let position = phrase.indexOf("e");
// document.writeln('<span>' + position + '</span>');

// includes() : vérifie si une chaine de caractére contient un élément (retourne true ou false)

// let email = prompt('Quel est votre email ?');

// if(email.includes('@')) {
//   alert('Email valide');
// } else {
//   alert('Email invalide');
// }

// toLowerCase(), toUpperCase() minuscule et majuscule

// length : length retourne la longeur d'une chiane de caractére (ou le nombre d'éléments d'un tableau(array))

let phrase1 = "Nadia m'a demandé une phrase !";
document.writeln(phrase1.length);

// Fonction Utilisateur

// 4 types de fonction personnalisées
// 1: Function sans paramétre sans valeur de retour 

function helloWorld(){
  console.log('coucou');  
}

// 2: Function avec paramétre sans valeur de retour

function bonjourClass(prenom){
  document.writeln("Bonjour " + prenom);
}

// Je mets mon paramétre ici
bonjourClass('Lorenzo');
bonjourClass('Hakim');
bonjourClass('Rayan');

// 3: Function sans paramétre avec valeur de retiour

function byeBye(){
  return "Au revoir";
}

// La spécificité ici, c'est que vu qu'il y'a un return, il nous retourne une valeur qu'on doit stocker

let ciao = byeBye();
document.writeln(ciao);

// 4: Function avec paramétre avec valeur de retour

function addition(num1, num2){
  return num1 + num2;
}

let addition1 = addition(4, 10);
document.writeln(addition1);

// Function avec prompt

function meteo(saison, temperature){
  let message = `Nous sommes en ${saison} et il fait actuellement ${temperature} degrès`;

  document.writeln(`<p> ${message} </p>`);
}

let saison = prompt("Donne moi une saison :");
let temperature = prompt("Donne moi une temperature");

meteo(saison, temperature);
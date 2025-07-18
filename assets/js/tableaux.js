// Les tableaux


// A quoi sert un tableau ?
// Il sert à stocker plusieurs valeurs (ou données Ilyes) dans une variable, au lieu d'une seule valeur

// Créer un tableau
// 1. let tableau = new Array(element0, element1, element2);
// 2. let tableau = Array(element0, element1, element2);
// let tableau = [element0, element1, element2];

// Un tableau est composé d'index ( c'est la place de l'élément dans le tableau), l'index commence TOUJOURS par 0
let fruits = ['pommes', 'bananes', 'cerise'];
console.log(fruits); // En PHP ne functionne pas

let first = fruits[0];

console.log(first);

let couleurs = ["red", "green", "orange"];
for(let i = 0; i < fruits.length; i++){
    document.writeln(`<p style='color: ${couleurs[i]}; font-size: 8em;'> fruit numéro ${i + 1} est ${fruits[i]} </p>`);
}

// Attention : pour l'ajout, suppression etc etc, on va quand même copier le tableau
// method push : Ajoute un nouvel élément au tableau MAIS retournr la nouvelle longueur du tableau 

// Ajouter le dernier élément
fruits.push("oranges");
console.log(fruits);

// Supprimer le dernier élément
let oranges = fruits.pop();
console.log(fruits);

// Supprimer le premier élément
let pommes = fruits.shift();
console.log(fruits);

// Ajouter le premier élément
let longFruits = fruits.unshift('pommes'); //longFruits ritorna la length dell'array
console.log(fruits);

// Trouver l'index d'un élément dans le tableau
let pos = fruits.indexOf("bananes");
console.log(pos);

// Supprimer un élément par son index
let removeItem = fruits.splice(1,1, "kiwi");  // .splice(index dove comincia, quanti elementi elimina, se vuoi aggiungere elemento)
console.log(fruits);
console.log(removeItem);

// Slice
// Méthode qui renvoie un tableau, contenant une partie superficielle d'une portion du tableau d'origine, elle est définie par un index de début et un index de fin

let animaux = ['chat', 'chien', 'lama', 'ornithorynque', 'chinchilla', 'ratel', 'peroquet']
let newAnimal = animaux.slice(1,5); // retourne de chien à chinchilla
let list = animaux.slice(1); // retourne de chien à perroquet
newAnimal.unshift('chat');
console.log(newAnimal); 
console.log(list); 

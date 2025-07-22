// getElementById() va retourne l'élément demande grâce à son id
// let first = document.getElementById('li1');

// querySelector() va retourne l'élément demandé grâce au selector CSS (Attention il retourne 1 seul element)
// Si je veux prendre le text contenu dans ma balise j'utilise .textContent a la fin aprés la parenthèse
let first = document.querySelector("#li1");
console.log(first);

// querySelectorAll() va retourner tous les éléments demandés sous forme de "noeud" (tableau) même s'il y a qu'un seul élément

let lis = document.querySelectorAll("nav > ul > li");

// FOREACH : boucle qui va nous permettre de boucler sur les tableaux
let text = " ";
lis.forEach((li) => {
  text = li.textContent;
  console.log(text);
});

// Changer les attributs

let image = document.querySelector('img');


let srcImage = image.getAttribute('src')

console.log(srcImage);

image.setAttribute('src', './assets/img/maddie.jpg');
console.log(image);

let images = document.querySelectorAll('img');

images.forEach((image) => {
    if(image.getAttribute('alt') == "maddie"){
        image.style.width = "50%";
    } else if(image.getAttribute('alt') == "spazio"){
        image.style.boxShadow = "10px 10px 10px black";
        image.style.width = "30%";
    } else {
        image.style.width = "100%"
    }
})

// Créer un élément HTML
// createElement('nom de la balise')
let titreH3 = document.createElement('h3');

// textContent = Récupère ou défini le texte dans l'élément

titreH3.textContent = "Le petit royaume de Lorenzo";
titreH3.setAttribute('id','supprime-moi');
// Je rends titreH3 enfant de body
document.body.appendChild(titreH3);

let h3SUpp = document.querySelector('#supprime-moi');
h3SUpp.remove();

// Exemple prompt()

// let prompteur = prompt("Êtes vous heureux dans la vie (Oui/Non");

// let imageReponse = document.createElement('img');
// let text2;

// if(prompteur == "Oui" || prompteur == "oui"){
//     imageReponse.setAttribute('src','./assets/img/pollice-su.jpg');
//     text2 = "Super, je suis ravi pour toi";
// } else if (prompteur == "Non" || prompteur == "non"){
//     imageReponse.setAttribute('src','./assets/img/pollice-giu.jpg');
//     text2 = "Je suis triste pour toi !";
// } else{
//     imageReponse.setAttribute('src','./assets/img/ciao.gif');
//     imageReponse.style.width = "100%"
//     text2 = 'Je boude ! Tu a pas compris la demande je crois ...';
// }

// document.body.appendChild(imageReponse);
// document.body.append(text2);


console.log(navigator.userAgent);
console.log(navigator.language);

10 < 2 ? document.writeln('oui') : document.writeln('non');

// DOM un peu plus approfondi

// Naviguer dans le DOM
// Le DOM forme un arbre d'éléments liés entre eux : Parent, enfants, frères, etc..

// "parentElement" : Recupère l'élément parent
// "children" : liste des enfants directs
// "nextElementsSibling" / "previousElementSibling" : frère suivant ou frère précédent

let p = document.querySelector('#second');
console.log(p.previousElementSibling);

// innerHtml vs textContent
// textContent affiche du text BRUT alors que innerHTML transcrit le HTML en balises

let inner = document.querySelector('#exempleInner');
let texte = document.querySelector('#exempleTexte');
texte.textContent = '<div> coucou </div>';
inner.innerHTML = "<div><p><i>coucou </i></p></div>";

// Cloner un élément

let clone = document.querySelector('#parent').cloneNode(true); //avec true prends les enfants aussi et sans rien il prends seulement le direct interessé
document.body.appendChild(clone);

// Petite rappel
// Generer dynamiquement une structure complète

// document.createElement() pour créer un élément
// appendChild() pour les imbriquer
// setAttribute() pour leur donner un attribut
// textContent ou innerHTML pour insérer du contenu

// Les classes
// Manipuler les classes avec classList

let cobaye = document.createElement('span');

// Ajouter une classe
cobaye.classList.add('class1', 'class2');
console.log(cobaye);

// Retirer une classe

cobaye.classList.remove('class1');
console.log(cobaye);

// Toggle (Ajoute ou supprime la classe si elle est présente ou non)
cobaye.classList.toggle('class3');
console.log(cobaye);

// contains (Vérifié si la classe existe dans l'attribut), renvoie True / False

let check = cobaye.classList.contains('class3');
console.log(check);

// value de formulaire

let nom = document.querySelector('#nom').value;
console.log(nom);
let prenom = document.querySelector('#prenom').value;
console.log(prenom);

prenom = 'lollo';
console.log(prenom);
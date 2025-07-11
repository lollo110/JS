// Les conditions

// Structure de base : if

// if(true){
//     //Code à éxecuter
// }

// //exemple
// let nb1 = 100;
// if(nb1 < 50){
//     console.log('nb1 est inférieur à 50');
// } else {
//     console.log('nb1 est superieur à 50');
// }

let a = 6;
let b = 9;
let c = 12;

if (a > b && b > c){
    console.log('a est le superieur');
} else if(b > a && a > c){
    console.log('b est le superieur')
} else if(c > b && b > a){
    console.log('c est le superieur');
}

// SWITCH

//Le switch verifié une variable selon des cas

let str = 'Lorenzo'

switch(str){
    case 'Nadia' : 
       str = "Je m'appelle Nadia";
       break;
       case "Lorenzo" :
        str = "Je m'appelle Lorenzo";
        break;
        case "N'Golo" :
            str = "Je m'appelle N'Golo";
            break;
            default :
            str = "Je n'ai aucun prénom";
            break;
}
console.log(str);


// En utilisant les prompt

let prompteur = prompt("Quelle est la couleur de vos yeux");

switch (prompteur){
    case 'bleus' :
        document.writeln("<h1> Les yeux sont bleus </h1>");
        break;
    case 'verts' :
        document.writeln("<h1> Les yeux sont verts </h1>");
        break;
    case 'marrons' :
        document.writeln("<h1> Les yeux sont marrons </h1>");
        break;
    default :
    document.writeln("<h1> Merci d'écrirre une vraie couleur !!!!! </h1>");
}
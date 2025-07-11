// LA CONCATENATION

let annee = 2025;
let futur = 3;

let resultat = annee + futur;
console.log(resultat);

// 3 façon de concatener

// façon 1 : avec doubles guillemets
// document.writeln("<p> l'année " + annee + " + " + futur + " = " + resultat + "</p");
// façon 2 : avec singles guillemets (Attention aux mots à apostrophes)
// document.writeln('<p> année ' + annee + ' + ' + futur + ' = ' + resultat + '</p');
// façon 3 : En backtick

document.writeln(`L'année ${annee} + ${futur} = ${resultat}`);
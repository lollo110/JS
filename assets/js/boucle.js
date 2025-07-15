// Les boucles

// Les boucles sont des structure qui servent à éxécuter du code autant de fois que necessaire

// Il existe plusieurs types de boucles mais les plus utilisées sont les suivantes : FOR / WHILE

// La boucle While (Tant que)

// let compteur = 1;

// while(compteur < 10){
//     document.writeln("<h2 style='color : blue'> Voici mon compteur : " + compteur + " </h2>");
//     compteur++;
// }

// let reponse = '';
// while (reponse != 'non'){
//     reponse = prompt('etes vous bloque ?');
//     console.log(reponse);
// }


// DO ... WHILE
// à ladifference de WHILE, DO WHILE executera toujours le premier tour de sa boucle MEME si la condition est fausse 
// let i = 0;
// do {
//     document.writeln(i)
//     i++;
// } while (i > 1);

// FOR
// for(3 arguments){...code à éxécuter}
// for(let i = 0; i < 10; i++){}
// for(variable; condition; incrementation){}


for(let i = 0; i <= 20; i += 2){
    document.writeln("<h3 style='color : purple'> Salut, je suis le numér " + i + " </h3>");
}


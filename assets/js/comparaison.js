// Les operateurs de comparaison

// Surtout pas (A = B)
// L'opérateur de comparaison == signifié 'égal à'

let nb1 = 123; //number
let nb2 = "123"; //string

console.log(nb1 == nb2); // Retourn TRUE

// Lopérateur de comparison stricte === 
// Il verifié également le type de variable et sa valeur

console.log(nb1 === nb2); // Retourn FALSE

// L'opérateur différetn != signifie "different de"
// L'opérateur différetn !== signifie "strictement different de"

console.log(nb1 != nb2); //retour FALSE

console.log(nb1 !== nb2); //retour TRUE

// L'opérateur > plus grand que

console.log(nb1 > nb2);
console.log(nb1 >= nb2);

// L'operateur < moins grand que

console.log(nb1 < nb2);
console.log(nb1 <= nb2);

// Conversion des types :

nb2 = parseInt(nb2);
console.log(typeof nb2);
nb2 = parseFloat(nb2);
console.log(nb2);

nb1 = nb1.toString();
console.log(typeof nb1);

// Les Ecouters d' evenement

// Un événement est une action ou un comportement détécté par le navigateur:
// Un clic, un appui sur une touche de clavier, un survol, le chargement d'une page

// Un écouter d'événement (event listener) permet de dire à la page : "Quand l'utilisateur fait ceci(evenement), tu fais ça (fonction)"

// Syntaxe de base
// element.addEventListener('evenement', functionAexecuter());

let click = document.querySelector("#clickclick");
click.addEventListener('dblclick', function(){
    let div = document.createElement('div');
    div.innerHTML = "<p style='color : purple'> AOOO </p>";
    document.body.appendChild(div);
});

// Types d'événements
// click = 'click de sourius';
// dblclick = 'double click de souris';
// mouseover = 'survol de souris';
// mouseout = 'quand la souris quitte l'élément';
// keydown = 'Touche du clavier pressée';
// keyup = 'touche relachée';
// submit = 'formulaire envoyé';
// change = 'valeur changée (input, select)';
// input = 'text saisi en temps réel (sur input)';
// load = 'page ou image chargée';

// Fonction nommée vs fonction anonyme

function direBonjour(){
    console.log('Bonjour !');
}

click.addEventListener('click', direBonjour);

// Retirer un écouteur
// removeEventListener : ATTENTION, il faut obligatoirement une function nommée

click.removeEventListener('dblclick', function(){});


let tousMesBoutons = document.querySelectorAll('.test');
// tousMesBoutons contient un tableau avec 3 boutons
// Pour chacuns (btn represente chaque bouton indivuiduellement)
tousMesBoutons.forEach(btn => {
    // ecouteur d'événement sur chaque bouton (click), LE BOUTON sur lequel je click activera son propre écouteur d'événement
    btn.addEventListener('click', function (){
        alert('bouton cliqué !');
        btn.style.backgroundColor = 'blue';
    })
});

// Objet (event) (détail de l'événement)
// Il sert à savoir par exemple: quelle touche a été préssée, quel élément a été cliqué etc etc
document.addEventListener('keydown', function(event){
    console.log("Touche pressée : " + event.key)
});

// BONUS : Astuce utile

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault(); // Empecher l'envoi du formulaire

    let message = "";
    // error = false (pas des error de base)
    let error = false;
    
    // Je peux faire mes vérifications d'usage
    // console.log(this.querySelector('input').value);

    // si la Valeur de mon input a une longeur inférieur à 3 caracters alors je réaffecte la valeur de ma variable message et je change la variable error en TRUE pour signifier une error
    if(this.querySelector('#nom').value.length < 3){
        message = "Nom: 3 caractéres ou plus please";
        error = true;
    } else if (this.querySelector('#prenom').value.length < 3) {

        message = "Prenom: 3 caractéres ou plus please";
        error = true;
    }
    if (error == false) {
        // code pour envoyer au serveur ou passer à la suite
        console.log('ici');
    } else {
        document.body.append(message);
    }
    
})

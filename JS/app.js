/*ESERCIZIO:
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.*/

/*ESERCIZIO BONUS:
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà*/


//Recuperare elemento bottone play
const buttonPlayElement = document.querySelector(".button-play");
//console.log(buttonPlayElement);

//Recuperare elemento select
const selectTagElement = document.getElementById("difficulty")
//console.log(selectTagElement);

//Aggiungere un event listener al click del bottone

buttonPlayElement.addEventListener("click", function(){

    //Dichiarare variabile difficoltà con la value dell'elemento select
    let difficulty = selectTagElement.value;
    //console.log(difficulty);

    //in event listener,
    //SE variabile difficoltà = "hard", 
    if (difficulty === "hard") {
        //allora evoco la funzione con 10
        createGrid(10);
    }
    //ALTRIMENTI SE variabile difficoltà = "normal", 
    else if (difficulty === "normal") {
        //evoco la funzione con 9
        createGrid(9);
    }
    //ALTRIMENTI evoco la funzione con 7
    else {
        createGrid(7);
    }

})


//inserire tutto ciò che avevo in event listener per il bottone play in una funzione
//funzione ha in ingresso la variabile lato

function createGrid(gridSide) {
    
    //Recuperare elemento griglia con querySelector
    const gridElement = document.querySelector(".grid");
    //console.log(gridElement);

    //Svuotare la griglia prima di riempirla (in caso di secondo click)
    gridElement.innerHTML = '';

    //Dichiarare variabile lato griglia (non più ora che è una funzione)
    //let gridSide = 10;
    //console.log(gridSide);

    //Calcolare variabile numero di celle facendo lato x lato
    let cellsNumber = gridSide * gridSide;
    //console.log(cellsNumber);

    //Aprire ciclo for che passa il numero delle celle
    for (let i = 0; i < cellsNumber; i++) {

        //Dichiarare numero che andrà dentro alle celle: indice + 1 per non partire da 0
        let num = i + 1;

        //Creare elemento div con createElement
        const divCellElement = document.createElement("div");

        //dargli classe "cell" e stile larghezza per il suo lato
        divCellElement.classList.add("cell");
        divCellElement.style.width = `calc(100% / ${gridSide}`;

        //inserire numero in elemento
        divCellElement.innerHTML = `${num}`
        //console.log(divCellElement);

        //inserire in elemento griglia con append
        gridElement.append(divCellElement);

        //Aggiungere un event listener all'elemento div cella

        divCellElement.addEventListener("click", function(){

            //aggiungi classe bg-dark a elemento cella 
            //(toggle per aggiungerlo e toglierlo al click)
            divCellElement.classList.toggle("bg-dark");

            console.log(num);

        })
    }
}


/*ESERCIZIO:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
ATTENZIONE: nell’array delle bombe non potranno esserci due numeri uguali.*/

//creare array vuoto bombe

//fare funzione con numero celle in ingresso
//finché array è < 16, generare numero casuale tra 1 e (numero celle). 
//SE numero non è incluso in array bombe, allora lo pusho nell'array.

/*ESERCIZIO:
In seguito l’utente clicca su una cella:
se il numero è presente nella lista dei numeri generati,
la cella si colora di rosso.
Altrimenti la cella cliccata si colora di azzurro 
e l’utente può continuare a cliccare sulle altre celle.*/

//in eventlistener del cell element:

//SE num è incluso in array bombe, allora aggiungi classe bg-red (da fare in CSS),

//ALTRIMENTI aggiungo la classe bg-dark

/*ESERCIZIO:
La partita termina quando il giocatore clicca su una bomba 
o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

//creare sezione in HTML dove inserire risultato e punteggio

//dichiaro variabile punteggio selezionando tutti elementi con classe bg-dark e trovando la length

//SE num è incluso in array bombe, (oltre a dare classe bg)
//metto anche in innerHTML della nuova sezione "Hai perso, il tuo punteggio è (variabile punteggio)"

































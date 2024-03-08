/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice? Questo ciclo for ripete le istruzioni 5 volte
    2- Sono presenti errori di sintassi? no
    3- Sono presenti errori logici? si la condizione è sbagliata

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

*******************************************************************************/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice? se il numero è pari ritorna il numero più 5
    2- Sono presenti errori di sintassi? si, non è un assegnazione ma una condizione quindi vanno messi due uguali
    3- Sono presenti errori logici? no

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio
    function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}

*******************************************************************************/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice? cicla per cinque volte e stampa la variabile i 
    2- Sono presenti errori di sintassi? si, non vanno messe le ',' ma i ';' per dividere le istruzioni nel for
    3- Sono presenti errori logici? no

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

    function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
*******************************************************************************/



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice? cicla il tutta la lunghezza dell'array, e pusha in un array di appoggio tutti i numeri pari
    2- Sono presenti errori di sintassi? si, i due array vanno dichiarati in const non in let, il punto e virgola dopo l'incremento del contatore nel ciclo for.
    nella condizione numbers va controllato con l'indice, nella condizione vanno due uguali non uno, non è un assegnazione.
    dopo l'if c'è un punto e virgola di troppo, nel push va messo numbers[i], non i e basta.
    3- Sono presenti errori logici? si, il return va messo fuori dal for non dentro. nella condizione non va il -1

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio
    function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
*******************************************************************************/

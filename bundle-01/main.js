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
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

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
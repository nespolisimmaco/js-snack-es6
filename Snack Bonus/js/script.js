// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const numbers = [3, 67, 10, 85, 38, 47, 6, 77];
console.log(numbers);
const newNumbersArray = getSubArray(numbers, 1, 5);
console.log(newNumbersArray);

function getSubArray(numbersArray, min, max) {
    const numbersRange = numbersArray.filter((num, index) => index >= min && index <= max);
    return numbersRange;
}
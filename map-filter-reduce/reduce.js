// Baseado no array original,
// reduzir o array a outro tipo de dado
// objeto literal, string, número ou array
// output não necessariamente é um array

// Ex: soma de todos os números de um array
// reduzir o array a um único número

const numbers = [1, 2, 3];
// Primeira execução:
// accumulator <- 0
// item <- numbers[0]
const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(sumResult);

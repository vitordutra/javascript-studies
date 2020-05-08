// Filter -> baseada em uma condição, obter um novo array, com alguns itens do array original
// Preenche um array com elementos do outro, cuja condicional retornar true

const randomNumbers = [36, 99, 37, 63];

// number => true retorna todos os valores do array original, porque todos os elementos cumprem a condição
const numbersGreaterThan37 = randomNumbers.filter((number) => number > 37);

console.log(numbersGreaterThan37);

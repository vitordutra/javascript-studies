const products = [
  { name: "Mouse Sem Fio", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

const saleProducts = products.map((product) => {
  if (product.price >= 30) {
    // Produz side-effect: modifica o valor do array original
    product.price = product.price / 2;
  }

  return product;
});

console.log(saleProducts);
console.log(products);

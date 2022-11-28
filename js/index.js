// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input')
  const sumOfQuantity = quantity.value
  const multiplication = +sumOfQuantity * price
  const total = product.querySelector('.subtotal span')
  total.innerHTML = multiplication

  console.log(multiplication)
}

function calculateAll() {
  

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  const totPrice = document.getElementsByClassName('.price span').innerHTML
  const totQuantity = document.getElementsByClassName('.quantity input')
  const totSumOfQuantity = totQuantity.value
  const totMultiplication = +totSumOfQuantity * totPrice
  const totTotal = document.getElementsByClassName('.subtotal span')
  totTotal.innerHTML = totMultiplication
}

  // ITERATION 3
  //... your code goes here
totSum = multiplication+totMultiplication

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

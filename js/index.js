// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');
  const calculatedSubTotal = price * quantity;

  subTotal.innerText = calculatedSubTotal;
  return parseFloat(subTotal.innerHTML);
}

function calculateAll() {
  // ITERATION 2

  const products = document.getElementsByClassName('product');
  let total = 0;
  for (let product of products) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
}

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

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
  const totalValue = document.getElementById('total-value');
  return (totalValue.innerHTML = total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parentElement = target.parentNode.parentNode.parentNode;

  parentElement.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productNameValue = document.querySelector(
    '.create-product input[type=text]'
  ).value;

  const unitPriceValue = document.querySelector(
    '.create-product input[type=number]'
  ).value;

  const quantityValue = document.querySelector('.quantity input[type=number]');

  if (productNameValue !== '') {
    let product = document.querySelector('.product').cloneNode(true);
    let newProduct = document
      .getElementById('parentTable')
      .appendChild(product);
    quantityValue.innerHTML = 0;
    newProduct.querySelector('.name span').innerText = productNameValue;
    newProduct.querySelector('.price span').innerText = unitPriceValue;
  } else {
    return alert('You must provide a product name');
  }
  /* not sure why this does not work*/
  // productNameValue.innerText = '';

  /*I am still trying to figure out how to make the Remove button work on the cloned products*/
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }

  const createproductButton = document.querySelector('#create');
  createproductButton.addEventListener('click', createProduct);
});

const addButton = document.querySelector('#addButton');
const cartCount = document.querySelector('#cartCount');
const cartButton = document.querySelector('#cartButton');
const productImage = document.querySelector('.image-slot img');
let count = 0;
addButton.addEventListener('click', () => { count += 1; cartCount.textContent = count; addButton.innerHTML = 'Added to bag <span>✓</span>'; });
cartButton.addEventListener('click', () => alert(`${count} pair${count === 1 ? '' : 's'} in your bag`));
productImage.addEventListener('error', () => productImage.remove());

// cart.js – poprawiona wersja z obsługą zdjęcia

document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.pizza-card');
    const name = card.querySelector('.pizza-name')?.textContent || 'Unknown';
    const price = parseFloat(card.querySelector('.pizza-price')?.textContent.replace('£', '') || '0');
    const img = card.querySelector('.pizza-img')?.src || '';
    const item = { name, price, img };

    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(item);
    sessionStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
    alert(`${name} added to cart!`);
  });
});

function updateCartCount() {
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  const count = cart.length;
  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) {
    cartIcon.setAttribute('data-count', count);
  }
}

updateCartCount();
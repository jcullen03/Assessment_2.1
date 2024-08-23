// Hover effect for displaying description
document.querySelectorAll('.gallery-item').forEach(item => {
    const description = item.querySelector('.description');
    const descText = item.getAttribute('data-description');

    item.addEventListener('mouseover', () => {
        description.textContent = descText;
    });

    item.addEventListener('mouseout', () => {
        description.textContent = '';
    });
});

// Modal and Add to Cart functionality
const shopItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('item-modal');
const modalImage = document.getElementById('modal-image');
const modalItemName = document.getElementById('modal-item-name');
const modalItemPrice = document.getElementById('modal-item-price');
const addToCartButton = document.getElementById('add-to-cart');
let cart = [];

// Open modal when item is clicked
shopItems.forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.getAttribute('data-name');
        const itemPrice = item.getAttribute('data-price');
        const itemImageSrc = item.querySelector('img').getAttribute('src');

        modalImage.setAttribute('src', itemImageSrc);
        modalItemName.textContent = itemName;
        modalItemPrice.textContent = `$${itemPrice}`;

        modal.style.display = 'flex';
    });
});

// Close modal
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.getElementById('cart-modal').style.display = 'none'; // Close cart modal
    });
});

// Add item to cart
addToCartButton.addEventListener('click', () => {
    const itemName = modalItemName.textContent;
    const itemPrice = modalItemPrice.textContent.replace('$', '');
    cart.push({ name: itemName, price: parseFloat(itemPrice) });
    alert(`${itemName} has been added to your cart!`);
    modal.style.display = 'none';
    displayCartItems();
});

// Display items in the cart
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = cart.map(item => `
        <p>${item.name} - $${item.price}</p>
    `).join('');
}

// Cart icon toggle dropdown
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');
cartIcon.addEventListener('click', () => {
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
});

// Full cart modal
document.getElementById('view-full-cart').addEventListener('click', () => {
    const fullCartModal = document.getElementById('cart-modal');
    const fullCartItemsContainer = document.getElementById('full-cart-items');
    fullCartItemsContainer.innerHTML = cart.map(item => `
        <p>${item.name} - $${item.price}</p>
    `).join('');
    fullCartModal.style.display = 'flex';
});

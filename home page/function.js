function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow.style.display === 'none' || !chatWindow.style.display) {
        chatWindow.style.display = 'flex';
    } else {
        chatWindow.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        const chatBody = document.querySelector('.chatbot-body');
        const userMessage = document.createElement('p');
        userMessage.textContent = message;
        userMessage.style.textAlign = 'right';
        chatBody.appendChild(userMessage);
        input.value = ''; // Clear the input
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom
    }
}

// Add event listener to trigger sendMessage when Enter is pressed
document.getElementById('chatInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault(); // Prevent default form submission behavior
    }
});

// Cart shopping sound
const buttons = document.querySelectorAll('.soundButton');
const audio = document.getElementById('buttonSound');
const cartNumber = document.querySelector('body > header > div.header-container > div > nav > ul > li:nth-child(5) > a > i')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        audio.currentTime = 0; 
        audio.play(); 
        cartNumber.textContent = (Number(cartNumber.textContent) + 1)
    });
});

document.querySelector('.remove-btn').addEventListener('click', () => {
    cartNumber.textContent = (Number(cartNumber.textContent) + 1)
})

// Microphone sound
const micButton = document.getElementById('microphoneButton');
const micAudio = document.getElementById('microphoneSound');
micButton.addEventListener('click', () => {
    micAudio.currentTime = 0; 
    micAudio.play(); 
});



function removeProduct(button) {
    const productElement = button.closest('.my-product');
    if (productElement) {
        productElement.remove();
        updateCartSummary();
    }
}
function updateTotal(element) {
    const product = element.closest('.my-product');
    const price = parseFloat(product.getAttribute('data-price'));
    const quantity = parseInt(element.value);
    product.setAttribute('data-quantity', quantity);
    calculateTotal();
}

function removeProduct(button) {
    const product = button.closest('.my-product');
    product.remove();
    calculateTotal();
}

function calculateTotal() {
    const products = document.querySelectorAll('.my-product');
    let total = 0;
    products.forEach(product => {
        const price = parseFloat(product.getAttribute('data-price'));
        const quantity = parseInt(product.getAttribute('data-quantity'));
        total += price * quantity;
    });
    document.getElementById('total-price').innerText = `$${total.toFixed(2)}`;
}

calculateTotal();


const card = document.querySelector('.card');

card.addEventListener('click', () => {
    window.open('../single-product/index.html', '_self');
});
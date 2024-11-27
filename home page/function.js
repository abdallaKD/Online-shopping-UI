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

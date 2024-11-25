function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    if (chatPopup.style.display === 'flex') {
        chatPopup.style.display = 'none'; // Hide the popup
    } else {
        chatPopup.style.display = 'flex'; // Show the popup with flex layout
    }
}
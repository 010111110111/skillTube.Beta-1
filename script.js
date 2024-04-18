const chatArea = document.getElementById('chat-area');
const messageInput = document.getElementById('message-input');

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        appendMessage('You', message);
        messageInput.value = '';
        // Send the message to the server (not implemented in this example)
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatArea.appendChild(messageElement);
    // Scroll to the bottom of the chat area
    chatArea.scrollTop = chatArea.scrollHeight;
}

document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.querySelector('.chatbox');
    const chatToggle = document.getElementById('chat-toggle');
    const closeButton = document.getElementById('close-btn');
    const sendButton = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');

    chatToggle.addEventListener('click', function() {
        chatbox.classList.toggle('show');
    });

    closeButton.addEventListener('click', function() {
        chatbox.classList.remove('show');
    });

    sendButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            // Redirect to WhatsApp with the message
            window.location.href = `https://wa.me/919330614054?text=${encodeURIComponent(message)}`;
            chatInput.value = ''; // Clear input after sending
        }
    });
});

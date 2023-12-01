
    document.addEventListener("DOMContentLoaded", function () {
        // Initial welcome message
        appendMessage("bot", "Hello! How can I help you today?");
    });

    function sendMessage() {
        var userInput = document.getElementById("user-input").value;
        if (userInput.trim() !== "") {
            appendMessage("user", userInput);
            processUserInput(userInput);
            document.getElementById("user-input").value = "";
        }
    }

    function appendMessage(sender, message) {
        var chatBox = document.getElementById("chat-box");
        var newMessage = document.createElement("div");
        newMessage.className = sender;
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function processUserInput(userInput) {
        // Basic rule-based responses
        var response;
        if (userInput.toLowerCase().includes("hello")) {
            response = "Hi there! How can I assist you?";
        } else if (userInput.toLowerCase().includes("how are you")) {
            response = "I'm just a computer program, but I'm functioning well. Thanks for asking!";
        } else {
            response = "I'm sorry, I didn't understand that. Can you please rephrase?";
        }

        // Display the bot's response
        appendMessage("bot", response);
    }

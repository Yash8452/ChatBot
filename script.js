function sendMessage() {
    var userInput = document.getElementById("user-input").value;
 
    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        
        if (userInput === "hey") {
          setTimeout(greetUser, 500);
        } else {
          setTimeout(respondToUser, 500);
        }
        
        document.getElementById("user-input").value = "";
      }
    
  }
  
  function greetUser() {
    var greeting = "Hey there! How can I help you?";
    addBotMessage(greeting);
    // To continue the convo after the greeting you might add more functionality here
  }

  function respondToUser() {
    var botResponse = generateBotResponse();
    addBotMessage(botResponse);
  }
  
  function generateBotResponse() {
    var responses = [
      "Yes, absolutely!",
      "No, sorry.",
      "I'm not sure, could you ask differently?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  function addUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var userBubble = document.createElement("div");
    userBubble.classList.add("user-message");
    userBubble.textContent = "User: " + message;
    chatBox.appendChild(userBubble);
  }
  
  function addBotMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var botBubble = document.createElement("div");
    botBubble.classList.add("bot-message");
    botBubble.textContent = "Bot: " + message;
    chatBox.appendChild(botBubble);
  }
  
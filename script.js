document.addEventListener("DOMContentLoaded", function () {
  const chatWindow = document.getElementById("chat-window");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function handleUserInput() {
    const input = userInput.value.trim();
    if (input === "") return;

    addMessage(input, "user");

    let response;
    if (
      input.toLowerCase().includes("tijd") ||
      input.toLowerCase().includes("time")
    ) {
      response = `Het is nu ${getCurrentTime()}.`;
    } else {
      response = "Sorry, ik begrijp alleen vragen over de tijd op dit moment.";
    }

    setTimeout(() => addMessage(response, "sheep"), 500);

    userInput.value = "";
  }

  sendButton.addEventListener("click", handleUserInput);
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleUserInput();
    }
  });
});

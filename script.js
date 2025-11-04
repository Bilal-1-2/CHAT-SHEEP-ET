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
    const lowerInput = input.toLowerCase();
    if (
      lowerInput.includes("tijd") ||
      lowerInput.includes("time") ||
      lowerInput.includes("hoe laat")
    ) {
      response = `Het is nu ${getCurrentTime()}.`;
    } else if (
      lowerInput.includes("datum") ||
      lowerInput.includes("date") ||
      lowerInput.includes("welke dag")
    ) {
      const now = new Date();
      const date = now.toLocaleDateString("nl-NL");
      response = `Het is vandaag ${date}.`;
    } else if (lowerInput.includes("weer") || lowerInput.includes("weather")) {
      response = "Het weer is altijd mooi bij mij op de wei! ☀️";
    } else if (
      lowerInput.includes("hallo") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      response = "Hallo! Wat kan ik voor je doen?";
    } else {
      response =
        "Sorry, ik begrijp alleen vragen over tijd, datum, weer of groeten op dit moment.";
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
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

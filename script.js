document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "yes.html";
});

let noButton = document.getElementById("noButton");
let container = document.querySelector(".container");

// Create the popup
let popup = document.createElement("div");
popup.classList.add("popup");
document.body.appendChild(popup);

let messages = [
    "Think about this eyann ",
    "Come on, pick Yes eyaa ",
    "This button right here! ",
    "Bruh, stop playing ",
    "Just click Yes already ",
    "Eyaannnn! ",
    "God damn girll "
];

let messageIndex = 0; // Track the current message index

function showPopup() {
    let yesButton = document.getElementById("yesButton");
    let rect = yesButton.getBoundingClientRect();

    popup.innerText = messages[messageIndex]; // Show the current message
    messageIndex = (messageIndex + 1) % messages.length; // Move to the next message (loops back to 0)

    popup.style.left = `${rect.left + rect.width / 2}px`;
    popup.style.top = `${rect.top - 40}px`;
    popup.style.display = "block";
    popup.style.opacity = "1";

    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => popup.style.display = "none", 500);
    }, 2500); // Popup stays for 2.5 seconds
}

function moveNoButton() {
    let maxX = container.clientWidth - noButton.offsetWidth;
    let maxY = container.clientHeight - noButton.offsetHeight;

    let newX = Math.random() * maxX;
    let newY = Math.random() * (maxY - 50) + 50;

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

// Attach event listeners for PC (hover) and Mobile (touch)
noButton.addEventListener("mouseover", () => {
    showPopup();
    moveNoButton();
});

noButton.addEventListener("click", () => {
    showPopup();
    moveNoButton();
});

noButton.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevents weird double taps
    showPopup();
    moveNoButton();
});

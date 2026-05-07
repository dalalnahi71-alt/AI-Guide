const texts = [
  "Hello 👋",
  "I'm Dalal",
  "Future Cloud Engineer ☁️",
  "Welcome to my portfolio"
];

let index = 0;
const intro=document.getElementById("intro");

function changeText() {
  

  intro.style.opacity = 0; // fade out

  setTimeout(() => {
    index = (index + 1) % texts.length;
    intro.textContent = texts[index];
    intro.style.opacity = 1; // fade in
  }, 500);
}

// change text every 5 seconds
setInterval(changeText, 5000);
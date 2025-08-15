let score = 0;
let currentEquation = {};
const motivations = [
  "Keep going, genius! 💡",
  "Mistakes help us grow! 🌱",
  "You're learning fast! 📘",
  "Great minds never quit! 🧠",
  "Try again, you got this! 💪",
  "Even Al-Khwarizmi failed first!",
  "Champions never stop! 🏆"
];

function generateEquation() {
  let a = Math.floor(Math.random() * 10) + 1;
  let x = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10);
  let result = a * x + b;

  currentEquation = { a, b, x, result };
  document.getElementById("equation").innerText = `Solve for x: ${a}x + ${b} = ${result}`;
  document.getElementById("answer").value = '';
  document.getElementById("message").innerText = '';
  document.getElementById("motivation").innerText = '';
  document.getElementById("message").className = "message";
}

function checkAnswer() {
  const input = document.getElementById("answer").value.trim();
  const messageBox = document.getElementById("message");
  const motivationBox = document.getElementById("motivation");

  if (input === "") return;

  const userAnswer = parseInt(input);

  if (userAnswer === currentEquation.x) {
    messageBox.innerText = "✅ Correct! You're a math wizard!";
    messageBox.classList.add("correct");
    motivationBox.innerText = "";
    score++;
  } else {
    messageBox.innerText = `❌ Not quite! The correct answer was ${currentEquation.x}`;
    messageBox.classList.add("wrong");
    const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
    motivationBox.innerText = randomMotivation;
    score = Math.max(0, score - 1);
  }

  document.getElementById("score").innerText = score;
  setTimeout(generateEquation, 2500);
}

window.onload = generateEquation;

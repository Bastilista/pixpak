// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Terminal typing effect
const commands = [
  { cmd: "git clone https://github.com/you/yourproject.git", out: "Cloning into 'yourproject'... done." },
  { cmd: "cd yourproject && npx serve .", out: "Serving on http://localhost:3000" }
];

const typedLine = document.getElementById("typed-line");
const typedOut = document.getElementById("typed-out");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

async function typeText(el, text, speed = 28) {
  el.textContent = "";
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i];
    await new Promise((r) => setTimeout(r, speed));
  }
}

async function runTypingLoop() {
  if (!typedLine) return;
  if (prefersReducedMotion) {
    typedLine.textContent = commands[0].cmd;
    typedOut.textContent = commands[0].out;
    return;
  }
  let i = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { cmd, out } = commands[i % commands.length];
    typedOut.textContent = "";
    await typeText(typedLine, cmd);
    await new Promise((r) => setTimeout(r, 300));
    typedOut.textContent = out;
    await new Promise((r) => setTimeout(r, 2200));
    typedLine.textContent = "";
    await new Promise((r) => setTimeout(r, 400));
    i++;
  }
}

runTypingLoop();

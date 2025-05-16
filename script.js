let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// Light/Dark mode toggle
function toggleTheme() {
  const isChecked = document.getElementById('themeToggle').checked;
  document.body.className = isChecked ? 'dark-mode' : 'light-mode';
}

// Set default to light mode
window.onload = () => {
  document.body.classList.add('light-mode');
};

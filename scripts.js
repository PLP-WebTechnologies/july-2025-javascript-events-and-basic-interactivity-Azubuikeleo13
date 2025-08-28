// 🌗 Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

// 🎮 Counter with localStorage
let clickCount = localStorage.getItem("clickCount")
  ? parseInt(localStorage.getItem("clickCount"))
  : 0;
const counterOutput = document.getElementById("counterOutput");
counterOutput.textContent = `Clicked ${clickCount} times`;

document.getElementById("countBtn").addEventListener("click", () => {
  clickCount++;
  counterOutput.textContent = `Clicked ${clickCount} times`;
  localStorage.setItem("clickCount", clickCount);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clickCount = 0;
  counterOutput.textContent = `Clicked 0 times`;
  localStorage.setItem("clickCount", 0);
});

// ❓ FAQ Toggle
document.querySelector(".faq-toggle").addEventListener("click", () => {
  document.querySelector(".faq-answer").classList.toggle("hidden");
});

// 🗂️ Tabbed Interface
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

// 📋 Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  clearErrors();
  let hasError = false;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name === "") {
    setError("nameError", "Name is required.");
    hasError = true;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setError("emailError", "Enter a valid email.");
    hasError = true;
  }

  if (password.length < 6) {
    setError("passwordError", "Password must be at least 6 characters.");
    hasError = true;
  }

  if (!hasError) {
    document.getElementById("formSuccess").textContent = "🎉 Signup successful!";
    this.reset();
    document.getElementById("charCount").textContent = "0 / 30";
  }
});

function setError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  setError("nameError", "");
  setError("emailError", "");
  setError("passwordError", "");
  document.getElementById("formSuccess").textContent = "";
}

// ✏️ Live Character Counter
const nameInput = document.getElementById("name");
const charCount = document.getElementById("charCount");

nameInput.addEventListener("input", () => {
  charCount.textContent = `${nameInput.value.length} / 30`;
});

// 🎹 Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (key === "t") {
    document.getElementById("themeToggle").click();
  }

  if (key === "c") {
    document.getElementById("countBtn").click();
  }

  if (key === "r") {
    document.getElementById("resetBtn").click();
  }
});

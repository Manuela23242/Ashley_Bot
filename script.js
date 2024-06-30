// JavaScript um sicherzustellen, dass der Dark Mode beim Laden der Seite aktiviert ist
document.addEventListener("DOMContentLoaded", function() {
    var body = document.body;
    var modeIcon = document.getElementById("mode-icon");
    
    if (localStorage.getItem("mode") === "dark") {
      body.classList.add("dark-mode");
      modeIcon.textContent = "🌛"; // Setze das Icon zu 🌛 für Dark Mode
    } else {
      body.classList.remove("dark-mode");
      modeIcon.textContent = "🌞"; // Setze das Icon zu 🌞 für Light Mode
    }
  });
  
  function toggleDarkMode() {
    var body = document.body;
    var modeIcon = document.getElementById("mode-icon");
    
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
      modeIcon.textContent = "🌛"; // Ändere das Icon zu 🌛 für Dark Mode
      localStorage.setItem("mode", "dark"); // Speichere den Modus in localStorage
    } else {
      modeIcon.textContent = "🌞"; // Ändere das Icon zu 🌞 für Light Mode
      localStorage.setItem("mode", "light"); // Speichere den Modus in localStorage
    }
  }
  
document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
  const toggleButton = document.getElementById("mode-toggle");
  const toggleIcon = toggleButton.querySelector(".toggle-icon");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add("light-mode");
    if (toggleIcon) toggleIcon.textContent = "☀️";
  }

  // Toggle theme when button is clicked
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    // Update button icon based on current mode
    if (document.body.classList.contains("light-mode")) {
      if (toggleIcon) toggleIcon.textContent = "☀️";
      localStorage.setItem('theme', 'light');
    } else {
      if (toggleIcon) toggleIcon.textContent = "🌙";
      localStorage.setItem('theme', 'dark');
    }
  });
});
=======
    const toggleButton = document.getElementById("mode-toggle");
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add("light-mode");
      toggleButton.textContent = "Light Mode ☀️";
    }
    
    // Toggle theme when button is clicked
    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
      
      // Update button text based on current mode
      if (document.body.classList.contains("light-mode")) {
        toggleButton.textContent = "Light Mode ☀️";
        localStorage.setItem('theme', 'light');
      } else {
        toggleButton.textContent = "Dark Mode 🌙";
        localStorage.setItem('theme', 'dark');
      }
    });
  });
>>>>>>> 05bcd4224e6648901d30b5fa940b287a11bf27a7

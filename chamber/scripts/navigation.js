// Get elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul"); // Select the <ul> inside <nav>

// Toggle navigation menu when hamburger is clicked
hamburger.addEventListener("click", () => {
  // Toggle the 'open' class on the ul
  navMenu.classList.toggle("open");

  // Change hamburger icon to "X" when menu is open, and back to hamburger when closed
  if (navMenu.classList.contains("open")) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>'; // "X" icon
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
  }
});

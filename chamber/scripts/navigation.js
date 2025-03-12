// Get elements
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

// Toggle navigation menu when hamburger is clicked
hamburger.addEventListener("click", () => {
  // Toggle the 'open' class on the nav menu to show/hide it
  navMenu.classList.toggle("open");

  // Change hamburger icon to "X" when menu is open, and back to hamburger when closed
  if (navMenu.classList.contains("open")) {
    hamburger.innerHTML = "&#10005;"; // "X" icon to close the menu
  } else {
    hamburger.innerHTML = "&#9776;"; // Hamburger icon to open the menu
  }
});

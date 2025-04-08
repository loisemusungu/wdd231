document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const navLinks = document.getElementById("nav-links");
  const menuIcon = document.getElementById("menu-icon");

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Toggle the "X" icon
    if (navLinks.classList.contains("active")) {
      menuIcon.textContent = "✕"; // Change to "X"
    } else {
      menuIcon.textContent = "☰"; // Change back to hamburger
    }
  });
});

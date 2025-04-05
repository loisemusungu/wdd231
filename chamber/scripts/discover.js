// ---------- Visit Message ----------
const messageContainer = document.getElementById("visit-message");

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageContainer.textContent =
    "Welcome! Let us know if you have any questions.";
} else {
  const daysDifference = Math.floor((now - lastVisit) / MILLISECONDS_IN_A_DAY);
  if (daysDifference < 1) {
    messageContainer.textContent = "Back so soon! Awesome!";
  } else if (daysDifference === 1) {
    messageContainer.textContent = "You last visited 1 day ago.";
  } else {
    messageContainer.textContent = `You last visited ${daysDifference} days ago.`;
  }
}

// Save current visit to localStorage
localStorage.setItem("lastVisit", now);

// ---------- Load Cards from JSON ----------
const cardsContainer = document.getElementById("items-container");

fetch("scripts/discover.json")
  .then((response) => response.json())
  .then((data) => {
    // Define the grid-template-areas dynamically
    const gridAreas = [];
    data.items.forEach((item, index) => {
      gridAreas.push(`card${index + 1}`);
    });

    // Set the grid-template-areas style dynamically
    cardsContainer.style.gridTemplateAreas = `"${gridAreas.join(" ")}"`;

    // Create cards for each item
    data.items.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.gridArea = `card${index + 1}`; // Assign each card a unique grid area

      card.innerHTML = `
        <h2 class="card-title">${item.name}</h2>
        <figure class="card-image">
          <img src="images/${item.image}" alt="${item.name}" width="300" height="200" loading="lazy">
        </figure>
        <p class="card-description">${item.description}</p>
        <address class="card-address">${item.address}</address>
        <button class="card-button">Learn More</button>
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON data:", error);
    cardsContainer.innerHTML =
      "<p>Sorry, failed to load content. Please try again later.</p>";
  });

// Get the current date and time
const currentDate = new Date();
const lastVisitDate = localStorage.getItem("lastVisitDate");

// Calculate the time difference between the current visit and the last visit
if (lastVisitDate) {
  const lastVisit = new Date(parseInt(lastVisitDate));
  const diffTime = currentDate - lastVisit;
  const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

  let visitorMessage = "";
  if (diffDays === 0) {
    visitorMessage = "Back so soon! Awesome!";
  } else if (diffDays === 1) {
    visitorMessage = `You last visited 1 day ago.`;
  } else if (diffDays > 1) {
    visitorMessage = `You last visited ${diffDays} days ago.`;
  }
  document.getElementById("visit-message").innerText = visitorMessage; // Updated ID here
} else {
  document.getElementById("visit-message").innerText =
    "Welcome! Let us know if you have any questions.";
}

// Store the current date as the last visit date
localStorage.setItem("lastVisitDate", currentDate.getTime());

// Fetch and display the items of interest from the JSON file
fetch("scripts/discover.json")
  .then((response) => response.json())
  .then((data) => {
    const itemsGrid = document.getElementById("items-grid");
    data.items.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="images/${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
      itemsGrid.appendChild(card);
    });
  })
  .catch((error) => console.error("Error loading items:", error));

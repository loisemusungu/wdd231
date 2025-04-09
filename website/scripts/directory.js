document.addEventListener("DOMContentLoaded", () => {
  fetch("scripts/clubs.json")
    .then((response) => response.json())
    .then((data) => {
      const clubList = document.getElementById("club-list");
      data.forEach((club) => {
        const card = document.createElement("div");
        card.classList.add("club-card");

        card.innerHTML = `
          <h3>${club.name}</h3>
          <p><strong>Location:</strong> ${club.location}</p>
          <p><strong>Meeting:</strong> ${club.meeting_schedule}</p>
          <p><strong>Contact:</strong> <a href="mailto:${club.contact}">${club.contact}</a></p>
        `;

        clubList.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Failed to load clubs:", error);
    });
});

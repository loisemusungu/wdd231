document.addEventListener("DOMContentLoaded", () => {
  fetch("scripts/clubs.json")
    .then((response) => response.json())
    .then((data) => {
      const clubList = document.getElementById("club-list");

      data.forEach((club, index) => {
        const card = document.createElement("div");
        card.classList.add("club-card");

        card.innerHTML = `
          <img src="${club.image}" alt="${club.name} logo or photo" class="club-image" loading="lazy">
          <h3>${club.name}</h3>
          <p><strong>Location:</strong> ${club.location}</p>
          <p><strong>Meeting:</strong> ${club.meeting_schedule}</p>
          <p><strong>Contact:</strong> <a href="mailto:${club.contact}">${club.contact}</a></p>
          <button class="learn-more" data-index="${index}">Learn More</button>
        `;

        clubList.appendChild(card);
      });

      // Modal Logic
      const modal = document.getElementById("modal");
      const modalTitle = document.getElementById("modal-title");
      const modalLocation = document.getElementById("modal-location");
      const modalSchedule = document.getElementById("modal-schedule");
      const modalContact = document.getElementById("modal-contact");
      const modalImage = document.getElementById("modal-image");
      const closeButton = document.querySelector(".close-button");

      document.querySelectorAll(".learn-more").forEach((button) => {
        button.addEventListener("click", () => {
          const club = data[button.dataset.index];
          modalTitle.textContent = club.name;
          modalLocation.textContent = `Location: ${club.location}`;
          modalSchedule.textContent = `Meeting Schedule: ${club.meeting_schedule}`;
          modalContact.innerHTML = `Contact: <a href="mailto:${club.contact}">${club.contact}</a>`;
          modalImage.src = club.image;
          modalImage.alt = club.name;

          modal.classList.remove("hidden");
        });
      });

      closeButton.addEventListener("click", () => {
        modal.classList.add("hidden");
      });

      // Optional: Close modal when clicking outside the content
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.add("hidden");
        }
      });
    })
    .catch((error) => {
      console.error("Failed to load clubs:", error);
    });
});

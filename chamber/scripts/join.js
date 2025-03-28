document.addEventListener("DOMContentLoaded", function () {
  // Membership card animation with slide-in effect
  const membershipCards = document.querySelectorAll(".membership-cards .card");

  membershipCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = `translateX(${index % 2 === 0 ? "-50px" : "50px"})`;
    card.style.transition =
      "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateX(0)";
    }, index * 300); // Staggered delay for better effect
  });

  // Modal functionality
  const modals = document.querySelectorAll(".modal");
  const openButtons = document.querySelectorAll("[data-bs-toggle='modal']");
  const closeButtons = document.querySelectorAll(".modal .close");

  openButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const targetModal = document.querySelector(this.dataset.bsTarget);
      if (targetModal) {
        targetModal.style.display = "block";
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", function (event) {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  // Timestamp for form submission
  document.getElementById("timestamp").value = new Date().toISOString();
});

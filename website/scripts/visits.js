document.addEventListener("DOMContentLoaded", () => {
  const visitCountDisplay = document.getElementById("visit-count");

  let visits = Number(localStorage.getItem("directoryVisits")) || 0;
  visits += 1;

  localStorage.setItem("directoryVisits", visits);

  visitCountDisplay.textContent = `You have visited this page ${visits} time${
    visits === 1 ? "" : "s"
  }.`;
});

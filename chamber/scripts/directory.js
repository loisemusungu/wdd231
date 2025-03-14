async function fetchMemberData() {
  try {
    // Fetch the JSON data
    const response = await fetch("./scripts/members.json");

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const members = await response.json();

    // Get the directory container to insert content into
    const container = document.getElementById("directory-container");

    // Loop through each member and create flashcards
    members.forEach((member) => {
      // Create a div for each flashcard
      const flashcard = document.createElement("div");
      flashcard.classList.add("flashcard"); // Add a class for styling

      // Add the front of the flashcard (e.g., name, image)
      flashcard.innerHTML = `
          <h3>${member.name}</h3>
          <img src="${member.image}" alt="${member.name}" />
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${
            member.website
          }" target="_blank">${member.website}</a></p>
          <p><strong>Membership Level:</strong> ${
            member.membership_level === 3
              ? "Gold"
              : member.membership_level === 2
              ? "Silver"
              : "Member"
          }</p>
      `;

      // Append the flashcard to the container
      container.appendChild(flashcard);
    });
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

// Call the function to fetch and display data when the page loads
fetchMemberData();

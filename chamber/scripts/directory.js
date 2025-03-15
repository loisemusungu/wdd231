// Asynchronous function to fetch and populate the business directory
async function populateBusinessDirectory() {
  try {
    // Fetch the JSON data from the local member.json file
    const response = await fetch("./scripts/members.json");

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response as JSON
    const businesses = await response.json();

    // Get the directory container element
    const directoryElement = document.querySelector(".directory");

    // Loop through each business in the JSON data
    businesses.forEach((business) => {
      // Create a new div for each business
      const businessDiv = document.createElement("div");
      businessDiv.classList.add("business");

      // Add the business header (name and tagline)
      const businessHeader = document.createElement("div");
      businessHeader.classList.add("business-header");
      const businessName = document.createElement("h3");
      businessName.textContent = business.name;
      const businessTagline = document.createElement("p");
      businessTagline.textContent = business.tagline;
      businessHeader.appendChild(businessName);
      businessHeader.appendChild(businessTagline);

      // Add the horizontal rule
      const hr = document.createElement("hr");

      // Add the business logo
      const businessLogo = document.createElement("div");
      businessLogo.classList.add("business-logo");
      const img = document.createElement("img");
      img.src = business.image;
      img.alt = `${business.name} Logo`;
      businessLogo.appendChild(img);

      // Add the business details (email, phone, URL)
      const businessDetails = document.createElement("div");
      businessDetails.classList.add("business-details");
      const email = document.createElement("p");
      email.innerHTML = `<span><strong>EMAIL: </strong></span><a href="mailto:${business.name
        .toLowerCase()
        .replace(/\s+/g, "")}@email.com">${business.name
        .toLowerCase()
        .replace(/\s+/g, "")}@email.com</a>`;
      const phone = document.createElement("p");
      phone.innerHTML = `<span><strong>PHONE: </strong></span>${business.phone}`;
      const website = document.createElement("p");
      website.innerHTML = `<span><strong>URL: </strong></span><a href="${business.website}" target="_blank">${business.website}</a>`;

      // Append everything to the business div
      businessDetails.appendChild(email);
      businessDetails.appendChild(phone);
      businessDetails.appendChild(website);

      businessDiv.appendChild(businessHeader);
      businessDiv.appendChild(hr);
      businessDiv.appendChild(businessLogo);
      businessDiv.appendChild(businessDetails);

      // Append the business div to the directory
      directoryElement.appendChild(businessDiv);
    });
  } catch (error) {
    // Handle any errors that occur during fetch or parsing
    console.error("Error fetching the JSON file:", error);
  }
}

// Call the function to populate the business directory
populateBusinessDirectory();

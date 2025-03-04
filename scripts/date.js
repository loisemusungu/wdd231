// Get and set the current year and last modified date
const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastmodifications");

if (yearElement) yearElement.textContent = new Date().getFullYear();
if (lastModifiedElement)
  lastModifiedElement.textContent = document.lastModified;

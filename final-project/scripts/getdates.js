const lastModifiedDate = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last Modification: ${lastModifiedDate}`;

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

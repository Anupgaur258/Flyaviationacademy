// Add your JavaScript code here, e.g., for animations or form submission handling
document
  .getElementById("admissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    showPopup();
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Add logic to handle contact form submission
  });

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

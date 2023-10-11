document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Add your form submission logic here
    // Example: You can send the form data to a server using fetch()
  });
});

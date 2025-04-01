document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-box.login form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Get user inputs (for now, we just check if fields are filled)
      const username = loginForm.querySelector("input[type='text']").value;
      const password = loginForm.querySelector("input[type='password']").value;
  
      if (username && password) {
        alert("Login Successful!");
        // Redirect to another page if needed:
        // window.location.href = "dashboard.html";
      } else {
        alert("Please enter valid credentials!");
      }
    });
  });
  

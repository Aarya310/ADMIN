
    // Get a reference to the logout button
    const logoutButton = document.getElementById("logout-button");

    // Add a click event listener to the logout button
    logoutButton.addEventListener("click", function() {
      // Clear any saved login credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      
      // Redirect the user to the login page
      window.location.href = "admin_logins.html";
    });
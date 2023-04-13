const searchInput = document.querySelector('input[placeholder="search"]');
const rows = document.querySelectorAll("table tbody tr");

searchInput.addEventListener("input", function(event) {
  const searchText = event.target.value.trim().toLowerCase();

  rows.forEach(row => {
    const name = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
    if (name.includes(searchText)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
  


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



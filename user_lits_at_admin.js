// // Get the input field and table
// var input = document.getElementById("myInput");
// var table = document.getElementById("myTable");

// // Add an event listener to the input field
// input.addEventListener("keyup", function() {

//   // Get the value of the input field and convert to lowercase
//   var filter = input.value.toLowerCase();

//   // Loop through all the rows in the table
//   for (var i = 1; i < table.rows.length; i++) {

//     // Get the name column value for the current row and convert to lowercase
//     var name = table.rows[i].cells[1].innerHTML.toLowerCase();

//     // If the name contains the filter value, show the row and move it to the top
//     if (name.indexOf(filter) > -1) {
//       table.rows[i].style.display = "";
//       table.insertBefore(table.rows[i], table.rows[1]);
//     } else {
//       table.rows[i].style.display = "none";
//     }
//   }
// });

// Get the input element
let input = document.getElementById("myInput");

// Add event listener to the input element
input.addEventListener("keyup", function() {
  // Get the value of the input
  let filter = input.value.toUpperCase();
  
  // Get the table body
  let tableBody = document.querySelector("#myUL tbody");
  
  // Get all rows in the table body
  let rows = tableBody.querySelectorAll("tr");
  
  // Loop through all rows and hide those that don't match the search query
  for (let i = 0; i < rows.length; i++) {
    let name = rows[i].getElementsByTagName("td")[1];
    if (name) {
      let nameValue = name.textContent || name.innerText;
      if (nameValue.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
});


    // Get a reference to the logout button
    const logoutButton = document.getElementById("logout-button1");

    // Add a click event listener to the logout button
    logoutButton.addEventListener("click", function() {
      // Clear any saved login credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      
      // Redirect the user to the login page
      window.location.href = "admin_logins.html";
    });
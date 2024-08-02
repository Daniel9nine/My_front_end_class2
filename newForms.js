document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); //Prevent the default form submission
  
    // validate the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    if (name === "" || email === "") {
      alert("Please fill in all fields.");
    } else {
      // Proceed with form submission
      alert("Form Submitted Successfully.");
    }
  });
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); //prevent default form submission
    //validaate the form
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');

    nameError.textContent = '';
    emailError.textContent = '';
    if (name === '') {
        nameError.textContent='Name is required';
    }

    if (email == '') {
        emailError.textContent ='Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent ="Email is Invaid";
    } 
    
    if (name !== "" && email !== "" && /\S+@\S+\.\S+/.test(email)) {
        alert('Form submitted successfully')
    }
    
    else {
        emailError.textContent=''; // clear any previous error messages
        //proceed with form submission
        alert('Form submitted successfully');
    }
    });
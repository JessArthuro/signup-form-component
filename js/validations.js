// Declaration of all constants
const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

// Function that generates the validation of the inputs
function checkInputs() {
    // Get the value of the inputs 
    const firstNameValue = firstName.value.trim(); // the trim() method removes whitescape at both ends of the string.
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // validation of first name
    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be empty');
    } else {
        setSuccessFor(firstName);
    }

    // validation of last name
    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be empty');
    } else {
        setSuccessFor(lastName);
    }

    // validation of email
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be empty');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email');
        email.value = '';
        email.placeholder = 'email@example/com';
        errorEmail(email);
    } else {
        setSuccessFor(email);
        email.placeholder = 'Email Address';
    }

    // validation of password
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else {
        setSuccessFor(password);
    }

}

// function to set an error
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.text-error');
    formControl.className = 'form-control error';
    small.innerText = message;
}

// function to set a success
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// function to set an error in mail
function errorEmail(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error-email';
}

// Function to verify if it is a valid email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


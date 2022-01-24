// save references for the form & input fields by using getElementById
const form = document.getElementById('submitForm');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password');


// use preventDefault() to prevent the form submitting automatically then instead of submitting i'll call the validateInputs function to validate the inputs
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


// use setError & setSuccess to to set the state of the input fields.
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


// use validateInputs to validate the input fields and call setError to provide it with element name and the error message
const validateInputs = () => {
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fNameValue === '') {
        setError(fName, 'First Name cannot be empty');
    } else {
        setSuccess(fName);
    }

    if(lNameValue === '') {
        setError(lName, 'Last Name cannot be empty');
    } else {
        setSuccess(lName);
    }

    if(emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    }
};
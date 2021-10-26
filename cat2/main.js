const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const chk = document.getElementById("choice-yes");
const url1=document.querySelector('#url');
const form = document.querySelector('#signup');
const age1 = document.querySelector('#age');
const brn = document.querySelector('#branch');
const clg = document.querySelector('#college');
const ph = document.querySelector('#phoone');
const state = document.querySelector('#state');
const addr = document.querySelector('#adress');



const checkAge =() => {

     let age = age1.value;
    let valid = false;
    age = parseInt(age,10);
    if (!isRequired(age)) {
        showError(age1, 'Age cannot be blank.');
    }else if (isNaN(age) || age < 1 || age > 100){
        showError(age1,'Age should not be less than 1 or more than 100');
    }
    else {
        showSuccess(age1);
        valid = true;
    }
    return valid;
};


const checkUsername = () => {
   
    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
        emailEl.disabled = true;
        showError(usernameEl,"First letter of the username must be uppercase!");
        emailEl.disabled = true;
    }
    else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`);
        emailEl.disabled = true;
    } else {
        showSuccess(usernameEl);
        valid = true;
        emailEl.disabled = false;
    return valid;
}};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
        brn.disabled = true;
       
        
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.');
        brn.disabled = true;
    } else {
        showSuccess(emailEl);
        brn.disabled = false;
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
        confirmPasswordEl.disabled = true;
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        confirmPasswordEl.disabled = true;
    } else {
        showSuccess(passwordEl);
        valid = true;
        confirmPasswordEl.disabled = false;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const checkTerms = () => {
    let valid = false;
    if (chk.checked === true) {
       showSuccess(chk);

       valid = true;
    } else {
        showError(chk,"Not Checked!");
    }
 return valid
};

const checkUrl = () => {
    let valid = false;
    const url = url1.value.trim();
    if (!isRequired(url)) {
        showError(url1, 'URL cannot be blank.');
    } else if (!isUrlValid(url)) {
        showError(url1, 'URL is not valid.')
    } else {
        showSuccess(url1);
        valid = true;
    }
    return valid;
};

 

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isUrlValid = (url) => {
    const re =/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    return re.test(url);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
const  isUsernameValid =(username) => {
    const re = /[A-Z]/;
    return re.test(username.charAt(0));
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
};

// function createCookie(){
//    today = new Date();
//   var expire = new Date();
//   expire.setTime(today.getTime() + 3600000*24*15);
 

//   document.cookie = "name="+usernameEl.value+";path=/" + ";expires="+expire.toUTCString();
//   document.cookie = "password="+encodeURI(passwordEl.value)+";path=/" + ";expires="+expire.toUTCString();
// }; 
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword(),
        ischeckternvalid = checkTerms(),
        isUrlValid = checkUrl(),
        isCheckAgeValid = checkAge();
        // createCookie = createCookie();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        ischeckternvalid &&
        isUrlValid && 
        isCheckAgeValid;

    // submit to the server if the form is valid
    if (isFormValid) {
       alert("form successfully submitted");
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
        case 'choice':
            checkTerms();
            break;
        case 'url':
            checkUrl();
            break;    
        case 'age':
            checkAge();
            break;
    }
}));
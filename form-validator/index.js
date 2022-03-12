var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirm_password = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    parent.classList.remove('error');
    let small = parent.querySelector('small');
    small.innerText = '';
}

function checkEmpty(listInput) {
    let isEmptyError = false;
    listInput.forEach((input) => {
        input.value = input.value.trim();

        if(!input.value) {
            isEmptyError = true;
            showError(input, `${input.placeholder} is required`);
        }
        else {
            showSuccess(input);
        }
    });

    return isEmptyError;
}

function checkEmail(input) {
    const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  let validEmail = emailRegex.test(input.value.trim());

  if(validEmail) {
      showSuccess(input);
  }
  else {
      showError(input, 'Email invalid');
  }

  return validEmail;
}

function checkLength(input, min, max) {
    input.value = input.value.trim();

    if(input.value.length < min) {
        showError(input, `Less than ${min} character`);
        return true;
    }

    if(input.value.length > min) {
        showError(input, `Over than ${max} character`);
        return true;
    }

    showSuccess(input);
    return false;
}

function checkDifferent(password, cPassword) {
    password.value = password.value.trim();
    cPassword.value = cPassword.value.trim();

    let correctConfirm = password.value === cPassword.value;

    if(correctConfirm) {
        showSuccess(cPassword);
        return false;
    }
    else {
        showError(cPassword, 'Password is not match');
    }

    return true;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isEmptyError = checkEmpty([username, email, password, confirm_password]);
    if(!isEmptyError) {
        let invalidEmail = checkEmail(email);
        let usernameLengthError = checkLength(username, 5, 50);
        let passwordLengthError = checkLength(password, 8, 100);
        if(!passwordLengthError) {
            let diffPassword = checkDifferent(password, confirm_password);
        }
    }
})
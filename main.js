let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let valid = 0;

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

form.addEventListener("submit",(e) => {
  e.preventDefault();
  valid=0;
  blankChecker(username, 0, "Username cannot be blank");
  blankChecker(email, 1, "Email cannot be blank");
  blankChecker(password, 2, "Password cannot be blank");

  if(valid==3) {
    window.location.replace('loggedIn.html');
  }
});

// functions to produce error or success messages

let errorProcedure = (id, serial, message) => {
  errorMsg[serial].innerHTML = message;
  id.style.border = "2px solid red";
  failureIcon[serial].style.opacity = "1";
  successIcon[serial].style.opacity = '0';
}

let successProcedure = (id, serial) => {
  errorMsg[serial].innerHTML = ''
  id.style.border = "2px solid green";
  failureIcon[serial].style.opacity = '0';
  successIcon[serial].style.opacity = '1';
}

// function to check if input fields are empty

let blankChecker = (id, serial, message) => {
  if(id.value.trim() === '') {
    errorProcedure(id,serial,message);
  }
  else {
    if(id === email) {
      mailChecker(email);
    }
    else {
      valid+=1
      successProcedure(id,serial);
    }
    }
}

// function to check if email id is valid

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let mailChecker = (id) => {
  if(id.value.trim().match(validRegex)) {
    valid+=1;
    successProcedure(id, 1);
  }
  else {
    errorProcedure(id,1,'This is not a valid email address');
  }
}

const passwordInput = document.querySelectorAll(".password");
const showPasswordIcons = document.querySelectorAll(".showPassword");
const emailAddressInput = document.getElementById("emailAddress");
const sumbitButton = document.getElementById("submit");
const form = document.getElementById("form");
let allUsers = [];
let userObject = {};

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

for (let i = 0; i < showPasswordIcons.length; i++) {
    showPasswordIcons[i].addEventListener("click", (e) => {
        e.preventDefault();
        if (passwordInput[i].type === "password") {
            passwordInput[i].type = "text"; // Use the assignment operator "=" instead of "===".
        } else {
            passwordInput[i].type = "password"; // Use the assignment operator "=" instead of "===".
        }
    });
}

/* Start Regx */

const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

let errorMsg = document.getElementById("errorMsg");
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");

/* End Regx */

sumbitButton.onclick = () => {
    if (!nameRegex.test(firstNameInput.value)) {
        errorMsg.textContent = `The first name must only contains letters`;
    }

    else if (!nameRegex.test(lastNameInput.value)) {
        errorMsg.textContent = `The last name must only contains letters`;
    }

    else if (!emailRegex.test(emailAddressInput.value)) {
        errorMsg.textContent = `Use a valid email`;
    }

    else if (!passwordRegex.test(passwordInput[0].value)) {
        console.log(passwordInput[0].value)
        errorMsg.textContent = `Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long`;
    }

    else if (passwordInput[0].value !== passwordInput[1].value) {
        errorMsg.textContent = `Passwords are not matched`;
    }
}



//  if we need it on the localStorage this is the code //



// if (localStorage.getItem('users') != undefined) {
//     users = JSON.parse(localStorage.getItem('users'));
// }

// signInBtn.onclick = () => {
//     const newUser = {
//         "email": userEmail.value,
//         "password": userPassword.value
//     };

//     users.push(newUser);

//     localStorage.setItem('users', JSON.stringify(users));
// };



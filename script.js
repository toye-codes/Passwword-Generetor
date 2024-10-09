
const genPassword = document.getElementById("genPassword");
const password = document.getElementById("password")

const randomPassword = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    genPassword.onclick = function () {
        let newPassword = "";
        for ( let i = 0; i < 8; i++) {

        const createRandomPassword = Math.floor(Math.random() * randomPassword.length);
        newPassword += randomPassword[createRandomPassword];
    }

        password.value = newPassword;
    }
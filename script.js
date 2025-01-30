const passwordBox = document.getElementById('password');
const button = document.querySelector('button');
const copyIcon = document.querySelector('#copy');

const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "!@#$%^&*()_.";
const allChars = upperCase + lowerCase + number + symbol;
console.log(allChars);

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(password.length != length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

button.addEventListener('click',()=>{
    copyIcon.src = "images/copy.png"
    createPassword();
})

// copying the text at input box ( passwordBox )
copyIcon.addEventListener('click',()=>{
    copyIcon.src = "images/copied.svg"
    passwordBox.select();
    document.execCommand("copy");
})

// preventing other to write something in input box
passwordBox.disabled = true;

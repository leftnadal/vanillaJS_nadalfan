const loginInput = document.querySelector("#main-content .login-input");
const loginForm = document.querySelector("#main-content .login-form");
const greeting = document.querySelector("#main-content #greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername= localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    painGreetings(savedUsername);   
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); 
    painGreetings(username);
}

function painGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}




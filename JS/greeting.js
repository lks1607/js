const loginForm = document.querySelector("#login-form");
const loginUserName = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function LoginUser(info) {
    info.preventDefault()
    
    const userName = loginUserName.value;
    localStorage.setItem("UserName",userName);
    loginForm.classList.add("hidden");
  
    paintGreeting(userName);
}

function paintGreeting(userName){
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${userName}`;
}

const savedUser = localStorage.getItem("UserName");

if(savedUser == null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",LoginUser);
    
}else{
    paintGreeting(savedUser);
}




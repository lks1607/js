const random = document.querySelector(".randomGame");
const max_Number = random.querySelector(".setMaxNumber .maxNumber");
const user_number = random.querySelector(".setUserNumber .userNumber");
const board = document.querySelector("#board");
const result = document.querySelector("#result");



// const user = user_number.value;

function submitValue(info){
    info.preventDefault();

    const max = max_Number.value;
    const user = user_number.value;

    localStorage.setItem("Maxnumber",max);
    localStorage.setItem("Usernumber",user);

    const savedMax = localStorage.getItem("Maxnumber");
    const savedUser = localStorage.getItem("Usernumber");
    const machineChose = Math.ceil(Math.random() * parseInt(savedMax));
    Math.ceil();

    if(savedUser !== null){
    board.classList.remove("hidden");
    result.classList.remove("hidden");
    board.innerText = `You Chose : ${savedUser}, the Machine Chose : ${machineChose}`;
    }

    if(savedUser >= machineChose){
        result.innerText = "You Won!"
    }else{
        result.innerText = "You lose!"
    }

}

random.addEventListener("submit",submitValue);






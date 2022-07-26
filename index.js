const buttonEl = document.querySelector("#inputBtn");
const inputEl = document.querySelector("#inputField");
const errorMessage = document.querySelector("#errorMessage")

const checkEmail = () => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputEl.value.match(emailFormat)){
        errorMessage.style.display = "none"
        return
    }
    else{
        errorMessage.style.display = "block"
    }
}
buttonEl.addEventListener("click", checkEmail)
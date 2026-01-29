const dischange = document.getElementById("dischange")

function dischangeAnimation(){
    setTimeout(() => {
        dischange.style.width = "0vw";
    }, 1);
}


window.addEventListener("load", () => {
    dischangeAnimation();
});


const backButton = document.getElementById("backButton")

backButton.addEventListener("click",()=>{
    dischange.style.width = "100vw";
    setTimeout(()=>{
        window.location.href = "index.html";
    },600)
})


const goToLogin = document.getElementById("goToLogin")
const goToRegister = document.getElementById("goToRegister")
const leftSection = document.getElementById("leftSection")
const rightSection = document.getElementById("rightSection")
const registrationForm = document.getElementById("registrationForm")
const loginForm = document.getElementById("loginForm")
const title = document.getElementById("title")



goToRegister.addEventListener("click", ()=>{
    leftSection.style.position = "absolute"
    rightSection.style.position = "absolute"
    rightSection.style.right = "0"
    leftSection.style.width = "100vw"
    setTimeout(()=>{
        loginForm.style.display = "none";
        title.innerHTML = "Registration Form"
        registrationForm.style.display = "block";
        leftSection.style.width = "45vw"
    },1000)

})

goToLogin.addEventListener("click", ()=>{
    leftSection.style.position = "absolute"
    rightSection.style.position = "absolute"
    rightSection.style.right = "0"
    leftSection.style.width = "100vw"
    setTimeout(()=>{
        registrationForm.style.display = "none";
        title.innerHTML = "Login Form"
        loginForm.style.display = "block";
        leftSection.style.width = "45vw"
    },1000)

})
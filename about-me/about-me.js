const change = document.getElementById("change")

function dischangeAnimation(){
    setTimeout(() => {
        change.style.width = "0vw";
    }, 1);
}

window.addEventListener("load", () => {
    dischangeAnimation();
});


const signupButton = document.getElementById("signupButton")

signupButton.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "login.html";
    },1000)
})



const index = document.getElementById("index")

index.addEventListener("click",()=>{
    change.style.display = "block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "index.html"
    },1000)
})


const library = document.getElementById("library")

library.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "library.html";
    },1000)
})

const contact = document.getElementById("contact")



contact.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "contact.html";
    },1000)
})


const aboutMe = document.getElementById("aboutMe")

aboutMe.addEventListener("click",()=>{
    change.style.display = "block"
    change.style.width = "100%"
    setTimeout(()=>{
        window.location.href = "about-me.html"
    },1000)
})

const ctaButton = document.getElementById("ctaButton");

ctaButton.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "library.html";
    },1000)
})

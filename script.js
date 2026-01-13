const starter = document.getElementById("starter");

const starterLogo = document.getElementById("starterLogo");
const starterLogoHide = document.getElementById("starterLogoHide");

const starterText = document.getElementById("starterText");
const starterTextHide = document.getElementById("starterTextHide");



function starterAnimation(){
    setTimeout(() => {
        starterLogoHide.style.width = "0px";
    }, 500);
    setTimeout(() => {
        starterTextHide.style.width = "0px";
    }, 700);
    setTimeout(() => {
        starterLogoHide.style.width = "100px";
    }, 3000);
    setTimeout(() => {
        starterTextHide.style.width = "207px";
    }, 3200);
    setTimeout(() =>{
        starterLogo.style.display = "none";
        starterText.style.display = "none";
        starter.style.height = "0vh";
    },4000);
    setTimeout(()=>{
        starter.style.display = "none";
        typeText();
    },4700)
}

starterAnimation();







const signupButton = document.getElementById("signupButton");
const change = document.getElementById("change")

signupButton.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "login.html";
    },1000)
})


const getStartedButton = document.getElementById("getStartedButton");

getStartedButton.addEventListener("click",()=>{
    change.style.display="block";
    change.style.width = "100%";
    setTimeout(()=>{
        window.location.href = "login.html";
    },1000)
})



const dischange = document.getElementById("dischange")

function dischangeAnimation(){
    setTimeout(() => {
        dischange.style.width = "0vw";
    }, 1);
}

dischangeAnimation()

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









const text = "Welcome to Bookly";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}




const grid = document.querySelector(".grid-bg");
const cellSize = 20;

function createGrid() {
  grid.innerHTML = "";

  const cols = Math.ceil(window.innerWidth / cellSize);
  const rows = Math.ceil(window.innerHeight / cellSize);

  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement("div");
    cell.className = "grid-cell";
    grid.appendChild(cell);
  }
}

createGrid();
window.addEventListener("resize", createGrid);

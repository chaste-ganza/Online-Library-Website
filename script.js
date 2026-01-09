const starter = document.getElementById("starter");

const starterLogo = document.getElementById("starterLogo");
const starterLogoHide = document.getElementById("starterLogoHide");

const starterText = document.getElementById("starterText");
const starterTextHide = document.getElementById("starterTextHide");



function starterAnimation(){
    setTimeout(() => {
        starterLogoHide.style.width = "100px";
    }, 2000);
    setTimeout(() => {
        starterTextHide.style.width = "207px";
    }, 2200);
    setTimeout(() =>{
        starterLogo.style.display = "none";
        starterText.style.display = "none";
        starter.style.height = "0px";
    },3000);
    setTimeout(()=>{
        starter.style.display = "none";
    },3700)
}

starterAnimation();
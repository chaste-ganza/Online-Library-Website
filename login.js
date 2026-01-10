const dischange = document.getElementById("dischange")

function dischangeAnimation(){
    setTimeout(() => {
        dischange.style.width = "0vw";
    }, 1);
}

dischangeAnimation()


const backButton = document.getElementById("backButton")

backButton.addEventListener("click",()=>{
    dischange.style.width = "100vw";
    setTimeout(()=>{
        window.location.href = "index.html";
    },600)
})
const heroImg = document.querySelector(".heroImg");
const heroStyle = getComputedStyle(heroImg);
const bg = document.querySelector("#bg");
const imBody = document.querySelector(".imBody");


function comeBack(event){
    heroImg.classList.remove("heroLeft")
}
function comeBack_2(event){
    heroImg.classList.remove("heroRight")
}

function moveLeft() {
    const leftSide = "0px";
    heroImg.classList.remove("heroRight");
    heroImg.style.left = parseInt(heroStyle.left)-10 + 'px';
    heroImg.classList.add("heroLeft");
    window.addEventListener("keyup", comeBack)

    if (heroImg.style.left=== leftSide){
     moveright();
    }     
}


function moveright() {
    heroImg.classList.remove("heroleft");
    heroImg.style.left= parseInt(heroStyle.left)+10  +'px';
    heroImg.classList.add("heroRight");
    window.addEventListener("keyup", comeBack_2);

    if (heroImg.style.left === "770px") {
        moveLeft();
    }  
}

function divideKey(event) {
    if (event.keyCode == 37) {
        moveLeft();
     
    } else if (event.keyCode ==39){
        moveright();
    }
}
 
function orderMoveHero(){
   window.addEventListener("keydown", divideKey)
}


function init(){
  orderMoveHero();
}

init();
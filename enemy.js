
// const bgImg = document.querySelector(".bgImg");
// const mix= makeDiv.classList.add("enemyImg");




class ghost{
    constructor(){
        const randomX = Math.floor(Math.random() * 800) + 1;
        // 이게 밖에 있으면 랜덤 숫자가 한개만 나오고 귀신은 여러개 나온다. 이게 안에 있어야 계속 새로운 숫자가 나온다.
     
        this.ghost = document.createElement("div");//div만들기
       
        this.ghost.className = "enemyImg";//class이름 넣어주기'
        // bg.appendChild(this.ghost)
        // this.ghost.id = "testid";
        this.ghost.style.left = randomX+'px';//랜덤 위치에서 귀신 생성
        this.ghost.style.top = 0;
       
       
        // console.log(typeof this.ghost.offsetTop);
        setInterval(
           (this.fallingGhost)
        ,30);
    }
// 왜 아이디에는 따옴표가 들어가면 안돼?
    
        remove = () => {
            this.body = document.querySelector("body");
            this.bodyClass.className = "imBody";
            this.bodyClass.className.appendChild(this.ghost);

            this.ghost.parentNode.removeChild(this.ghost)

            
        }

    // fallingGhost(){
    //     this.ghost; //window 객체
       
    // }
    fallingGhost = () => {
    //    console.log("ghost down");
    // console.log(this.ghost.style.bottom);
        bg.appendChild(this.ghost);
    // if(this.ghost.style.top <400+'px'){
    //     fallingGhost = () => {
        this.ghost.style.top = parseInt(this.ghost.style.top) + 2+'px';
        if(this.ghost.style.top >200){
            this.remove;
        }
    // } else { 
    //     delete .gNew;
    // }
        // this.ghost.style.top = this.ghost.offsetTop +2 + "px";
        // this.ghost.style.top = this.ghost.offsetTop + 2 + 'px';
        
        // this.ghost.style.top = this.ghost.style.top + 2 +'px';
        // if (parseInt(this.ghost.style.top) +'px'){
        //     this.ghost.className.remove();
        // }

    }
} 



function last() {
    
    const cetsSee = setInterval(function(){
    let gNew = new ghost();
    } ,3000);

}
last();

// offset값->offset은 왜 둘 다 쓰면 안되고 오른쪽에만 쓸 수 있는 거지...!?
// , computed, computed 안쓸 때 style의 top값을 지정해줘야 한다는 것...?
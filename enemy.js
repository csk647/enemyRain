

let howMany = document.getElementsByClassName("enemyImg")
// let howManyarray=0;

class ghost{
     constructor(){
    //     const randomX = Math.floor(Math.random() * 765) + 1;
    //     // 이게 밖에 있으면 랜덤 숫자가 한개만 나오고 귀신은 여러개 나온다. 이게 안에 있어야 계속 새로운 숫자가 나온다.
    
// 왜 아이디에는 따옴표가 들어가면 안돼?
     }
    makeGhost = () => {
        if(howMany.length < 1){
            // 클래스로 귀신 불러서 .length 이용해서 귀신 갯수 관리하기
    const randomX = Math.floor(Math.random() * 765) + 1;
    // 이게 밖에 있으면 랜덤 숫자가 한개만 나오고 귀신은 여러개 나온다. 이게 안에 있어야 계속 새로운 숫자가 나온다.

    this.ghost = document.createElement("div");//div만들기
    this.ghost.className = "enemyImg";//class이름 넣어주기'
    this.ghost.style.left = randomX + 'px';//랜덤 위치에서 귀신 생성
    this.ghost.style.top = 0;
    // this.ghost.style.y = 45;

// 여기에서 const ghost를 하면 다른 함수에 가서 쓸 때 매번 querySelector나 getElement써야하는데
// this.ghost로 하면 이용할 수 있다.

    // console.log(typeof this.ghost.offsetTop);
 
    this.movement = setInterval(
        (this.fallingGhost)
        , 30);
    // 변수에 setInterval을 넣으면 다른곳에서 호출할 때 힘드니까 this. 로 넣어준다.
    // this.movement 는 영수증 같은 역할을 한다. 이제 이 this변수라고 해야하나 그걸 clearInterval로 이용할 수 있다.
}
    }
     
   
    fallingGhost = () => {
        bg.appendChild(this.ghost);
        this.ghost.style.top = parseInt(this.ghost.style.top) + 2+'px';
        if( parseInt(this.ghost.style.top) > 550){
            // this.ghost.parentNode.removeChild(this.ghost)
            this.ghost.parentNode.removeChild(this.ghost)
            clearInterval(this.movement)
            console.log(this.ghost.style.top)


        //  이거 두 줄로 귀신 없애는 것 만들었다
        }
        
        let ghostHead = this.ghost.offsetTop;
        let heroLeft = heroImg.offsetLeft - 44;
        let heroRight = heroImg.offsetLeft + 44;

        if(ghostHead === 494  && this.ghost.offsetLeft < heroRight 
            && this.ghost.offsetLeft > heroLeft ){
            this.ghost.classList.add('dieGhost')
            } 
        // hero의 범위를 정해줘서 그 범위 내에 귀신이 들어오면 사라지는 모습으로 변하도록
} 

}



 function last() {
    
    let container = setInterval(function(){
    let gNew = new ghost();
    gNew.makeGhost();
    } ,3000);

 }
 last();

// offset값->offset은 왜 둘 다 쓰면 안되고 오른쪽에만 쓸 수 있는 거지...!?
// , computed, computed 안쓸 때 style의 top값을 지정해줘야 한다는 것...?
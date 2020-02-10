
let howMany = document.getElementsByClassName("enemyImg")
// 귀신 갯수 불러오려고 부른 클래스

class ghost{
     constructor(){
//    원래 makeGhost 에 있는 내용이 다 여기에 있었는데 귀신 갯수 관리하려고 makeGhost로 옯겼다!!
          }
// 왜 아이디에는 따옴표가 들어가면 안돼?
    
    makeGhost = () => {
        if(howMany.length < 10){
            // 클래스로 귀신 불러서 .length 이용해서 귀신 갯수 관리하기
    const randomX = Math.floor(Math.random() * 765) + 1;
    // 이게 밖에 있으면 랜덤 숫자가 한개만 나오고 귀신은 여러개 나온다. 이게 안에 있어야 계속 새로운 숫자가 나온다.

    this.ghost = document.createElement("div");//div만들기
    this.ghost.className = "enemyImg";//class이름 넣어주기'
    this.ghost.style.left = randomX + 'px';//랜덤 위치에서 귀신 생성
    this.ghost.style.top = 0;

// 여기에서 const ghost를 하면 다른 함수에 가서 쓸 때 매번 querySelector나 getElement써야하는데
// this.ghost로 하면 이용할 수 있다.
 
    setInterval(
        (this.fallingGhost)
        , 30);
        // 다 만들면 바로 떨어지게 하기
}
}
}



function last() {
    
    const cetsSee = setInterval(function(){
    let gNew = new ghost();
    gNew.makeGhost();
    } ,3000);

}
last();

// offset값->offset은 왜 둘 다 쓰면 안되고 오른쪽에만 쓸 수 있는 거지...!?
// , computed, computed 안쓸 때 style의 top값을 지정해줘야 한다는 것...?
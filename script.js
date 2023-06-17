let music=new Audio("item/music.mp3");
let audioTurn=new Audio("item/ting.mp3");
let gameOver=new Audio("item/gameover.mp3");
let img=document.getElementById("img");
let btn=document.getElementById("btn");
let turn="x"; 
let isgameover=false;

//function to change the turn
const changeTurn = ()=>{
    return turn ==="x"?"0":"x"
}
//function to check for a win 
function checkWin()
{   
    let wins=[
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8],
             [0, 3, 6],
             [1, 4, 7],
             [2, 5, 8],
             [0, 4, 8],
             [2, 4, 6],
            ];
            wins.forEach(e =>{
            if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText!=="" ))
            {
              document.querySelector(".info").innerText=boxes[e[0]].innerText+" won";
              isgameover=true;
              gameOver.play();
              img.style.width="200px";
             }
         })     
    }

//game logic
 var boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(element.innerText==="")
        {
            element.innerHTML=turn;
            turn=changeTurn();
            checkWin();
            if(!isgameover){
                audioTurn.play();
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn; }    
        }
    })
})
// add button logic
btn.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll('.box');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "x"; 
    isgameover = false;
    img.style.width="0px";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;     
});
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newb=document.querySelector("#newb");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
let count =0;


const winPatterns = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6],
];

const resetGame = () => {
  turnO=true;
  count=0;
  enableBoxes();
  msgcontainer.classList.add("hide");
}

const gameDraw = () => {
msg.innerText="IT'S A DRAW";
msgcontainer.classList.remove("hide");
disableBoxes();
}

boxes.forEach( (box)=>{
   box.addEventListener("click" , () => {
   if (turnO){
    box.innerText="O";
    turnO=false;
   }
   else{
    box.innerText="X";
    turnO=true;
   }
   box.disabled=true;
   count++;

  let isWin = checkWinner();
  
  if (count === 9 && !isWin){
    gameDraw();
  } 

   });
});

const enableBoxes = () => {
  for (let box of boxes ){
    box.disabled=false;
    box.innerText="";
  }
}

const disableBoxes = () => {
  for (let box of boxes ){
    box.disabled=true;
  }
}

const showWinner = (winner) => {
    msg.innerText='CONGRATULATIONS';
    msgcontainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
     
  let pos1=boxes[pattern[0]].innerText;
  let pos2=boxes[pattern[1]].innerText;
  let pos3= boxes[pattern[2]].innerText;

  if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1===pos2 && pos2===pos3){  
        showWinner(pos1);
        disableBoxes();
    }
  }
}};

newb.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);




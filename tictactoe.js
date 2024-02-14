let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newresetbtn=document.querySelector("#newreset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxs.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        box.innerText="abcd";
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText="Congratulations, Winner is "+winner;
    msgcontainer.classList.remove("hide");
}
const checkWinner=()=>{
   for(let pattern of winpattern){
       let pos1Val= boxs[pattern[0]].innerText;
       let pos2Val= boxs[pattern[1]].innerText;
       let pos3Val= boxs[pattern[2]].innerText;
        if(pos1Val !=""&& pos2Val !=""&&pos3Val !=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
   }
}
newresetbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
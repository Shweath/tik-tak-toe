let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#New");
let msg=document.querySelector(".mas");
let win=document.querySelector("#win");
let trunO = true;
const winPatterns= [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,4,6],
      [2,5,8],
      [3,4,5],
      [6,7,8]
];
const resetGame = () => {
    trunO = true;
    enablebox();
    msg.classList.add("hide");
}
 boxes.forEach((box) => {
   box.addEventListener("click", () => {
    console.log("box was clicked");
    if(trunO){
        box.innerText = "O";
        trunO=false;
    }
    else
    {
        box.innerText = "X";
        trunO=true;
    }
    box.disabled=true;
    check();
   });
})
const disabledbox = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebox = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) =>{
    win.innerText=  `Winner is ${winner}`;
    msg.classList.remove("hide");
    disabledbox();
}
const check = () =>
{
    for(let pattern of winPatterns){
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="" )
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
            }
        }


    }
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);



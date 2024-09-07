userScore=0;
compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".btn");
let userCount=document.querySelector(".you-count");
let CompCount=document.querySelector(".com-count");

let genCompChoice=() =>{
let option=["rock","paper","scissor"];
let ranIdx=Math.floor(Math.random()*3);
return option[ranIdx];
};

const drawGame=() =>{
    msg.innerText="Game was draw! Play Again";
    msg.style.backgroundColor="black";
};

const showWin=(userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        msg.innerText=`You Won! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
        userCount.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`You Lost! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        CompCount.innerText=compScore;
    }
}
const playGame=(userChoice) =>{
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
            let userWin=true;
            if(userChoice==="rock"){
                //paper, scissor
                userWin=compChoice==="paper" ? false:true;
            }
            else if(userChoice==="paper"){
                //scissor, rock
                userWin=compChoice==="scissor" ? false:true;
            }
            else{
                //rock, paper
                userWin=compChoice==="rock" ? false:true;
            }
            showWin(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
       let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

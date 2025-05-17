let userScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock","paper","sicissor"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame=()=>{
    console.log("Game was draw Play Again");
    msg.innerText="you draw"
    msg.style.backgroundColor="#81b31"
}

const showWiner=(userWin) =>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore
        console.log("You win");
        msg.innerText=`You win ! `;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++
        compScorePara.innerText=compScore
        console.log("you lose");
        msg.innerText=`You lost. `;
        msg.style.backgroundColor="red";
    }
}



const playGame=(userChoice)=>{
    console.log("user choice = " ,userChoice);
    //generte computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice===compChoice){
        //draw Game
        drawGame()
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="sicissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWiner(userWin);
    }
    
}


choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    });
});




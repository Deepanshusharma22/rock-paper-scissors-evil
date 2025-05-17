console.log("1")

let userScore = 0;
let compScore = 0;
let numberofPlay = 1;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const genFraudCompChoice = (userChoice) => {
    // const fraudOptions=["rock","paper","scissor"]
    // const idx=1;
    let fraudCompChoice;
    if (userChoice === "rock") {
        fraudCompChoice = "paper"
    }
    else if (userChoice === "paper") {
        fraudCompChoice = "scissors"
    }
    else {
        fraudCompChoice = "rock";
    }
    return fraudCompChoice
}


const genFraudChoice = (userChoice) => {
    let fraudChoice;
    if (userChoice === "paper") {
        fraudChoice = "rock"
    }
    else if (userChoice === "rock") {
        fraudChoice = "scissors"
    }
    else {
        fraudChoice = "paper";
    }
    return fraudChoice
}


const drawGame = () => {
    console.log("Game was draw Play Again");
    msg.innerText = "you draw"
    msg.style.backgroundColor = "#81b31"
}

const showWiner = (userWin) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore
        console.log("You win");
        msg.innerText = `You win ! `;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++
        compScorePara.innerText = compScore
        console.log("you lose");
        msg.innerText = `You lost. `;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generte computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //draw Game
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWiner(userWin);
    }

}
const playCompFraudGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generte computer choice
    const compChoice = genFraudCompChoice(userChoice);
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //draw Game
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWiner(userWin);
    }
}
const playFraudGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generte computer choice
    const compChoice = genFraudChoice(userChoice);
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //draw Game
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWiner(userWin);
    }
}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // if (numberofPlay<=5) {
        //     playGame(userChoice)
        // }
        // else{
        //     if (Math.random()<0.3) {
        //         playGame(userChoice)
        //     }
        //     else{
        //         playCompFraudGame(userChoice)
        //     }
        // }
        if (numberofPlay <= 2) {
            playFraudGame(userChoice)
        }
        else if (numberofPlay <= 5) {
            if (Math.random() < 0.9) {
                playGame(userChoice)
            }
            else {
                playCompFraudGame(userChoice)
            }
        }
        else if (numberofPlay <= 10) {
            if (Math.random() < 0.7) {
                playGame(userChoice)
            }
            else {
                playCompFraudGame(userChoice)
            }
        }
        else if (numberofPlay <= 15) {
            if (Math.random() < 0.5) {
                playGame(userChoice)
            }
            else {
                playCompFraudGame(userChoice)
            }
        }
        else if (numberofPlay <= 20) {
            if (Math.random() < 0.3) {
                playGame(userChoice)
            }
            else {
                playCompFraudGame(userChoice)
            }
        }
        else {
            if (Math.random() < 0.1) {
                playGame(userChoice)
            }
            else {
                playCompFraudGame(userChoice)
            }
        }


        numberofPlay = numberofPlay + 1;
        console.log(numberofPlay);
    });
});




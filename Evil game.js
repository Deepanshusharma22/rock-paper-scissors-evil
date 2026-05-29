console.log("EVIL")

let userScore = 0;
let compScore = 0;
let numberofPlay = 1;
let isScamActive = false; 

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const scamBtn = document.querySelector("#scam-btn")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

scamBtn.addEventListener("click", () => {
    isScamActive = !isScamActive;
    numberofPlay = 1; 

    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;

    if (isScamActive) {
        scamBtn.innerText = "Evil game: ON";
        scamBtn.style.backgroundColor = "#2ed573"; 
        msg.innerText = "Scores Reset! Evil Mode Active ";
        msg.style.backgroundColor = "#2ed573";
    } else {
        scamBtn.innerText = "Evil";
        scamBtn.style.backgroundColor = "#ff4757"; 
        msg.innerText = "Scores Reset! Normal Fair Play Restored.";
        msg.style.backgroundColor = "#081b31";
    }
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const genFraudCompChoice = (userChoice) => {
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
    msg.style.backgroundColor = "#081b31"
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
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
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
    const compChoice = genFraudCompChoice(userChoice);
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
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
    const compChoice = genFraudChoice(userChoice);
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
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

        if (isScamActive) {
            if (numberofPlay <= 2) {
                playFraudGame(userChoice) 
            }
            else if (numberofPlay <= 5) {
                if (Math.random() < 0.7) { 
                    playGame(userChoice)
                }
                else {
                    playCompFraudGame(userChoice)
                }
            }
            else if (numberofPlay <= 10) {
                if (Math.random() < 0.4) {
                    playGame(userChoice)
                }
                else {
                    playCompFraudGame(userChoice)
                }
            }
            else {
                if (Math.random() < 0.05) {
                    playGame(userChoice)
                }
                else {
                    playCompFraudGame(userChoice)
                }
            }
            numberofPlay = numberofPlay + 1;
            console.log("Scam Mode Round Count: ", numberofPlay);
        } 
        else {
            playGame(userChoice);
        }
    });
});

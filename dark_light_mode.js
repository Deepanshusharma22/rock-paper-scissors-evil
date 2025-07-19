const mode = document.querySelector("#mode");
const navbar = document.querySelector(".navbar");
const heading = document.querySelector("h1");
const message = document.querySelector("#msg");
const body = document.querySelector("body");
const score = document.querySelector(".score-board");
const i = document.querySelector("i");
const option = document.querySelectorAll(".choice")
let dark_mode = false

option.forEach(option => {
    option.addEventListener("mouseover", () => {
        option.style.backgroundColor = dark_mode ? "#fff" : "#081b31";
    });
    option.addEventListener("mouseout", () => {
        option.style.backgroundColor = "";
    });
})
mode.addEventListener("click", () => {
    dark_mode = !dark_mode;
    if (dark_mode) {
        body.style.backgroundColor = "#081b31"
        navbar.style.backgroundColor = "#fff"
        heading.style.backgroundColor = "#fff"
        heading.style.color = "#081b31"
        mode.style.color = "#081b31"
        message.style.backgroundColor = "#fff"
        message.style.color = "#081b31"
        score.style.color = "#fff"
        i.style.color = "#081b31"
        i.className = "fa-solid fa-sun"
    }
    else {
        body.style.backgroundColor = "#fff";
        navbar.style.backgroundColor = "#081b31";
        heading.style.backgroundColor = "#081b31";
        heading.style.color = "#fff";
        mode.style.color = "#fff";
        message.style.backgroundColor = "#081b31";
        message.style.color = "#fff";
        score.style.color = "#081b31";
        i.className = "fa-solid fa-moon";
        i.style.color = "#fff"

    }
})
let you;
let yourScore = 0
let opponent
let opponentScore = 0


let choices = ["rock", "paper", "scissors"]

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img")
        choice.id = choice[i]
        choice.src = choices[i] + ".png"
        choice.addEventListener("click", selectChoice)
        document.getElementById("choices").append(choice)
    }
}


function selectChoice() {
    you = this.id
    document.getElementById("your-choice").src = you + ".png"
}
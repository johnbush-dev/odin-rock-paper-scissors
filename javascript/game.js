function mainMethod() {
   let userInput = prompt("Please choose either: Rock, Paper or Scissors: ")
    playRockPaperScissors(userInput, getComputerChoice() ? alert("You win!") : alert("You lose!"));
    mainMethod();
}
function getComputerChoice() {
    return parseInt(Math.floor(Math.random() * (3 - 1 + 1) + 1))
    // Rock = 1, Paper = 2, Scissors = 3
}
function playRockPaperScissors(userChoice, getComputerChoice){
    if (userChoice.toUpperCase() === "rock".toUpperCase()) {
        // Rock
        userChoice = 1;
        if (userChoice === getComputerChoice) {
            return true;
        }
        return false;
    } else if (userChoice.toUpperCase() === "paper".toUpperCase()){
        // Paper
        userChoice = 2;
        if (userChoice === getComputerChoice) {
            return true;
        }
        return false;
    } else if (userChoice.toUpperCase() === "scissors".toUpperCase()){
        // Scissors
        userChoice = 3;
        if (userChoice === getComputerChoice) {
            return true;
        }
        return false;
    } else     
    console.log("Invalid Input!")
    return false;
}

function mainMethod() {
    let userInput = prompt("Please choose either: Rock, Paper, or Scissors: ");
    let userChoice = convertUserChoice(userInput);
    
    if (userChoice !== null) {
        let computerChoice = getComputerChoice();
        let result = playRockPaperScissors(userChoice, computerChoice);

        if (result === "win") {
            alert(`You win! You chose ${userInput} and the computer chose ${convertComputerChoice(computerChoice)}.`);
        } else if (result === "lose") {
            alert(`You lose! You chose ${userInput} and the computer chose ${convertComputerChoice(computerChoice)}.`);
        } else {
            alert(`It's a tie! You chose ${userInput} and the computer chose ${convertComputerChoice(computerChoice)}.`);
        }
    } else {
        alert(`Invalid input! Please choose either: Rock, Paper, or Scissors.`);
    }
    
    mainMethod(); 
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; 
}

function convertUserChoice(userInput) {
    userInput = userInput.trim().toLowerCase();
    if (userInput === "rock") {
        return 1;
    } else if (userInput === "paper") {
        return 2;
    } else if (userInput === "scissors") {
        return 3;
    }
    return null;
}

function convertComputerChoice(computerChoice) {
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else if (computerChoice === 3) {
        return "Scissors";
    }
}

function playRockPaperScissors(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if (
        (userChoice === 1 && computerChoice === 3) ||
        (userChoice === 2 && computerChoice === 1) ||
        (userChoice === 3 && computerChoice === 2)
    ) {
        return "win";
    } else {
        return "lose";
    }
}

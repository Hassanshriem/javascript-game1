const rockIcon = '\u{1FAA8}';
const paperIcon = '\u{1F4F0}';
const scisrrosIcon = '\u{2700}';
const closeIcon = '\u{2A32}';
const winnerIcon = `\u{1F3C6}`;
const drawSong = `https://audio.jukehost.co.uk/pqzsVESiIzNoU8v0kEifHs0efT6hVl4Z`;
const loseSong = `https://audio.jukehost.co.uk/rzo8n8bBQ76i967Lu6Ik3B4eVbijX4w9`;
const winSong = `https://audio.jukehost.co.uk/OlHZe356fE3CbKBwB2BQc8Hik3KMb63P`;
const gameChoices = ["rock", "paper", "scissors"];
const redStyle = "color: red; font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;";
const greenStyle = "color: green; font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;";
const pinkStyle = "color:pink; font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;";
const consoleStyle = "font-family:sans-serif;font-size:1em;font-weight:bolder;text-shadow:#000 1px 1px;";
let userWins = 0; computerWins = 0; draws = 0; userInput = ''; result = '';
function greetings() {
    alert("Rock paper scissors is a hand game originating from china.\nYou will face the machine for 5 Rounds\n Be Strong !Winning is only half of it. Having fun is the other half.  ");
}
function computerPlay() {
    return randomItem = gameChoices[Math.floor(Math.random() * gameChoices.length)];
}
function checkValidInput() {
    userInput = prompt(`Choose an option : Rock | Paper | Scissors  -t: Terminate`).toLowerCase();
    if (userInput == null || userInput == 't') {
        console.log("%c Termination of game", greenStyle);
        return;
    }
    else {
        while (userInput.toLowerCase() != 'rock' && userInput.toLowerCase() != 'paper' && userInput.toLowerCase() != 'scissors') {
            alert("Re Enter a valid value please");
            userInput = prompt(`Choose an option : Rock | Paper | Scissors  -t: Terminate `).toLowerCase();
        }
    }
    return userInput;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("%c Draw !", "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
        return "draw";
    }
    else {
        if (computerSelection == "rock") {
            if (playerSelection == "rock") {
                console.log("%c Draw !", "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "draw";
            }
            if (playerSelection == "paper") {
                console.log(`%c ${paperIcon} beats ${rockIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "win";
            }
            if (playerSelection == "scissors") {
                console.log(`%c ${rockIcon} beats ${scisrrosIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return ("lose");
            }
        }
        if (computerSelection == "paper") {
            if (playerSelection == "rock") {
                console.log(`%c ${paperIcon} beats ${rockIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return ("lose");
            }
            if (playerSelection == "paper") {
                console.log("%c", "font-family:sans-serif;font-size:1em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return ("draw");
            }
            if (playerSelection == "scissors") {
                console.log(`%c  ${scisrrosIcon} beats ${paperIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return ("win");
            }
        }
        if (computerSelection == "scissors") {
            if (playerSelection == "rock") {
                console.log(`%c ${rockIcon} beats ${scisrrosIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return ("win");
            }
            if (playerSelection == "paper") {
                console.log(`%c  ${scisrrosIcon} beats ${paperIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return ("lose");
            }
            if (playerSelection == "scissors") {
                console.log("%c", consoleStyle);
                return ("draw");
            }
        }
    }
}

function displayRoundResult(result, i) {
    if (result == 'win') {
        userWins++;
        console.log(`Round ${i + 1} %c : Win`, greenStyle);
    }
    if (result == "lose") {
        computerWins++;
        console.log(`Round ${i + 1} %c : Lose`, redStyle);
    }
    if (result == "draw") {
        draws++;
        console.log(`Round ${i + 1} %c : Draw`, pinkStyle);
    }
}
function displayFinalResults(userWins, computerWins, draws) {
    if (userWins > computerWins && userWins > draws) {
        console.log(`%c User Wins  ${userWins}/5  ${winnerIcon}`, greenStyle);
    }
    if (computerWins > userWins && computerWins > draws) {
        console.log(`%c Computer Wins  ${computerWins}/5 `, redStyle);
    }
    if ((draws >= computerWins && draws >= userWins) || (userWins == computerWins && computerWins == userWins && draws < computerWins)) {
        console.log(`%c Draw`, pinkStyle);

    }
    console.group('Final Result');
    console.log(`User Score     : ${userWins}`);
    console.log(`Computer Score : ${computerWins}`);
    console.log(`Draw Score     : ${draws}`);
    console.groupEnd();

}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = checkValidInput();
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result == null) {
            return;
        }
        else {
            displayRoundResult(result, i);
        }
    }
    displayFinalResults(userWins, computerWins, draws);
}
greetings();
game();







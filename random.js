let userInputs = document.getElementById("userInput");
let gameResults = document.getElementById("gameResult");
let randomNum = Math.ceil(Math.random()*100);
function randomNumber(){
    let guessedNumber = parseInt(userInputs.value);
    if (guessedNumber < randomNum) {
        gameResults.textContent = "Too Low! Try Again"
        gameResults.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber > randomNum){
        gameResults.textContent = "Too High! Try Again";
        gameResults.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber == randomNum) {
        gameResults.textContent = "Congratulations! You got it right!";
        gameResults.style.backgroundColor = "green";
    }
    else{
        gameResults.textContent = "Please provide a valid Input..!!"
        gameResults.style.backgroundColor = "#1e217c";
    }

}
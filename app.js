let answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);

function guessGame() {
    let guessString;
    let guess;

    guessString = document.getElementById("guessInput").value;
    guess = parseInt(guessString);

    if (answer == guess) {
        gameText.textContent = "You got it! Congrats!";
    } else if (answer > guess) {
        gameText.textContent = "Too low...";
    } else if (answer < guess) {
        gameText.textContent = "Too high...";
    } else {
        gameText.textContent = "That's not a number...";
    }
};

const beginBtn = document.getElementById("beginBtn");
const close = document.getElementsByClassName("close")[0];
const modalContainer = document.getElementById("modalContainer");
const guessBtn = document.getElementById("guessBtn");
const gameText = document.getElementById("gameText");
const modalContent = document.getElementById("modalContent");

beginBtn.addEventListener("click", () =>  {
    modalContainer.classList.add("show");
});
close.addEventListener("click", () =>  {
    modalContainer.classList.remove("show");
});
guessBtn.addEventListener("click", () => {
    document.getElementById("guessInput").value = "";
})

// let tooHigh = document.createElement("p");
// tooHigh.textContent = "Too high";
// tooHigh.setAttribute('id','gameText');
// modalContent.insertBefore(tooHigh, gameText);

// let tooLow = document.createElement("p");
// tooLow.textContent = "Too low";
// tooLow.setAttribute('id','gameText');
// modalContent.insertBefore(tooLow, gameText);

// let foundNum = document.createElement("p");
// foundNum.textContent = "You got it! Congrats!";
// foundNum.setAttribute('id','gameText');
// modalContent.insertBefore(foundNum, gameText);

// let nonNum = document.createElement("p");
// nonNum.textContent = "That's not a number";
// nonNum.setAttribute('id','gameText');
// modalContent.insertBefore(nonNum, gameText);
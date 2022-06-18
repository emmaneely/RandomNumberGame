let answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);

function guessGame() {
    let guessString;
    let guess;

    guessString = document.getElementById("guessInput").value;
    guess = parseInt(guessString);

    if (answer == guess) {
        modalContent.insertBefore(foundNum, gameText);
    } else if (answer > guess) {
        modalContent.insertBefore(tooLow, gameText);
    } else if (answer < guess) {
        modalContent.insertBefore(tooHigh, gameText);
    } else {
        modalContent.insertBefore(nonNum, gameText);
    }
};



// function testGame() {
//     do {
//         guess = prompt("Guess a number from 1-100");
//         if (answer == guess) {
//             console.log("You got it right!!");
//             alert("You got it right!!");
//             break;
//         } else if (answer > guess) {
//             console.log("That's too low...");
//             alert("That's too low...");
//         } else if (answer < guess) {
//             console.log("That's too high...");
//             alert("That's too high...");
//         } else {
//             console.log("Hmm... I don't think that's a number");
//             alert("Hmm... I don't think that's a number");
//         }
//     } while (answer != guess);
// };


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

let tooHigh = document.createElement("p");
tooHigh.textContent = "Too high";
// modalContent.insertBefore(tooHigh, gameText);

let tooLow = document.createElement("p");
tooLow.textContent = "Too low";
// modalContent.insertBefore(tooLow, gameText);

let foundNum = document.createElement("p");
foundNum.textContent = "You got it! Congrats!";
// modalContent.insertBefore(foundNum, gameText);

let nonNum = document.createElement("p");
nonNum.textContent = "That's not a number";
// modalContent.insertBefore(nonNum, gameText);
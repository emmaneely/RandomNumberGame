console.log("Welcome to the random number game!");

function randNumGame() {
    let answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    let guess;

    do {
        guess = prompt("Guess a number from 1-100");
        if (answer == guess) {
            console.log("You got it right!!");
            alert("You got it right!!");
            break;
        } else if (answer > guess) {
            console.log("That's too low...");
            alert("That's too low...");
        } else if (answer < guess) {
            console.log("That's too high...");
            alert("That's too high...");
        } else {
            console.log("Hmm... I don't think that's a number");
            alert("Hmm... I don't think that's a number");
        }
    } while (answer != guess);
};
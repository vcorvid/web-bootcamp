var magicNumber=7;
var guess = Number(prompt("Guess a number"));
if (guess === magicNumber) {
    alert("You guessed it!");
}
else if (guess > magicNumber) {
    alert("Too high. Guess again.");
}
else if (guess < magicNumber) {
    alert("Too low. Guess again.");
}
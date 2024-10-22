alert('Welcome to the secret number game!');

let maxNumber = 100;
let secretNumber = parseInt(Math.random() * maxNumber + 1); // Random number between 1 and 100
console.log(secretNumber); // Show the secret number in the console
let guess;
let attempts = 1;

// while guess is not equal to the secret number
while (guess != secretNumber) {
    guess = prompt(`Choose a number between 1 and ${maxNumber}`); // Template Strings

    // if guess is equal to the secret number
    if (guess == secretNumber) {
        break;
    } else {
        if (guess > secretNumber) {
            alert(`The secret number is smaller than ${guess}`);
        } else {
            alert(`The secret number is larger than ${guess}`);
        }

        attempts++; // Syntactic Sugar
    }
}

let attemptWord = attempts > 1 ? 'attempts' : 'attempt'; // Ternary operator
alert(`That's right! You discovered the secret number ${secretNumber} with ${attempts} ${attemptWord}.`);
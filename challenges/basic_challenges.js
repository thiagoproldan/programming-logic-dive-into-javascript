// Ask the user what day of the week it is. If the answer is "Saturday" or "Sunday", show "Have a nice weekend!" Otherwise, show "Have a good week!".
var day = prompt("What day of the week is it?");
if (day == "Saturday" || day == "Sunday") {
    alert("Have a nice weekend!");
} else {
    alert("Have a good week!");
}

// Check whether a number entered by the user is positive or negative. Show an alert informing.
var number = prompt("Enter a number:");
if (number > 0) {
    alert("The number is positive.");
} else {
    alert("The number is negative.");
}

// Create a scoring system for a game. If the score is greater than or equal to 100, show "Congratulations, you won!". Otherwise, show "Try again to win.".
var score = prompt("Enter your score:");
if (score >= 100) {
    alert("Congratulations, you won!");
} else {
    alert("Try again to win.");
}

// Create a message that informs the user about the account balance, using a template string to include the balance amount.
var balance = 1000;
alert(`Your account balance is $${balance}.`);

// Ask the user to enter their name using prompt. Then show a welcome alert using that name.
var name = prompt("What is your name?");
alert(`Welcome, ${name}!`);
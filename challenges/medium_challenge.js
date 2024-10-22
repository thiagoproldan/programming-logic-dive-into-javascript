// Create a counter that starts at 1 and goes up to 10 using a while loop. Show each number.
var counter1 = 1;
while (counter1 <= 10) {
    console.log(counter1);
    counter1++;
}

// Create a counter that starts at 10 and goes to 0 using a while loop. Show each number.
var counter2 = 10;
while (counter2 >= 0) {
    console.log(counter2);
    counter2--;
}

// Create a countdown program. Ask for a number and count from that number to 0, using a while loop in the browser console.
var number1 = parseInt(prompt('Enter a number:'));
while (number1 >= 0) {
    console.log(number1);
    number1--;
}

// Create a count-up program. Ask for a number and count from 0 to that number using a while loop in the browser console.
var number2 = parseInt(prompt('Enter a number:'));
var counter3 = 0;
while (counter3 <= number2) {
    console.log(counter3);
    counter3++;
}
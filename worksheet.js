// Variables

// 1. Days of the week
let dayOfWeek = 'Monday';
console.log(dayOfWeek);
dayOfWeek = 'Friday'
console.log(`I can't wait for ${dayOfWeek}!`)

// 2. User Input
let animalInput = prompt('What is your favorite animal?')
let colorInput = prompt('What is your favorite color?')
console.log(`I have never seen a ${colorInput} ${animalInput}!`)


// Conditionals

// 1. Meals
// bacon and egg sandwich, hamburger, spaghetti
let timeOfDay = 1900
let meal
if (timeOfDay < 1200) {
    meal = 'bacon and egg sandwich'
}
else if (timeOfDay >= 1200 && timeOfDay < 1700) {
    meal = 'hamburger'
}
else if (timeOfDay >= 1700) {
    meal = 'spaghetti'
}
console.log(meal)

// 2. Random Number
let randomNum
randomNum = Math.floor(Math.random() * 11);
if (randomNum <=2) {
    console.log('Beatles');
}
else if (randomNum >= 3 && randomNum <= 5) {
    console.log('Stones');
}
else if (randomNum >= 6 && randomNum <= 8) {
    console.log('Floyd');
}
else if (randomNum >= 9) {
    console.log('Hendrix');
}


// Loops

// 1.
for(let i = 0; i < 7; i++){
    console.log('javaScript is cool!');
}

// 2.
let num = 0
for(let i = 0; i < 11; i++){
    console.log(num);
    num++;
}

// 3.
for(let i = 0; i < 10; i++){
    if (i % 2 == 0){
        console.log('hello');
    }
    else {
        console.log('goodbye');
    }
}


// Functions

// 1. Favoite Movie(void functions)
function printMovieName(){
    let favMovie = 'The Truman Show';
    console.log(favMovie);
}
printMovieName();

// 2. Favorite Band(return functions)
function favoriteBand(){
    let userInput = prompt('what is your favorite band?');
    return userInput;
}
let band = favoriteBand();
console.log(`your favorite band is ${band}`);

// 3. Concert (parameters)
function concertDisplay(musicalAct){
    let myStreet = prompt('enter the street you live at.');
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`);
}
concertDisplay('The Beetles');


// Arrays

// 1. Desktop Items
let desktopItems = ['sword', 'MIDI keyboard', 'laptop'];
console.log(desktopItems[1]);
desktopItems.push('Infinity Gauntlet');
for (let i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i]);
}

// Boss Fight: Magic Number
function guessingGame(){
    let magicNumber = Math.floor(Math.random() * 100);
    let guess = 0;
    while(guess != magicNumber){
        guess = prompt('enter a number')
        if(guess < magicNumber){
            console.log('Too low!');
            if(guess >= magicNumber-10){
                console.log('Getting warmer!');
            }
        }
        else if(guess > magicNumber){
            console.log('Too high!');
            if(guess <= magicNumber+10){
                console.log('Getting warmer!');
            }
        }
    }
    console.log(`congrats the number was ${magicNumber}, you guessed right!`);
}
guessingGame()

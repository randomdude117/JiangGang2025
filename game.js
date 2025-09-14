var gameTextElement = document.getElementById('text');
var option1Button = document.getElementById('option1');
var option2Button = document.getElementById('option2');

option1Button.style.display = 'none';
option2Button.style.display = 'none';

let gameState = 1;

switch (gameState) {
    case 1:
        gameTextElement.innerText = "The morning was supposed to be quiet. " +
            "Fry the last few eggs in the fridge. Enjoy pickled vegetables with warm congee. " +
            "One last sip of coffee before heading out to start the day.";
        console.log(gameTextElement);


    case 2:
        gameTextElement.innerText = "Hello";
        console.log(gameTextElement);
}




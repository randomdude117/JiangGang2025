// var startText = document.getElementById('start');
// var gameTextElement = document.getElementById('text');
// var option1Button = document.getElementById('option1');
// var option2Button = document.getElementById('option2');
// let bleed = "No";
//
// option1Button.style.display = 'none';
// option2Button.style.display = 'none';
//
// function keyPress() {
//     return new Promise((resolve) => {
//         document.addEventListener('keydown', onKeyHandler);
//         function onKeyHandler(e) {
//             if (e.keyCode === 13) { //enter
//                 document.removeEventListener('keydown', onKeyHandler);
//                 resolve();
//             }
//             else if (e.keyCode === 32) { //space
//                 document.removeEventListener('keydown', onKeyHandler);
//                 resolve();
//             }
//         }
//     });
// }
// async function Begin() {
//     startText.innerText = "Start";
//     console.log(startText);
//     await keyPress();
//     startText.innerText = "";
//     Gogogo();
// }
//
// async function Gogogo() {
//     gameTextElement.innerText = "The morning was supposed to be quiet. " +
//         "Fry the last few eggs in the fridge. Enjoy pickled vegetables with warm congee. " +
//         "One last sip of coffee before heading out to start the day.";
//     console.log(gameTextElement);
//     await keyPress();
//     gameTextElement.innerText = "Instead, you woke up to white."; //should try transition the image
//     console.log(gameTextElement);
//     await keyPress();
//     gameTextElement.innerText = "The storm had started overnight, silent but relentless. " +
//         "By morning, the world behind the apartment’s windows vanished beneath a blanket of snow. " +
//         "Thick, heavy layers of white rendered the roads impassable. " +
//         "With no signal, no emergency radio, and no nearby signs of human life, you were stuck.  ";
//     console.log(gameTextElement);
//     await keyPress();
//     gameTextElement.innerText = "The Lucky Number 8 Apartment - " +
//         "your cozy sanctuary near the waterfront - " +
//         "was now a lonely prison of musty laundry and dwindling supplies. ";
//     console.log(gameTextElement);
//     await keyPress();
//     gameTextElement.innerText = "It’s been two weeks since you were supposed to leave.";
//     console.log(gameTextElement);
//     await keyPress();
//     gameTextElement.innerText = "The generator stopped running ages ago. " +
//         "You’re down to a few bottles of water, some  peanut butter, and a half pack of instant ramen. " +
//         "Nothing comes out of the faucet when you turn it on, except a few squeaks and some cold air. ";
//     console.log(gameTextElement);
//     await keyPress();
//     gameTextElement.innerText = "With each passing hour, you grow restless, " +
//         "desperately searching for a way to meet your friends and family, where safety awaits.";
//     console.log(gameTextElement);
//     await keyPress();
//     gameTextElement.innerText = "Will you go outside to search for supplies? " +
//         "Will you try to wait out the storm for another three days? " +
//         "Or will you gather your strength to trek back to Goffstown through the unforgiving cold?";
//     console.log(gameTextElement);
//     await keyPress();
//     gameTextElement.innerText = "make a choice";
//     console.log(gameTextElement);
//     option1Button.innerText = "outside";
//     option2Button.innerText = "snake";
//     console.log(option1Button,option2Button);
//     option1Button.style.display = 'grid';
//     option2Button.style.display = 'grid';
//     let state = "";
//     option1Button.addEventListener('click', function () {
//         gameTextElement.innerText = "You decide to head out to see if there is a faster means of transportation to get home. " +
//             "There are multiple car dealerships across the street where you could explore, " +
//             "but there is also a train station nearby.";
//         console.log(gameTextElement);
//         option1Button.style.display = 'none';
//         option2Button.style.display = 'none';
//         document.addEventListener('keydown', function(event) {
//             if (event.key === 'Enter' || event.key === ' ') {
//                 gameTextElement.innerText = "Where should you go? " +
//                     "You don’t have much time to prepare, so you can only choose one. " +
//                     "Choose wisely!";
//                 console.log(gameTextElement);
//                 option1Button.style.display = 'grid';
//                 option2Button.style.display = 'grid';
//             }
//         });
//         option1Button.innerText = "Check out the dealership";
//         option2Button.innerText = "Check the train station";
//         console.log(option1Button, option2Button);
//         pick("outside");
//     });
//     option2Button.addEventListener('click', function () {
//         snakeGame();
//         // gameTextElement.innerText = "staying inside, where to look?";
//         // console.log(gameTextElement);
//         // option1Button.innerText = "Look downstair";
//         // option2Button.innerText = "Look upstair";
//         // console.log(option1Button, option2Button);
//         // pick("inside");
//     });
// }
//
// function pick(state){
//         if (state === "outside"){
//             option1Button.addEventListener('click', function () {
//                 pick("dealer");
//             });
//             option2Button.addEventListener('click', function () {
//                 pick("station");
//             });
//         }
//         else if (state === "inside"){
//             option1Button.addEventListener('click', function () {
//                 state = "downstair";
//                 pick("downstair");
//             });
//             option2Button.addEventListener('click', function () {
//                 state = "upstair";
//                 pick("upstair");
//             });
//         }
//
//         else if(state === "dealer"){
//             option1Button.style.display = 'grid';
//             option2Button.style.display = 'grid';
//             gameTextElement.innerText = "How do you get inside?";
//             console.log(gameTextElement);
//             option1Button.innerText = "Smack open the front door";
//             option2Button.innerText = "Look for the backdoor";
//             console.log(option1Button,option2Button);
//             option1Button.addEventListener('click', function () {
//                 pick("frontIn");
//             });
//             option2Button.addEventListener('click', function () {
//                 pick("BackIn");
//             });
//         }
//
//         else if(state === "frontIn"){
//             gameTextElement.innerText = "Your leg is bleeding from the shatter glass";
//             console.log(gameTextElement);
//             option1Button.innerText = "Look for bandage";
//             option2Button.innerText = "Look for car key";
//             console.log(option1Button,option2Button);
//             option1Button.addEventListener('click', function () {
//                 pick("bandage");
//             });
//             option2Button.addEventListener('click', function () {
//                 pick("key");
//             });
//         }
//
//         else if(state === "station"){
//             gameTextElement.innerText = "The closest train station is a half hour walk from the apartment, " +
//                 "but you are able to hitch a ride on a passing ATV. " +
//                 "The helpful driver drops you off at the Quincy Center station before heading to their own destination. ";
//             console.log(gameTextElement);
//             option1Button.style.display = 'none';
//             option2Button.style.display = 'none';
//             document.addEventListener('keydown', function(event) {
//                 if (event.key === 'Enter' || event.key === ' ') {
//                     pick("stationIn");
//                 }
//             });
//         }
//
//         else if(state === "stationIn"){
//             gameTextElement.innerText = "The trains are not running due to the power outage. " +
//                 "However, you are hopeful that the blackout isn’t widespread. " +
//                 "Spotting an abandoned e-scooter by the entrance, you grab it, and follow the tracks to the next station.";
//             console.log(gameTextElement);
//             option1Button.style.display = 'grid';
//             option2Button.style.display = 'grid';
//             option1Button.innerText = "Go toward Braintree";
//             option2Button.innerText = "Go toward Wollaston";
//             console.log(option1Button,option2Button);
//             option1Button.addEventListener('click', function () {
//                 pick("braintree");
//             });
//             option2Button.addEventListener('click', function () {
//                 pick("wollaston");
//             });
//         }
//
//         else if(state === "wollaston"){
//             gameTextElement.innerText = "You arrive at Wollaston. " +
//                 "There is nothing useful here. Should you turn back or move on?";
//             console.log(gameTextElement);
//             option1Button.style.display = 'grid';
//             option2Button.style.display = 'grid';
//             option1Button.innerText = "Turn back";
//             option2Button.innerText = "Keep going";
//             console.log(option1Button,option2Button);
//             option1Button.addEventListener('click', function () {
//                 pick("insideOut");
//             });
//             option2Button.addEventListener('click', function () {
//                 pick("northQuincy");
//             });
//         }
//
// }
//
// Begin();
//
//
// // snakeGame();

var size = 20;
var timer;
var direction = "up";
var snake;
var apple;

function snakeGame() {
    drawGrid();
    snake = {x: size/2, y: size/2};
    drawSnake();
    start();
}

function drawGrid() {
    for(var i = 0; i < size; i++) {
        var row = document.createElement("tr");

        for(var x = 0; x < size; x++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        document.getElementById("grid").appendChild(row);
    }
}

function drawSnake() {
    var parent = document.getElementById("grid");
    parent.rows[snake.y].cells[snake.x].style.backgroundColor = "black";
}

function start() {
    createApple();
    document.onkeydown = checkKey;
    timer = setInterval(function(){move();}, 500); //speed
}

function move() {
    var parent = document.getElementById("grid");
    parent.rows[snake.y].cells[snake.x].style.backgroundColor = "white";

    switch(direction) {
        case "up":
            snake.y--;
            break;

        case "down":
            snake.y++;
            break;

        case "left":
            snake.x--;
            break;

        case "right":
            snake.x++;
            break;
    }

    if (snake.x < 0 || snake.y < 0 || snake.x >= size || snake.y >= size) {
        // document.getElementById("message").innerHTML = "Lost";
        clearInterval(timer);
    }

    else {
        drawSnake();
        checkApple();
    }
}

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        direction = "up";
    }
    else if (e.keyCode == '40') {
        direction = "down";
    }
    else if (e.keyCode == '37') {
        direction = "left";
    }
    else if (e.keyCode == '39') {
        direction = "right";
    }
}

function createApple() {
    const randomNumber = Math.random();

    if (randomNumber < 0.1) { //10% chance
        var x2 = Math.floor((Math.random() * size));
        var y2 = Math.floor((Math.random() * size));
        apple = {x:x2, y:y2};
        var parent = document.getElementById("grid");
        parent.rows[y2].cells[x2].style.backgroundColor = "green";
    }

    else if (randomNumber < 0.2) { // 10% chance (0.2 - 0.1)
        var x2 = Math.floor((Math.random() * size));
        var y2 = Math.floor((Math.random() * size));
        apple = {x:x2, y:y2};
        var parent = document.getElementById("grid");
        parent.rows[y2].cells[x2].style.backgroundColor = "yellow";
    }

    else {
        var x2 = Math.floor((Math.random() * size));
        var y2 = Math.floor((Math.random() * size));
        apple = {x:x2, y:y2};
        var parent = document.getElementById("grid");
        parent.rows[y2].cells[x2].style.backgroundColor = "red";
    }

}

function checkApple() {
    if (snake.x == apple.x && snake.y == apple.y) {
        createApple();
        addChild();
    }
}

snakeGame();


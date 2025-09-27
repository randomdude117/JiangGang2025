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

// var size = 20;
// var timer;
// var score;
// var direction = "right";
// var dx = 0;
// var dy = 0;
// let snake = [];
// var apple;
//
// function snakeGame() {
//     drawGrid();
//     snake.push({x: 10, y:10});
//     snake.push({x: 9, y:10});
//     snake.push({x: 8, y:10});
//     drawSnake();
//     start();
// }
//
// function drawGrid() {
//     for (var i = 0; i < size; i++) {
//         var row = document.createElement("tr");
//
//         for(var x = 0; x < size; x++) {
//             var cell = document.createElement("td");
//             row.appendChild(cell);
//         }
//         document.getElementById("grid").appendChild(row);
//     }
// }
//
// function drawSnake() {
//     var parent = document.getElementById("grid");
//     for (var i = 0; i <snake.length; i++) {
//         parent.rows[snake[i].y].cells[snake[i].x].style.backgroundColor = "black";
//     }
// }
//
// function start() {
//     createApple();
//     document.onkeydown = checkKey;
//     timer = setInterval(function(){move();}, 500); //speed
// }
//
// function move() {
//     var parent = document.getElementById("grid");
//     let head = {x: snake[0].x + dx, y: snake[0].y + dy};
//     snake.unshift(head);
//
//     if (head.x < 0 || head.y < 0 || head.x >= size || head.y >= size) {
//         // document.getElementById("message").innerHTML = "Lost";
//         clearInterval(timer);
//     }
//
//     else {
//         checkapple();
//         drawSnake();
//     }
//
// }
//
// function checkKey(e) {
//     e = e || window.event;
//     if (e.keyCode == '38') {
//         // direction = 'up';
//         dx = 0;
//         dy = -1;
//     }
//     else if (e.keyCode == '40') {
//         // direction = 'down';
//         dx = 0;
//         dy = 1;
//     }
//     else if (e.keyCode == '37') {
//         // direction = 'left';
//         dx = -1;
//         dy = 0;
//     }
//     else if (e.keyCode == '39') {
//         // direction = 'right';
//         dx = 1;
//         dx = 0;
//     }
// }
//
// function createApple() {
//     const randomNumber = Math.random();
//
//     if (randomNumber < 0.1) { //10% chance
//         var x2 = Math.floor((Math.random() * size));
//         var y2 = Math.floor((Math.random() * size));
//         apple = {x:x2, y:y2};
//         var parent = document.getElementById("grid");
//         parent.rows[y2].cells[x2].style.backgroundColor = "green";
//     }
//
//     else if (randomNumber < 0.2) { // 10% chance (0.2 - 0.1)
//         var x2 = Math.floor((Math.random() * size));
//         var y2 = Math.floor((Math.random() * size));
//         apple = {x:x2, y:y2};
//         var parent = document.getElementById("grid");
//         parent.rows[y2].cells[x2].style.backgroundColor = "yellow";
//     }
//
//     else {
//         var x2 = Math.floor((Math.random() * size));
//         var y2 = Math.floor((Math.random() * size));
//         apple = {x:x2, y:y2};
//         var parent = document.getElementById("grid");
//         parent.rows[y2].cells[x2].style.backgroundColor = "red";
//     }
//
// }
//
// function checkapple() {
//     if (head.x === apple.x && head.y === apple.y) {
//         createApple();
//     }
//     else {
//         snake.pop();
//     }
// }
//
// snakeGame();

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const resetButton = document.getElementById('resetButton');
resetButton.style.display = 'none';

const gridSize = 20; // Size of each snake segment and food item
const tileCount = canvas.width / gridSize; // Number of tiles in a row/column

let snake = [{ x: 10, y: 10 }]; // Initial snake position
let food = {};
let dx = 0; // x-direction velocity
let dy = 0; // y-direction velocity
let score = 0;
let gameInterval;
let changingDirection = false;

// Initialize game
function initGame() {
    snake = [{ x: 10, y: 10 }];
    dx = 0;
    dy = 0;
    score = 0;
    scoreDisplay.textContent = score;
    createFood();
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, 100); // Game speed
}

// Game loop
function gameLoop() {
    changingDirection = false;
    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();
    checkCollision();
}

// Clear the canvas
function clearCanvas() {
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Draw the snake
function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = 'lime';
        ctx.strokeStyle = 'darkgreen';
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        ctx.strokeRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
}

// Move the snake
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head); // Add new head

    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreDisplay.textContent = score;
        createFood();
    } else {
        snake.pop(); // Remove tail if no food eaten
    }
}

// Create food at a random position
function createFood() {
    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };

    // Ensure food doesn't spawn on the snake
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === food.x && snake[i].y === food.y) {
            createFood();
            return;
        }
    }
}

// Draw food
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    ctx.strokeRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

// Check for collisions (wall or self)
function checkCollision() {
    const head = snake[0];

    // Wall collision
    const hitLeftWall = head.x < 0;
    const hitRightWall = head.x >= tileCount;
    const hitTopWall = head.y < 0;
    const hitBottomWall = head.y >= tileCount;

    if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall) {
        gameOver();
        return;
    }

    // Self-collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }
}

// Game over
function gameOver() {
    clearInterval(gameInterval);
    alert('Game Over! Your score: ' + score);
}

// Handle keyboard input for direction changes
document.addEventListener('keydown', e => {
    if (changingDirection) return;
    changingDirection = true;

    const keyPressed = e.key;
    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingLeft = dx === -1;
    const goingRight = dx === 1;

    if (keyPressed === 'ArrowLeft' && !goingRight) {
        dx = -1;
        dy = 0;
    }
    if (keyPressed === 'ArrowUp' && !goingDown) {
        dx = 0;
        dy = -1;
    }
    if (keyPressed === 'ArrowRight' && !goingLeft) {
        dx = 1;
        dy = 0;
    }
    if (keyPressed === 'ArrowDown' && !goingUp) {
        dx = 0;
        dy = 1;
    }
});

// Reset button functionality
resetButton.addEventListener('click', initGame);

// Start the game when the page loads
initGame();
var startText = document.getElementById('start');
var gameTextElement = document.getElementById('text');
var option1Button = document.getElementById('option1');
var option2Button = document.getElementById('option2');

//option1Button.style.display = 'none';
//option2Button.style.display = 'none';

function keyPress() {
    return new Promise((resolve) => {
        document.addEventListener('keydown', onKeyHandler);
        function onKeyHandler(e) {
            if (e.keyCode === 13) { //enter
                document.removeEventListener('keydown', onKeyHandler);
                resolve();
            }
            else if (e.keyCode === 32) { //space
                document.removeEventListener('keydown', onKeyHandler);
                resolve();
            }
        }
    });
}
async function Begin() {
    startText.innerText = "Start";
    console.log(startText);
    await keyPress();
    startText.innerText = "";
    Gogogo();
}

async function Gogogo() {
    gameTextElement.innerText = "The morning was supposed to be quiet. " +
        "Fry the last few eggs in the fridge. Enjoy pickled vegetables with warm congee. " +
        "One last sip of coffee before heading out to start the day.";
    console.log(gameTextElement);
    await keyPress();
    gameTextElement.innerText = "Instead, you woke up to white."; //should try transition the image
    console.log(gameTextElement);
    await keyPress();
    gameTextElement.innerText = "The storm had started overnight, silent but relentless. " +
        "By morning, the world behind the apartment’s windows vanished beneath a blanket of snow. " +
        "Thick, heavy layers of white rendered the roads impassable. " +
        "With no signal, no emergency radio, and no nearby signs of human life, you were stuck.  ";
    console.log(gameTextElement);
    await keyPress();
    gameTextElement.innerText = "The Lucky Number 8 Apartment - " +
        "your cozy sanctuary near the waterfront - " +
        "was now a lonely prison of musty laundry and dwindling supplies. ";
    console.log(gameTextElement);
    await keyPress();
    gameTextElement.innerText = "It’s been two weeks since you were supposed to leave.";
    console.log(gameTextElement);
    await keyPress();
    gameTextElement.innerText = "The generator stopped running ages ago. " +
        "You’re down to a few bottles of water, some  peanut butter, and a half pack of instant ramen. " +
        "Nothing comes out of the faucet when you turn it on, except a few squeaks and some cold air. ";
    console.log(gameTextElement);
    await keyPress();
    gameTextElement.innerText = "With each passing hour, you grow restless, " +
        "desperately searching for a way to meet your friends and family, where safety awaits.";
    console.log(gameTextElement);
    await keyPress();
    gameTextElement.innerText = "Will you go outside to search for supplies? " +
        "Will you try to wait out the storm for another three days? " +
        "Or will you gather your strength to trek back to Goffstown through the unforgiving cold?";
    console.log(gameTextElement);
    await keyPress();
    gameTextElement.innerText = "make a choice";
    console.log(gameTextElement);
    option1Button.innerText = "outside";
    option2Button.innerText = "inside";
    console.log(option1Button,option2Button);
}

// function pick(){
//     let state = "";
//     option1Button.addEventListener('click', function () {
//         state = "outside";
//         gameTextElement.innerText = "outside now";
//         option1Button.innerText = "outside option 1";
//         option2Button.innerText = "outside option 2";
//         console.log(option1Button, option2Button);
//     });
//     option2Button.addEventListener('click', function () {
//         state = "inside";
//         gameTextElement.innerText = "staying inside";
//         option1Button.innerText = "inside option 1";
//         option2Button.innerText = "inside option 2";
//         console.log(option1Button, option2Button);
//     });
//
//     while (true) {
//         if (state === "outside"){
//             gameTextElement.innerText = "Where to go";
//             console.log(gameTextElement);
//             option1Button.innerText = "outside option 1";
//             option2Button.innerText = "outside option 2";
//             console.log(option1Button, option2Button);
//             option1Button.addEventListener('click', function () {
//                 state = "outside";
//                 gameTextElement.innerText = "outside now";
//                 option1Button.innerText = "outside option 1";
//                 option2Button.innerText = "outside option 2";
//                 console.log(option1Button, option2Button);
//             });
//             option2Button.addEventListener('click', function () {
//                 state = "inside";
//                 gameTextElement.innerText = "staying inside";
//                 option1Button.innerText = "inside option 1";
//                 option2Button.innerText = "inside option 2";
//                 console.log(option1Button, option2Button);
//             });
//         }
//         else if (state === "inside"){
//             gameTextElement.innerText = "staying inside";
//             option1Button.innerText = "inside option 1";
//             option2Button.innerText = "inside option 2";
//             console.log(option1Button, option2Button);
//         }
//         break;
//     }
// }

Begin();
// Gogogo();
//pick();









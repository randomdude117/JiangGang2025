var startText = document.getElementById('start');
var gameTextElement = document.getElementById('text');
var option1Button = document.getElementById('option1');
var option2Button = document.getElementById('option2');
let bleed = "No";

option1Button.style.display = 'none';
option2Button.style.display = 'none';

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
    option1Button.style.display = 'grid';
    option2Button.style.display = 'grid';
    let state = "";
    option1Button.addEventListener('click', function () {
        gameTextElement.innerText = "outside now, where to go?";
        console.log(gameTextElement);
        option1Button.innerText = "Check out the dealership and see if any of the car start";
        option2Button.innerText = "Check the train station";
        console.log(option1Button, option2Button);
        pick("outside");
    });
    option2Button.addEventListener('click', function () {
        gameTextElement.innerText = "staying inside, where to look?";
        console.log(gameTextElement);
        option1Button.innerText = "Look downstair";
        option2Button.innerText = "Look upstair";
        console.log(option1Button, option2Button);
        pick("inside");
    });
}

function pick(state){
        if (state === "outside"){
            option1Button.addEventListener('click', function () {
                pick("dealer");
            });
            option2Button.addEventListener('click', function () {
                pick("station");
            });
        }
        else if (state === "inside"){
            option1Button.addEventListener('click', function () {
                state = "downstair";
                pick();
            });
            option2Button.addEventListener('click', function () {
                state = "upstair";
                pick();
            });
        }

        else if(state === "dealer"){
            gameTextElement.innerText = "How do you get inside?";
            console.log(gameTextElement);
            option1Button.innerText = "Smack open the front door";
            option2Button.innerText = "Look for the backdoor";
            console.log(option1Button,option2Button);
            option1Button.addEventListener('click', function () {
                pick("frontIn");
            });
            option2Button.addEventListener('click', function () {
                pick("BackIn");
            });
        }

        else if(state === "frontIn"){
            gameTextElement.innerText = "Your leg is bleeding from the shatter glass";
            console.log(gameTextElement);
            option1Button.innerText = "Look for bandage";
            option2Button.innerText = "Look for car key";
            console.log(option1Button,option2Button);
            option1Button.addEventListener('click', function () {
                pick("bandage");
            });
            option2Button.addEventListener('click', function () {
                pick("key");
            });
        }

}

Begin();










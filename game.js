const gameTextElement = document.getElementById('game-text');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');

let currentState = {
    location: 'start',
    inventory: []
};

const scenes = {
    start: {
        text: "Wake up, time to choose.",
        options: [
            { text: "Go outside", nextScene: 'outside' },
            { text: "Stay inside", nextScene: 'inside' }
        ]
    },
    outside: {
        text: "Look like there is something up ahead.",
        options: [
            { text: "Go and see what is up ahead", nextScene: 'ahead' },
            { text: "Go back inside", nextScene: 'backin' }
        ]
    },
    inside: {
        text:"filler text.",
    },

};

function updateGame(sceneName) {
    const currentScene = scenes[sceneName];
    gameTextElement.textContent = currentScene.text;

    option1Button.textContent = currentScene.options[0].text;
    option1Button.onclick = () => updateGame(currentScene.options[0].nextScene);

    option2Button.textContent = currentScene.options[1].text;
    option2Button.onclick = () => updateGame(currentScene.options[1].nextScene);
}

updateGame('start'); // Initialize the game
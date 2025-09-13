const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: 'Wake up, need to choose.',
        options: [
            {
                text: 'Go outside',
                setState: {outside: true},
                nextText: 2
            },
            {
                text: 'Stay inside',
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]

startGame()

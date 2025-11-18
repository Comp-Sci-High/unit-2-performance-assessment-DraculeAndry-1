const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc

let requestURL = "https://www.dragonball-api.com/api"

console.log("🐉 Welcome to the Dragon Ball Chatbox!")
console.log("Pick a Dragon Ball character:")
console.log("goku", "vegeta", "trunks", "gohan", "broly", "gogeta", "vegito", "jiren")

let draconicPrompt = prompt("Enter the character you wish to view: ")

async function dragonBallAPI(character) {
    const options = {
        method: 'GET',
        headers: {
            Authorization: '',
            "Content-Type": 'application/json'
        }
    }

    const response = await fetch(`${requestURL}/${character}`);

    const data = await response.json()
    console.log(data)
    return data
}

dragonBallAPI(draconicPrompt);

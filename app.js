const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl = document.getElementById("password")
let generateButton = document.getElementById("button-el")
let resetEl = document.getElementById("reset")
var clicked = false

generateButton.addEventListener("click", function() {
    if (!clicked) {
        clicked = false
        for (let i = 0; i <= 15; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            let assignment = characters[randomIndex]
            passwordEl.textContent += assignment
        }
        clicked = true        
    }
})

resetEl.addEventListener("click", function() {
    assignment = ""
    passwordEl.textContent = assignment
    clicked = false
})
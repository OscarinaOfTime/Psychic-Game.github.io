var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = "";

var computerChoice = alphabet[Math.floor(Math.random() *alphabet.length)];

console.log(computerChoice)

document.onkeypress = function(event) {
    var userGuess = event.key;
    
    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
        guessesLeft.push(event.key);
    }

    if(guesses === 0){
        losses++;
    
    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('current guesses').innerHTML = "your guesses so far:" + guessesLeft;
 
}}

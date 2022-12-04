/*
Game Rules: 
Player must guess a number between a min and a max
Player gets a certain amount of guesses
Notify player of guesses remaining
Notify player of the correct answer if they lose
Let player choose to play again 
*/

// Game values
let
  min = 1, 
  max = 10,   
  winningNum = getRandomNum(min, max),   
  guessesLeft = 3;
    
// UI elements
//const game = document.getElementById('game'),
const
  game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener, added to game id, a click event doesn' work right
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  // cannot use === NaN
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if (guess === winningNum) {
    // Game over -won

    gameOver(true, `${winningNum} is correct!, YOU WIN!`, 'green');

    // //Disable input
    // guessInput.disabled = true;
    // // Change border color
    // guessInput.style.borderColor = 'green';
    // // Set message
    // setMessage(`${winningNum} is correct!, YOU WIN!`, 'green');
  } else {
    // wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //game over- lost

      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`, 'red');

      // //Disable input
      // guessInput.disabled = true;
      // // Change border color
      // guessInput.style.borderColor = 'red';
      // // Set message
      // setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');


    } else {
      // game continues, answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      //Clear input
      guessInput.value = '';
      
      //Tell user it's the wrong number 
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');


    }
    
  }
});

function gameOver(won, msg) {
  let color; 
  won === true ? color = 'green' : color = 'red';

  //Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  message.style.color = color;
  // Set message
  setMessage(msg);
}

// Play again?
guessBtn.value = 'Play Again?'
guessBtn.className += 'play-again'

//Get Winning Num (JS using "hoisting" so your formula can call functions before declaring them.)
function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

//Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}; 
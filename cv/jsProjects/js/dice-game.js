function rollDice() {
  let goldCoins = 0
  for (let i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6)+ 1; 
    alert(roll)
    if (roll === 1) {
      alert("Game over, no more rolls!")
      break;
    } else if (roll < 5) {
      continue;
    } else if (roll === 5) {
      goldCoins += 5
      alert("Congratulations, you win 5 gold coins! Your running total is " + goldCoins + ".")
    } else {
      goldCoins += 6
      alert("Congratulations, you win 6 gold coins! Your running total is " + goldCoins + ".")
    }     
  }
  alert("You won a total of " + goldCoins + " coins!")
}

function playGame(){
  // create a random number generator for dice 1
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  //alert(randomNumber1);

  // create a random number for dice 2
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  //alert(randomNumber2);

  // create a sourcefile variable for diceimage
  var sourceAttribute = "./images/dice" + randomNumber1 + ".png";
  var sourceAttribute2 = "./images/dice" + randomNumber2 + ".png";

  // variable for winner
  var winnerStatement = "";

  // set the attribute based on the random number
  document.querySelector("img.img1").setAttribute("src", sourceAttribute);
  document.querySelector("img.img2").setAttribute("src", sourceAttribute2);

  // select a winner based on the dice draw
  if (randomNumber2 > randomNumber1){
    winnerStatement = "Player 2 wins";
  }
  else if (randomNumber2 < randomNumber1)
  {
    winnerStatement = "Player 1 wins";
  }
  else{
    winnerStatement = "Draw!";
  }
  // update the h1 tag with the winner
  document.querySelector("h1").textContent = winnerStatement;
}

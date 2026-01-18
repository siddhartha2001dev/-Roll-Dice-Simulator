alert("Welcome to Dicee!! Click OK to start the game.");

function rollDice() {

  var diceSound = document.getElementById("diceSound");
  diceSound.currentTime = 0; 
  diceSound.play();


  var image1 = document.querySelectorAll("img")[0];
  var image2 = document.querySelectorAll("img")[1];

  
  image1.classList.remove("roll");
  image2.classList.remove("roll");


  void image1.offsetWidth;
  void image2.offsetWidth;

 
  image1.classList.add("roll");
  image2.classList.add("roll");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

}

document.getElementById("btn").addEventListener("click", rollDice);
document.getElementById("btn").addEventListener("click", function() {
  var diceSound = document.getElementById("diceSound");
  diceSound.play();
});
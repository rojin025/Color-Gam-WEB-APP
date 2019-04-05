var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  //generate random Colors
  colors = generateRandomColor(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color to match the pickedColor
  colorDisplay.textContent = pickedColor;
  //change color of squuares
  for(var i = 0; i < squares.length; i ++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#C0b283";
})

colorDisplay.textContent = pickedColor;


//Logic
for(var i = 0; i < squares.length; i++ ){
  //add initail colors to squuare
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click",function(){
    //Grab color of clicked squares
    var clickedColor = this.style.background;
    //Compare color  to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again";
      changeColor(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";

    }
  });
}

function changeColor(color){
  //Loop for squares
  for (var i = 0; i < squares.length; i++) {
    //Change colors
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//Function for array to generate random color
function generateRandomColor(num) {
  //array
  var arr = [];
  //Loop
  for(var i = 0; i < num; i++) {
    //get random RGB color and push into array
    arr.push(randomColor());
  }
  //return
  return arr;
}

// Function to generate Random RGB colors
function randomColor(){
  // Pick random no. for R from 0 t0 255
  var r = Math.floor(Math.random() * 256);
  // Pick random no. for G from 0 t0 255
  var g = Math.floor(Math.random() * 256);
  // Pick random no. for B from 0 t0 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++ ){
  //add initail colors to squuare
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click",function(){
    //Grab color of clicked squares

    //Compare color  to pickedColor
  });
}

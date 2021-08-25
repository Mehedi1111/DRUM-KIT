for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click" , function() {

    var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
  });

}

document.addEventListener("keypress", function(event) {
    makeSound(event.key)
});

function makeSound(key) {

  switch (key) {
  case "W":
  var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
  break;

  case "A":
  var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
  break;

  case "S":
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
  break;

  case "D":
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
  break;

  case "J":
  var snare = new Audio('sounds/snare.mp3');
  snare.play();
  break;

  case "E":
  var kick = new Audio('sounds/kick-bass.mp3');
  kick.play();
  break;

  case "L":
  var crash = new Audio('sounds/crash.mp3');
  crash.play();
  break;
}
}

var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userChosenColour=[];
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(50).fadeOut(50).fadeIn(50);
    playSound(randomChosenColour);
}
 

 function playSound(name){
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
 }

 function animatePress(currentColour)
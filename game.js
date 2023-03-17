var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userChosenColour=[];
var userClickedPattern=[];
var level=0;
var started=false;
$(document).keypress(function()
{
  if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  $(".btn").click(function() {
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(50).fadeOut(50).fadeIn(50);
    playSound(randomChosenColour);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
        setTimeout(function () {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
}


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("Success");
        console.log(userClickedPattern[currentLevel], gamePattern[currentLevel]);
        if(gamePattern.length===userClickedPattern.length) {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else {
        console.log("wrong");
        playSound("wrong");
        $("#level-title").text("Game Over, Press any key to play again");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");  
        },200);
       
        startOver();
    }
}
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
  
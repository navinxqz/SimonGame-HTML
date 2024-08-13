
var btncolor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
// nextSequence();

var userClickedPattern = [];
$(".btn").on("click", function(){
    var chosenColor = $(this).attr("id");

    userClickedPattern.push(chosenColor);
    playSound(chosenColor);
    animatePress(chosenColor);
    // console.log(userClickedPattern);
});

$(document).on("keydown",function(event){
    nextSequence();
});

function nextSequence(){
    var rand = Math.floor(Math.random()*4);
    var randomcolor = btncolor[rand];

    gamePattern.push(randomcolor);
    $("#"+randomcolor).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    playSound(randomcolor);
}
function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}
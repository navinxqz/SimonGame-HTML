
var btncolor = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];
var gStarted = false;
var level = 0;

$(".btn").on("click", function(){
    var chosenColor = $(this).attr("id");

    userClickedPattern.push(chosenColor);
    playSound(chosenColor);
    animatePress(chosenColor);

    checkAns(userClickedPattern.length - 1);
    // console.log(userClickedPattern);
});

$(document).on("keydown",function(event){
    if(!gStarted){

        nextSequence();
        level++;

        gStarted = true;
        $("h1").text("Level "+level);
    }
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
function checkAns(currentlvl){
    if(userClickedPattern[currentlvl] == gamePattern[currentlvl]){
        // console.log("Success");
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
        
    }
}
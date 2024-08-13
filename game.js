
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

        // $("h1").text("Level "+level);
        nextSequence();
        gStarted = true;
    }
});

function nextSequence(){
    level++;
    $("h1").text("Level "+level);

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
    if(userClickedPattern[currentlvl] === gamePattern[currentlvl]){
        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function(){
                userClickedPattern = [];
                nextSequence();
            }, 1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over! Press Any Key to Restart");
        startOver();
        }  
}
function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    
    gStarted = false;
    level = 0;
}
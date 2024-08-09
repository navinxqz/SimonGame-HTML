
var btncolor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
nextSequence();

function nextSequence(){
    var rand = Math.floor(Math.random()*4);
    var randomcolor = btncolor[rand];

    gamePattern.push(randomcolor);
    console.log(gamePattern);
}
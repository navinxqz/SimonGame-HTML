// $(document).on("keydown",function(event){
//     $("h1").slideToggle();
// });
var btncolor = ["red", "blue", "green", "yellow"];
var randomcolor = btncolor[nextSequence()];

var gamePattern = [];
gamePattern.push(randomcolor);
console.log(gamePattern);

function nextSequence(){
    var rand = Math.floor(Math.random()*4);
    return rand;
}
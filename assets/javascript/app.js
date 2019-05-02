$(function(){
//variables for win and loss tracker
let win = 0;
let loss = 0;
let unanswered = 0;

//our questions in an array
//change the answer format so it only requires on value



//start game function
function startGame() {
//initiate start page
    //event listener for start button
    //if clicked start game

//reset array for loop

//+++++++++++++ Timer Setup +++++++++++++++++++++++//
//setInterval for 30 seconds
    //move on to next card after time is up

}

//+++++++++++ Button Assignment ++++++++++++++//
$("button").on("click", function() {
    //if wrong button clicked then 
    if($("#wrong") === 0) {
        //track loss
        loss++;
        $()
    }
        
    //if no button clicked then
        //track unanswered
    //if correct button clicked then
        //track wins


})

   







//++++++++++++ Page Timer ++++++++++++++++++//
//60 second timer counting down
var counter = 60;
var intervalId;

function start() {
    stop();
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    
    counter--;

    $("#timer").html("<h3>" + counter + "</h3>");
    
    if(counter === 0) {
        stop();
        console.log("stop");
        //go to score tracker card
    }

}

function stop() {
    
    clearInterval(intervalId);
}

start();







})
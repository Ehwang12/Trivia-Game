$(function(){
//variables for win and loss tracker
let win = 0;
let loss = 0;
let unanswered = 0;

var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
//our questions in an array
//change the answer format so it only requires on value



//start game function
function startGame() {

    //reset player score
      //win = 0;
      //loss = 0;
      //unanswered = 0;

    //reset questions
      //uncheck answers

    //reset timer
    
}

//+++++++++++ Button Assignments ++++++++++++++//

//if wrong answer clicked
$("#submit").on("click", function(){
    answer1 = $("#correct1");
    answer2 = $("#correct2");
    answer3 = $("#correct3");
    answer4 = $("#correct4");
    answer5 = $("#correct5");
    

   if(answer1.is(':checked')) {
       win++;
       
   } else {
       loss++;
       
   }

   if(answer2.is(':checked')) {
    win++;
   } else {
       
       loss++;
       
   }
   
   if(answer3.is(':checked')) {
       win++;

   } else {
       
       loss++;
       
   }
   
   if(answer4.is(':checked')) {
       win++;

   } else {
       
       loss++;
       
   }
   
   if(answer5 .is(':checked')) {
       win++;

   } else {
       
       loss++;
       
   }

   if ($(".btn").checked === true) {
       console.log("sucks");
   }
   console.log("wins: " + win + " Loss: " + loss + " unanswered " + unanswered);
   //switch statement? for answers?
   
   });




//if no answers clicked:




function generateQuiz() {

}





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
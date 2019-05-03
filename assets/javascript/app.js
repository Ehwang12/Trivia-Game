$(function(){
//variables for win and loss tracker
let win = 0;
let loss = 0;
let unanswered = 0;

//variables for each correct answer
var answer1;
var answer2;
var answer3;
var answer4;
var answer5;

//timer variables
var counter = 30;
var intervalId;


function startGame() {
//start game function


    //reset player score
      win = 0;
      loss = 0;
      unanswered = 0;
    

    //reset questions
      //uncheck answers

    //reset timer
      counter = 30;


}

//++++++++++++ Page Timer ++++++++++++++++++//
//30 second timer counting down

function startTimer() {
    stop();
    intervalId = setInterval(decrement, 1000);
    }

function decrement() {
    
    counter--;

    $("#timer").html("<h3>" + counter + "</h3>");
    
    if(counter === 0) {
        stop();

        //show scores
        
        
        }

    }

function stop() {
    
    clearInterval(intervalId);
    }


startTimer();
startGame();


//+++++++++++ Button Assignments ++++++++++++++//

//button event handler
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

   //if no answers clicked:
   //unanswered++;
   //update counter;
   //display counter;

   stop();

   //display score variable
    let scoreCard = 
    $("#score").append(
    "<h1>Wins: " + win + "</h1><br><h1>Loss: " + loss + "</h1><br><h1>Unanswered: " + unanswered + "</h1>");

   //showing score
   scoreCard.show();
 

   //how to stop submit button from appending more?
   setTimeout(hideScore(), 10000);

   function hideScore() {
    scoreCard.hide();
   }
   
   startGame();
  
});


})
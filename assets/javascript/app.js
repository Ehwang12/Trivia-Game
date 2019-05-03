$(function(){
//variables for win and loss tracker
let win = 0;
let loss = 0;
let unanswered = 0;
let scoreCard;
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

    startTimer();
    
    //reset player score
      win = 0;
      loss = 0;
      unanswered = 0;
    
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
            //update wins
            //update loss
            //update unanswered
        
        }

    }

function stop() {
    
    clearInterval(intervalId);
    }


startTimer();



//+++++++++++ Button Assignments ++++++++++++++//

//button event handler
$(document).on("click", "#submit", function(){
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
   
   if(answer5.is(':checked')) {
       win++;

   } else {
       
       loss++;
       
   }

   //if no answers clicked:
   //unanswered++;
   //update counter;
   //display counter;

   stop();
   
   //how to stop submit button from appending more?
   let scoreCard = $("#score");
   //display score variable
    scoreCard.append("<h1>Wins: " + win + "</h1><br><h1>Loss: " + loss + "</h1><br><h1>Unanswered: " + unanswered + "</h1>");

   
});

$(document).on("click", "#reset", function() {
    //reset questions | in this case I used reload page but there's probably a better solution
    let scoreCard = $("#score");
    scoreCard.hide();
    
    //uncheck all buttons

    //possible solution to unchecking buttons
    
    //uncheck questions
    //$("#uncheckUse").removeClass("active");



    startGame();
});


})
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


    //reset player score
      //win = 0;
      //loss = 0;
      //unanswered = 0;

    //reset questions
      //uncheck answers

    //reset timer
      //counter = 60;
    


//++++++++++++ Page Timer ++++++++++++++++++//
//60 second timer counting down
var counter = 10;
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
        $(".questionsContainer").hide();
       
        //go to score tracker card
        scoreCard();
        }

    }

function stop() {
    
    clearInterval(intervalId);
    }


start();

function scoreCard() {
    //create div to put elements in
    let scoreCard = $("<div class='row'>");
    let winsDiv = $("<div class='col-12 text-center'>");
    
    scoreCard.append(winsDiv);
        
    //put wins in element
    let wins = winsDiv.append("<h1>Wins: " + win + "</h1>");
    //append win score to DOM
    $(".questionsContainer").append(wins);


}



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

   $(".questionsContainer").hide();

   stop();

   scoreCard();
  
});




//if no answers clicked:
   //unanswered++;
   //update counter;
   //display counter;









})
$(function(){
//variables for win and loss tracker
let win = 0;
let loss = 0;

//our questions in an array
//change the answer format so it only requires on value
let questionsArray = [
    {question:"What does Amity mean?", 
     options:"a) friendship", 
     answer:"The answer is friendship! It's always friendship..."},
    {question:"\"That's some bad hat, Harry\"-Who says this line?", 
     options:"d) Chief Brody", 
     answer:"The answer is Chief Brody (someone's grumpy)."},
    {question:"What song does Quint always sing?",
     options:"b) Ladies from Maine",
     answer:"The answer is Ladies of Spain." },
    {question:"Mrs. Kintner sets a bounty of ___________ to catch the shark.",
     options:"b) $3000",
     answer:"The answer is $3000. That's a lotta change!"  },
    {question:"What was the loving nickname given to the mechanical shark used in the film?",
        options:"c) Bruce",
        answer:"The answer is Bruce, named after Steven Spieldberg's lawyer." }
]


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

//+++++++++++ Question Generator ++++++++++++++//

//for loop through 'questions' array 
for(let i = 0; i<questionsArray.length; i++) {
    //each time you go through loop select question value from array
    let question = questionsArray.question[i];
    console.log(question);
    //create and append to question div
}
   

    //+++++ to create answer buttons +++++++++//
        //each time through loop grab each comma section and create a button out of each element
        //or alternatively assign the option comma sections to preconstructed buttons?







//++++++++++++ Page Setup ++++++++++++++++++//

//each page has a 30 second timer

//if the player chooses right answer then...
    //the next card will show with the 'correct' card
    //win tracker updates ++
    //congratulatory gif 
    //moves to the next card after 30 seconds

//else if player chooses wrong card then...
    //the next card will show with the 'incorrect' card
    //loss tracker updates ++
    //disappointment gif
    //moves to the next card after 30 seconds

//else if player puts in no input || the timer runs out then...
    //the next card will show with the 'incorrect' card
    //unanswered tracker updates ++
    //disappointment gif
    //moves to the next card after 30 seconds





})
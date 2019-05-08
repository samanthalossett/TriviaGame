var timer= 6;
var interval; 
var score=0; //will keep track of users score//
var q1;
q1=("What object must be caught in order to end a Quidditch match? A=The Golden Snitch");


$( document ).ready(function() { //"now start loading javasctipt and JQ"//
        console.log( "ready!" );


$(".timer").on("click", start()); //**HELP** */when button is clicked, start function starts, its starting without clicking it//


function start(){     //function to start the timer and call decrement fucntion//
    clearInterval(interval);
    interval= setInterval(decrement, 1000);
    $(".questions").text(q1);
}

function stop(){  //function to stop timer and clear the interval//
    clearInterval(interval);  
}
// function reset(){   // **HELP**/I want to use this function to start the timer all over again /
//     timer=6;
//     }
function decrement(){  //decrement function to decrease number from 60 by 1 and replace the html text//
    timer--;
    $(".timer").html(timer);
    if (timer=== 0){
        stop();
        alert("Times up!");
        $(".timer").html("Try again!");
        // reset();  
    }
}
})

//come up with 5 questions and answers://
//"You're a little scary sometimes, you know that? Brilliant... but scary." Who is Ron giving this awkward compliment to? A=Hermione//
//What object must be caught in order to end a Quidditch match? A=The Golden Snitch//
//In "Harry Potter & the Order of the Phoenix", what colour is Tonks' hair when we first meet her? A=Purple//
//In "The Prisoner of Azkaban" Professor Lupin played music in his class. What did he play the music on? A= a record player//

//insert Q1 once "timer" button is clicked//

//once user clicks an answer, go to Q2//

//and so on//
//when timer is up OR user answered each Q, end game and give result//


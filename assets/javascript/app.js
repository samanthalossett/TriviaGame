var timer= 6;
var interval; 
var score=0; //will keep track of users score//
var data=[  // object, array, etc.//

    {
        question:"What object must be caught in order to end a Quidditch match?",
            answers: ["Ball", "Snitch", "Nimbus 2,000"],
            correctAnswer: "Snitch",
           
    },
    {
        question:"In Harry Potter & the Order of the Phoenix, what colour is Tonks' hair when we first meet her?",
            answers: ["Purple", "Blue", "Pink"],
            correctAnswer: "Pink",
    },
    {
        question:"In The Prisoner of Azkaban Professor Lupin played music in his class. What did he play the music on?",
            answers: ["Record Player", "Discman", "Radio"],
            correctAnswer: "Record Player",
    },
];

$( document ).ready(function() { //"now start loading javasctipt and JQ"//
        console.log( "ready!" );

function appendQuestions(){
    for (var i=0; i<data.length; i++){  // for loop to iterate through my array//
           $("#questions").append("<h2>" + data[i].question + "</h2>")   
                for (var j=0; j<data[i].answers.length; j++){
                    $("#questions").append("<input type='radio' value=data[i].answers[j]>" + data[i].answers[j] + "</input>") // also create some value attributes// value=data[i].answers[j] inside the buttons//
                    
                }         
}

}

$(".timer").click(function() { //when button is clicked, start function starts//
    start()
}); 

function start(){     //function to start the timer and call decrement fucntion, then append the questions//
    clearInterval(interval);
    interval= setInterval(decrement, 1000);
    appendQuestions();
}

function stop(){  //function to stop timer and clear the interval//
    clearInterval(interval);  
    
}
function keepScore(){
    $("#questions").on("click", function(){
        data[i].answers[j]=== correctAnswer;
            score++;
            console.log(score);
        })
}
function reset(){   //function to start the timer all over again /
    timer=6;
    $("#questions").empty();
    }

function decrement(){  //decrement function to decrease number from 60 by 1 and replace the html text//
    timer--;
    $(".timer").html(timer);
    if (timer=== 0){
        stop();
        alert("Times up!");
        keepScore();
        $(".timer").html("Try again!");
        reset();  
    }
}

})
// grab the user ansers, compare w/ correct answers, add tos core board  // **HELP**
//when timer is up OR user answered each Q, end game and give result//


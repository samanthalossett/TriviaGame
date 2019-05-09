var timer= 4;
var interval; 
var score=0; //will keep track of users score//
var data=[  // object, array, etc.//
    {
        question:"What object must be caught in order to end a Quidditch match?",
            answers: ["Hermione", "Harry", "Ron"],
            correctAnswer: "Hermione",
    },
    {
        question:"In Harry Potter & the Order of the Phoenix, what colour is Tonks' hair when we first meet her?",
            answers: ["Hermione", "Harry", "Ron"],
            correctAnswer: "Hermione",
    },
    {
        question:"In The Prisoner of Azkaban Professor Lupin played music in his class. What did he play the music on?",
            answers: ["Hermione", "Harry", "Ron"],
            correctAnswer: "Hermione",
    },
    {
        question:"What object must be caught in order to end a Quidditch match?",
            answers: ["Hermione", "Harry", "Ron"],
            correctAnswer: "Hermione",
    },
     
];

$( document ).ready(function() { //"now start loading javasctipt and JQ"//
        console.log( "ready!" );

function appendQuestions(){
    for (var i=0; i<data.length; i++){  // for loop to iterate through my array//
           $("#questions").append("<h2>" + data[i].question + "</h2>")   
                for (var j=0; j<data[i].answers.length; j++){
                    $("#questions").append("<button>" + data[i].answers[j] + "</button>") //will have to vhange these to radio buttons eventually, also create some value attributes// value=data[i].answers[j] inside the buttons//
                }         
}
}

$(".timer").click(function() { //when button is clicked, start function starts, its starting without clicking it//
    start()
}); 


function start(){     //function to start the timer and call decrement fucntion//
    clearInterval(interval);
    interval= setInterval(decrement, 1000);
    appendQuestions();
}

function stop(){  //function to stop timer and clear the interval//
    clearInterval(interval);  
}

function reset(){   //function to start the timer all over again /
    timer=4;
    }

function decrement(){  //decrement function to decrease number from 60 by 1 and replace the html text//
    timer--;
    $(".timer").html(timer);
    if (timer=== 0){
        stop();
        alert("Times up!");
        $(".timer").html("Try again!");
        reset();  
    }
}
})


//insert Q1 once "timer" button is clicked//

//once user clicks an answer, go to Q2//

//and so on//
//when timer is up OR user answered each Q, end game and give result//


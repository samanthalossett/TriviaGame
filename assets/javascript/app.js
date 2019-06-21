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

$( document ).ready(function() {       //"now start loading javasctipt and JQ"//
        console.log( "ready!" );

function appendQuestions(){
    for (var i=0; i<data.length; i++){  // for loop to iterate through my array//
           $("#questions").append("<h2>" + data[i].question + "</h2>")   
                for (var j=0; j<data[i].answers.length; j++){
                    $("#questions").append(`<input type="radio" name= ${i} id= ${i} value=${data[i].answers[j]} >  ${data[i].answers[j]}  </input>`);
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
    $("#scoreboard").empty();
}

function stop(){  //function to stop timer and clear the interval//
    clearInterval(interval);  
    timer=6;
    
}

function reset(){   //function to start the timer all over again /
    $("#questions").empty();
   
    }
                                    /// HELP HERE**** I want to get the value of the user button clicks!**//
function getScore(){
        var q1= $("input[name=0]:checked").val();
        var q2= $("input[name=1]:checked").val();
        var q3= $("input[name=2]:checked").val();
        var userAnswers= [q1, q2, q3];
        var correctAnswers= ["Snitch","Pink","Record Player",];
        for (var k=0; k<userAnswers.length; k++) {
            if (userAnswers[k]=== correctAnswers[k]){
                score++;
            }
        }

    console.log(q1, q2, q3);
}

function decrement(){  //decrement function to decrease number from 60 by 1 and replace the html text//
    timer--;
    $(".timer").html(timer);
    if (timer=== 0){
        getScore(); 
        stop();
        alert("Times up!");
        $("#scoreboard").append("<h1>", 'You scored'," ", score,  "</h1>");
        $(".timer").html("Try again!");
        reset();  
       
    }
    
    
}
})






var correct = 0;
var incorrect =0;
var unanswered =0;

var container = document.getElementById("gameContainer");
var questionEl = document.getElementById("question");
var trueinput = document.getElementById("true-value");
var falseinput = document.getElementById("false-value");

var questions = [{
    "question": "There are seven red stripes on the United State flag.",
     "answer": true,
},{
    "question": "The Bill Of Rights contains 10 amendments to the Constitution.",
    "answer": true,
},{
    "question": "Thomas Jefferson was the second president of the United States.",
    "answer": false,
},{
    "question": "Albert Einstein was awarded the Nobel Prize in Physics.",
    "answer": true,
}
];

var questionDiv = $("#question");
for (var i=0; i<questions.length; i++) {
    // var newQuestionDiv =$("<div>" + questions[i].question + "</div");
    
        questionEl.textContent = questions[i].question;
    // questionDiv.append(newQuestionDiv);
    console.log(questionDiv);
}
console.log(questionDiv);


var timeRemaining = document.getElementById("#time")
// timeRemainingText.textContent = "Time Remaining" + timeRemaining;
var timeRemaining = 60;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeRemaining--;
    $("#time").html("<h2>" + timeRemaining + "</h2>");
    if(timeRemaining === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}
run();




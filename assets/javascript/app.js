questions = [
    {
        question: "Which of these Pokémon is Poison-type?",
        answers: {
            a: "Growlithe",
            b: "Electrode",
            c:"Omanyte",
            d:"Venemoth"
        },
        correctAnswer: "d"
    },
    {
        question: "Which one of these types has the most Pokemons that have it?",
        answers: {
            a: "Grass Ground",
            b: "Fighting Steel",
            c: "Dark Ghost",
            d: "Bug Fighting"
        },
        correctAnswer: "d"
    },
    {
        question: "What type is Parasect?",
        answers: {
            a: "Electric/Flying",
            b: "Bug/Dark",
            c: "Grass/Ghost",
            d: "Bug/Grass"
        },
        correctAnswer: "d"
    },
    {
        question: "What type has never been paired with electric type before?",
        answers: {
            a: "Rock",
            b: "Fire",
            c:"Ground",
            d:"Fighting"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these Pokemon can you breed with each other?",
        answers: {
            a: "Dratini and Qwilfish",
            b: "Ditto and Nidorina",
            c:"Archeops and Tentacool",
            d:"Vannilite and Lombre"
        },
        correctAnswer: "c"
    },
    {
        question: "How many shapes/forms can Unown be?",
        answers: {
            a: "34",
            b: "46",
            c:"28",
            d:"25"
        },
        correctAnswer: "c"
    },
    {
        question: "What type is super effective against fire?",
        answers: {
            a: "Psychic",
            b: "Flying",
            c:"Ground",
            d:"Fire"
        },
        correctAnswer: "c"
    },
]

var counter = 15;
var intervalID;
$("#timer").html(counter);

function count(){
    intervalID = setInterval(decrement,1000);
}

function decrement(){
    counter--;
    $("#timer").html(counter);
    if(counter === -1){
        end();
        number++;
        generateQuiz();
    }
}

function end(){
    clearInterval(intervalID);
    counter = 15;
    $("#timer").html(counter);
    count();
}

count();

var number = 0;

function generateQuiz() {
    
    var output = [];
    var hold = [];

    console.log(questions[number]);
    
    for(ans in questions[number].answers){
        console.log(questions[number].answers[ans]);
        hold.push(
            "<label>" + '<input type="radio" name="question" value="'+ans+'">' + ans + ": " + questions[number].answers[ans] + "</label>" + "<br>"
        );
    }

    output.push(
        "<div>" + questions[number].question + "</div>"
        + "<div>" + hold + "</div>"
    );
    
    
    $("#quiz").html(output);

    $("button").on("click",function(){
        console.log($("input").val());
    })
}

generateQuiz();
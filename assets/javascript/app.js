questions = [
    {
        question: "Which of these Pokémon is Poison-type?",
        answers: {
            a: "Growlithe",
            b: "Electrode",
            c: "Omanyte",
            d: "Venemoth"
        },
        correctAnswer: "d"
    },
    {
        question: "Which one of these types has the most Pokemons that have it?",
        answers: {
            a: "Grass/Ground",
            b: "Fighting/Steel",
            c: "Dark/Ghost",
            d: "Bug/Fighting"
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
            c: "Ground",
            d: "Fighting"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these Pokemon can you breed with each other?",
        answers: {
            a: "Dratini and Qwilfish",
            b: "Ditto and Nidorina",
            c: "Archeops and Tentacool",
            d: "Vannilite and Lombre"
        },
        correctAnswer: "c"
    },
    {
        question: "How many shapes/forms can Unown be?",
        answers: {
            a: "34",
            b: "46",
            c: "28",
            d: "25"
        },
        correctAnswer: "c"
    },
    {
        question: "What type is super effective against fire?",
        answers: {
            a: "Psychic",
            b: "Flying",
            c: "Ground",
            d: "Fire"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the first shiny Pokemon Ash encountered on his journey?",
        answers: {
            a: "Onix",
            b: "Noctowl",
            c: "Magneton",
            d: "Butterfree"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these Pokemon did Ash capture first?",
        answers: {
            a: "Squirtle",
            b: "Charmander",
            c: "Bulbasaur",
            d: "Tauros"
        },
        correctAnswer: "c"
    },
    {
        question: "What was the first legendary Pokemon that Ash defeated in battle?",
        answers: {
            a: "Articuno",
            b: "Darkrai",
            c: "Ho-Oh",
            d: "Mew"
        },
        correctAnswer: "a"
    },
]

var wins = 0;
var losses = 0;
$("#winCount").html("Correct: " + wins);
$("#lossCount").html("Incorrect: " + losses);

var number = 0;

var counter = 15;
var intervalID;
var repeat = true;


function count() {
    if (repeat) {
        intervalID = setInterval(decrement, 1000);
        repeat = false;
    }
}

function decrement() {
    counter--;
    $("#timer").text(counter);
    if (counter < 6) {
        $("#timer").css("color", "black");
    }
    if (counter === -1) {
        end();
        number++;
        losses++;
        $("#lossCount").html("Incorrect: " + losses);
        generateQuiz();
    }
}

function end() {
    clearInterval(intervalID);
    counter = 15;
    $("#timer").css("color", "white");
    $("#timer").html(counter);
    repeat = true;
    count();
}

count();

function generateQuiz() {
    if (number < questions.length) {
        var output = [];
        var hold = [];

        for (ans in questions[number].answers) {
            hold.push(
                "<label>" + '<input type="radio" name="question" value="' + ans + '">' + ans + ": " + questions[number].answers[ans] + "</label>" + "<br>"
            );
        }

        output.push(
            "<div>" + questions[number].question + "</div>"
            + "<div>" + hold.join("") + "</div>"
        );

        $("#quiz").html(output);

        $("#submit").unbind("click").on("click", function () {
            event.preventDefault();

            if ($("input[name=question]:checked").val() == questions[number].correctAnswer) {
                number++;
                wins++;
                $("#winCount").html("Correct: " + wins);
                generateQuiz();
                end();
            }
            else {
                number++;
                losses++;
                $("#lossCount").html("Incorrect: " + losses);
                generateQuiz();
                end();
            }
        });
    }

    else {
        clearInterval(intervalID);
        $("#page").empty();
        $("#page").html(
            `<div class="col-5">` +
            `<h2>Would You like to play again?</h2>` +
            `</div>` +
            `<div class="col">` +
            `<button class="btn btn-dark" id="yes" style="width:6em">Yes</button>` +
            `</div>`
        );
        $("#yes").on("click", function () {
            $("#page").empty();
            $("#page").html(
                `<div class = "col-6" >` +
                `<form>` +
                `<div id="quiz"></div>` +
                `<button class="btn btn-dark" id="submit">Submit</button>` +
                `</form>` +
                `</div>` +
                `<div class = "col-6">` +
                `<div id="timer" style = "font-size:100pt">15</div>` +
                `</div>`
            );
            number = 0;
            wins = 0;
            losses = 0;
            $("#winCount").html("Correct: " + wins);
            $("#lossCount").html("Incorrect: " + losses);
            generateQuiz();
            end();
        });
        return;
    }
}

generateQuiz();
var number, correct, qNumber, intervalId, numberOne, numberTwo, randomSolution;
$("#startButton").on("click", function run() {
    number = 20;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    correct = 0;
    qNumber = 0;
    showProblem();
  })

function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + " Seconds Remaining</h2>");
    if (number === 0 || qNumber === 11) {
        stop();


    }
  }

  function showProblem(){
      numberOne = Math.floor((Math.random() * 5) + 1);
      numberTwo = Math.floor((Math.random() * 5) + 1);
      randomSolution = Math.floor((Math.random() * 10) + 1);
      $("#question").html("<h2>" +  numberOne + " + " + numberTwo + " = " + randomSolution + "</h2>");
      qNumber++;
  }

  function stop() {
    clearInterval(intervalId);
    $("#question").empty();
    $("#question").html("<h2> You guessed " + correct + " out of 10 correct! Good Game!");
  }

$("#submit").on("click", function(event){
    event.preventDefault();
    if (numberOne + numberTwo == randomSolution && $("#true").is(':checked')){
        correct++;
    }
    else if (numberOne + numberTwo != randomSolution && $("#false").is(':checked')){
        correct++;
    }
    showProblem();
})

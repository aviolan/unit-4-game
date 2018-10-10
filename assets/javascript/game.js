//Computer generates a random number between 19 and 120
var compMin = 19;
var compMax = 120;
var computerNumber = Math.floor( Math.random() * (compMax - compMin + 1)) + compMin;
$("#computer").text(computerNumber);
console.log("Match This Number: " + computerNumber)

//Total holding the users number, generating numbers 1-2, documenting wins and loss
var total = 0;
var userNumber = [];
var wins = 0;
var loss = 0;
console.log("Your Number: " + total)

function randomNumbers () {
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 12 + 1);
        userNumber.push(num);
    }
}
randomNumbers();

//Game reset
function reset () {
    computerNumber = Math.floor( Math.random() * (compMax - compMin + 1)) + compMin;
    $("#computer").text(computerNumber);
    userNumber = [];
    randomNumbers();
    total = 0;
    $("#user").text(total);
}

//Game win
function win() {
    alert("You win!");
    wins +=1;
    $("#wins").text(wins);
    reset();
}

//Game lose
function lose() {
    alert("You lose!");
    loss+=1;
    $("#losses").text(loss);
    reset();
}

//Pokemon with random generated numbers
$("#pika").on("click", function() {
    total = total + userNumber[0];
    $("#user").text(total);

    if (total === computerNumber) {
        win();
    }
    else if (total >= computerNumber) {
        lose();
    }
});

$("#eev").on("click", function() {
    total = total + userNumber[1];
    $("#user").text(total);

    if (total === computerNumber) {
        win();
    }
    else if (total >= computerNumber) {
        lose();
    }
});

$("#bulb").on("click", function() {
    total = total + userNumber[2];
    $("#user").text(total);

    if (total === computerNumber) {
        win();
    }
    else if (total >= computerNumber) {
        lose();
    }
});

$("#char").on("click", function() {
    total = total + userNumber[3];
    $("#user").text(total);

    if (total === computerNumber) {
        win();
    }
    else if (total >= computerNumber) {
        lose();
    }
});
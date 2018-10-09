//Computer generates a random number between 19 and 120
var compMin = 19;
var compMax = 120;
var computerNumber = Math.floor( Math.random() * (compMax - compMin + 1)) + compMin;
$("#computer").text(computerNumber);

var userNumber = 0;
var wins = 0;
var loss = 0;

$("#pika").on("click", function() {
    userNumber += 10;
    $("#user").text(userNumber);
    if (userNumber === computerNumber) {
        $("#wins").text(wins +=1);
    }
    else if (userNumber >= computerNumber) {
        $("#losses").text(loss +=1);
    }
});

$("#eev").on("click", function() {
    alert("eevee!");
});

$("#bulb").on("click", function() {
    alert("bulbasaur!");
});

$("#char").on("click", function() {
    alert("charmander!");
});
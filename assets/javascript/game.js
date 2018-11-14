//this allows our html to load before the jQuery
$(document).ready(function () {
//declaring variables. these are the numbers that we start the game at.
let goalNumber = 64;
let score = 0
let wins = 0
let losses = 0

//displaying the starting numbers on the HTML page
$("#goalNumber").text(goalNumber);
$("#currentScore").text(score);
$("#myWins").text(wins);
$("#myLosses").text(losses);

//the object that holds the value of the images
var player = {
    lebron: 10,
    carter: 3,
    jordan: 8,
    shaq: 7
};

//functions that capture the button click
//ex: the function name that you call is: $("#lebronButton").click()
//lebron james
$("#lebronButton").click(function() {
    var lebron = score + player.lebron;
    console.log("I'm LeBron");
    $("#currentScore").text(lebron);
});
//vince carter
$("#carterButton").click(function() {
    var vince = score + player.carter;
    console.log("I'm Vince");
    $("#currentScore").text(vince);
});
//michael jordan
$("#jordanButton").click(function() {
    var jordan = score + player.jordan;
    console.log("I'm Jordan");
    $("#currentScore").text(jordan);
});
//shaquille o'neal
$("#shaqButton").click(function() {
    var shaq = score + player.shaq;
    console.log("I'm Shaq");
    $("#currentScore").text(shaq);
});

if (score === goalNumber) {
    alert("You win! Keep going!")
} else if (score >= goalNumber) {
    alert("Too many points. Let's dial that down a notch. Try again!")
}


if ($("#lebronButton").click() || $("#carterButton").click() || $("#jordanButton").click() || $("#shaqButton").click()) {

}

// if ($( "button" ).click()) {
//     console.log("hello world");
// } 

// $(".btn").on("click", function() {
//     console.log("hello world");
// });

});
//this allows our html to load before the jQuery
$(document).ready(function () {
    //declaring variables. these are the numbers that we start the game at.
    let goalNumber = Math.floor(Math.random() * 120) + 19;
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
        lebron: Math.floor(Math.random() * 12) + 1,
        carter: Math.floor(Math.random() * 12) + 1,
        jordan: Math.floor(Math.random() * 12) + 1,
        shaq: Math.floor(Math.random() * 12) + 1
    };
    
    //functions that capture the button click
    //ex: the function name that you call is: $("#lebronButton").click()
    //lebron james
    $("#lebronButton").click(function() {
        console.log("I'm LeBron");
        score = score + player.lebron;
        updateDOM()
        checkScore();
    });
    //vince carter
    $("#carterButton").click(function() {
        console.log("I'm Vince");
        score = score + player.carter;
        updateDOM()
        checkScore();
    });
    //michael jordan
    $("#jordanButton").click(function() {
        console.log("I'm Jordan");
        score = score + player.jordan;
        updateDOM()
        checkScore();
        
    });
    //shaquille o'neal
    $("#shaqButton").click(function() {
        console.log("I'm Shaq");
        score = score + player.shaq;
        updateDOM()
        checkScore();
    });
    
    function updateDOM(){
        $("#currentScore").text(score);
    }
    
    function checkScore(){
        console.log("checkscore is running");
        if (score === goalNumber) {
            alert("You win! Keep going!")
            wins += 1
            reset()
        } else if (score >= goalNumber) {
            alert("Too many points. Let's dial that down a notch. Try again!")
            losses += 1
            reset()
        }
    }
    function reset(){
        goalNumber = Math.floor(Math.random() * 120) + 19;
    
        score = 0;
    
        player = {
            lebron: Math.floor(Math.random() * 12) + 1,
            carter: Math.floor(Math.random() * 12) + 1,
            jordan: Math.floor(Math.random() * 12) + 1,
            shaq: Math.floor(Math.random() * 12) + 1
        };
    
        $("#goalNumber").text(goalNumber);
        $("#currentScore").text(score);
        $("#myWins").text(wins);
        $("#myLosses").text(losses);
        console.log(score);
    }
    
    
    // if ($("#lebronButton").click() || $("#carterButton").click() || $("#jordanButton").click() || $("#shaqButton").click()) {
    
    // }
    
    // if ($( "button" ).click()) {
    //     console.log("hello world");
    // } 
    
    // $(".btn").on("click", function() {
    //     console.log("hello world");
    // });
    
    });
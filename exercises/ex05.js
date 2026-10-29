// the clicker button program

//this function expects a color
function paintPage(color) {
    $("body").css("background-color", color);
}

paintPage("plum"); 

let counter = 0;
let colorsCount = 0;

// an indexed array of data 
let colors = ["teal", "orange", "plum", "gold", "orchid", "red", "pink", "black"];

let buttonText = "";

$("#needy-button").click(function () {
    // what to do when the button is clicked

    counter = counter + 1;


    console.log(counter);
    console.log(colors[counter - 1]);

    buttonText = "you just murdered " + counter + " puppies and color is " + colors[counter - 1];

    $("#needy-button").html(buttonText);

paintPage(colors[colorsCount]);
    //$("body").css("background-color", colors[colorsCount]);

    //$("body").append("<img width='50' src=' "+colors[colorsCount] +"whale.png'>");

    //if ( (counter >= 5) && (counter < 13)) {$("#needy-button").after("<p>my mood is... agitated </p> ");}

    //if ( counter >= 13) {$("#needy-button").after("<p>my mood is... really agitated </p> ");}  

    if (counter >= 16) { $("#needy-button").after("<p>my mood is... super angy </p> "); }
    else if (counter >= 13) { $("#needy-button").after("<p>my mood is... really agitated </p> "); }
    else if (counter >= 5) { $("#needy-button").after("<p>my mood is... agitated </p> "); }

    colorsCount = colorsCount + 1;

    // if we run out of colors, start again from the start 

    if (colorsCount >= 8) { colorsCount = 0; }



});

$("#orchid").click(function(){

    console.log("orchid was clicked");
    paintPage("orchid")

});
$("#orange").click(function(){

    console.log("orange was clicked");
    paintPage("orange")

});
$("#cyan").click(function(){

    console.log("cyan was clicked");
    paintPage("cyan")

});
$(".color-circle").click(function(){

    console.log("cyan was clicked");
    paintPage("this.id")

});
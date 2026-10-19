// the clicker button program

let counter = 0; 

$("#needy-button").click(function () {
    // what to do when the button is clicked
    counter = counter + 500;
    $("#needy-button").html("you just murdered " + counter + " puppies");
    
}

);
let environmentTitle = "Stack's Alley";

let environmentElements = ["clouds", "spray paint can", "paint bucket", "moon", "gas mask"];

let mainEntity = {
    name: "Stack",
    type: "ghost",
    mood: "whimsical",
    favoriteFood: "souls",
    isMoving: true,
    favoriteElement: environmentElements[1]
};
$("#spraycan").click(function () {

    let message = "<p>" + environmentElements[1] + ".</p>";
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
$("#paint-bucket").click(function () {

    let message = "<p>" + environmentElements[2] + ".</p>";
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
$("#gasmask").click(function () {

    let message = "<p>" + environmentElements[4] + ".</p>";
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
function askSeason() {
    let userSeason = prompt("What Season Is It? Choose: spring, summer, autumn, or winter");

    if (userSeason == "summer") {
        $("body").css("background-image", "url('summer-bg.jpeg')");
    }
    else if (userSeason == "winter") {
        $("body").css("background-image", "url('snowy-bg.avif')");
    }
    else if (userSeason == "autumn") {
        $("body").css("background-image", "url('fall-bg.jpeg')");
    }
    else if (userSeason == "spring") {
        $("body").css("background-image", "url('spring-bg.jpeg')");
    }
}

$("#bad-button").click(function () {
    askSeason();
});
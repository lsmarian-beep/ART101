let environmentTitle = "Stack's Alley";

let environmentElements = ["clouds", "spray paint can", "paint bucket", "moon"];

let mainEntity = {
    name: "Stack",
    type: "ghost",
    mood: "whimsical",
    favoriteFood: "souls",
    isMoving: true,
    favoriteElement: environmentElements[1]
};
$("#spraycan").click(function () {

    let message = "<p>" + environmentElements[2] + ".</p>";
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
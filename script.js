document.addEventListener("DOMContentLoaded", function() {
    // Identify the element to be acted upon (text to change color)
    var textToChange = document.getElementById("changeText");
    
    // Add event listener for mouseover
    textToChange.addEventListener("mouseover", function() {
        // Change the color of the text to red
        textToChange.style.color = "red";
    });
    
    // Add event listener for mouseout
    textToChange.addEventListener("mouseout", function() {
        // Change the color of the text back to black
        textToChange.style.color = "black";
    });

    // Identify the image element to be acted upon
    var catImage = document.getElementById("birdImage");

    // Add event listener for click
    catImage.addEventListener("click", function() {
        // Change the source of the image to a surprised cat
        catImage.src = "surprise_bird.jpg";
    });
});
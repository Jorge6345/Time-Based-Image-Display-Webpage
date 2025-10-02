document.body.style.height = "100vh";
document.body.style.backgroundRepeat = "no-repeat"; // prevent background image from duplicating
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "100% 100%"; // forces background image to fill the entire screen both vertically and horizontally

// Function that stores the current time in hours from 0 to 23 and displays a background image based on that.
function setBackgroundImage () {
    currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
        document.body.style.backgroundImage = "url('/background-images/morning-background.jpg')";
        document.body.style.color = "black";
    }
    else if (currentTime >= 12 && currentTime < 18) {
        document.body.style.backgroundImage = "url('/background-images/afternoon-background.jpg')";
        document.body.style.color = "black";
    }
    else {
        document.body.style.backgroundImage = "url('/background-images/night-background.jpg')";
        document.body.style.color = "white";
    }
}


// Calls the function to change the background image
setBackgroundImage();
// Calls the function every minute so user doesn't have to reload the page all the time and keeps it more dynamic.
setInterval(setBackgroundColor, 60 * 1000);
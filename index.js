for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var button1 = this.innerHTML;
        makesound(button1);
    });
}
function makesound(key) {
    switch (key) {
        case "W":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "A":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "S":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "D":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "J":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "K":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "L":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}
document.addEventListener("keydown", function (event) {
    makesound(event.key);
});

  

    
    

const keys = document.querySelectorAll(".key");

//function to play sound
const playSound = function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return
    }
    audio.currentTime = 0; //rewind to the start so key can be pressed mutliple times
    audio.play(); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");  

};


//plays sound upon keydown
document.addEventListener("keydown", playSound);


//a function to remove transition styles
const removeTransition = function(e){
    if (e.propertyName !== "transform") {
        return;
    }
    this.classList.remove("playing");
};

//a forEach loop to remove transition styles after each key is pressed

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
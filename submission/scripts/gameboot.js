var dialogBox = document.getElementById("dialog-box"); 
const typewriter = new Typewriter(dialogBox);
var BgmEncounter = new Howl({ src: 'audio/battle-start.ogg', loop: true, volume: 0.3})




function startGame() {
  
    return new Promise((resolve) => {
        parent.video.style.opacity = "0"
        BgmEncounter.play()
        animateButtonIdle() 
        var dialogContainer = document.getElementById("dialog-container");
        dialogContainer.style.opacity = 1
        typewriter.start("SKIP BUTTON LvL. 5 wants to BATTLE!");
        resolve()
    })
}



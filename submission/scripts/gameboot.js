var dialogBox = document.getElementById("dialog-box"); 
const typewriter = new Typewriter(dialogBox);
var BgmEncounter = new Howl({ src: 'audio/battle-start.ogg', loop: true })




function startGame() {
  
    return new Promise((resolve) => {
        parent.video.style.opacity = "0"
        BgmEncounter.play()
        animate_button_idle() 
        var dialogContainer = document.getElementById("dialog-container");
        dialogContainer.style.display = "inline"
        typewriter.start("SKIP BUTTON LvL. 5 wants to BATTLE!");
        resolve()
    })
}




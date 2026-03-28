function game() {
    var dialogContainer = document.getElementById("dialog-container"); 
    dialogContainer.style.opacity = "1"
    var dialogBox = document.getElementById("dialog-box"); 
    const typewriter = new Typewriter(dialogBox);
    typewriter.start("SKIP BUTTON LVL. 5 wants to BATTLE!");
    typewriter.finish()
}
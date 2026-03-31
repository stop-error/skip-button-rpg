
function gameLoopEntry() {
   
    setTurnInProgress(false)
    typewriter.start("What will PLAYER do?")
    var attackBox = document.getElementById('attackBox')
    

}

function setTurnInProgress(status) {
    var attackBox = document.getElementById("attackBox");
    if (status === true) {
        attackBox.style.display = "none"
    } else if  (status === false) {
        attackBox.style.display = "flex"
    } else {
        console.warn("Unsupported input for function setTurnInProgress!")
    }
    
}
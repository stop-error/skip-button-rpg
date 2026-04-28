// class TurnState {
//     constructor(currentTurn) {
//         this.currentTurn = currentTurn;
//     }

//     set setCurrentTurn(turn) {
//         if (turn === "player" || turn === "cpu") {
//             this.currentTurn = turn;
//         } else {
//             console.error("unsupported parameter passed to setCurrentTurn!")
//         }
        
//     }
// }


class UiState {
    constructor(uiVisible) {
        this.uiVisible = uiVisible;
    }

    set setUiVisible(visibility) {

        if (visibility === "visible") {
            for (let i = 0; i < baseUiAray.length; i++) {
                var menuBox = document.getElementById(baseUiAray[i])
                menuBox.style.display = "block";
            }
            for (let i = 0; i < baseUiButtonContainerArray.length; i++) {
                var buttonContainer = document.getElementById(baseUiButtonContainerArray[i])
                buttonContainer.style.display = "block";
            }
            this.uiVisible = visibility;

        } else if (visibility === "hidden") {

            for (let i = 0; i < menuBoxArray.length; i++) {
                var menuBox = document.getElementById(menuBoxArray[i])
                menuBox.style.display = "none";
            }
            for (let i = 0; i < buttonContainerArray.length; i++) {
                var buttonContainer = document.getElementById(buttonContainerArray[i])
                buttonContainer.style.display = "none";
            }
            this.uiVisible = visibility;

        } else {
            console.error("unsupported parameter passed to setUiVisible!")
        }

    }
}

const baseUiAray = ["main-menu", "player-hp-menu"]
const baseUiButtonContainerArray = ["main-menu-button-container", "player-hp-button-container"]
const menuBoxArray = ["main-menu", "fight-menu", "magic-menu", "act-menu"]
const subMenuBoxArray = ["fight-menu", "magic-menu", "act-menu"]
const buttonContainerArray = ["main-menu-button-container", "fight-button-container", "magic-button-container", "act-button-container"]
const subButtonContainerArray = ["fight-button-container", "magic-button-container", "act-button-container"]


// var turnState = new TurnState("player")
var uiState = new UiState("hidden")

function playerIdle() {
   
    // turnState.setCurrentTurn = "player"
    uiState.setUiVisible = "visible"
    typewriter.start("What will PLAYER do?")
    
}

function cpuTurn() {
    chicken("cpuTurn")
}

function playerWin() {
    chicken("playerWin")
}

function openSubMenu(subMenuId, buttonContainerId) {
    for (let i = 0; i < subMenuBoxArray.length; i++) {
        var eachSubMenu = document.getElementById(subMenuBoxArray[i])
        eachSubMenu.style.display = "none";
    }

    for (let i = 0; i < subButtonContainerArray.length; i++) {
        var subButtonContainer = document.getElementById(subButtonContainerArray[i])
        subButtonContainer.style.display = "none";
    }

    if (!subMenuBoxArray.includes(subMenuId)) {
        console.error("invaild subMenuId passed to openSubmenu!")
        return
    }

    if (!subButtonContainerArray.includes(buttonContainerId)) {
        console.error("invaild buttonContainerId passed to openSubmenu!")
        return
    }

    subMenuElement = document.getElementById(subMenuId)
    subMenuElement.style.display = "grid"

    buttonContainerElement = document.getElementById(buttonContainerId)
    buttonContainerElement.style.display = "grid"

}

function chicken(functionName) {
        typewriter.clear()
        typewriter.start(functionName + ": Nothing here but us chickens! (function not implemented)") // Hold off here!
}
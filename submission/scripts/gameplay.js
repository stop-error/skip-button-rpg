class PlayerHp {
    constructor(hp) {
        this._hp = hp;
        this._numAnim = new countUp.CountUp('player-hp', 30);
        this._numAnim.start()
    }
    set hp(hp) {
        var damageFx = new Howl({ src: 'audio/damage.mp3', volume: 0.6})
        switch (true) {
            case (hp > 30):
                var oldHp = this._hp
                this._hp = 30
                this._numAnim.update(30)
                this._numAnim.start()

                if (this.hp < oldHp){
                    animatePlayerHpDamageFlash()
                    damageFx.play()

                }

                break
            case (hp < 0):
                var oldHp = this._hp
                this._hp = 0
                this._numAnim.update(0)
                this._numAnim.start()

                if (this.hp < oldHp){
                    animatePlayerHpDamageFlash()
                    damageFx.play()
                }
                break
            default:
                var oldHp = this._hp
                this._hp = hp;
                this._numAnim.update(hp)
                this._numAnim.start()

                if (this.hp < oldHp){
                    animatePlayerHpDamageFlash()
                    damageFx.play()
                }
        }
    }

    get hp() {
        return this._hp
    }

}

class PlayerState {
    constructor() {
        this._macrowaveCharging = 0
        this._badAccuracyLevel = 0
        this._confused = false

    }

    set macrowaveCharging(macrowaveCharging) {
        if (![0,1,2].includes(macrowaveCharging)) {
            console.error("unsupported value passed to macrowaveCharging setter!")
        } else {
            this._macrowaveCharging = macrowaveCharging
        } 
    }

    get macrowaveCharging() {
        return this._macrowaveCharging
    }

    set badAccuracyLevel(badAccuracyLevel) {
        if (![0,1,2,3,4].includes(badAccuracyLevel)) {
            console.error("unsupported value passed to badAccuracyLevel setter!")
        } else {
            this._badAccuracyLevel = badAccuracyLevel
        } 
    }

    get badAccuracyLevel() {
        return this._badAccuracyLevel
    }

    set confused(confused) {
        if (![true,false].includes(confused)) {
            console.error("unsupported value passed to confused setter!")
        } else {
            this._confused = confused
        } 
    }

    get confused() {
        return this._confused
    }

}

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

var menuSelectFx = new Howl({ src: 'audio/menu.ogg', volume: 0.9})


var uiState = new UiState("hidden")
var playerHp = new PlayerHp(30)
var playerState = new PlayerState()

function playerIdle() {

     if (cpuState.hp <= 0) {
        playerWin()
        return
        
    } else if (playerHp.hp <= 0) {
        cpuWin()
        return
        
    }

    
    
    switch (true) {
        case (playerState.macrowaveCharging === 1):
            playerAtkMacrowave_Phase1()
            return
        case (playerState.macrowaveCharging === 2):
            playerAtkMacrowaveRelease()
            return
    }
   
    uiState.setUiVisible = "visible"
    typewriter.start("What will PLAYER do?")
    
}

function cpuTurn() {

    if (cpuState.hp <= 0) {
        playerWin()
        console.log("player won!")
        return
        
    } else if (playerHp.hp <= 0) {
        cpuWin()
        return
        
    }

    var select = Math.floor(Math.random() * 10)

    switch(select) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            cpuAtkTackle()
            break
        case 5:
        case 6:
        case 7:
            cpuAtkSpam()
            break
        case 8:
        case 9:
            cpuAtkDarkpattern()
            break
    }
}



async function cpuWin() {
    BgmEncounter.stop()
    var bgmLose = new Howl({ src: 'audio/lose.ogg', loop: true, volume: 1.0})
    bgmLose.play()

    typewriter.clear()
    typewriter.start("PLAYER was defeated by SKIP BUTTON LvL. 5!")

    await timeout(3500)

    typewriter.clear()
    typewriter.start("SKIP BUTTON LvL. 5: \"Looks like you should have bought premium!\"")

    await timeout(3500)

    typewriter.clear()
    typewriter.start("PLAYER lost 67 coins!")

    await timeout(3500)

    window.top.postMessage({ type: 'fail' }, '*')

}


async function playerWin() {
    BgmEncounter.stop()
    var bgmWin = new Howl({ src: 'audio/win.ogg', loop: true, volume: 0.7})
    bgmWin.play()

    typewriter.clear()
    typewriter.start("PLAYER defeated SKIP BUTTON LvL. 5!")

    await animateButtonWin()

    typewriter.clear()
    typewriter.start("PLAYER gained 69 exp!")
    await timeout(4500)

    window.top.postMessage({ type: 'success' }, '*')

}


async function playerWinAdblock() {
    var wrapper = window.parent.document.getElementById("game-inner-wrapper")
    wrapper.style.display = "none"
    BgmEncounter.pause()
    // await timeout(2500)
    // var base = window.location.origin
    // var img = document.createElement("img");
    // img.setAttribute("src", "adblocker.png");
    // window.parent.document.getElementById("inner-wrapper").appendChild(img);
    await timeout(2500)
    window.top.postMessage({ type: 'success' }, '*')

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

    menuSelectFx.play()
    subMenuElement = document.getElementById(subMenuId)
    subMenuElement.style.display = "grid"

    buttonContainerElement = document.getElementById(buttonContainerId)
    buttonContainerElement.style.display = "grid"

}

function chicken(functionName) {
        typewriter.clear()
        typewriter.start(functionName + ": Nothing here but us chickens! (function not implemented)") // Hold off here!
}


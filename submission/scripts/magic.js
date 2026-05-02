async function playerMagiUpdog() {

    uiState.setUiVisible = "hidden"    

    typewriter.clear
    typewriter.start("PLAYER used UPDOG!")

    await timeout(2500)

    cpuState.updogAfflicted = true
    var updogButton = document.getElementById("updog-button")
    updogButton.style.display = "none"

    typewriter.clear
    typewriter.start("SKIP BUTTON LvL. 5 is now CONFUSED!")

    await timeout(2500)

    cpuTurn()

}

async function playerMagiAdblock() {

    uiState.setUiVisible = "hidden"

    typewriter.clear
    typewriter.start("PLAYER used ADBLOCK!")

    await timeout(2500)


    const browser = bowser.getParser(window.navigator.userAgent);
    var browserName = browser.getBrowserName()
    console.log("browser is " + browser.getBrowserName())

    if (!["Firefox", "Microsoft Edge", "Brave"].includes(browserName)) {
        typewriter.clear
        typewriter.start("But it failed!")
    } else {
        console.log("browser passed adblock check (that was not a bug, that was the joke)")
        playerWinAdblock()
    }

    await timeout(2500)
    cpuTurn()


}

async function playerMagiHeal() {

    uiState.setUiVisible = "hidden"

    typewriter.clear
    typewriter.start("PLAYER used HEAL!")

    await timeout(2500)

    var currentHp = playerHp.hp
    var newHp = currentHp + 15
    playerHp.hp = newHp
    var healButton = document.getElementById("heal-button")
    healButton.style.display = "none"
    //TODO: heal sound effect!

    await timeout(1000)

    typewriter.clear
    typewriter.start("PLAYER regained HP!")

    await timeout(2500)
    cpuTurn()


}
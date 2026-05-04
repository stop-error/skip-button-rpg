var healFx = new Howl({ src: 'audio/heal.mp3', volume: 0.6})

async function playerMagiUpdog() {

    subMenuSelectFx.play()
    uiState.setUiVisible = "hidden"    

    typewriter.clear
    typewriter.start("PLAYER used UPDOG!")

    await timeout(2500)

    cpuState.updogAfflicted = true
    var updogButton = document.getElementById("updog-button")
    updogButton.removeAttribute("onclick")
    updogButton.style.color = #aaa9a9

    typewriter.clear
    typewriter.start("SKIP BUTTON LvL. 5 is now CONFUSED!")

    await timeout(2500)

    cpuTurn()

}

async function playerMagiAdblock() {

    subMenuSelectFx.play()
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

    subMenuSelectFx.play()
    uiState.setUiVisible = "hidden"

    typewriter.clear
    typewriter.start("PLAYER used HEAL!")

    await timeout(2500)

    var currentHp = playerHp.hp
    var newHp = currentHp + 15
    playerHp.hp = newHp
    healFx.play()
    var healButton = document.getElementById("heal-button")
    healButton.removeAttribute("onclick")
    healButton.style.color = #aaa9a9

    await timeout(1000)

    typewriter.clear
    typewriter.start("PLAYER regained HP!")

    await timeout(2500)
    cpuTurn()


}
var subMenuSelectFx = new Howl({ src: 'audio/sub-menu.ogg', volume: 0.7})

async function playerRun() {

    uiState.setUiVisible = "hidden"

    typewriter.clear()
    typewriter.start("PLAYER tried to RUN!")

    await timeout(2500)

    typewriter.clear()
    typewriter.start("But you can't RUN from capitalism!")

    await timeout(2500)

    cpuTurn()

}

async function playerAtkSword() {

    var swordFx = new Howl({ src: 'audio/sword-fx.ogg', volume: 0.6})

    subMenuSelectFx.play()
    uiState.setUiVisible = "hidden"
    

    const confused = await playerConfusedCheck() 
        if (confused) {
            cpuTurn()
            return
        }
    

    typewriter.clear()
    typewriter.start("PLAYER used SWORD!")

    await timeout(1500)

    const accuracyFail = await playerAccuracyCheck() 
        if (accuracyFail) {
            cpuTurn()
            return
        }
    

    var swordSlash = document.getElementById("sword-slash")
    swordSlash.style.display = "block"
    swordFx.play()
    swordSlash.src = "images/slash_vfx_4.gif"+"?a="+Math.random();

    await timeout(1500)


    await animateButtonDamageFlash()

    if (cpuState.gossipAfflicted === true) {
        typewriter.clear()
        typewriter.start("SKIP BUTTON LvL. 5 took 10 DAMAGE!")
        cpuState.hp = cpuState.hp - 10
    } else if (cpuState.gossipAfflicted === false) {
        typewriter.clear()
        typewriter.start("SKIP BUTTON LvL. 5 took 7 DAMAGE!")
        cpuState.hp = cpuState.hp - 7
    }

    await timeout(2500)
    cpuTurn()    

}

async function playerAtkSplash() {
    
    subMenuSelectFx.play()
    uiState.setUiVisible = "hidden"
    

    const confused = await playerConfusedCheck() 
        if (confused) {
            cpuTurn()
            return
        }

    typewriter.clear()
    typewriter.start("PLAYER splashed around!")

    await timeout(2500)

    typewriter.clear()
    typewriter.start("But nothing happened!")

    await timeout(2500)

    cpuTurn()

}

async function playerAtkMacrowave() {

    var macrowaveChargeFx = new Howl({ src: 'audio/charge.ogg', volume: 1.0})

    subMenuSelectFx.play()
    uiState.setUiVisible = "hidden"
    


    const confused = await playerConfusedCheck() 
        if (confused) {
            cpuTurn()
            return
        }

        typewriter.clear()
        typewriter.start("PLAYER used MACROWAVE!")

        await timeout(2500)

        await animateMacrowaveChargingShow()
        macrowaveChargeFx.play()

        await timeout(2500)

        await animateMacrowaveChargingHide()

        await timeout(2500)

        playerState.macrowaveCharging = 1

        typewriter.clear()
        typewriter.start("PLAYER is CHARGING ENERGY!")

        await timeout(2500)

        cpuTurn()

}


async function playerAtkMacrowave_Phase1() {

    var macrowaveChargeFx = new Howl({ src: 'audio/charge.ogg', volume: 1.0})

    uiState.setUiVisible = "hidden"


    playerState.macrowaveCharging = 2

    typewriter.clear()
    typewriter.start("PLAYER is CHARGING ENERGY!")

    await timeout(2500)

    await animateMacrowaveChargingShow()
    macrowaveChargeFx.play()

    await timeout(2500)

    await animateMacrowaveChargingHide()

    await timeout(2500)

    cpuTurn()

}


async function playerAtkMacrowaveRelease() {

    var macrowaveReleaseFx = new Howl({ src: 'audio/release.ogg', volume: 0.8})

    uiState.setUiVisible = "hidden"

    typewriter.clear()
    typewriter.start("PLAYER released MACROWAVE!")

    await timeout(2500)

    const accuracyFail = await playerAccuracyCheck() 
        if (accuracyFail) {
            cpuTurn()
            return
        }

    
    playerState.macrowaveCharging = 0

    macrowaveReleaseFx.play()
    await animateMacrowaveReleaseShow()

    await timeout(2500)

    await animateMacrowaveReleaseHide()

    await timeout(2500)

    .then(animateButtonDamageFlash)

    await timeout(1500)

    if (cpuState.gossipAfflicted === true) {
        typewriter.clear()
        typewriter.start("SKIP BUTTON LvL. 5 took 18 DAMAGE!")
        cpuState.hp = cpuState.hp - 18
    } else if (cpuState.gossipAfflicted === false) {
        typewriter.clear()
        typewriter.start("SKIP BUTTON LvL. 5 took 14 DAMAGE!")
        cpuState.hp = cpuState.hp - 14
    }

    await timeout(2500)
    cpuTurn()

}



async function cpuAtkTackle() {

    var tackleFx = new Howl({ src: 'audio/tackle.ogg', volume: 0.6})

    const confused = await cpuConfusedCheck() 
        if (confused) {
            playerIdle()
            return
        }

    typewriter.clear()
    typewriter.start("SKIP BUTTON LvL. 5 used TACKLE!")

    await timeout(2500)

    tackleFx.play()
    await animateButtonTackleStart()
    await animateButtonTackleEnd()
    animateButtonIdle()

    if (cpuState.aurafarmAfflicted === true) {
        typewriter.clear()
        typewriter.start("PLAYER took 4 DAMAGE! (SKIP BUTTON LvL. 5 is intimidated)")
        playerHp.hp = playerHp.hp - 4
    } else {
        typewriter.clear()
        typewriter.start("PLAYER took 6 DAMAGE!")
        playerHp.hp = playerHp.hp - 6
    }

    await timeout(2500)
    playerIdle()


}

async function cpuAtkSpam() {

    const confused = await cpuConfusedCheck() 
        if (confused) {
            playerIdle()
            return
        }

    typewriter.clear()
    typewriter.start("SKIP BUTTON LvL. 5 used SPAM!")

    await timeout(2500)

    switch (true) { // (O.O)
        case (cpuState.spamLevel  == 0):
            var spam = document.getElementById("spam-ipod")
            spam.style.display = "block"
            cpuState.spamLevel = cpuState.spamLevel + 1
            playerState.badAccuracyLevel = playerState.badAccuracyLevel + 1
            break
        case (cpuState.spamLevel  == 1):
            var spam = document.getElementById("spam-gateway")
            spam.style.display = "block"
            cpuState.spamLevel = cpuState.spamLevel + 1
            playerState.badAccuracyLevel = playerState.badAccuracyLevel + 1
            break
        case (cpuState.spamLevel  == 2):
            var spam = document.getElementById("spam-netflix")
            spam.style.display = "block"
            cpuState.spamLevel = cpuState.spamLevel + 1
            playerState.badAccuracyLevel = playerState.badAccuracyLevel + 1
            break
        case (cpuState.spamLevel  == 3):
            var spam = document.getElementById("spam-contest")
            spam.style.display = "block"
            cpuState.spamLevel = cpuState.spamLevel + 1
            playerState.badAccuracyLevel = playerState.badAccuracyLevel + 1
            break
        case (cpuState.spamLevel  == 4):
            var spam = document.getElementById("spam-youtube")
            spam.style.display = "block"
            cpuState.spamLevel = cpuState.spamLevel + 1
            playerState.badAccuracyLevel = playerState.badAccuracyLevel + 1
            break
    }
    
    var spamFx = new Howl({ src: 'audio/you-won.mp3', volume: 0.8})
    spamFx.play()

    await timeout(1500)

    typewriter.clear
    typewriter.start("PLAYER's ACCURACY fell!")

    await timeout(2500)

    playerIdle()

}

async function cpuAtkDarkpattern() {

    var darkFx = new Howl({ src: 'audio/dark.ogg', volume: 0.5})

    const confused = await cpuConfusedCheck() 
        if (confused) {
            playerIdle()
            return
        }

    typewriter.clear
    typewriter.start("SKIP BUTTON LvL. 5 used DARK PATTERN!")

    await timeout(2500)

    darkFx.play()
    await animateDarkpatternShow()
    await timeout(2500)
    await animateDarkpatternHide()
    darkFx.pause()

    if (playerState.confused === true) {
        typewriter.clear
        typewriter.start("But PLAYER is already CONFUSED!")
    } else if (playerState.confused === false) {
        typewriter.clear
        typewriter.start("PLAYER is CONFUSED!")
        playerState.confused = true
    }

    await timeout(2500)
    playerIdle()

}



async function playerConfusedCheck() {

    if (playerState.confused === true) {
        typewriter.clear
        typewriter.start("PLAYER is CONFUSED!")
        await timeout(2500)
        var random = Math.round(Math.random());
            if (random === 0) {
                typewriter.clear();
                typewriter.start("PLAYER hurt themself in their confusion!");
                await timeout(2500)
                playerHp.hp = playerHp.hp - 8;
                await timeout(1500)
                return true
            }
    } else if (playerState.confused === false) {
        return false
    }
    
}


async function playerAccuracyCheck() {

    if (playerState.badAccuracyLevel > 0) {
        var random = Math.floor(Math.random() * 100)
        if (playerState.badAccuracyLevel == 1 && random < 14) {
            typewriter.clear();
            typewriter.start("But PLAYER's attack missed!");
            playerState.macrowaveCharging = 0
            await timeout(2500)
            return true
        } else if (playerState.badAccuracyLevel == 2 && random < 25) {
            typewriter.clear();
            typewriter.start("But PLAYER's attack missed!");
            playerState.macrowaveCharging = 0
            await timeout(2500)
            return true
        } else if (playerState.badAccuracyLevel == 3 && random < 35) {
            typewriter.clear();
            typewriter.start("But PLAYER's attack missed!");
            playerState.macrowaveCharging = 0
            await timeout(2500)
            return true
        } else if (playerState.badAccuracyLevel == 4 && random < 45) {
            typewriter.clear();
            typewriter.start("But PLAYER's attack missed!");
            playerState.macrowaveCharging = 0
            await timeout(2500)
            return true
        }

            if (random === 0) {
                
            }
    } else if (playerState.confused === false) {
        return false
    }
  
}


async function cpuConfusedCheck() {

    if (cpuState.updogAfflicted === true) {
        typewriter.clear
        typewriter.start("SKIP BUTTON LvL. 5 is CONFUSED!")
        await timeout(2500)
        var random = Math.round(Math.random());
            if (random === 0) {
                typewriter.clear();
                typewriter.start("SKIP BUTTON LvL. 5 hurt themself in their confusion!");
                await timeout(2500)
                cpuState.hp = cpuState.hp - 8;
                await animateButtonDamageFlash()
                return true
            }
    } else if (cpuState.updogAfflicted === false) {
        return false
    }
    
}
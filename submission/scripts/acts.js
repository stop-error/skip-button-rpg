async function playerActHug() {

    uiState.setUiVisible = "hidden"  
    
    typewriter.clear
    typewriter.start("PLAYER hugged SKIP BUTTON LvL. 5!")
    cpuState.hugLevel = cpuState.hugLevel + 1


    await timeout(2500)

    switch(cpuState.hugLevel) {
        case 1:
            typewriter.clear
            typewriter.start("SKIP BUTTON LvL. 5 burst into tears!")
            await timeout(2500)
            break
        case 2: 
            typewriter.clear
            typewriter.start("SKIP BUTTON LvL. 5 is trauma dumping!")
            await timeout(2500)
            break
        case 3:
            typewriter.clear
            typewriter.start("SKIP BUTTON LvL. 5 thanked you for being a true friend!")
            await timeout(2500)
            break
    }

    if (cpuState.hugLevel >= 3) {
        playerWin()
    } else {
        cpuTurn()
    }

}


async function playerActAurafarm() {

    uiState.setUiVisible = "hidden"
    
    typewriter.clear
    typewriter.start("PLAYER put on COOL SHADES!")
    var shades = document.getElementById("shades")
    shades.style.display = "inline"

    await timeout(2500)

    typewriter.clear
    typewriter.start("SKIP BUTTON LvL. 5 is intimidated!")
    cpuState.aurafarmAfflicted = true
    var aurafarmButton = document.getElementById("aurafarm-button")
    aurafarmButton.style.display = "none"

    await timeout(2500)

    cpuTurn()

}

async function playerActGossip() {

    uiState.setUiVisible = "hidden"    

    typewriter.clear
    typewriter.start("PLAYER dished out HOT GOSS!")

    await timeout(2500)

    typewriter.clear
    typewriter.start("SKIP BUTTON LvL. 5 is intrigued!")
    cpuState.gossipAfflicted = true

    await timeout(2500)

    cpuTurn()

}
function playerRun() {

    // turnState.setCurrentTurn = "cpu"
    uiState.setUiVisible = "hidden"

    function runMsg1 () {
        return new Promise((resolve) => {
            typewriter.clear
            typewriter.start("PLAYER tried to RUN!")
            resolve()
        })
    }

    function runMsg2 () {
        return new Promise((resolve) => {
            typewriter.start("But you can't RUN from capitalism!")
            resolve()
        })
    }

    runMsg1()
    .then(() => timeout(2500))
    .then(runMsg2)
    .then(() => timeout(2500))
    .then(cpuTurn)

}


    

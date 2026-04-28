var hugLevel = 0

function playerActHug() {

    uiState.setUiVisible = "hidden"    

    function hugMsg1 () {
        return new Promise((resolve) => {
            typewriter.clear
            typewriter.start("PLAYER hugged SKIP BUTTON LvL. 5!")
            resolve()
        })
    }

    function increaseHugLevel() {
        return new Promise((resolve) => {
            hugLevel++
            resolve()
        })
    }

    function hugMsg2() {
        return new Promise((resolve) => {
            switch(hugLevel) {
                case 1:
                    typewriter.clear
                    typewriter.start("SKIP BUTTON LvL. 5 burst into tears!")
                    break
                case 2: 
                    typewriter.clear
                    typewriter.start("SKIP BUTTON LvL. 5 is trauma dumping!")
                    break
                case 3:
                    typewriter.clear
                    typewriter.start("SKIP BUTTON LvL. 5 thanked you for being a true friend!")
                    break
            }
            resolve()
        })
    }


    function checkHugWin() {
        return new Promise((resolve) => {
            if (hugLevel >= 3) {
                cpuTurn()
            } else {
                playerIdle()
            }
            resolve()
        })
    }
        
    
    hugMsg1()
    .then(() => timeout(2500))
    .then(increaseHugLevel)
    .then(hugMsg2)
    .then(() => timeout(3000))
    .then(checkHugWin)




}
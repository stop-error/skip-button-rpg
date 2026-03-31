function player_run() {

    function run_msg_1 () {
        return new Promise((resolve) => {
            typewriter.clear
            typewriter.start("PLAYER tried to RUN AWAY!")
            resolve()
    })}

    function run_msg_2 () {
        return new Promise((resolve) => {
            typewriter.start("But you can't RUN AWAY from capitalism!")
            resolve()
    })}

    run_msg_1()
    .then(() => timeout(2500))
    .then(run_msg_2)
    .then(() => timeout(2500))
    .then(gameLoopEntry)

}
    
 
function checkIfFirstRun() {

    if (firstRun === true) {
        firstRun = false
        return Promise.resolve()
    } else {
        return Promise.reject(new Error("firstRun false!"))
    }
}

function bounceButton() {

    var encounter_start = new Howl({ src: 'audio/encounter-start.ogg' })
    encounter_start.play()

    return anime.animate(
        '#skip',
        {
            y: [
                { to: '-10px', ease: 'outExpo', duration: 200 },
                { to: '10px', ease: 'outBounce', duration: 200 },
            ],
    })
}

function timeout2000ms() {

    var promise = new Promise(function(resolve) {

        setTimeout(() => {
            console.log("timeout 2000ms");
        }, 2000);

        resolve()
    })
}

function encounterTransition() {
     
    return anime.animate(
        '.encounter-backround',
        {
            opacity: 1,
            duration: 400,
            loop: 2,
            alternate: true,
        }
    )
}

function moveButton() {

    return anime.animate(
        '#skip',
        {
            x: [
                { to: '-270px', ease: 'outExpo', duration: 1700 }
            ],
            y: [
                { to: '-100px', ease: 'outExpo', duration: 1700 },
            ],
            scale: 1.5,
        }
)
}

function intro() {
    checkIfFirstRun()
    .then(bounceButton)
    .then(timeout2000ms)
    .then(encounterTransition)
    .then(moveButton)
    .catch(() => console.log("Can't run checkIfFirstRun again!"))
}


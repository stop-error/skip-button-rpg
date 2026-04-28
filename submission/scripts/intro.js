var firstRun = true
var sfxEncounterStart = new Howl({ src: 'audio/encounter-start.ogg', volume: 0.5 })
var sfxEncounterTransition = new Howl({ src: 'audio/encounter-transition.ogg', volume: 0.5})

function checkIfFirstRun() {

    if (firstRun === true) {
        firstRun = false
        return Promise.resolve()
    } else {
        handleClickAfterFisrtRun()
        return Promise.reject(new Error("Can't run intro more than once!"))
    }
}

function bounceButton() {

    
    sfxEncounterStart.play()

    return anime.animate(
        '#skip',
        {
            y: [
                { to: '-10px', ease: 'outExpo', duration: 200 },
                { to: '10px', ease: 'outBounce', duration: 200 },
                
            ],
    },
    
)
}

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("timeout");
            resolve()
        }, ms);
    })
}

function encounterTransition() {

    
    sfxEncounterTransition.play()
     
    anime.animate(
        '#skip',
        {
            x: [
                { to: '-445px', ease: 'outExpo', duration: 1700 }
            ],
            y: [
                { to: '-150px', ease: 'outExpo', duration: 1700 },
            ],
            scale: 1.5,
        }
    )

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

function handleClickAfterFisrtRun () {
    var buttonCry = new Howl({ src: 'audio/button-cry.mp3'})
        buttonCry.play()
}





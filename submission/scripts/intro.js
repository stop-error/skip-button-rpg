var introHasRun = false
var sfxEncounterStart = new Howl({ src: 'audio/encounter_start.ogg' })
var sfxEncounterTransition = new Howl({ src: 'audio/encounter-transition.ogg' })

function checkIfFirstRun() {

    if (introHasRun === false) {
        introHasRun = true
        return Promise.resolve()
    } else {
        return Promise.reject(new Error("introHasRun false!"))
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
    console.log("Can't run checkIfFirstRun again!")
    var buttonCry = new Howl({ src: 'audio/button-cry.mp3' })
        buttonCry.play()
}





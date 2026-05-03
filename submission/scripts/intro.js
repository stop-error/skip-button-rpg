var firstRun = true
var sfxEncounterStart = new Howl({ src: 'audio/encounter-start.ogg', volume: 0.3 })
var sfxEncounterTransition = new Howl({ src: 'audio/encounter-transition.ogg', volume: 0.3})
var buttonCry = new Howl({ src: 'audio/button-cry.mp3'})

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
            resolve()
        }, ms);
    })
}

function encounterTransition() {

    var video = window.parent.document.getElementById("video")
    
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
    anime.animate(
        video,
        {
            opacity: 0,
            duration: 3000,
        }
        
    )

    return anime.animate(
        '.encounter-backround',
        {
            opacity: 1,
            duration: 400,
            loop: 2,
            alternate: true,
        },
    )
}

// function fadeVideo() {

//     var video = document.getElementById("parent.video")

//     return anime.animate(
//         video,
//         {
//             opacity: 0,
//             duration: 1000,
//         }
        
//     )
// }

function handleClickAfterFisrtRun () {
        buttonCry.play()
}





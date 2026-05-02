function animateButtonIdle() {
    anime.remove('#skip')
    var skipButtonCurrentY = anime.get('#skip', 'translateY')
    var skipButtonCurrentX = anime.get('#skip', 'translateX')

    anime.animate(
        '#skip',
        {
            translateY: [
                { from: skipButtonCurrentY, to: parseFloat(skipButtonCurrentY) + 2 + 'px', easing: 'none', duration: 50 },
            ],
            // x: [
            //     { from: skipButtonCurrentX, to: parseFloat(skipButtonCurrentX) + 1 + 'px', ease: 'none', duration: 100 },

            // ],
            loop: true,
            alternate: true,
        }
    )
}


function animateMacrowaveChargingShow() {
    var macrowaveCharge = document.getElementById("macrowave-charge")

    return anime.animate(
        macrowaveCharge,
        {
            opacity: 0.5,
            duration: 200,
        },
    )

}

function animateMacrowaveChargingHide() {
    var macrowaveCharge = document.getElementById("macrowave-charge")

    return anime.animate(
        macrowaveCharge,
        {
            opacity: 0,
            duration: 200,
        },
    )

}

function animateMacrowaveReleaseShow() {
    var macrowaveRelease = document.getElementById("macrowave-release")

    return anime.animate(
        macrowaveRelease,
        {
            opacity: 0.5,
            duration: 200,
        },
    )

}

function animateMacrowaveReleaseHide() {
    var macrowaveRelease = document.getElementById("macrowave-release")

    return anime.animate(
        macrowaveRelease,
        {
            opacity: 0,
            duration: 200,
        },
    )

}

function animateButtonDamageFlash() {
    return anime.animate(
        '#skip',
        {
            opacity: [1, 0, 1],
            duration: 50,
            easing: 'none',
            loop: 20,
        },
    )
}

function animateButtonTackleStart() {
    anime.remove('#skip')

    return anime.animate(
        '#skip',
        {
            bottom: '-10px',
            duration: 90,
            easing: 'none',
        }
    )
}

function animateButtonTackleEnd() {


    return anime.animate(
        '#skip',
        {
            bottom: '60px',
            duration: 90,
            easing: 'linear',
        }
    )
}

function animateButtonWin() {
    return anime.animate(
        '#skip',
        {
            opacity: [1, 0],
            duration: 5000,
            easing: 'linear',
        },
    )
}


function animateDarkpatternShow() {
    var shade = document.getElementById("darkpattern-shade")

    return anime.animate(
        shade,
        {
            opacity: 1,
            duration: 1000,
        },
    )

}


function animateDarkpatternHide() {
    var shade = document.getElementById("darkpattern-shade")

    return anime.animate(
        shade,
        {
            opacity: 0,
            duration: 1000,
        },
    )

}
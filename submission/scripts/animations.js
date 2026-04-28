function animateButtonIdle() {
    var skipButtonCurrentY = anime.get('#skip', 'translateY')
    var skipButtonCurrentX = anime.get('#skip', 'translateX')

    anime.animate(
        '#skip',
        {
            y: [
                { from: skipButtonCurrentY, to: parseFloat(skipButtonCurrentY) + 1 + 'px', ease: 'none', duration: 100 },
            ],
            // x: [
            //     { from: skipButtonCurrentX, to: parseFloat(skipButtonCurrentX) + 1 + 'px', ease: 'none', duration: 100 },

            // ],
            loop: true,
            alternate: true,
        }
    )
}
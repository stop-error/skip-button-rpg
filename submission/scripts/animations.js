function animate_button_idle() {
    var skipButtonCurrentY = anime.get('#skip', 'translateY')
    var skipButtonCurrentX = anime.get('#skip', 'translateX')

    anime.animate(
        '#skip',
        {
            y: [
                { from: skipButtonCurrentY, to: parseFloat(skipButtonCurrentY) + 15 + 'px', ease: 'linear', duration: 9000 },
            ],
            x: [
                { from: skipButtonCurrentX, to: parseFloat(skipButtonCurrentX) + 8 + 'px', ease: 'linear', duration: 9000 },

            ],
            loop: true,
            alternate: true,
        }
    )
}
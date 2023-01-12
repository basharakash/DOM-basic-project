document.addEventListener('click', function(e) {
    const body = document.querySelector('body')


    // add bullet
    const bullet = document.createElement('span')
    bullet.classList.add('bullet')
    const x = e.offsetX
    const y = e.offsetY
    bullet.style.left = x + 'px'
    bullet.style.top = y + 'px'

    body.appendChild(bullet)

    // blood add

    const blood = document.createElement('span')
    blood.classList.add('blood')
    blood.style.left = x + 'px'
    blood.style.top = y + 'px'

    const images = [
        'url(images/blood.png)',
        'url(images/blood2.png)',
        'url(images/blood3.png)',
        'url(images/blood4.png)',
        'url(images/blood5.png)',
    ]

    const bloodBg = images[Math.floor(Math.random() * images.length)]
    blood.style.backgroundImage = bloodBg

    body.appendChild(blood)

    setTimeout(function() {
        bullet.remove()
        blood.remove()
    }, 2000)

    // sound play

    const sound = document.getElementById('sound')
    sound.play()

    const mainBg = document.querySelector('section')
    mainBg.classList.add('mainBg')

    const bgImage = [
        'url(images/bg.jpg)',
        'url(images/bg2.jpg)',
        'url(images/bg3.jpg)',
        'url(images/bg4.jpg)',
        'url(images/bg5.jpg)',
        'url(images/bg6.jpg)',
    ]

    const backBg = bgImage[Math.floor(Math.random() * bgImage.length)]
    mainBg.style.backgroundImage = backBg
})
function crackbutton() {
    const crackSkin = document.getElementById('smoothskin')
    const smoothSkin = document.getElementById('crackskin')
    const button_add_class = document.getElementById('add_class')
    const crackImage = document.getElementById('crack')

    crackSkin.classList.toggle('on')
    smoothSkin.classList.toggle('on')
    button_add_class.classList.toggle('change')
    crackImage.classList.toggle('crackx')
}
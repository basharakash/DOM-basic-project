function changeContent(getvalue) {
    const backgroundColor = document.querySelector('.bgcolor')
    backgroundColor.style.background = getvalue.value

    const selectText = document.querySelector('.card')
    const textValue = getvalue.options[getvalue.selectedIndex].text
    selectText.innerHTML = textValue
}
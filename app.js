const pianokeys = document.querySelectorAll('.key')

function playsound(newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}



pianokeys.forEach((pianokey, i) => {
    const Number = i < 9 ? '0' + (i + 1) : (i + 1)
 const newUrl = '24-piano-keys/key' + Number +'.ogg'


    pianokey.addEventListener('click', () => playsound (newUrl
        ))
});
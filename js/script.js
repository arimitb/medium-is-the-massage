const content = [
    'The Medium is the Massage',
    'your family',
    'The family circle has widened.',
    'img/2.png',
    'The worldpool of information fathered by electric media...',
    '...movies, Telstar, flight...',
    '...far surpasses any possible influence mom and dad can now bring to bear.',
    'Character no longer is shaped by only two earnest, fumbling experts.',
    '...',
    `Now all the world's a sage. :)`,
    `img/1.png`,
    `your neighborhood`,
    `Electric circuitry has overthrown the regime of "time" and "space" and pours upon us instantly and continuously the concerns of all other men.`,
    `img/3.png`,
    `It has reconstituted dialouge on a global scale.`,
    `Its message is Total Change, ending psychic, social, economic, and political parochialism.`,
    `The old civic, state, and national groupings have become unworkable.`,
    `Nothing can be further from the spirit of new technology than "a place for everything and everything in its place."`,
    `...`,
    `You can't go home again. :)`,
    'The wheel...',
    'img/4.png',
    `...is an extension of the foot.`,
    'img/5.png',
    `The book...`,
    'img/6.png',
    `...is an extension of the eye.`,
    'img/7.png',
    `Clothing...`,
    'img/8.png',
    `...an extension of the skin.`,
    'img/9.png',
    `Electric circuitry?`,
    '...',
    `An extension of the central nervous system.`,
    `Media, by altering the environment, evoke in us unique ratios of sense perceptions. The extension of any one sense alters the way we think and act. The way we percieve the world. When these ratios change...`,
    `...men change. :)`
]

const contentAnimSpeed = 50 // Inverse

let curContent = -1
let contentEl = document.querySelector('.content')

window.addEventListener('click', clickHandler)

function clickHandler() {
    nextContent()
}

function nextContent() {
    if (curContent < content.length - 1) {
        curContent++

        let id = window.setTimeout(function () {}, 0)

        while (id--) {
            window.clearTimeout(id)
        }

        if (content[curContent].indexOf('img/') != -1) {
            contentEl.innerHTML = `
                <img src="${content[curContent]}">
            `
        } else {
            window.speechSynthesis.cancel()
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(content[curContent]))

            for (let i = 0; i < content[curContent].length; i++) {
                setTimeout(function () {
                    contentEl.innerHTML = content[curContent].substring(0, i + 1)
                }, i * contentAnimSpeed)
            }
        }
    }
}
nextContent()
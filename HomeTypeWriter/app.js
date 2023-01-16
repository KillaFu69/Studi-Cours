const baseElement = document.querySelector('#home-type-writer')

// Création d'un élément pour le curseur
const cursorElement = createElement('span', {
    id: 'cursor',
    text: '|',
})

// Création d'un élément contenant le text à écrire
const textContentElement = createElement('span', {
    id: 'text-content',
    color: 'white',
})

const textToWrite = "Bonjour je m'appelle Killa !"

// Fonction pour écrire du texte
function write(textToWrite) {
    return new Promise(function (resolve, reject) {
        let compteur = 0

        const intervalID = setInterval(function () {
                textContentElement.innerText += textToWrite[compteur]
                compteur++
                if (compteur === textToWrite.length) {
                    clearInterval(intervalID)
                    resolve()
                }
            },
            100
        )
    })
}

// Fonction pour effacer du text
function erase(length) {
    return new Promise(function (resolve, reject) {
        // On va compter le nombre de caractères supprimés
        // On initie un compteur
        let erasedChar = 0
        const intervalID = setInterval(function () {
                // On va supprimer un premier caractère
                let text = textContentElement.innerText.slice(0, -1)
                textContentElement.innerText = text
                // On incrémente le compteur de caractères supprimés
                erasedChar++
                // Si le compteur == à la longueur voulu à supprimer
                // On nettoie l'interval
                if (erasedChar === length) {
                    clearInterval(intervalID)
                    resolve()
                }
            },
            100
        )
    })
}

const textBackend = "Backend"
async function writeAll() {
    await write(textToWrite)
    await wait(1000)
    await write(" Je suis un développeur " + textBackend)
    await wait(1000)
    await erase(textBackend.length)
    await write(" Frontend")
}

writeAll()

baseElement.append(cursorElement)
cursorElement.before(textContentElement)

// Fonction pour créer et retourner un élément
function createElement (tagName, options) {
    const element = document.createElement(tagName)
    if (options.id) {
        element.id = options.id
    }
    if (options.color) {
        element.style.color = options.color
    }
    if (options.text) {
        element.innerText = options.text
    }

    return element
}

// Fonction pour faire clignoter le curseur
function blink () {
    if (cursorElement.style.opacity === '0.8') {
        cursorElement.style.opacity = '0'
    } else {
        cursorElement.style.opacity = '0.8'
    }
}
setInterval(blink, 500)


// Fonction pour faire une pause
function wait (duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve()
        }, duration)
    })
}
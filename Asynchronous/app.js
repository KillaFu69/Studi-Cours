function faireLeLit() {
    console.log('Lit fait')
}

function rangerDesAffaires() {
    console.log('Affaires rangés')
}

function faireLaVaisselle(produitSuffisant = true) {
    try {
        return new Promise(function(resolve, reject) {
            if (produitSuffisant === false) {
                reject()
                return;
            }

            setTimeout(function () {
                console.log('Vaisselle terminée')
                resolve()
            }, 5000)
        })
    } catch (e) {
        console.log(e.message)
    }

}


function balayerLeSol() {
    console.log('Sol est balayé')
}

faireLeLit()
rangerDesAffaires()
async function toto() {
    await faireLaVaisselle
}
console.log(faireLaVaisselle(false))

balayerLeSol()


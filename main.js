'use strict'

const botaoMostarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')

botaoMostarTodosNumeros.addEventListener('click', mostrarTodosNumeros)

function mostrarTodosNumeros() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')

    const ultimoIndice = numeros.length
    for (let indice = 0; indice < ultimoIndice; indice++) {

        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]
        container.appendChild(novoSpan)
    }
}

const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')

botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)

function mostrarNumerosPares() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {

        if (numeros[indice] % 2 == 0) {

            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')

botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)

function mostrarNumerosImpares() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {

        if (numeros[indice] % 2 != 0) {

            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

const botaoMostrarMultiplos3 = document.getElementById('botao-mostrar-multiplos3')

botaoMostrarMultiplos3.addEventListener('click', mostrarMultiplos3)

function mostrarMultiplos3() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos3')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {

        if (numeros[indice] % 3 == 0) {

            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

const botaoMostrarMultiplos3e4 = document.getElementById('botao-mostrar-multiplos3e4')

botaoMostrarMultiplos3e4.addEventListener('click', mostrarMultiplos3e4)

function mostrarMultiplos3e4() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos3e4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {

        if (numeros[indice] % 3 == 0 && numeros[indice] % 4 == 0) {

            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

const botaoMostrarMultiplos3ou4 = document.getElementById('botao-mostrar-multiplos3ou4')

botaoMostrarMultiplos3ou4.addEventListener('click', mostrarMultiplos3ou4)

function mostrarMultiplos3ou4() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos3ou4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {

        if (numeros[indice] % 3 == 0 || numeros[indice] % 4 == 0) {

            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

const botaoMostrarProximoNumero = document.getElementById('botao-mostrar-proximo-numero')

botaoMostrarProximoNumero.addEventListener('click', mostrarProximoNumero)

function mostrarProximoNumero() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numero')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {

        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) + 1
        container.appendChild(novoSpan)
    }
}

const botaoMostrarProximoNumeroPar = document.getElementById('botao-mostrar-proximo-numero-par')

botaoMostrarProximoNumeroPar.addEventListener('click', mostrarProximoNumeroPar)

function mostrarProximoNumeroPar() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numero-par')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {

        if (numeros[indice] % 2 == 0) {

            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 2
            container.appendChild(novoSpan)

        } else if (numeros[indice] % 2 == 1) {

            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 1
            container.appendChild(novoSpan)
        }


    }
}

const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')

botaoMostrarDobro.addEventListener('click', mostrarDobro)

function mostrarDobro() {

    // split pega uma string e divide ela com base em um separador ','
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {

        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) * 2
        container.appendChild(novoSpan)
    }
}
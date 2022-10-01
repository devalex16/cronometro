//VEJA COM MODERAÇÃO ☺️

let horasCrono = 0
let minutosCrono = 0
let segundosCrono = 0

var estaContando = false
var estaParando = false

// [CORES USADAS]
cores = {
  cor0: "#1C1429",
  cor1: "#00FE81",
  cor2: "#E5FF00",
  cor3: "#FF3A35",
  // MUDANDO COR DE FUNDO - BACKGROUND
  mudando(cor) {
    let fundo = document.body
    let crono = document.querySelectorAll("p")
    fundo.style.backgroundImage = `linear-gradient(to bottom, ${cores.cor0}, ${cores.cor0}, ${cor})`
    // Tag p Horas
    for (let i = 1; i < 3; i++) {
      crono[i].style.color = cor
      crono[i].style.textShadow = `0px 0px 20px ${cor}`
    }
  }
}

//[HORÁRIO]
function marcandoHoras() {
  let horas = new Date()
  let horasMinutos = document.getElementById("hrs")
  horasMinutos.innerText = `${horas.getHours()}:${horas.getMinutes()}:${horas.getSeconds()}`
}

// [CRONOMÊTRO (FUNÇÃO E TEMPO)]
const intervalo = setInterval(cronometro, 1000)

// [FUNÇÃO DO CRONOMÊTRO]
function cronometro() {
  if (estaContando) {
    segundosCrono += 1
    if (segundosCrono >= 60) {
      segundosCrono = 0
      minutosCrono += 1
    } else if (minutosCrono >= 60) {
      segundosCrono = 0
      minutosCrono = 0
      horasCrono += 1
    }
  } else if (estaParando) {
    horasCrono = 0
    minutosCrono = 0
    segundosCrono = 0
    estaParando = false
  }
  // COLOCANDO HORA E MINUTOS DO CRONO NO HTML
  let tagHora = document.getElementById("horas")
  let tagMinuto = document.getElementById("minutos")

  tagHora.innerText = horasCrono
  tagMinuto.innerText = minutosCrono
  // COLOCANDO HORA E MINUTOS NO HTML
  marcandoHoras()
}

// [EVENTOS]
const iniciar = document.getElementById("comecar")
const pausar = document.getElementById("pausar")
const parar = document.getElementById("parar")

// [ADD EVENTOS]
iniciar.addEventListener('click', iniciando)
pausar.addEventListener('click', pausando)
parar.addEventListener('click', parando)

// [FUNÇÕES DOS EVENTOS]
function iniciando() {
  estaContando = true
  cores.mudando(cores.cor1)
  console.log("Clicou no Triangulo!")
}

function pausando() {
  estaContando = false
  cores.mudando(cores.cor2)
  console.log("Clicou no Bola!")
}

function parando() {
  estaParando = true
  estaContando = false
  cores.mudando(cores.cor3)
  console.log("Clicou no Quadrado!")
}


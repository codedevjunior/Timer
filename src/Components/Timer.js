import React from "react"

export default function Timer() {

  //variaveis iniciada em 0 e intervalo de 1000 (milissegundos)
  var sec = 0
  var min = 0
  var hra = 0
  var interval

  //função para adicionar dois digitos
  function twoDigits(digit) {
    if (digit < 10) {
      return ('0' + digit)
    } else {
      return (digit)
    }
  }

  //função para iniciar contador em milissegundos
  function start() {
    watch()
    interval = setInterval(watch, 1000)
  }

  //função para pausar o contador
  function pause() {
    clearInterval(interval)
  }

  //função para parar o contador e retornar no inicio de '00:00:00'
  function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerText = '00:00:00'
  }

  //função watch adiciona um min quando o contador sec chegar ao 60 (00:01:60)
  function watch() {
    sec++
    if (sec == 60) {
      min++
      sec = 0
      if (min == 60) {
        min = 0
        hra++
      }
    }
    document.getElementById('watch').innerText = twoDigits(hra) + ':' + twoDigits(min) + ':' + twoDigits(sec)
  }

  return (
    <div>
      <h1 id="watch">00:00:00</h1>
      <button class="start-btn" onClick={start}>Iniciar</button>
      <button class="pause-btn" onClick={pause}>Pausar</button>
      <button class="stop-btn" onClick={stop}>Parar</button>
    </div>
  )
}
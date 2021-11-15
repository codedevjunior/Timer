import React from "react"

export default function Timer() {

  var sec = 0
  var min = 0
  var hra = 0
  var interval

  function twoDigits(digit) {
    if (digit < 10) {
      return ('0' + digit)
    } else {
      return (digit)
    }
  }

  function start() {
    watch()
    interval = setInterval(watch, 1000)
  }

  function pause() {
    clearInterval(interval)
  }

  function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerText = '00:00:00'
  }

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
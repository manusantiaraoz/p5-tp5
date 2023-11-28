  let timer;
  let mostrar= document.getElementById("timer");
  let running = false; //nos sirve para saber si estaba ya corriendo el timmer (para cambiar la palabra iniciar o detener)
  let startTime;// Nuevo: para almacenar el tiempo de inicio
  let btnSartStop= document.getElementById("startStopButton"); 
  let btnreset=document.getElementById("reset");



   function startStop() {
    if (running) {
      clearInterval(timer);
      btnSartStop.innerText = "Iniciar";
    } else {
      startTime = Date.now(); // Nuevo: guarda el tiempo de inicio
      console.log(startTime);
      timer = setInterval(updateTimer, 10); //comienza a correr el cronometro
      btnSartStop.innerText = "Detener";
    }
    running = !running; //setea a lo contrario la bandera running
  }

  function reset() {
    clearInterval(timer);
    running = false; //vuelve running a false
    mostrar.innerText = "00:00:000"; //setea h2
    btnSartStop.innerText = "Iniciar";//setea el boton a iniciar
  }

  function updateTimer() {
    const elapsedTime = Date.now() - startTime; // Calcula el tiempo transcurrido entre la ejecucion y el tiempo actual 
    updateDisplay(elapsedTime);//envia a formatear
  }

  function updateDisplay(ms) {
    const formattedTime = formatTime(ms);
    mostrar.innerText = formattedTime;   //formatea el reloj
  }

  function formatTime(ms) {//opera para sacar hora minutos y segundos, y retorna formateada la hora despues de comprobar si tiene el largo 1 o 2
    const minutes = Math.floor(ms / (60 * 1000));
    const seconds = Math.floor((ms % (60 * 1000)) / 1000);
    const milliseconds = ms % 1000;
    return pad(minutes) + " : " + pad(seconds) + " : " + pad(milliseconds, 3);
  }

  function pad(num, length = 2) {//agrega el 0 de ser necesario
    let str = num.toString();
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }


btnSartStop.addEventListener("click", startStop);
btnreset.addEventListener("click",reset)
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let time = 10;
let intervalo;


function iniciar(){
  const displayCronometro = document.querySelector('.display-cronometro')

    intervalo = setInterval(() => {

      displayCronometro.innerText = `${hours < 10 ? "0"+hours : hours} : ${minutes < 10 ? "0"+minutes : minutes} : ${seconds < 10 ? "0"+seconds : seconds} : ${milliseconds < 10 ? "0"+milliseconds : milliseconds}`

      if(milliseconds >= 99){
        milliseconds = 0;
        seconds++;
      }
      else if(seconds >= 59){
        seconds = 0;
        minutes++;
      }else if(minutes >= 59){
        minutes = 0;
        hours++;
      }else{
        milliseconds++;
      }
      
  },time)
}

function pausar(){
  clearInterval(intervalo)
}

function zerar(){
  clearInterval(intervalo)
  document.querySelector('.display-cronometro').innerText = "00 : 00 : 00 : 00"
  hours = 0, minutes = 0, seconds = 0;
}

 // setInterval(() => {  
  //   if(minutes >= 59) {
  //     hours++
  //     minutes = 0;
  //   }else if(hours >= 24 && minutes >= 59){
  //     hours = 0;
  //     minutes = 0;
  //   }else{
  //     minutes++;
  //   }
  //  display.innerHTML = `${hours < 10 ? "0"+hours : hours} : ${minutes < 10 ? "0"+minutes : minutes}`
  // },1000)
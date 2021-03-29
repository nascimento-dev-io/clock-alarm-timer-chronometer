let control;

function iniciarTimer(){
  const displayTimer = document.querySelector('.display-timer')
  
  let hoursTimer = parseInt(document.querySelector('[data-horas]').value) 
  let minutesTimer = parseInt(document.querySelector('[data-minutos]').value)


  displayTimer.firstElementChild.setAttribute("disabled", true)
  displayTimer.lastElementChild.setAttribute("disabled", true)

  control = setInterval(() =>{
    displayTimer.firstElementChild.value = `${hoursTimer < 10 ? "0" + hoursTimer : hoursTimer}`
    displayTimer.lastElementChild.value = `${minutesTimer < 10 ? "0" + minutesTimer : minutesTimer}`

    
    if(hoursTimer <= 0 && minutesTimer <= 0){      
      resetar()

      alert('Tempo Finalizado !')

      
    }else if(minutesTimer <= 0){
      minutesTimer = 59;
      hoursTimer--;
    }else{
      minutesTimer--;
    }

  },60000)
  
}


function resetar() {
  clearInterval(control)
  document.querySelector('.display-timer').firstElementChild.removeAttribute("disabled")
  document.querySelector('.display-timer').lastElementChild.removeAttribute("disabled")

  document.querySelector('.display-timer').firstElementChild.value = "00"
  document.querySelector('.display-timer').lastElementChild.value = "00"

}
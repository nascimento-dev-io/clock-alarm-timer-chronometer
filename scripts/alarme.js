function closeModal(e){
  const modal = document.querySelector(".modal")

  if(e.target !== modal) return;

  modal.style.display = 'none';
}


function definirAlarme(){
  const modal = document.querySelector('.modal')
  modal.style.display = 'none'  

  const horario = document.querySelector('#hora')  
  const display = document.querySelector('.display') 
  
  let [hours, minutes] = horario.value.split(':'); hours = parseInt(hours); minutes = parseInt(minutes);

  
    display.innerHTML = `${hours < 10 ? '0'+hours : hours} : ${minutes < 10 ? '0'+minutes : minutes}`
  
    createNotify(hours, minutes)

  if(hours < new Date().getHours()){
    alert("Horário Inválido"); 
    
    display.innerHTML = `00 : 00`
    document.querySelector('.notify').style.display = 'none'
  } 
}

function createNotify(hours, minutes){
  let [currentHours, currentMinutes] = [0, 0]
  let hoursDiff = 0;
  let minutesDiff = 0; 

  const notify = document.querySelector('.notify')

  const interval = setInterval(() => {
    [currentHours, currentMinutes] = [new Date().getHours(), new Date().getMinutes()]

    minutesTotal = (hours - currentHours) * 60 + minutes - currentMinutes

    hoursDiff = Math.floor(minutesTotal / 60);
    minutesDiff = minutesTotal % 60;    

    if(currentHours === hours && currentMinutes === minutes) {
      clearInterval(interval)
      notify.classList.add('walk-up')
      notify.innerText = 'ACORDAAAAAAAAAAA'
    }else{
        notify.innerText = `Faltam ${hoursDiff} horas e ${minutesDiff} Minutos para o alarme.`
    }
    
  },1000)
  
}
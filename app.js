const clockbox = document.querySelector('.clock-box');
const formatbtn = document.querySelector('.format')
let statee = false;
const container = document.querySelector('.container');
const datebox = document.querySelector('.date-box');
formatbtn.addEventListener('click' , () => {
  statee = !statee;
})


setInterval(() => {
    const currentTime =  new Date()

    const hours = currentTime.getHours().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }) 
    const minutes = currentTime.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    const seconds = currentTime.getSeconds().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      if(hours > 18 || hours < 6 ){
          container.style.backgroundColor="black"
        }else{
          document.body.style.backgroundColor="white"
          container.style.backgroundColor="white";
      }   
        
      datebox.innerHTML = `${currentTime.getMilliseconds().toLocaleString('en-US',{minimumIntegerDigits : 2})}`
      if(statee == true ) {
        clockbox.innerHTML = `${hours%12} : ${minutes} : ${seconds} - ${hours > 12 ? "P.M" : "A.M"}`
        formatbtn.innerHTML = '24 hour format'

      }
      else{
        clockbox.innerHTML = `${hours} : ${minutes} : ${seconds}`
        formatbtn.innerHTML = '12 hour format'

      }


}, 1);




const clockbox = document.querySelector('.clock-box');




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
      })
    const thetime =  `${hours} : ${minutes} : ${seconds}`
    console.log(thetime)
    clockbox.innerHTML = thetime
}, 1000);


// clockbox.innerHTML = 
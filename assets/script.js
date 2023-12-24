// ***************DATE***************
const titledata=document.getElementById('title-data');
const numberdata=document.getElementById('number-data');
const textdata=document.getElementById('text-data');
const msgchristmas=document.getElementById('msg-christmas');

const count = () =>{
    let now = new Date(),
        currentMonth = now.getMonth() + 1,
        currentDay = now.getDate()

    let nextyear = now.getFullYear()
    if(currentMonth == 12 && currentDay > 25 ){
        nextyear += 1
    }
    let nextdata = `Dec 25, ${nextyear} 00:00:00`,
        christmasDay = new Date(nextdata),
        timeLeft = christmasDay - now 

    let days = 0,
        hours = 0,
        minutes = 0,
        seconds= 0

    if(currentMonth != 12 || ( currentMonth ==12 && currentDay != 25 )){
        days = Math.floor(timeLeft / 1000 /60 / 60 / 24)
        hours = Math.floor(timeLeft / 1000 /60 / 60 )% 24
        minutes = Math.floor(timeLeft / 1000 /60 ) % 60
        seconds = Math.floor(timeLeft / 1000) % 60
    }

    numberdata.innerHTML = days < 10 ? `0${days}` : days 
    textdata.innerHTML = 'Days'

    if (currentDay == 24){
        numberdata.innerHTML = hours < 10 ? `0${hours}` : hours
        textdata.innerHTML = 'Hours'
    }

    if (currentDay == 24 && hours === 0){
        numberdata.innerHTML = minutes < 10 ? `0${minutes}` : minutes
        textdata.innerHTML = 'Minutes'
    }
    
    if (currentDay == 24 && hours === 0 && minutes === 0){
        numberdata.innerHTML = seconds < 10 ? `0${seconds}` : seconds
        textdata.innerHTML = 'Seconds'
    }

    if (currentMonth ==12 && currentDay == 25){
        titledata.style.display = 'none'
        msgchristmas.style.display = 'block'
        msgchristmas.innerHTML = 'Today is Dec, Merry Christmas'
    }

    if (currentMonth ==12 && currentDay == 26){
        titledata.style.display = 'block'
        msgchristmas.style.display = 'none'
    }
}
setInterval(count,1000)



// *************DARK MODE***************

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

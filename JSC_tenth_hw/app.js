function $(selector) {
    return document.querySelector(selector)
}

function currentTime() {

    const date = new Date()

    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()

    $('.current__date').textContent = `
    ${day > 9 ? day : '0' + day}
    .${month > 9 ? month : '0' + month}
    .${year > 9 ? year : '0' + year}`

    $('.current__time').innerHTML = `
    ${hours > 9 ? hours : '0' + hours} :
    ${minutes > 9 ? minutes : '0' + minutes} :
    <span class="seconds">
    ${seconds > 9 ? seconds : '0' + seconds}
    </span>`
}
currentTime() // Call function avoid empty screen 
setInterval(currentTime, 1000)

function stopWatch() {

    let time, start, mark, corr

    function stringRender(miliseconds) {

        let hh, mm, ss, ms

        ms = miliseconds % 1000
        if (ms <= 9) {
            ms = '00' + ms
        } else if (ms <= 99) {
            ms = '0' + ms
        }

        ss = Math.floor((miliseconds % (60000)) / 1000)
        if (ss <= 9) {
            ss = '0' + ss
        }

        mm = Math.floor((miliseconds % (3600000)) / 60000)
        if (mm <= 9) {
            mm = '0' + mm
        }

        hh = Math.floor((miliseconds % (86400000)) / 3600000)
        if (hh <= 9) {
            hh = '0' + hh
        }

        return `${hh}:${mm}:${ss}:<span class="seconds">${ms}</span>`
    }

    function lapList(miliseconds) {
        let listItem = document.createElement('li')
        listItem.innerHTML = stringRender(miliseconds)
        $('.stopwatch__laps--list').append(listItem)
    }


    $('[data-btn = "start"]').addEventListener('click', () => {

        start = Date.now()

        let int = setInterval(() => {
            time = Date.now() - start + (corr === undefined ? 0 : corr)
            $('.stopwatch__display--dights').innerHTML = stringRender(time)
        }, 1);

        $('[data-btn = "stop"]').addEventListener('click', () => {
            mark = Date.now()
            corr = time
            clearInterval(int)
        })

        $('[data-btn = "reset"]').addEventListener('click', () => {
            corr = 0
            time = 0
            start = 0
            clearInterval(int)
            $('.stopwatch__display--dights').innerHTML = stringRender(time)
            $('.stopwatch__display--dights span').classList.remove('seconds')
            $('.stopwatch__laps--list').innerHTML = ''
        })
    })

    $('[data-btn = "lap"]').addEventListener('click', () => {
        if ($('.stopwatch__laps--list').children.length < 8) {
            lapList(time)
        } else {
            $('.stopwatch__laps--list').innerHTML = ''
            lapList(time)
        }
    })
}
stopWatch()

function timer() {

    const conditionDisplay = $('.timer__set--display_dights')
    const countDownDisplay = $('.timer__countdown--display')

    let condition = +(conditionDisplay.textContent)

    let time, conds

    function setTimeZero(minutes, seconds) {
        let timeZero = new Date()
        let currentMinutes = timeZero.getMinutes()
        let temp = currentMinutes + minutes
        timeZero.setMinutes(temp)
        return timeZero.getTime() + 1000 + (seconds === undefined ? 0 : seconds * 1000)
    }

    function renderIterator(miliseconds) {
        let ss = Math.floor((miliseconds % (60000)) / 1000)
        if (ss <= 9) {
            ss = '0' + ss
        }

        let mm = Math.floor((miliseconds % (3600000)) / 60000)
        if (mm <= 9) {
            mm = '0' + mm
        }

        return `${mm}:${ss}`
    }

    function parserHandler(str) {
        let mm, ss
        let temp = []
        temp = str.split(':')
        mm = +(temp[0])
        ss = +(temp[1])
        return {
            mm: mm,
            ss: ss
        }
    }

    $('[data-btn="add"]').addEventListener('click', () => {
        conditionDisplay.textContent = ++condition
    })

    $('[data-btn="subtract"]').addEventListener('click', () => {
        conditionDisplay.textContent = --condition
    })

    $('[data-btn="start_timer"]').addEventListener('click', () => {
        let buffer = setTimeZero(condition, conds)
        countDownDisplay.textContent = `${condition}:${conds ? conds : '00'}`
        let iter = setInterval(() => {
            time = buffer - Date.now()
            countDownDisplay.textContent = renderIterator(time)
        }, 1000);

        $('[data-btn="stop_timer"]').addEventListener('click', () => {
            condition = parserHandler(countDownDisplay.textContent).mm
            conds = parserHandler(countDownDisplay.textContent).ss
            clearInterval(iter)
        })

        $('[data-btn="reset_timer"]').addEventListener('click',()=>{
            clearInterval(iter)
            
            conditionDisplay.textContent = '25'
            countDownDisplay.textContent = '00:00'
            condition = +(conditionDisplay.textContent)
        })
    })
}
timer()

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

    let time
    let start 
    let mark
    let corr

    function log(params) {
        console.log(params);
    }


    $('[data-btn = "start"]').addEventListener('click', () => {
        
        // if(start === undefined){
            start =  Date.now()            
            console.log(start,'plc');
        // } else {
            
        // }

        let int = setInterval(() => {
            time = Date.now() - start + (corr === undefined ? 0 : corr)
            
            log(time)
        }, 1000);


        $('[data-btn = "stop"]').addEventListener('click', () => {
            mark = Date.now()
            corr = time
            clearInterval(int)
        })


    })
}
   
stopWatch()








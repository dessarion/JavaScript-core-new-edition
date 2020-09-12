$(()=>{
    const duration = 60000
    $('.container-timer_black').show().animate({
        height: '440px'        
    },duration)
    setTimeout(() => {
        $('h1').text('1')
    }, duration);
    $('.container-timer_black').animate({
        height: '0px'        
    },duration)
    setTimeout(() => {
        $('h1').text('0')
    }, duration*2);    
})
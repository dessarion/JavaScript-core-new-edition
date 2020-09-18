$(() => {

    const getRandomColor = function () {
        const data = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += data[Math.floor(Math.random() * 16)]
        }
        return color
    }
    const duration = 1200
    const easing = 'easeInOutQuart'
    const maxHeight = window.innerHeight
    const maxWidth = window.innerWidth
    const geometry = {
        min: 50,
        max: 150,
    }


    setInterval(() => {
        $('.disco-ball').css({
            boxShadow: `0px 0px 30px 10px ${getRandomColor()}`
        })
        const h = Math.floor(Math.random() * geometry.max) + geometry.min
        const w = Math.floor(Math.random() * geometry.max) + geometry.min
        const t = Math.floor(Math.random() * maxHeight)
        const r = Math.floor(Math.random() * maxWidth)
        $('.disco-ball').animate({
            top: t > h ? t - h : t + h,
            right: r > w ? r - w : r + w,
            witdh: w,
            height: h,
            backgroundColor: getRandomColor(),
            borderColor: getRandomColor(),
        }, duration, easing)
    }, duration);

})
$(() => {

  const getRandomColor = function() {
    const data = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += data[Math.floor(Math.random()*16)]
    }
    return color
  }

  $('.click-box').click(function(){
    const maxWidth = window.innerWidth
    const maxHeight = window.innerHeight
    const duration = 600
    const easing = 'easeInCirc'
    const geometry = {
      min: 50,
      max: 250,
    }
    const h = Math.floor(Math.random()*geometry.max) + geometry.min
    const w = Math.floor(Math.random()*geometry.max) + geometry.min
    const t = Math.floor(Math.random()*maxHeight)
    const r = Math.floor(Math.random()*maxWidth)
    $(this).css({
      background: getRandomColor(),     
    })
    $(this).animate({
      top: t > h? t - h: t + h,
      right: r > w? r - w: r + w,
      witdh: w,
      height: h
    },duration,easing)
    console.log(h,w);
  })
})
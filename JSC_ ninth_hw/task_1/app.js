
const $$leftSlide = document.querySelector('.from_left')
const $$rightSlide = document.querySelector('.from_right')
const $toDown = document.querySelector('.to_down')
const $toTop = document.querySelector('.to_top')
const $$bottom = document.querySelector('#bottom')
const $$top  = document.querySelector('#top')

const scrollItems = function () {

    const options = {
        moveIndex: 4,
        stopColapsing: 1000,
        widthCap: 8,
        fontGrow: 12,
        fontMax: 450,
        bottomFontMin: 206
    }
    
    if(scrollY <= options.fontMax){
        $toDown.style.fontSize = `${scrollY / options.fontGrow + 24}px`
        
    }    

    if (scrollY <= options.stopColapsing) {
        $$leftSlide.style.left = `${scrollY / options.moveIndex + 100}px`
        $$leftSlide.style.width = `${scrollY / options.widthCap + 250}px`
        $$rightSlide.style.right = `${scrollY / options.moveIndex + 100}px`
    }

    $toTop.style.fontSize = `${options.bottomFontMin - (scrollY / options.fontGrow + 24)}px`
}

$toDown.addEventListener('click', ()=> {
    $$bottom.scrollIntoView({        
        behavior: "smooth"
    })
})

$toTop.addEventListener('click' ,()=>{
    $$top.scrollIntoView({        
        behavior: "smooth"
    })
})

window.addEventListener('scroll', scrollItems)


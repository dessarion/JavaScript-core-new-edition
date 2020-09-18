$(() => {

    const options = {
        maxSide: 350,
        initialSide: 150,
        duration: 900,
        easingType: 'easeOutBounce'
    }

    $('.container-box_img').each(function (idx, $el) {
        let isShown = false
        $($el).click(function () {
            if (isShown) {                
                $($el).animate({
                    width: options.initialSide,
                    height: options.initialSide,
                    top: 0,
                    right: 0
                }, options.duration, options.easingType, function () {
                    $($el).css({
                        zIndex: 2
                    })
                    $('.bg').css({
                        zIndex: -1,
                        backgroundColor: '#fff'
                    })
                })
                isShown = false
            } else if (!isShown) {
                $('.bg').css({
                    zIndex: 3,
                    backgroundColor: $($el).css('background-color'),
                    opacity: 0.2
                })
                $($el).css({
                    zIndex: 4
                })
                $($el).animate({
                    width: options.maxSide,
                    height: options.maxSide,
                    top: ((window.innerHeight / 2 - options.maxSide)),
                    right: -(($('.container').width() - options.maxSide) / 2) + ((options.initialSide + 4) * idx)
                }, options.duration, options.easingType)
                isShown = true
            }
        })
    })
})
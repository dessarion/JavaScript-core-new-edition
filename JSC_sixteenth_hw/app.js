$(() => {

    const utils = {
        getRandomDight(to = 16, from = 1) {
            return Math.floor(Math.random() * to) + from
        },
        getPuzleItem(idx) {
            return `<div class="displays-puzzle_item" data-idx="${idx}"></div>`
        },
        getEmptyDiv(cls = 'cell', count = 16) {
            let layout = ''
            for (let i = 0; i < count; i++) {
                layout += `<div class="${cls}" data-api="${i + 1}""></div>`
            }
            return layout
        },
        getRandomArr(targetLength = 16) {
            const arr = []
            let idx
            while (arr.length !== targetLength) {
                idx = this.getRandomDight()
                if (!arr.includes(idx)) {
                    arr.push(idx)
                }
            }
            return arr
        },
        _$(selector) {
            return document.querySelector(selector)
        },
        theyAreMatch(apis, idxs) {
            for (let i = 0; i < apis.length; i++) {
                if (apis[i] !== idxs[i]) {
                    return false
                }
            }
            return true
        },
        init() {
            const root = this._$('.displays-puzzle')
            const solutionRoot = this._$('.displays-solution')
            const randomArr = this.getRandomArr()
            root.innerHTML = ''
            solutionRoot.innerHTML = utils.getEmptyDiv()
            randomArr.forEach(i => {
                root.insertAdjacentHTML('beforeend', this.getPuzleItem(i))
            })
            $('.displays-puzzle_item').draggable({
                revert: true,
                revertDuration: 500,
            })
            $('.cell').droppable({
                accept: '.displays-puzzle_item',
                drop: function (event, ui) {
                    let draggableElement = ui.draggable
                    let droppedOn = $(this)
                    $(draggableElement).css({
                        top: 0,
                        left: 0,
                        position: 'relative'
                    }).appendTo(droppedOn)
                }
            })
        }
    }

    let interval 
    const store = {
        sec: 59,        
        startInterval() {
            store.sec = 59
            interval = setInterval(() => {
                if (store.sec >= 0) {
                    $('.panel-timer').text(`00:${store.sec > 9? store.sec : '0' + store.sec}`)
                    $('.messages-timer').text(`00:${store.sec > 9? store.sec : '0' + store.sec}`)                    
                }
                store.sec -= 1
            }, 1000)
        },
        stopInterval() {
            clearInterval(interval)
        }  
        
    }

    $('[data-btn="new"]').click(function () { 
        utils.init() 
        $('[data-btn="start"]').removeClass('disabled').prop('disabled', false)
        $('.messages-timer').removeClass('hidden')
        $('.panel-timer').text('01:00')
        $('.messages-title').text('You still have time, you sure?')
    })

    $('[data-btn="start"]').click(function () {
        $('[data-btn="check"]').removeClass('disabled').prop('disabled', false)
        $('[data-btn="new"]').addClass('disabled').prop('disabled', true)
        $(this).addClass('disabled').prop('disabled', true)
        store.startInterval()
    })

    $('[data-btn="check"]').click(function () {        
        const apis = []
        const idxs = []
        for (let i = 0; i < $('.displays-solution').children().length; i++) {

            let api = $('.displays-solution').children()[i].dataset.api

            if (!$('.displays-solution').children()[i].children[0]) {
                idxs.push('false')
            } else {
                let idx = $('.displays-solution').children()[i].children[0].dataset.idx
                idxs.push(idx)
            }
            apis.push(api)

            $('.modal-window').removeClass('hidden')
            $('.bg').removeClass('hidden')

            $('[data-btn="modal-close"]').click(function(){
                $('.modal-window').addClass('hidden')
                $('.bg').addClass('hidden')
            })

            $('[data-btn="modal-check"]').click(function(){
                $('.messages-timer').addClass('hidden')
                $('[data-btn="new"]').removeClass('disabled').prop('disabled', false)
                $('[data-btn="check"]').addClass('disabled').prop('disabled', true)
                if (!utils.theyAreMatch(apis, idxs)) {
                    $('.messages-title').text("It's a pity, but you lost")
                } else if (utils.theyAreMatch(apis, idxs)) {
                    $('.messages-title').text("Woohoo, well done, you did it!")
                }
                store.stopInterval()
            })
        }        
    })

    utils.init()
})

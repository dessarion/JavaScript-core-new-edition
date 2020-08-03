// Basic functions

const $ = function (selector) {
    return document.querySelector(selector)
}

const hide = function (node) {
    node.classList.add('hidden')
}

const show = function (node) {
    node.classList.remove('hidden')
}

// DOM nodes collection

const $$ = {
    // static nodes

    $$startBlock: $('.container__start'),
    $$styleBlock: $('.style'),
    $$editorBlock: $('.editor'),
    $$buttonsBlock: $('.buttons'),
    $$addBlock: $('.add'),
    $$addTableSubBlock: $('.add__table'),
    $$addListSubBlock: $('.add__list'),
    $$editor: $('.editor textarea'),
    $$display: $('.display'),
    $$colorBox: $('.style__form--color-box'),
    
    // buttons

    $editBtn: $('.buttons__edit'),
    $saveBtn: $('.editor__buttons--save'),
    $styleBtn: $('.buttons__style'),
    $textColorBtn: $('.style__form--color-font_btn'),
    $bgColorBtn: $('.style__form--color-background_btn'),
    $addBtn: $('.editor__buttons--add'),
    $createTableBtn: $('.add__table--create-btn'),
    $createListBtn: $('.add__list--create-btn'),

    // Forms accesebility

    _$fontSizeRadio: document.forms.style__form['style__form--radio'],
    _$fontFamilySelect: document.forms.style__form['style__form--select'],
    _$boldCheckBox: document.forms.style__form['style__form--checkbox-bold'],
    _$italicCheckBox: document.forms.style__form['style__form--checkbox-italic'],
    _$addRadio: document.forms.add__form['add__form--radio'],
    _$$tableForm: document.forms['add__table--form'],
    _$tableTr: document.forms['add__table--form'].tr,
    _$tableTd: document.forms['add__table--form'].td,
    _$tdWidth: document.forms['add__table--form']['add__table--form-td_width'],
    _$tdHeight: document.forms['add__table--form']['add__table--form-td_height'],
    _$tdBorderWidth: document.forms['add__table--form']['add__table--form-td_border-width'],
    _$tdBorderType: document.forms['add__table--form']['add__table--form-td_border-type'],
    _$tdBorderColor: document.forms['add__table--form']['add__table--form-td_border-color'],
    _$$listForm: document.forms['add__list--form'],
    _$liCount: document.forms['add__list--form']['add__list--form-li_count'],
    _$listMarkType: document.forms['add__list--form']['add__list--form-li_marks-type']
}

/* DOM interaction methods,
creating node,
adding class,
adding styles */

const dom = (function () {

    function createNode(tag, className) {
        const $el = document.createElement(tag)
        if (className) {
            $el.classList.add(className)
        }
        return $el
    }

    function injectNode($el, root) {
        root.append($el)
    }

    function randomColor() {
        const hash = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += hash[Math.floor(Math.random() * 16)]
        }
        return color
    }

    function setStyle($el, styleType, value) {
        $el.style[`${styleType}`] = value
    }

    return {
        createElement: createNode,
        injectElement: injectNode,
        getColor: randomColor,
        setStyle: setStyle,
    }

})()

// Events collection

function events() {

    $$.$editBtn.addEventListener('click', () => {
        if (!$$.$$styleBlock.classList.contains('hidden')) {
            hide($$.$$styleBlock)
        }
        if (!$$.$$colorBox.classList.contains('hidden')) {
            hide($$.$$colorBox)
        }
        show($$.$$editorBlock)
        hide($$.$$startBlock)
        $$.$$editor.value = $$.$$display.innerHTML
    })

    $$.$saveBtn.addEventListener('click', () => {
        hide($$.$$editorBlock)
        show($$.$$startBlock)
        $$.$$display.innerHTML = $$.$$editor.value
    })

    $$.$styleBtn.addEventListener('click', () => {
        if (!$$.$$editorBlock.classList.contains('hidden')) {
            hide($$.$$editorBlock)
        }
        hide($$.$$startBlock)
        show($$.$$styleBlock)
    })

    for (let i = 0; i < $$._$fontSizeRadio.length; i++) {
        $$._$fontSizeRadio[i].addEventListener('click', () => {
            dom.setStyle($$.$$display, 'fontSize', event.target.value)
        })
    }

    $$._$fontFamilySelect.addEventListener('change', () => {
        dom.setStyle($$.$$display, 'fontFamily', event.target.value)
    })

    $$.$textColorBtn.addEventListener('click', () => {
        $$.$$colorBox.innerHTML = ''
        for (let i = 0; i < 9; i++) {
            let cell = dom.createElement('div', 'style__form--color-box_cell')
            dom.injectElement(cell, $$.$$colorBox)
            dom.setStyle(cell, 'background', dom.getColor())
            cell.addEventListener('click', () => {
                dom.setStyle($$.$$display, 'color', cell.style.background)
            })
        }
        show($$.$$colorBox)
    })

    $$.$bgColorBtn.addEventListener('click', () => {
        $$.$$colorBox.innerHTML = ''
        for (let i = 0; i < 9; i++) {
            let cell = dom.createElement('div', 'style__form--color-box_cell')
            dom.injectElement(cell, $$.$$colorBox)
            dom.setStyle(cell, 'background', dom.getColor())
            cell.addEventListener('click', () => {
                dom.setStyle($$.$$display, 'background', cell.style.background)
            })
        }
        show($$.$$colorBox)
    })

    $$._$boldCheckBox.addEventListener('click', () => {
        event.target.checked
            ? dom.setStyle($$.$$display, 'fontWeight', event.target.value)
            : dom.setStyle($$.$$display, 'fontWeight', 'normal')
    })

    $$._$italicCheckBox.addEventListener('click', () => {
        event.target.checked
            ? dom.setStyle($$.$$display, 'fontStyle', event.target.value)
            : dom.setStyle($$.$$display, 'fontStyle', 'normal')
    })

    $$.$addBtn.addEventListener('click', () => {
        hide($$.$$editorBlock)
        hide($$.$$display)
        hide($$.$$buttonsBlock)
        show($$.$$addBlock)
    })

    for (let i = 0; i < $$._$addRadio.length; i++) {
        $$._$addRadio[i].addEventListener('click', () => {
            if (event.target.value === 'table') {
                if (!$$.$$addListSubBlock.classList.contains('hidden')) {
                    hide($$.$$addListSubBlock)
                }
                show($$.$$addTableSubBlock)
            } else if (event.target.value === 'list') {
                if (!$$.$$addTableSubBlock.classList.contains('hidden')) {
                    hide($$.$$addTableSubBlock)
                }
                show($$.$$addListSubBlock)
            }
        })
    }

    $$.$createTableBtn.addEventListener('click', () => {
        const table = dom.createElement('table')
        const tr = +$$._$tableTr.value
        const td = +$$._$tableTd.value
        const tdWidth = +$$._$tdWidth.value
        const tdHeight = +$$._$tdHeight.value
        const borderWidth = +$$._$tdBorderWidth.value
        const borderType = $$._$tdBorderType.value
        const borderColor = $$._$tdBorderColor.value
        for (let i = 0; i < tr; i++) {
            let row = dom.createElement('tr')
            for (let j = 0; j < td; j++) {
                let cell = dom.createElement('td')
                dom.setStyle(cell, 'width', `${tdWidth}px`)
                dom.setStyle(cell, 'height', `${tdHeight}px`)
                dom.setStyle(cell, 'border', `${borderWidth}px ${borderType} ${borderColor}`)
                cell.textContent = 'TD'
                dom.injectElement(cell, row)
            }
            dom.injectElement(row, table)
        }
        dom.injectElement(table, $$.$$display)
        hide($$.$$addTableSubBlock)
        hide($$.$$addBlock)
        show($$.$$display)
        show($$.$$buttonsBlock)
        show($$.$$startBlock)
        $$._$addRadio[0].checked = false
        $$._$$tableForm.reset()
    })

    $$.$createListBtn.addEventListener('click', () => {
        const list = dom.createElement('ul')
        const liCount = +$$._$liCount.value
        const markType = $$._$listMarkType.value
        for (let i = 0; i < liCount; i++) {
            let listItem = dom.createElement('li')
            listItem.textContent = `item ${i + 1}`
            dom.injectElement(listItem, list)
        }
        list.setAttribute('type', markType)
        dom.injectElement(list, $$.$$display)
        hide($$.$$addListSubBlock)
        hide($$.$$addBlock)
        show($$.$$display)
        show($$.$$buttonsBlock)
        show($$.$$startBlock)
        $$._$addRadio[1].checked = false
        $$._$$listForm.reset()
    })
}
events()

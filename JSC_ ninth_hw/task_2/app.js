const $closeButton = document.querySelector('.error__close')
const $$errorMessage = document.querySelector('.error__message')
const $$taskList = document.querySelector('ul')
const $addButton = document.querySelector('.container__addTask--addButton')
const $$input = document.querySelector('.container__addTask--input')
const $$errorWindow = document.querySelector('.error')

const $$list = []

function taskAdder() {

    function listItemCreator(content) {
        return `<li>${content}</li>`
    }

    $addButton.addEventListener('click', () => {        
        if ($$input.textContent === '') {
            $$errorWindow.classList.remove('hidden')
            $$errorMessage.textContent = 'Empty input field! Enter the task.'
        } else {
            $$list.push(listItemCreator($$input.textContent))
            $$input.textContent = ''
            render()
            listeners()            
        }
    })
}

function listeners() {
    const $$listListeners = document.querySelectorAll('li')

    for (let i = 0; $$listListeners.length > i; i++) {
        $$listListeners[i].addEventListener('click', () => {
            deleteTask(event.target)
        })
    }
}

function deleteTask(node) {
    if ($$list.length === 1) {
        $$errorWindow.classList.remove('hidden')
        $$errorMessage.textContent = 'Last task in the task list! You cannot delete it.'
    } else {
        let target = node.outerHTML
        let index = $$list.indexOf(target)
        node.remove()
        $$list.splice(index, 1)
    }
}

function render() {

    function init() {
        let list = $$list.join('')
        return list
    }

    $$taskList.innerHTML = init()
}

$closeButton.addEventListener('click', () => {
    $$errorWindow.classList.add('hidden')
})

taskAdder()

const $$formsList = document.forms[0]

const $input = {
    firstName: $$formsList[0],
    lastName: $$formsList[1],
    email: $$formsList[2],
    password: $$formsList[3],
    agreement: $$formsList[4],
    button: $$formsList[5],
}

const $popUp = document.querySelector('.pop-up')
const $popUpBtn = document.querySelector('.pop-up_button')

const _v = {
    fN: false,
    lN: false,
    e: false,
    p: false
}

const regExp = {
    names: /^[a-zA-Z]{3,20}$/,
    email: /^.\S+@[a-zA-Z]+\.[a-zA-Z]+$/,
    password: /^\w{8,15}$/
}


$input.firstName.addEventListener('input', function () {
    if (regExp.names.test(this.value)) {
        this.style.border = '3px solid green'
        _v.fN = true
    } else {
        this.style.border = '3px solid red'
        _v.fN = false
        $input.agreement.checked = false
        $input.button.setAttribute('disabled', 'disabled')
    }
})

$input.lastName.addEventListener('input', function () {
    if (regExp.names.test(this.value)) {
        this.style.border = '3px solid green'
        _v.lN = true
    } else {
        this.style.border = '3px solid red'
        _v.lN = false
        $input.agreement.checked = false
        $input.button.setAttribute('disabled', 'disabled')
    }
})

$input.email.addEventListener('input', function () {
    if (regExp.email.test(this.value)) {
        this.style.border = '3px solid green'
        _v.e = true
    } else {
        this.style.border = '3px solid red'
        _v.e = false
        $input.agreement.checked = false
        $input.button.setAttribute('disabled', 'disabled')
    }
})

$input.password.addEventListener('input', function () {
    if (regExp.password.test(this.value)) {
        this.style.border = '3px solid green'
        _v.p = true
    } else {
        this.style.border = '3px solid red'
        _v.p = false
        $input.agreement.checked = false
        $input.button.setAttribute('disabled', 'disabled')
    }
})

$input.agreement.addEventListener('click', function () {
    if (_v.fN && _v.lN && _v.e && _v.p && this.checked) {
        $input.button.removeAttribute('disabled')
    } else {
        $input.button.setAttribute('disabled', 'disabled')
    }
})

$input.button.addEventListener('click', () => {
    $popUp.classList.remove('hidden')
    document.body.classList.add('bg')
})

$popUpBtn.addEventListener('click', () => {
    $popUp.classList.add('hidden')
    document.body.classList.remove('bg')
    $$formsList.reset()
    $input.firstName.style.border = '1px solid #ccc'
    $input.lastName.style.border = '1px solid #ccc'
    $input.email.style.border = '1px solid #ccc'
    $input.password.style.border = '1px solid #ccc'
    $input.button.setAttribute('disabled', 'disabled')
    _v.lN = _v.fN = _v.e = _v.p = false
})
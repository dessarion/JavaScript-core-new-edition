// utils

const $ = function (selector) {
    return document.querySelector(selector)
}

const $$item = function (id, login, password, email) {
    return `
            <div class="form-dispay_item" data-id="${id}">
                <div>${id}</div>
                <div>${login}</div>
                <div>${password}</div>
                <div>${email}</div>
                <div class="edit-btn">Edit</div>
                <div class="delete-btn">Delete</div>
            </div>
    `
}

const render = function () {
    $root.innerHTML = ''
    _users.forEach((user, i) => {
        $root.insertAdjacentHTML('beforeend', $$item(i + 1, user.l, user.p, user.e))
    });
}

const regExp = {
    login: /^[a-z]{4,16}$/i,
    password: /^[a-z|0-9|\.|_|-]{4,16}$/,
    email: /^.\S+@[a-z]+\.[a-z]+$/i,
}

const borderDefault = function() {
    for (let i = 0; i < 3; i++) {
        $$form[i].style.border = '1px solid #ccc'
    }
}

// DOM

const $$form = document.forms[0]
const $root = $('.form-dispay-root')

const $$input = {
    login: $$form[0],
    password: $$form[1],
    email: $$form[2]
}

let _id

// users base

const _users = []

const _v = {
    l: false,
    p: false,
    e: false,
}

// app logic

$$input.login.addEventListener('input', function () {
    if (regExp.login.test(this.value)) {
        this.style.border = '1px solid green'
        _v.l = true
    } else {
        this.style.border = '1px solid red'
        _v.l = false
    }
})

$$input.password.addEventListener('input', function () {
    if (regExp.password.test(this.value)) {
        this.style.border = '1px solid green'
        _v.p = true
    } else {
        this.style.border = '1px solid red'
        _v.p = false
    }
})

$$input.email.addEventListener('input', function () {
    if (regExp.email.test(this.value)) {
        this.style.border = '1px solid green'
        _v.e = true
    } else {
        this.style.border = '1px solid red'
        _v.e = false
    }
})

$('.form-input_btn').addEventListener('click', function () {
    if (_v.l && _v.p && _v.e) {
        let l, p, e
        l = $$input.login.value
        p = $$input.password.value
        e = $$input.email.value
        _users.push({ l, p, e })
        render()
        $$form.reset()
        _v.l = _v.p = _v.p = false
        borderDefault()
    }
})

$('.form-dispay-root').addEventListener('click', function () {
    if (event.target.className === 'delete-btn') {
        _users.splice(event.target.parentElement.dataset.id - 1, 1)
        render()
    } else if (event.target.className === 'edit-btn') {
        _v.l = _v.p = _v.p = true
        $('.form-input_btn').classList.add('hidden')
        $('.form-edit_btn').classList.remove('hidden')
        _id = event.target.parentElement.dataset.id - 1
        $$input.login.value = _users[_id].l
        $$input.password.value = _users[_id].p
        $$input.email.value = _users[_id].e
    }
})

$('.form-edit_btn').addEventListener('click', function () {
    if (_v.l && _v.p && _v.e) {
        _users[_id].l = $$input.login.value
        _users[_id].p = $$input.password.value
        _users[_id].e = $$input.email.value
        _id = null
        render()
        $('.form-input_btn').classList.remove('hidden')
        $('.form-edit_btn').classList.add('hidden')
        $$form.reset()
        borderDefault()
        _v.l = _v.p = _v.p = false
    }
})

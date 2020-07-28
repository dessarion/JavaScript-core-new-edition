function firstTask() {
    const formsList = document.forms.move;

    formsList.move.addEventListener('click', () => {
        if (formsList.first_input.value) {
            formsList.second_input.value = formsList.first_input.value;
            formsList.first_input.value = '';
        };
    });

    formsList.input_placeholder.addEventListener('blur', () => {
        if (formsList.input_placeholder.value) {
            formsList.input_placeholder.placeholder = formsList.input_placeholder.value;
        };
    });
};

firstTask();

function secondTask() {
    const signUpForms = document.forms.signUp;
    let userData = [];

    signUpForms.agreement.addEventListener('click', function () {
        if (this.checked) {
            signUpForms.signUp_button.removeAttribute('disabled');            
        } else if (!this.checked) {
            signUpForms.signUp_button.setAttribute('disabled', 'disabled');
        }
    })

    signUpForms.signUp_button.addEventListener('click', () => {
        if (signUpForms.agreement.checked) {
            userData.push(signUpForms.first_name.value);
            userData.push(signUpForms.second_name.value);
            userData.push(signUpForms.email.value);
            userData.push(signUpForms.radio_gender.value);

            if (signUpForms.position.value === 'Choose...') {
                userData.push('');
            } else {
                userData.push(signUpForms.position.value);
            };

            if (userData[3] === 'man') {
                document.querySelector('.registrated_header_image').style.backgroundImage = `url(man.png)`;
            } else if (userData[3] === 'woman') {
                document.querySelector('.registrated_header_image').style.backgroundImage = `url(woman.png)`;
            };
           
            document.querySelector('.profile_name').textContent = `${userData[0]} ${userData[1]}`;
            document.querySelector('.profile_mail').textContent = `${userData[2]}`;
            document.querySelector('.profile_position').textContent = `${userData[4]}`; 
            document.querySelector('.form_sign').classList.add('hidden');
            document.querySelector('.registrated').classList.remove('hidden'); 
        };
    });

    document.querySelector('.signOut_button').addEventListener('click',()=>{
        userData = [];
        document.querySelector('.registrated').classList.add('hidden');
        document.querySelector('.form_sign').classList.remove('hidden');
        signUpForms.signUp_button.setAttribute('disabled', 'disabled');
        signUpForms.reset();
    });
};

secondTask();

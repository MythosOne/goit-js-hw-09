

import throttle from 'lodash.throttle';
// console.log(throttle);

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
getText();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const onForm = {};

function onFormInput(event) {

    onForm[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(onForm));
}

function getText() {
    const saveText = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveText) {

        console.log(saveText);

        form.email.value = saveText.email || "";
        form.message.value = saveText.message || "";
    }
}

function onFormSubmit(event) {
    event.preventDefault();

    console.log('Отправляем форму');

    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}
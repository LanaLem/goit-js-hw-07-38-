const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputKyePress);

function onInputKyePress(event) {
    textEl.textContent = event.currentTarget.value;
}
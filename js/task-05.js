const inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);

inputRef.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    // outputRef.textContent = event.currentTarget.value;
    inputRef != ` ` ? outputRef.textContent = event.currentTarget.value : `Anonymous`; 
}


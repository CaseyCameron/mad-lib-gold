// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const nounOneInput = document.getElementById('noun-1');

const nounOneOutput = document.getElementById('noun-1-output');

const button = document.getElementById('button');

button.addEventListener('click', () => {
    nounOneOutput.textContent = nounOneInput.value;
});
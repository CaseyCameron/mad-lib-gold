const nounOneInput = document.getElementById('noun-1');
const nounTwoInput = document.getElementById('noun-2');
const adjectiveOneInput = document.getElementById('adjective-1');
const nounThreeInput = document.getElementById('noun-3');
const adverbOneInput = document.getElementById('adverb-1');
const verbOneInput = document.getElementById('verb-1');
const nounFourInput = document.getElementById('noun-4');
const adjectiveTwoInput = document.getElementById('adjective-2');

const nounOneOutput = document.getElementById('noun-1-output');
const nounTwoOutput = document.getElementById('noun-2-output');
const adjectiveOneOutput = document.getElementById('adjective-1-output');
const nounThreeOutput = document.getElementById('noun-3-output');
const adverbOneOutput = document.getElementById('adverb-1-output');
const verbOneOutput = document.getElementById('verb-1-output');
const nounFourOutput = document.getElementById('noun-4-output');
const adjectiveTwoOutput = document.getElementById('adjective-2-output');
const nounFiveOutput = document.getElementById('noun-5-output');

const button = document.getElementById('button');

const hideStuff = document.getElementById('hide');

button.addEventListener('click', () => {
    nounOneOutput.textContent = nounOneInput.value;
    nounTwoOutput.textContent = nounTwoInput.value;
    adjectiveOneOutput.textContent = adjectiveOneInput.value;
    nounThreeOutput.textContent = nounThreeInput.value;
    adverbOneOutput.textContent = adverbOneInput.value;
    verbOneOutput.textContent = verbOneInput.value;
    nounFourOutput.textContent = nounFourInput.value;
    adjectiveTwoOutput.textContent = adjectiveTwoInput.value;
    nounFiveOutput.textContent = nounOneInput.value;
    hideStuff.classList.toggle('text');
});
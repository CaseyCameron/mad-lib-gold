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

const nounOneOutputA = document.getElementById('noun-1-output-a');
const nounTwoOutputA = document.getElementById('noun-2-output-a');
const adjectiveOneOutputA = document.getElementById('adjective-1-output-a');
const nounThreeOutputA = document.getElementById('noun-3-output-a');
const adverbOneOutputA = document.getElementById('adverb-1-output-a');
const verbOneOutputA = document.getElementById('verb-1-output-a');
const nounFourOutputA = document.getElementById('noun-4-output-a');
const adjectiveTwoOutputA = document.getElementById('adjective-2-output-a');
const nounFiveOutputA = document.getElementById('noun-5-output-a');

const button = document.getElementById('button');
const radioButtonOne = document.getElementById('radio-button-1');
const radioButtonTwo = document.getElementById('radio-button-2');

const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const inputThree = document.getElementById('input3');
const inputFour = document.getElementById('input4');
const inputFive = document.getElementById('input5');
const inputSix = document.getElementById('input6');
const inputSeven = document.getElementById('input7');
const inputEight = document.getElementById('input8');

const test = document.querySelector('.text');
const hideText = test.style;

radioButtonOne.addEventListener('click', () => {
    inputOne.textContent = 'Noun: ';
    inputTwo.textContent = 'Noun: ';
    inputThree.textContent = 'Adjective: ';
    inputFour.textContent = 'Noun: ';
    inputFive.textContent = 'Adverb: ';
    inputSix.textContent = 'Verb: ';
    inputSeven.textContent = 'Noun: ';
    inputEight.textContent = 'Adjective: ';
});

radioButtonTwo.addEventListener('click', () => {
    inputOne.textContent = 'Noun: ';
    inputTwo.textContent = 'Noun: ';
    inputThree.textContent = 'Verb: ';
    inputFour.textContent = 'Adjective: ';
    inputFive.textContent = 'Verb: ';
    inputSix.textContent = 'Comparative Adjective: ';
    inputSeven.textContent = 'Adverb: ';
    inputEight.textContent = 'Adjective: ';
});


const hideStuff1 = document.getElementById('hide');
const hideStuff2 = document.getElementById('hide2');

button.addEventListener('click', () => {
    if (document.getElementById('radio-button-1').checked){
        hideStuff1.style.display = 'block';
        hideStuff2.style.display = 'none';
        nounOneOutput.textContent = nounOneInput.value;
        nounTwoOutput.textContent = nounTwoInput.value;
        adjectiveOneOutput.textContent = adjectiveOneInput.value;
        nounThreeOutput.textContent = nounThreeInput.value;
        adverbOneOutput.textContent = adverbOneInput.value;
        verbOneOutput.textContent = verbOneInput.value;
        nounFourOutput.textContent = nounFourInput.value;
        adjectiveTwoOutput.textContent = adjectiveTwoInput.value;
        nounFiveOutput.textContent = nounOneInput.value;
    } else if (document.getElementById('radio-button-2').checked){
        hideStuff2.style.display = 'block';
        hideStuff1.style.display = 'none';
        nounOneOutputA.textContent = nounOneInput.value;
        nounTwoOutputA.textContent = nounTwoInput.value;
        adjectiveOneOutputA.textContent = adjectiveOneInput.value;
        nounThreeOutputA.textContent = nounThreeInput.value;
        adverbOneOutputA.textContent = adverbOneInput.value;
        verbOneOutputA.textContent = verbOneInput.value;
        nounFourOutputA.textContent = nounFourInput.value;
        adjectiveTwoOutputA.textContent = adjectiveTwoInput.value;
        nounFiveOutputA.textContent = nounOneInput.value;
    }
});
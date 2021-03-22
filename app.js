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

//if this button is clicked, turn on input rules set one
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
    inputThree.textContent = 'Adjective: ';
    inputFour.textContent = 'Noun: ';
    inputFive.textContent = 'Adverb: ';
    inputSix.textContent = 'Verb: ';
    inputSeven.textContent = 'Noun: ';
    inputEight.textContent = 'Adjective: ';
});


const hideStuff1 = document.getElementById('hide');
const hideStuff2 = document.getElementById('hide2');

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
    if (document.getElementById('radio-button-1').value === 'ON'){
        hideStuff1.classList.toggle('text');
        console.log('test');
    } else if (document.getElementById('radio-button-2').value === 'ON'){
        hideStuff2.classList.toggle('text2');
        console.log('test');
    }
});

    // if madlib1 is toggled, then toggle text
    // else if madlib 2 is toggled, toggle text2
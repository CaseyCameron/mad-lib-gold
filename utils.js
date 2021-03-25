const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const inputThree = document.getElementById('input3');
const inputFour = document.getElementById('input4');
const inputFive = document.getElementById('input5');
const inputSix = document.getElementById('input6');
const inputSeven = document.getElementById('input7');
const inputEight = document.getElementById('input8');

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

export function radioButtonFunction(iOne, iTwo, iThree, iFour, iFive, iSix, iSeven, iEight){
    inputOne.textContent = iOne + ':';
    inputTwo.textContent = iTwo + ':';
    inputThree.textContent = iThree + ':';
    inputFour.textContent = iFour + ':';
    inputFive.textContent = iFive + ':';
    inputSix.textContent = iSix + ':';
    inputSeven.textContent = iSeven + ':';
    inputEight.textContent = iEight + ':';
}

export function showMadLibOne(hide1, hide2){
    hide1.style.display = 'block';
    hide2.style.display = 'none';
    nounOneOutput.textContent = nounOneInput.value;
    nounTwoOutput.textContent = nounTwoInput.value;
    adjectiveOneOutput.textContent = adjectiveOneInput.value;
    nounThreeOutput.textContent = nounThreeInput.value;
    adverbOneOutput.textContent = adverbOneInput.value;
    verbOneOutput.textContent = verbOneInput.value;
    nounFourOutput.textContent = nounFourInput.value;
    adjectiveTwoOutput.textContent = adjectiveTwoInput.value;
    nounFiveOutput.textContent = nounOneInput.value;
}

export function showMadLibTwo(hide2, hide1){
    hide2.style.display = 'block';
    hide1.style.display = 'none';
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
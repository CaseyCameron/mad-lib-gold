import { radioButtonFunction, showMadLibOne, showMadLibTwo, clearInputFields, hideStuff } from './utils.js';

const button = document.getElementById('button');
const radioButtonOne = document.getElementById('radio-button-1');
const radioButtonTwo = document.getElementById('radio-button-2');
const hideRightSide = document.getElementById('right');
const hideMadLib1 = document.getElementById('hide');
const hideMadLib2 = document.getElementById('hide2');
const hideInputs = document.getElementById('input-hide');

radioButtonFunction('Noun', 'Noun', 'Adjective', 'Noun', 'Adverb', 'Verb', 'Noun', 'Adjective');

radioButtonOne.addEventListener('click', () => {
    radioButtonFunction('Noun', 'Noun', 'Adjective', 'Noun', 'Adverb', 'Verb', 'Noun', 'Adjective');
    hideStuff(hideInputs, hideMadLib2, hideRightSide);
});

radioButtonTwo.addEventListener('click', () => {
    radioButtonFunction('Noun', 'Noun', 'Verb', 'Adjective', 'Verb', 'Comparitive Adjective', 'Adverb', 'Adjective');
    hideStuff(hideInputs, hideMadLib1, hideRightSide);
});

button.addEventListener('click', () => {
    if (document.getElementById('radio-button-1').checked){
        showMadLibOne(hideMadLib1, hideMadLib2);
    } else if (document.getElementById('radio-button-2').checked){
        showMadLibTwo(hideMadLib2, hideMadLib1);
    }
    hideRightSide.style.display = 'flex';
    hideInputs.style.display = 'none';
    clearInputFields();
});

import { radioButtonFunction, showMadLibOne, showMadLibTwo } from './utils.js';

//buttons
const button = document.getElementById('button');
const radioButtonOne = document.getElementById('radio-button-1');
const radioButtonTwo = document.getElementById('radio-button-2');
//hide the inactive madliib
const hideMadLib1 = document.getElementById('hide');
const hideMadLib2 = document.getElementById('hide2');

radioButtonOne.addEventListener('click', () => {
    radioButtonFunction('Noun', 'Noun', 'adjective', 'Noun', 'Adverb', 'Verb', 'Noun', 'Adjective');
});

radioButtonTwo.addEventListener('click', () => {
    radioButtonFunction('Noun', 'Noun', 'Verb', 'Adjective', 'Verb', 'Comparitive Adjective', 'Adverb', 'Adjective');
});

button.addEventListener('click', () => {
    if (document.getElementById('radio-button-1').checked){
        showMadLibOne(hideMadLib1, hideMadLib2);
    } else if (document.getElementById('radio-button-2').checked){
        showMadLibTwo(hideMadLib2, hideMadLib1);
    }
});
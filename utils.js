const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const inputThree = document.getElementById('input3');
const inputFour = document.getElementById('input4');
const inputFive = document.getElementById('input5');
const inputSix = document.getElementById('input6');
const inputSeven = document.getElementById('input7');
const inputEight = document.getElementById('input8');

const madlibInput1 = document.getElementById('madlib-input-1');
const madlibInput2 = document.getElementById('madlib-input-2');
const madlibInput3 = document.getElementById('madlib-input-3');
const madlibInput4 = document.getElementById('madlib-input-4');
const madlibInput5 = document.getElementById('madlib-input-5');
const madlibInput6 = document.getElementById('madlib-input-6');
const madlibInput7 = document.getElementById('madlib-input-7');
const madlibInput8 = document.getElementById('madlib-input-8');

const madlibOneOutput1 = document.getElementById('madlib-1-output-1');
const madlibOneOutput2 = document.getElementById('madlib-1-output-2');
const madlibOneOutput3 = document.getElementById('madlib-1-output-3');
const madlibOneOutput4 = document.getElementById('madlib-1-output-4');
const madlibOneOutput5 = document.getElementById('madlib-1-output-5');
const madlibOneOutput6 = document.getElementById('madlib-1-output-6');
const madlibOneOutput7 = document.getElementById('madlib-1-output-7');
const madlibOneOutput8 = document.getElementById('madlib-1-output-8');
const madlibOneOutput9 = document.getElementById('madlib-1-output-9');

const madlibTwoOutput1 = document.getElementById('madlib-2-output-1');
const madlibTwoOutput2 = document.getElementById('madlib-2-output-2');
const madlibTwoOutput3 = document.getElementById('madlib-2-output-3');
const madlibTwoOutput4 = document.getElementById('madlib-2-output-4');
const madlibTwoOutput5 = document.getElementById('madlib-2-output-5');
const madlibTwoOutput6 = document.getElementById('madlib-2-output-6');
const madlibTwoOutput7 = document.getElementById('madlib-2-output-7');
const madlibTwoOutput8 = document.getElementById('madlib-2-output-8');
const madlibTwoOutput9 = document.getElementById('madlib-2-output-9');

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

export function clearInputFields(){
    madlibInput1.value = '';
    madlibInput2.value = '';
    madlibInput3.value = '';
    madlibInput4.value = '';
    madlibInput5.value = '';
    madlibInput6.value = '';
    madlibInput7.value = '';
    madlibInput8.value = '';

}

export function showMadLibOne(hide1, hide2){
    hide1.style.display = 'block';
    hide2.style.display = 'none';
    madlibOneOutput1.textContent = madlibInput1.value;
    madlibOneOutput2.textContent = madlibInput2.value;
    madlibOneOutput3.textContent = madlibInput3.value;
    madlibOneOutput4.textContent = madlibInput4.value;
    madlibOneOutput5.textContent = madlibInput5.value;
    madlibOneOutput6.textContent = madlibInput6.value;
    madlibOneOutput7.textContent = madlibInput7.value;
    madlibOneOutput8.textContent = madlibInput8.value;
    madlibOneOutput9.textContent = madlibInput1.value;
}

export function showMadLibTwo(hide2, hide1){
    hide2.style.display = 'block';
    hide1.style.display = 'none';
    madlibTwoOutput1.textContent = madlibInput1.value;
    madlibTwoOutput2.textContent = madlibInput2.value;
    madlibTwoOutput3.textContent = madlibInput3.value;
    madlibTwoOutput4.textContent = madlibInput4.value;
    madlibTwoOutput5.textContent = madlibInput5.value;
    madlibTwoOutput6.textContent = madlibInput6.value;
    madlibTwoOutput7.textContent = madlibInput7.value;
    madlibTwoOutput8.textContent = madlibInput8.value;
    madlibTwoOutput9.textContent = madlibInput1.value;
}
const numbers_units = [
    [1, 'один'],
    [2, 'два'],
    [3, 'три'],
    [4, 'четыре'],
    [5, 'пять'],
    [6, 'шесть'],
    [7, 'семь'],
    [8, 'восемь'],
    [9, 'девять']
];
const number_exceptions = [
    [11, 'одиннадцать'],
    [12, 'двенадцать'],
    [13, 'тринадцать'],
    [14, 'четырнадцать'],
    [15, 'пятнадцать'],
    [16, 'шестнадцать'],
    [17, 'семнадцать'],
    [18, 'восемнадцать'],
    [19, 'девятнадцать']
];
const number_dozens = [
    [10, 'десять'],
    [20, 'двадцать'],
    [30, 'тридцать'],
    [40, 'сорок'],
    [50, 'пятьдесят'],
    [60, 'шестьдесят'],
    [70, 'семьдесят'],
    [80, 'восемьдесят'],
    [90, 'девяносто']
];
const numder_hundreds = [
    [100, 'сто'],
    [200, 'двести'],
    [300, 'триста'],
    [400, 'четыреста'],
    [500, 'пятьсот'],
    [600, 'шестьсот'],
    [700, 'семьсот'],
    [800, 'восемьсот'],
    [900, 'девятьсот']
];
const ZERO = 0;
const THREE = 3;
const FOUR = 4;
const TEN = 10;
const ELEVEN = 11;
const NINETEEN = 19;
const TWENTY = 20;
const NINETY_NINE = 99;
const ONE_HUNDRED = 100;
const NINE_HUNDRED_AND_NINETY_NINE = 999;

/** @Returns the length of the entered number
 * @param {number} 
 * @return {number}
 */


let length = (number) => {
    if (number.length >= FOUR) {
        let adds = document.querySelector("#answer");
        return adds.innerText = "До одной тысячи";
    } else {
        return number.length;
    }
}

/** @Returns entered number units
 * @param {number} 
 * @return {number}
 */

const units = (number) => {
    let last = number % 10;
    let second = number % 100;
    if (number == ZERO) {
        return "ноль";
    }
    if (last == ZERO) {
        return "";
    }
    if (second >= ELEVEN && second <= NINETEEN) {
        return "";
    }
    for (var mass_units of numbers_units) {
        if (mass_units[0] == last) {
            return mass_units[1];
        }
    }
}

/** @Returns entered number exceptions and dozens
 * @param {number} 
 * @return {number}
 */

const dozens = (number) => {
    let resultExceptions = [];
    let second = number % 100;
    if (number[1] == 0 && number.length == 3 ) {
        return "";
    } else {
        edit_1 = String(second).substr(0, 1);
        if (second >= ELEVEN && second <= NINETEEN) {
            for (let mass_exceptions of number_exceptions) {
                if (mass_exceptions[0] == second) {
                    resultExceptions = mass_exceptions[1];
                }
            }
        }
        if (second >= TWENTY && second <= NINETY_NINE) {
            for (let mass_dozens of number_dozens) {
                if (edit_1 + '0' == mass_dozens[0]) {
                    resultExceptions = mass_dozens[1];
                }
            }
        }
        if (second == TEN) {
            resultExceptions = number_dozens[0][1];
        }
        return resultExceptions;
    }
}

/** @Returns entered number hundreds
 * @param {number} 
 * @return {number}
 */

const hundreds = (length, number) => {
    let resultHundreds = [];
    if (length == THREE) {
        edit_1 = number.substr(0, 1);
        if (number >= ONE_HUNDRED && number <= NINE_HUNDRED_AND_NINETY_NINE) {
            for (let mass_hundreds of numder_hundreds) {
                if (edit_1 + '00' == mass_hundreds[0]) {
                    resultHundreds = mass_hundreds[1];
                }
            }
        }
    }
    return resultHundreds;
}

/** @Returns entered number
 * @param {number} 
 * @return {number}
 */

const all = (length, number) => {
    var result = "";

    switch (length) {
        case 3:
            result += hundreds(length, number);
        case 2:
            result += " " + dozens(number);
        case 1:
            result += " " + units(number);
            break;
    }
    return result;
}

/**
 * @param {number} 
 */

const addReuslt = (number) => {
    let add = document.querySelector("#answer");
    add.innerText = "";
    add.append(all(length(number), number));
}

const input = document.querySelector("#question");
document.querySelector("#question").oninput = function() {
    addReuslt(input.value);
}

let add = document.querySelector("#answer");
const inputs = document.querySelector("#question");
let regxpr = inputs.dataset.regexp;
regxpr = new RegExp(regxpr, 'i');
let alert = document.querySelector(".alert");

document.querySelector("#question").oninput = () => {
    inputs.classList.remove('anim');
    if (!inputs.value.match(regxpr)) {
        add.innerText = "";
        alert.style.cssText = "opacity: 0;";
        alert.style.cssText = "opacity: 1;";
    } else {
        alert.style.cssText = "opacity: 0;";
        addReuslt(inputs.value);
    }
}

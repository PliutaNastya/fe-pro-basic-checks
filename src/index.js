/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((stringWord) => `${stringWord[0].toUpperCase()}${stringWord.slice(1).toLowerCase()}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString (string) {
    let stringArr = [];

    for (let index = 0; index < string.length; index++) {
        if (index % 2 === 0){
            stringArr.push(string[index].toLowerCase());
        } else if (index % 2 !== 0) {
            stringArr.push(string[index].toUpperCase());
        } 
    }
    return stringArr.join('');
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function(action, string) {
    if (action === 'uppercase'){
        return string.toUpperCase();
    } else if (action === 'lowercase'){
        return string.toLowerCase();
    } else if (action === 'capitalize'){
        return capitalizeString(string);
    } else if (action === 'fence') {
        return fenceString(string);
    } else {
        return string;
    }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    switch (action) {
        case 'uppercase':
            return string.toUpperCase();
        case 'lowercase':
            return string.toLowerCase();
        case 'capitalize':
            return capitalizeString(string);
        case 'fence':
            return fenceString(string);
        default:
            return string;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (let letter of string){
        console.log(letter) ;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i < string.length; i++){
        console.log(string[i]);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    let i = 0;
    while(i < string.length) {
        console.log(string[i]);
        i++;
    } 
};

/**
 Стрелочная
 * @param {string} string
 */

export const consoleLoggerWordsSplit = (string) => string.split('').forEach((letter) => console.log(letter));

"use strict"

/**
 * Возводит число в степень
 * 
 * @param {Number} x основание 
 * @param {Number} n степень
 * @returns {Number} x в степени n
 */
function pow(x, n) {
    return Math.pow(x, n);
}

/**
 * Выводит сумму чисел от 1 до n
 * 
 * @param {Number} n количество чисел
 * @returns {Number} сумма чисел от 1 до n
 */
const sumTo = new Function("n", "let sum = 0;if (n > 0) {for(let i = 1; i < n + 1; i++) {sum += i;}} else{return 0;}return sum;");

/**
 * Проверяет, является ли год високосным
 * 
 * @param {Number} year Год
 * @returns {Boolean} Является ли год високосным
 */
function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    } else if (year % 4 == 0 && year % 100 != 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Считает факториал
 * 
 * @param {Number} n 
 * @returns {BigInt} факториал n
 */
function factorial(n) {
    if (n > 1) {
        return BigInt(n) * factorial(n - 1);
    } else if (n == 1 || n == 0) {
        return 1n;
    }
}

/**
 * Выводит n-ое число Фибоначчи
 * 
 * @param {Number} n номер числа
 * @returns {BigInt} число Фибонначи на n месте
 */
function fib(n) {
    if (n == 0) {
        return 0n;
    } else if (n == 1 && n == 2) {
        return 1n;
    }

    let a = 1n;
    let b = 1n;
    let c = 0n;

    for (let i = 3; i < n + 1; i++) {
        c = a + b;
        b = a;
        a = c;
    }
    return a;
} 

/**
 * Выводит функцию, которая сравнивает, больше ли y, чем x
 * 
 * @param {Number} x 
 * @returns {Function} функция, проверяющая y > x. Если y == x, то null
 */
function compare(x) {
    return (y) => {
        if (y > x) { return true; }
        if (y < x) { return false; }
        if (y == x) { return null; }
    };
}

/**
 * Считает сумму аргументов
 * 
 * @param  {...any} args 
 * @returns {Number} сумма аргументов 
 */
function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

/**
 * Добавляет к объекту символьное свойство "blackSpot" равное true
 * 
 * @param {Array} obj 
 * @returns {Object} Объект с добавленным свойством 
 */
function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}
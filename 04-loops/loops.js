/* eslint-disable no-unused-vars */

function repeat(str, num) {

    let result = ''
    if (num !== 0) {

        for (let i = 0; i < num; i++) {
            result += str;
        }
    }
    return result
}

function sum(arr) {

    let result = 0;

    if (arr.length !== 0) {

        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
    }

    return result;

}

function join(arr, separator) {

    let result = '';

    if (separator === undefined) {
        separator = '';
    }

    if (arr.length !== 0) {

        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                result += arr[i];

            }
            else {
                result += arr[i] + separator;

            }
        }
    }

    return result;

}

function gridGenerator(num) {

    let result = '';
    let startChar = '#';
    let mainChar = '#'
    let rows = num;

    if (num > 0) {

        while (rows > 0) {

            for (let i = 1; i <= num; i++) {
                if (startChar === '#') {
                    result += startChar;
                    startChar = ' ';
                }
                else {
                    result += startChar;
                    startChar = '#';
                }

            }

            if (mainChar === '#') {
                mainChar = ' ';
                startChar = mainChar;
            }
            else {
                mainChar = '#';
                startChar = mainChar;
            }

            result += '\n';

            rows--;
        }

    }

    return result;
}

function paramify(obj) {

    let result = '';

    let arrOfKeys = []

    let sortedObj = {};

    // Get keys without using Object.keys()

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrOfKeys.push(key)
        }
    }


    let arrOfKeysSorted = arrOfKeys.sort();



    if (arrOfKeys.length === 0) {
        return result;
    }

    if (arrOfKeys.length === 1) {
        result += `${arrOfKeys[0]}=${obj[arrOfKeys[0]]}`
        return result;
    }

    //sort obj

    for (let i = 0; i < arrOfKeysSorted.length; i++) {
        sortedObj[arrOfKeysSorted[i]] = obj[arrOfKeysSorted[i]]
    }



    for (let key in sortedObj) {

        result += `${key}=${sortedObj[key]}&`
    }

    result = result.slice(0, result.length - 1);
    return result;
}


function paramifyObjectKeys(obj) {

    let result = '';

    let arrOfKeys = Object.keys(obj)

    let sortedObj = {};


    let arrOfKeysSorted = arrOfKeys.sort();



    if (arrOfKeys.length === 0) {
        return result;
    }

    if (arrOfKeys.length === 1) {
        result += `${arrOfKeys[0]}=${obj[arrOfKeys[0]]}`
        return result;
    }

    //sort obj

    for (let i = 0; i < arrOfKeysSorted.length; i++) {
        sortedObj[arrOfKeysSorted[i]] = obj[arrOfKeysSorted[i]]
    }



    for (let key in sortedObj) {

        result += `${key}=${sortedObj[key]}&`

    }

    result = result.slice(0, result.length - 1);
    return result;
}

function sort(arr) {

    let sorted = [];

    if (arr.length === 0) {
        return arr;
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= arr[arr.length - 1]) {
                let temp = arr[i];
                arr[i] = arr[arr.length - 1];
                arr[arr.length - 1] = temp;
            }
        }
        
        sorted.unshift(arr.pop());
        sorted = sorted.concat(sort(arr));
    }


    return sorted;

}
/* eslint-disable no-unused-vars */


function setPropsOnObj(obj) {
    obj.x = 7;
    obj.y = 8;

    obj['onePlus'] = function (arg) {
        return arg + 1;
    }
}

function setPropsOnArr(arrObj) {

    arrObj['hello'] = function () {
        return 'Hello!'
    };

    arrObj['full'] = 'stack';

    arrObj[0] = 5;

    arrObj['twoTimes'] = function (arg) {
        return arg * 2;
    };

}

function setPropsOnFunc(func) {

    func['year'] = '20??';

    func['divideByTwo'] = function (num) {
        return num / 2;
    }

}

function shallowCopy(obj1, obj2) {

    let mergedObj;
    let copy1;
    let copy2;

    if (Array.isArray(obj1)) {
        copy1 = [];
        copy2 = [];


        for (let i = 0; i < obj1.length; i++) {
            copy1[i] = obj1[i]
        }

        for (let i = 0; i < obj2.length; i++) {
            copy2[i] = obj2[i]
        }


        mergedObj = copy1.concat(copy2)
    }
    else {
        copy1 = {};
        copy2 = {};

        for (let key in obj1) {
            copy1[key] = obj1[key];
        }

        for (let key in obj2) {
            copy2[key] = obj2[key];
        }

        mergedObj = {...copy1, ...copy2}

    }

    return mergedObj;


}
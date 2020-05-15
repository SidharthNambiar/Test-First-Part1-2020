/* eslint-disable no-unused-vars */

function createCalculator() {

    return {
        total: 0,

        offset: 0,

        value: function () {
            return this.total;
        },

        add: function (num) {
            this.total += num;
        },

        subtract: function (num) {
            this.total -= num;
        },

        clear: function () {
            this.total = this.offset;
        }


    }
}

function addSquareMethod(arrOfInstances) {
    for (let i = 0; i < arrOfInstances.length; i++) {
        arrOfInstances[i]['square'] = function () {
            return this.total * this.total;
        }
    }

    return arrOfInstances;
}

function createHumanCalculator() {

    const newObj = Object.create(createCalculator());
    newObj.total = -10;
    newObj.offset = -10;   

    return newObj;
}
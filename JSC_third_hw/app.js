//Task 1

console.group('Task 1');

const getArea = (number) => {
    if (isNaN(number) && number !== undefined) {
        console.log(`"${number}" is not a Radius`);
    } else if (!isNaN(number)) {
        console.log(`Circle square is =>\n${Math.PI * number ** 2}`);
    } else {
        console.log('Field is empty: enter radius in to a function');
    }
};

getArea(50);
getArea('realy?');
getArea();

console.groupEnd();

//Task 2

console.group('Task 2');

const getSqrt = (number) => {
    if (isNaN(number) && number !== undefined) {
        console.log(`"${number}" is not a number`);
    } else if (!isNaN(number) && number >= 0) {
        console.log(`√${number} = ${Math.sqrt(number)}`);
    } else if (number < 0) {
        console.log(`Number(${number}) has a negative value`);
    } else {
        console.log('Field is empty: enter number in to a function');
    }
};

getSqrt(9);
getSqrt('String');
getSqrt(-9);
getSqrt();

console.groupEnd();

//Task 3

console.group('Task 3');

const MyMath = {

    PI: 3.14159265359,

    pow(number, degree) {
        if (isNaN(number || degree) && (number || degree) !== undefined) {
            return this.errors.typeNaN;
        } else if ((number || degree) === undefined) {
            return this.errors.typeUndefined;
        }
        return number ** degree;
    },

    abs(number) {
        if (isNaN(number) && number !== undefined) {
            return this.errors.typeNaN;
        } else if (number === undefined) {
            return this.errors.typeUndefined;
        };
        if (number < 0) {
            return -number;
        } else {
            return number;
        };
    },

    max() {
        let flag = false;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] < arguments[i - 1]) {
                arguments[i] = arguments[i - 1]
            } else if (isNaN(arguments[i])) {
                flag = true;
            };
        };
        return flag ? this.errors.typeNaN : arguments[arguments.length - 1];
    },

    min() {
        let flag = false;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > arguments[i - 1]) {
                arguments[i] = arguments[i - 1];
            } else if (isNaN(arguments[i])) {
                flag = true;
            };
        };
        return flag ? this.errors.typeNaN : arguments[arguments.length - 1];
    },

    errors: {
        typeNaN: 'Error: enter dight(s) in to function',
        typeUndefined: 'Error: enter argument(s) in to function',
    },

};

console.log('MyMath.PI', MyMath.PI);
//
console.log('MyMath.pow()', MyMath.pow());
console.log('MyMath.pow("number","also number")', MyMath.pow("number", "also number"));
console.log('MyMath.pow(7,7)', MyMath.pow(7, 7));
//
console.log('MyMath.abs()', MyMath.abs());
console.log('MyMath.abs("string")', MyMath.abs("string"));
console.log('MyMath.abs(-99)', MyMath.abs(-99));
console.log('MyMath.abs(777)', MyMath.abs(777));
//
console.log('MyMath.max(99999991,10,3,6,-555555,"dight",5,7,121,1111,8,9,6,3,11,5,6,8,77)', MyMath.max(99999991, 10, 3, 6, -555555, "dight", 5, 7, 121, 1111, 8, 9, 6, 3, 11, 5, 6, 8, 77));
console.log('MyMath.max(91,10,3,6,-555555,5,5,7,121,1111,8,9,6,3,11,5,6,8,77)', MyMath.max(91, 10, 3, 6, -555555, 5, 5, 7, 121, 1111, 8, 9, 6, 3, 11, 5, 6, 8, 77));
console.log('MyMath.min(99999991,10,3,6,-555555,"dight",5,7,121,1111,8,9,6,3,11,5,6,8,77)', MyMath.min(99999991, 10, 3, 6, -555555, "dight", 5, 7, 121, 1111, 8, 9, 6, 3, 11, 5, 6, 8, 77));
console.log('MyMath.min(91,10,3,6,-555555,5,5,7,121,1111,8,9,6,3,11,5,6,8,77)', MyMath.min(91, 10, 3, 6, -555555, 5, 5, 7, 121, 1111, 8, 9, 6, 3, 11, 5, 6, 8, 77));

console.groupEnd();
const arrOne = [5, 6, 7, 8, 9]

const arrTwo = [
    {
        name: 'Ivan',
        country: 'Ukraine'
    },
    {
        name: 'Petro',
        country: 'Ukraine'
    },
    {
        name: 'Migel',
        country: 'Cuba'
    },
]

const arrThree = [1, 'string', [3, 4], 5, [6, 7]]

const arrFour = [1, 2, 3, 0, 4, 5, 6]

const arrFive = [1, -2, 3, 0, 4, -5, 6, -11]

// Task #1

function fEach(arr) {
    let summ = 0

    arr.forEach(item => {
        summ += item
    });

    return summ
}

console.log('Task #1 => ', fEach(arrOne));

// Task #2

const squareArr = arrOne.map(item => item ** 2)

console.log('Task #2 => ', squareArr);

// Task #3

const isEveryFromUkraine = arrTwo.every(item => item.country === 'Ukraine')

console.log('Task #3 => ', isEveryFromUkraine);

// Task #4

const isSomeFromCuba = arrTwo.some(item => item.country === 'Cuba')

console.log('Task #4 => ', isSomeFromCuba);

// Task #5 

const justArrays = arrThree.filter(item => Array.isArray(item))

console.log('Task #5 => ', justArrays);

// Task #6
let trap = true
const beforeZero = arrFour.reduce((accum, value) => {
    if (value === 0) {
        trap = false
    }
    if (trap) {
        return accum + value
    }
    return accum
}, 0)

const beforeTen = arrFour.reduce((accum, value, i) => {
    if (accum < 10) {
        return accum + value
    }
    return {
        accum,
        i
    }
})

const { accum } = beforeTen

console.group('Task #6 => ')
console.log('Task #6.1 => ', beforeZero);
console.log('Task #6.2 => ', accum.i);
console.groupEnd()

// Task #7

const filteredAndSquared = arrFive
                                .filter(item => item > 0)
                                .map(item => Math.sqrt(item))

console.log('Task #7 => ', filteredAndSquared);
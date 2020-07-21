//Task 1

console.group('Task 1');

const arrCopy = function(arr){
    const copyArr = [];
    for(let i = 0; i < arr.length; i++){
        copyArr.push(arr[i]);
    };
    return copyArr;
};

const arrayTaskOne = [1,2,[3,4],5,6,7,[8,9,10],11]

const arrayTaskOneCopy = arrCopy(arrayTaskOne);

console.log('arrCopy(arrayTaskOne)',arrayTaskOneCopy);

arrayTaskOneCopy[2] = 'array was here =)'

console.log('arrayTaskOne',arrayTaskOne);
console.log('arrayTaskOneCopy',arrayTaskOneCopy);

console.groupEnd();

//Task 2

console.group('Task 2');

const arrToString = function(arr){
    const strArr = [];
    arr.forEach(element => {
        strArr.push(String(element));
    });
    return strArr;
};

const arrayTaskTwo = [1,20,300,4000,50000,600000,70000000,800000,900000,11000,1200,130,14,1.5];

const arrayTaskTwoToString = arrToString(arrayTaskTwo);
console.log('arrayTaskTwo',arrayTaskTwo);
console.log('arrToString(arrayTaskTwo)',arrayTaskTwoToString);

console.groupEnd();

//Task 3

console.group('Task 3');

const getLength = function(arr){
    const convertedArr = [];
    arr.forEach(element => {
        convertedArr.push(element.length)
    });
    return convertedArr;
};

const arrayTaskThree = ['Obi','Van','Kenobi','May The Force','Be','With','U','=)'];

const arrayTaskThreeElemLength = getLength(arrayTaskThree);

console.log('arrayTaskThree',arrayTaskThree);
console.log('getLength(arrayTaskThree)',arrayTaskThreeElemLength);

console.groupEnd();

//Task 4 

console.group('Task 4');

const removeDuplicates = function(arr){
    const clearCopy = [];
    for(let i = 0; i < arr.length; i++){
        if(!clearCopy.includes(arr[i])){
            clearCopy.push(arr[i]);
        };
    };
    return clearCopy;
};

const arrayTaskFour = ['Array','Array','with','with','with','with','with','with',
'with','loads','of','of','of','of','of','of','of','of','of','of','of','of','of','of','ununique',
'elements','elements','elements','elements','elements','elements','elements','elements',
'=)','=)','=)','=)','=)','but','but','but','but','we','can','can','can','can','can','fix it',
'fix it','fix it','fix it','fix it','fix it','fix it','easy =)']

const arrayTaskFourCleared = removeDuplicates(arrayTaskFour);

console.log('arrayTaskFour',arrayTaskFour);
console.log('removeDuplicates(arrayTaskFour)',arrayTaskFourCleared);

console.groupEnd();
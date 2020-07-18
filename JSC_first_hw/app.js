// First task

console.group('First task');

const person = {};

person.firstName = 'Ivan';

person.secondName = 'Ivanov';

person.showData = function () {
    console.log(`Person's data =>\n Name: ${this.firstName} \nSecond Name: ${this.secondName}`);
};

const newPerson = {};

for (let property in person) {
    newPerson[property] = person[property];
};

newPerson.firstName = 'Petro';

newPerson.secondName = 'Petriv';

person.showData();

newPerson.showData();

console.groupEnd();

console.group('Second task');

const MyMath = {};

MyMath.a = 5;

MyMath.b = 2;

MyMath.sum = function () {
    console.log(`${this.a} + ${this.b} = ${this.a + this.b}`);

};

MyMath.multiplication = function () {
    console.log(`${this.a} * ${this.b} = ${this.a * this.b}`);
};

MyMath.division = function () {
    console.log(`${this.a} / ${this.b} = ${this.a / this.b}`);
};

MyMath.subtraction = function () {
    console.log(`${this.a} - ${this.b} = ${this.a - this.b}`);
};

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction()

console.groupEnd();
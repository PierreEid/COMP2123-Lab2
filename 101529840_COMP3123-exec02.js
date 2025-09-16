//--------------------------------
// COMP 3123 Lab 2
// Pierre-Anthony Eid: 101529840
//--------------------------------

// Exercise 1

const greeter = (myArray, counter) => {

    const greetText = 'Hello';

    for (const person of myArray) {
        console.log(`${greetText} ${person}`);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2

const capitalize = str => {

    const firstLetter = str[0].toUpperCase();
    const restOfString = str.slice(1, str.length);

    return [...firstLetter, ...restOfString].join('');
}

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));
console.log(capitalize("two words"));

// Exercise 3

const capitalizeMultiple = strArr => {

    return strArr.map(str => {
        return capitalize(str);
    });
}

let colors = ['red', 'green', 'blue'];
console.log(capitalizeMultiple(colors));

// Exercise 4

const filterNumsLT20 = nums => {

    return nums.filter(num => {
        return num < 20;
    })
}

const nums = [1, 60, 34, 30, 20, 5];
console.log(filterNumsLT20(nums));

// Exercise 5

const calculateSum = nums => {

    return nums1.reduce((acc, currVal) => {
        return acc += currVal;
    })
}

nums1 = [1, 2, 3, 4];
console.log(calculateSum(nums1));

const calculateProduct = nums => {

    return nums1.reduce((acc, currVal) => {
        return acc *= currVal;
    })
}

console.log(calculateProduct(nums1));

// Exercise 6

class Car {

    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {

    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info(){
        return `${this.model} ${this.year} has a balance of $${this.balance.toFixed(2)}.`
    }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
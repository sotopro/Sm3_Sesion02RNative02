// Semana 3 - Sesión 2
// Global Scope
const nestAnimal = 'crocodilian';

const getNestInfo = () => {
    window.eggs = 5;
}

// Local Scope

let caymanMood = 'calm';
const changeMood = (newMood) => {
    if(caymanMood === 'calm') {
        caymanMood = newMood
        console.log('caymood if', caymanMood)
    } else {
        console.log('caymood else', caymanMood)
        caymanMood = 'calm'
    }
}

changeMood('calm')

console.log('caymood', caymanMood)

const buildNest = () => {
    const assets = 'grass';
    with(reptilian) {
        const building = ability + assets;
    }
    return building;
}
// initialize a global variable

let creature = 'wolf';
let species =  'human';

const transform = () => {
    // initialize a local. function-scoped variable
    let species = 'werewolf';
    console.log('species', species)
}

// Log the global & local variable
console.log(species);
transform();
console.log(species)

let fullMoon = true;
// initialize a global variable
if(fullMoon) {
    // initialize a block-scoped variable
    let species = 'werewolf';
    console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is a full moon. Lupin is currently a ${species}.`)

// Hoisting - error
var number = 100;
function hoist() {
    // A condition that shoul not affect the outcome of the code
    if(false) {
        var number = 200;
    }
    console.log(number);
}
hoist();

// Initialize the global scope

let isNumber =  true;
function isHoist() {
    // initializar isNumber in the function scope
    if( 3 === 4) {
        let isNumber = false;
    }
    console.log(isNumber);
}

isHoist();

const car = {
    color: 'red',
    price: 2000
}

// Modify a property of car

car.price = 2000000;

console.log(car);

// function printThis() {
//     console.log(this);
// }

// printThis();

const america = {
    name: 'The United State of America',
    yearFounded: 1776,
    details: {
        symbol: 'eagle',
        currency: 'USD',
        printDetails() {
            console.log(`The symbol is the ${this.symbol} and the currency is ${this.currency}.`)
        }
    }
}

america.details.printDetails();

// Function Constructor

function Country(name, yearFounded) {
    this.name = name;
    this.yearFounded = yearFounded
    this.describe = function() {
        console.log(` ${this.name} was founded ${this.yearFounded}.`)
    }
}

const us = new Country('The United State of America', 1776);

us.describe();

// Class Constructor

class Pais {
    constructor(name, yearFounded) {
        this.name = name;
        this.yearFounded = yearFounded
    }
    describe() {
        console.log(` ${this.name} was founded ${this.yearFounded}.`)
    }
}

const usd = new Pais('The United State of America', 1776)

usd.describe();

// A DOM event Handler

// const button = document.createElement('button');
// button.textContent = 'Click me'
// document.body.append(button)
// button.addEventListener('click', function(event){
//     console.log(this)
// })

// explicit (Call & Apply)

const book = {
    title: 'Brave New World',
    author: 'Aldous Huxley'
}

function summary() {
    console.log(`${this.title} was written by ${this.author}`)
}

summary.call(book)
// or;
summary.apply(book)

function printThisFn() {
    console.log(this);
}

printThisFn.call(book);
printThisFn.apply(book);

function longerSummary(genre, year) {
    console.log(`${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}`)
}

longerSummary.call(book, 'dystopian', 1932)
longerSummary.apply(book, ['dystopian', 1932])

// Bind

const braveNewWorldSummary = summary.bind(book);
braveNewWorldSummary();
const book2 = {
    title: '1984',
    author: 'George Orwell'
}

braveNewWorldSummary.bind(book2);
braveNewWorldSummary();

// Arrow Functions

const whoAmI = {
    name: 'Daniel Soto',
    regularFunction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}

whoAmI.regularFunction();
whoAmI.arrowFunction();

const button = document.createElement('button');
button.textContent = 'Click me'
document.body.append(button)

class Display {
    constructor() {
        this.buttonText = 'New Text'
        button.addEventListener('click', event => {
            event.target.textContent = this.buttonText
        })
    }
}

new Display();
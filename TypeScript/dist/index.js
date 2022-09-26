"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2021);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function ktToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("hola");
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
let log = null;
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid Value");
        }
        this._balance = value;
    }
}
let account = new Account(1, "darcy", 30000);
account.deposit(10000);
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "John";
class Ride {
    constructor() {
        this.activeRides = 0;
    }
    start() {
        this.activeRides++;
    }
    stop() {
        this.activeRides--;
    }
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking a test");
    }
}
let student = new Student(1, "darcy", "Henschke");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("john", "SMith");
console.log(teacher.fullName);
console.log(student.fullName);
function printName(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printName([new Student(1, "John", "smith"), new Teacher("John", "Smith")]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("rendering a circle");
    }
}
let circle = new Circle(10, "blue");
circle.render();
class Logger {
    constructor(name) {
        this.name = name;
    }
    messages(message) {
        this.name += message;
    }
}
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Employee2 extends Person2 {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("1", "a");
pair.key;
function wrapInArray(value) {
    return [value];
}
let numbers = wrapInArray("1");
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
let product = {
    name: "a",
    price: 1,
};
function echos(args) {
    return args;
}
function printNames(obj) {
    console.log(obj.name);
}
function Component(value) {
    return (constructor) => {
        console.log("component decorator called");
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("inserting in DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Persons {
    say(message) {
        console.log(`Person says ${message}`);
    }
}
__decorate([
    Log
], Persons.prototype, "say", null);
let persons = new Persons();
persons.say("hello");
function Capitalize(target, method, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class Persons3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Persons3.prototype, "fullName", null);
let person3 = new Persons3("darcy", "Henschke");
console.log(person3.fullName);

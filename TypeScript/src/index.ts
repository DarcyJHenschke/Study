// const small = 1
// const medium = 2;
// const large = 3;

const enum Size {
    Small = 1,
    Medium,
    Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10000, 2021);

type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
};

let employee: Employee = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);
    },
};

function ktToLbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

type Draggable = {
    drag: () => void;
};

type Resizeable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizeable;
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
};
type Quantity = 50 | 100;
let quantity: Quantity = 100;

function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("hola");
    }
}

greet(undefined);

type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear);

let log: any = null;

let speed: number | null = null;
let ride = {
    speed: speed ?? 30,
};

class Account {
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number,
    ) {}

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    get balance(): number {
        return this._balance;
    }
    set balance(value: number) {
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
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "John";

class Ride {
    activeRides: number = 0;

    start() {
        this.activeRides++;
    }
    stop() {
        this.activeRides--;
    }
}

class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    walk() {
        console.log("walking");
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log("taking a test");
    }
}

let student = new Student(1, "darcy", "Henschke");

class Teacher extends Person {
    override get fullName() {
        return "Professor " + super.fullName;
    }
}

let teacher = new Teacher("john", "SMith");
console.log(teacher.fullName);
console.log(student.fullName);

function printName(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}

printName([new Student(1, "John", "smith"), new Teacher("John", "Smith")]);

abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }
    override render(): void {
        console.log("rendering a circle");
    }
}

let circle = new Circle(10, "blue");
circle.render();

interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

class Logger {
    constructor(public name: string) {}

    messages(message: string) {
        this.name += message;
    }
}

class Person2 {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Employee2 extends Person2 {
    constructor(public salary: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

interface Emplyee3 {
    name: string;
    salary: number;
    address: { street: string; city: string; zipCode: number };
}

// test

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair("1", "a");
pair.key;

function wrapInArray<T>(value: T) {
    return [value];
}

let numbers = wrapInArray("1");

interface Product {
    name: string;
    price: number;
}

class Store<T> {
    private _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new CompressibleStore<Product>();

type ReadOnly<T> = {
    readonly [Property in keyof T]: T[Property];
};

let product: ReadOnly<Product> = {
    name: "a",
    price: 1,
};

function echos<T>(args: T): T {
    return args;
}

function printNames<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

type ComponentOptions = {
    selector: string;
};

function Component(value: ComponentOptions) {
    return (constructor: Function) => {
        console.log("component decorator called");
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("inserting in DOM");
        };
    };
}

function Pipe(constructor: Function) {
    console.log("pipe decorator called");
    constructor.prototype.pipe = true;
}

@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    descriptor.value = function (...args: any) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}

class Persons {
    @Log
    say(message: string) {
        console.log(`Person says ${message}`);
    }
}

let persons = new Persons();
persons.say("hello");

function Capitalize(
    target: any,
    method: string,
    descriptor: PropertyDescriptor,
) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original?.call(this);

        return typeof result === "string" ? result.toUpperCase() : result;
    };
}

class Persons3 {
    constructor(public firstName: string, public lastName: string) {}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person3 = new Persons3("darcy", "Henschke");
console.log(person3.fullName);

function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;
        const descriptor: PropertyDescriptor = {
            get() {
                return value;
            },
            set(newValue: string) {
                if (newValue.length < length) {
                    throw new Error(
                        `${propertyName} should be at least ${length} characters long`,
                    );
                }
                value = newValue;
            },
        };
    };
}

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

let phone = <HTMLInputElement>document.getElementById("phone");

phone.value;

function render(document: unknown) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
}

function processEvents(): never {
    while (true) {}
}

type users = {
    name: string;
    age: number;
    occupation?: string;
};

processEvents();
console.log("hello world");

console.log("hello world");

let person = {
    name: "mosh",
    age: 30,
};

console.log(person);

let a = "red";
let b = "blue";

let swapper = [a, b];
a = swapper[1];
b = swapper[0];

console.log(a);
console.log(b);

let role = "guest";

switch (role) {
    case "guest":
        console.log("guest");
        break;

    case "moderator":
        console.log("moderator");
        break;

    default:
        console.log("Unknown User");
}

// for (let i = 0; i < 5; i++) {
//     if (i % 2 !== 0) console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i < 5);

// for (let key in person) {
//     console.log(person[key]);
// }

// const colors = ["red", "blue", "green", "yellow"];

// for (let color of colors) {
//     console.log(color);
// }

const biggerNum = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
};

console.log(biggerNum(100, 120));

function isLandscape(width, height) {
    return width > height ? true : false;
}

function fizzBuzz(input) {
    let switchInput = input;
    switch (switchInput) {
        case switchInput % 3 == 0:
            console.log("Fizz");
            break;

        case switchInput % 5 == 0:
            console.log("Buzz");
            break;

        case switchInput % 5 == 0 && input % 3 == 0:
            console.log("FizzBuzz");
            break;
    }
}

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(i, " Even");
        } else console.log(i, " Odd");
    }
}

showNumbers(10);
const test = [0, 14, "", "hello", NaN, undefined];
function countTruthy(array) {
    console.log(array.filter((x) => !!x).length);
}

countTruthy(test);

function showProperties(obj) {
    for (let properties in obj) {
        if (typeof obj[properties] === "string") {
            console.log(properties);
        }
    }
}

function sum(limit) {
    let total = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            total += i;
        }
    }
    console.log(total);
}

sum(10);

const ar = [1, 2, 3];

function calculateGrade(marks) {
    console.log(marks.reduce((init, current) => init + current) / marks.length);
}

calculateGrade(ar);

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let star = "";
        for (let k = 1; k <= i; k++) {
            star += "*";
        }
        console.log(star);
    }
}

showStars(5);

function createCircle(radius) {
    return {
        radius: radius,
        draw() {
            console.log("draw");
        },
    };
}

const circle1 = createCircle(1);

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
}

const circle = new Circle(1);
circle.draw();

const address = {
    street: "balcombe",
    city: "melbourne",
    zip: "3193",
};

function showAddress(obj) {
    for (let key in obj) {
        console.log(key, obj[key]);
    }
}

showAddress(address);

function createAddress(street, city, zip) {
    return {
        street: street,
        city: city,
        zip,
        zip,
    };
}

function Address(street, zip, city) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

const numbers = [3, 4];

function arrayFromRange(min, max) {
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    console.log(arr);
}

arrayFromRange(-10, -4);

function includes(array, searchElement) {
    return array.filter((x) => x !== searchElement);
}

console.log(includes([1, 2, 3], 1));

function move(array, index, offset) {
    // if (index + offset > array.length - 1) {
    //     console.error("invalid offset");
    // }

    const copy = [...array];
    copy.splice(index, 1);
    copy[index + offset] = array[index];
    console.log(copy);
    return copy;
}

console.log(move([1, 2, 3, 4, 5, 6], 2, 2));

function countOccurences(array, searchElement) {
    return array.reduce(
        (accum, current) =>
            current === searchElement ? (accum += 1) : (accum += 0),
        0,
    );
}

console.log(countOccurences([1, 2, 3, 4, 3, 3, 4, 5, 3], 3));

function getMax(array) {
    return array.reduce((accum, current) => {
        if (current > accum) return current;
        return accum;
    });
}

console.log(getMax([1, 4, 1000, 200, 80, 3]));

const movies = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 },
];

function filteredMovies(array) {
    return array
        .filter((x) => x.year === 2018)
        .filter((x) => x.rating > 4)
        .sort((a, b) => b.rating - a.rating)
        .map((x) => console.log(x.title));
}

filteredMovies(movies);

const obj3 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

const { d, ...obj4 } = obj3;

function sum() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 65));

const circle3 = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
};

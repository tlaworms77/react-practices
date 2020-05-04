/*
 * 6. Destructuring(구조분해)
 */

// ex1. Object Destructuring I - Basics
let firstName = '성';
let lastName = '이름';
let email = '이메일';

const user = {
    firstName: '대혁',
    lastName: '안',
    email: 'kickscar@gmail.com'
};

({ firstName, lastName } = user);
console.log(firstName, lastName, email);
console.log('---');

// ex2. Object Destructuring II - Default Value
const goods = {
    name: "TV",
    price: 10000,
    stockCount: 20
};

let { name, price, stockCount = 0 } = goods;
console.log(name, price, stockCount);
console.log('---');


// ex3. Object Destructuring III - Different Variable Names
const person = {
    name: '안대혁',
    country: 'Korea'
}

let { name: fullName, country: place } = person;
console.log(fullName, place);
console.log('---');


// ex4. Object Destructuring IV - Nested Object Destructuring
const student = {
    name: '둘리',
    age: 10,
    scores: {
        maths: 70,
        korean: 80,
        science: 90
    }
};

const { name: studentName, scores: { maths = 0, korean = 0, science = 0, music = 0 } } = student;
console.log(`${studentName} 의 성적 수학: ${maths}, 국어: ${korean}, 과학: ${science}, 음악: ${music}` );
console.log('---');

// ex5. Object Destructuring V - Function Parameter
function average({ name, scores: { maths = 0, korean = 0, science = 0 } }) {
    console.log(`${name} 의 평균 ${(maths + korean + science) / 3} 점`);
 }

average(student);
console.log('---');


// ex6. Array Destructuring I - Basics
let red = 0;
let green = 0;
let blue = 0;
let alpha = 0;

const color = [155, 200, 87];
[red, green, blue] = color;

console.log(red, green, blue);
console.log('---');


// ex7. Array Destructuring II - Default Value
[red = 0, green = 0, blue = 0, alpha = 0] = color;

console.log(red, green, blue, alpha);
console.log('---');


// ex8. Array Destructuring III - Skipping Items
let [,,colorOfBlue] = color;
console.log(colorOfBlue);
console.log('---');


// ex9. Array Destructuring IV - Swapping Variables
let x = 10;
let y = 20;

console.log(`x=${x}, y=${y}`);
[y, x] = [x, y];
console.log(`x=${x}, y=${y}`);
console.log('---');


// ex10. Array Destructuring V - Nested Array Destructuring
const colors = ['#FF0000', [255, 255, 0], 'rgb(255, 255, 255)'];
let [colorHex, colorArray, colorRgb] = colors;

console.log(colorHex, colorArray, colorRgb);
console.log('---');


// ex11. Array Destructuring VI - Rest Items with Spread Operator
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let [firstColor, secondColor, ...otherColors] = rainbow;

console.log(firstColor, secondColor, otherColors);
console.log('---');

console.log('colors of rainbow :', ...rainbow);
console.log('---');

((...colors) => console.log(colors.join(':')))(...otherColors);
console.log('---');


// ex12. Array Destructuring VII - Cloning Arrays with Spread Operator
const myRainbow = rainbow.concat();
console.log(myRainbow === rainbow, ...myRainbow);
console.log('---');

const yourRainbow = rainbow.concat();
console.log(myRainbow === rainbow, ...yourRainbow);
console.log('---');

const [...ourRainbow] = rainbow;
console.log(ourRainbow === rainbow, ...ourRainbow);
console.log('---');

const herRainbow = ['red', 'orange'].concat(otherColors);
const hisRainbow = [...['red', 'orange'], ...otherColors];
console.log(...herRainbow, "VS" , ...hisRainbow);
console.log('---');



// ex13. Array Destructuring VIII - Mixed
const profile = {
    name: '안대혁',
    location: {
        country: 'South Korea',
        city: 'Seoul',
        coordinates: [49.2827, -123.1207]
    }
};

const {name : profileName, location: {country, city, coordinates:[lat, lng]}} = profile;
console.log(`${profileName}은 ${country}의 ${city}(위도:${lat}, 경도:${lng})에 산다.`);
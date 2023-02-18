"use strict";

/* if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('Error');
}
 */

/* if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
}
else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error') */

/* const num = 50;
switch (num) {
    case 49:
        console.log('Not good');
        break;
    case 100:
        console.log('Not good');
        break;
    case 50:
        console.log('Good!');
        break;
    default:
        console.log('Not this time');
        break;
} */



/* const hamburger = 4;
const steak = 2;
const fish = 2;
const nuggets = 2;

if (hamburger === 3 && fish === 2 || steak === 2 && nuggets) {
    console.log('All happy');
} else {
    console.log('We are leaving');
}
console.log(hamburger === 3 && fish === 2 || steak === 2 && nuggets);

console.log(!0); */


/* let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport); */


/* console.log(NaN || 2 || undefined);   2 */
/* console.log(NaN && 2 && undefined); NaN */
/* console.log(1 && 2 && 3); 3
console.log(3 && null && 3) null */
/* console.log(null && 2 || !53) false
 */


let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}

/* do {
    console.log(num);
    num++;
} */

/* while (num < 55); */

/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
       /*  break; */
/*  continue;}
console.log(i);} */ /*  */


for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += '!';

    }

    result += '\n';
}
console.log(result);



first: for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`third level: ${k}`);
        }
    }

}


for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 2; i <= 10; i++) {
    console.log(i);
}


let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}


let arr = [];

for (let i = 5; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);
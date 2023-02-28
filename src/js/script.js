"use strict";

/* УРОК 42 ТРЕНИРОВКА С ФИГУРАМИ НА СТРАНИЦЕ */


/* const box = document.getElementById('box');

console.log(box);



const btns = document.getElementsByTagName('button');

console.log(btns);




const circles = document.getElementsByClassName('circle');

console.log(circles); */




/* const hearts = document.querySelectorAll('.heart'); */

/* console.log(hearts); */

/* hearts.forEach(item => {

    console.log(item);

}); */

/* const oneHeart = document.querySelector('.heart');

console.log(oneHeart); */


/* УРОК 43 ТРЕНИРОВКА НА СТРАНИЦЕ */

/* const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'); */


/* box.style.backgroundColor = '#234234   ';
box.style.width = '500px'; */

/* console.dir(box);

box.style.cssText = 'background-color: #234234; width: 500px'

btns[1].style.borderRadius = '100%';

circles[1].style.backgroundColor = 'grey'; */

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'black';
} */

/* hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); */
/* const text = document.createTextNode('here i am'); */

/* div.classList.add('black');


wrapper.append(div); */

/* wrapper.prepend(div) */
/* wrapper.appendChild(div); */

/* hearts[0].before(div); */
/* hearts[0].after(div); */
/* wrapper.insertBefore(div, hearts[2]); */

/* circles[0].remove(); */
/* wrapper.removeChild(hearts[1]); */

/* hearts[0].replaceWith(circles[0]); */
/* wrapper.replaceChild(circles[0], hearts[0]); */

/* div.innerHTML = '<h1>Hello World</h1>'; */

/* div.textContent = 'Hi'; only text */

/* div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>'); */



let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    };

    return total / students;
}



/* console.log(getTotalProgressByIteration(students)); */

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);
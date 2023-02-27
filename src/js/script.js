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

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');


/* box.style.backgroundColor = '#234234   ';
box.style.width = '500px'; */

console.dir(box);

box.style.cssText = 'background-color: #234234; width: 500px'

btns[1].style.borderRadius = '100%';

circles[1].style.backgroundColor = 'grey';

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'black';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
/* const text = document.createTextNode('here i am'); */

div.classList.add('black');


wrapper.append(div);

/* wrapper.prepend(div) */
/* wrapper.appendChild(div); */

/* hearts[0].before(div); */
/* hearts[0].after(div); */
/* wrapper.insertBefore(div, hearts[2]); */

/* circles[0].remove(); */
/* wrapper.removeChild(hearts[1]); */

hearts[0].replaceWith(circles[0]);
/* wrapper.replaceChild(circles[0], hearts[0]); */

div.innerHTML = '<h1>Hello World</h1>';

/* div.textContent = 'Hi'; only text */

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');










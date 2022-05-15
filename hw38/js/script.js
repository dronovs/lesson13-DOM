'use strict';

const anyArray = [1, 2, 3, [4, 5, 6, [7]], 8, 9];
let mainUl = document.createElement('ul');
document.body.append(mainUl);

function generateList (arr, ul) {
    for (let item of arr) {
        const li = document.createElement('li');
        if (Array.isArray(item)) {
            const innerUl = document.createElement('ul');
            li.append(innerUl);
            generateList(item, innerUl);
        } else {
            li.innerText = item;
        }
        ul.append(li);
    }
}

generateList(anyArray, mainUl);


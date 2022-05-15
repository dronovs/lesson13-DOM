'use strict';

let ul = document.querySelector('#ulId');
let ulChildren = ul.children;

for(let item of ulChildren) {
    console.log(item);
}

let liTextArray = [];
for (let elem of ulChildren) {
    liTextArray.push(elem.innerHTML);
}

console.log(ulChildren.length);

console.log(liTextArray);
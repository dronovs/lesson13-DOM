'use strict';

const mainUl = document.querySelector('#ulId');

let ulChildren = mainUl.children;

for (let child of ulChildren) {
    console.log(child);
}

function getAttributes (tag) {
    let attributesArray = [];
    let ulAttributesArray = Array.from(tag.attributes);

    for (let attribute of ulAttributesArray) {
        attributesArray.push(attribute);
    }

    return attributesArray;
}


function getAttributesValues (tag) {
    let attributesArray = [];
    let ulAttributesArray = Array.from(tag.attributes);

    for (let attribute of ulAttributesArray) {
        attributesArray.push(attribute.value);
    }

    return attributesArray;
}

let mainUlAttributes = getAttributes(mainUl);
console.log(mainUlAttributes);

let mainUlAttributesValues = getAttributesValues(mainUl);
console.log(mainUlAttributesValues);

mainUl.lastElementChild.innerHTML = `Hello, my name is Serjio`;

mainUl.firstElementChild.setAttribute('data-my-name', 'Serhii');

mainUl.removeAttribute('data-dog-tail');
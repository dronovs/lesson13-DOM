'use strict';

const anyArray = [1, 2, 3, [4, 5, 6, [7]]];
let mainUl = document.createElement('ul');
document.body.append(mainUl);


function  generateList(arr) {
    let innerUl = document.createElement('ul');
    for (let item of arr) {
        if (Array.isArray(item)) {
            for (let elem of item) {
                mainUl.append(innerUl);
                let innerLi = document.createElement('li');
                innerLi.innerText = elem;
                innerUl.append(innerLi);
                if (Array.isArray(elem)) {
                    let subUl = document.createElement('ul');
                    for (let element of elem) {
                            innerUl.append(subUl);
                            let subLi = document.createElement('li');
                            subLi.innerText = element;
                            subUl.append(subLi);
                    }
                }
            }
        } else {
            let mainInnerLi = document.createElement('li');
            mainInnerLi.innerText = item;
            mainUl.append(mainInnerLi);
        }
    }
}

generateList(anyArray);
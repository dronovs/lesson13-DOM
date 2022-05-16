'use strict';
function createTable() {
    let mainTable = document.querySelector('.main-table');
    let counter = 1;

    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');
        mainTable.append(tr);

        for (let i = 1; i<=10; i++ ) {
            let td = document.createElement('td');
            td.innerHTML = String(counter);
            tr.append(td);
            counter++;
        }
    }

}

createTable();
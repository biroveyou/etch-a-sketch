"use strict";

function createGrid(number) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.classList.add("row-div");
        for (let j = 0; j < number; j++) {
            const div = document.createElement("div");
            div.classList.add("square-div");
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

const container = document.querySelector(".container");
createGrid(16);

const rows = document.querySelectorAll(".row-div");
console.log(rows);
for (let row of rows) {
    row.addEventListener("mouseover", (e) => {
        let target = event.target;
        if (target && container.contains(target) && !(target == row)) {
            console.log(target);
            target.classList.add("inked");
        }
    });
}



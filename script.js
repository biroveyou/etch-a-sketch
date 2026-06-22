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
    addEvents();
}

function addEvents() {
    const rows = document.querySelectorAll(".row-div");
    console.log(rows);
    for (let row of rows) {
        row.addEventListener("mouseover", (e) => {
            let target = event.target;
            if (target && container.contains(target) && !(target == row)) {
                target.classList.add("inked");
            }
        });
    }
}

const container = document.querySelector(".container");

function main() {
    createGrid(16);
}

const button = document.querySelector("#size-modification");
button.addEventListener("click", () => {
    const sizeNumber = prompt("Number of squares per side?")
    container.remove();
    createGrid(+sizeNumber);
})

main();

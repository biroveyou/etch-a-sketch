"use strict";

function addContainer() {
    const body = document.querySelector("body");

    const container = document.createElement("div");
    container.classList.add("container");

    body.appendChild(container)

    return container;
}

function createGrid(number) {
    const container = addContainer();

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
    addEvents(container);
}

function addEvents(canvas) {
    const rows = document.querySelectorAll(".row-div");
    console.log(rows);
    for (let row of rows) {
        row.addEventListener("mouseover", (e) => {
            let target = event.target;
            if (target && canvas.contains(target) && !(target == row)) {
                target.classList.add("inked");
            }
        });
    }
}

function main() {
    createGrid(16);
    const btn = document.querySelector("#resize");
    btn.addEventListener("click", () => {
        const sizeNumber = prompt("Number of squares per side?")
        container.remove();
        
        createGrid(+sizeNumber);
    })
}

main();
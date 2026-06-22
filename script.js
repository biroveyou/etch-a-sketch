"use strict";

function addContainer() {
    const content = document.querySelector(".content");

    const container = document.createElement("div");
    container.classList.add("container");

    content.appendChild(container);

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
    for (let row of rows) {
        row.addEventListener("mouseover", (e) => {
            let target = event.target;
            if (target && canvas.contains(target) && !(target == row)) {
                target.classList.add("inked");
                if (target.style["opacity percent"]) {
                    if (target.style["opacity percent"] < 1) {target.style["opacity percent"] += 0.1;};
                } else {
                    target.style["opacity percent"] = 0.1;
                }
                target.style.opacity = target.style["opacity percent"];
            }
        });
    }
}

function main() {
    createGrid(16);

    const resizeBtn = document.querySelector("#resize");
    resizeBtn.addEventListener("click", () => {
        let sizeNumber = Number(prompt("Number of squares per side?"));
        
        if (sizeNumber > 100) {
            sizeNumber = 100;
        }

        const container = document.querySelector(".container");
        container.remove();
        createGrid(sizeNumber);
    });
}

main();
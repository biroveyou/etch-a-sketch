"use strict";

function createGrid(number) {
    const container = document.querySelector(".container")
    for (let i = 0; i < (number * number); i++) {
        const div = document.createElement("div");
        div.classList.add("square-div");
        container.appendChild(div);
    }
}

createGrid(4);
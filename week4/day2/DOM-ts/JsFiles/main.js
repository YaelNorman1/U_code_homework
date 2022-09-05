"use strict";
function doX() {
    const someElement = document.querySelector(".foo");
    const inputElement = someElement;
    console.log(inputElement.value);
}
function newPage() {
    const domElement = document.querySelector('.foo');
    domElement.addEventListener('input', function (event) {
        const e = event.target;
        console.log(e.value);
    });
}

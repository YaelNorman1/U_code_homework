function doX() : void {

    const someElement = document.querySelector(".foo");
    const inputElement = someElement as HTMLInputElement;
    console.log(inputElement.value);
}

function newPage () {
    const domElement = document.querySelector('.foo') as HTMLInputElement;

    domElement.addEventListener('input', function(event) {
        const e = event.target as HTMLInputElement;
        console.log(e.value);
    });
}
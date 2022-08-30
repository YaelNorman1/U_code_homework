// localStorage.name= "yael";

// console.log(localStorage.getItem("name"))
// localStorage.user= JSON.stringify(userStorage);

// let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }


function render() {
    const arr= JSON.parse(localStorage.wisdom);
    let newAppend='';
    console.log("in render "+arr +"after arr")

    for (const item of arr){
        newAppend+=`<div>${item.text}</div>`;
        console.log(newAppend)
    }
    $("#conteiner").append(newAppend);

}


localStorage.wisdom=JSON.stringify([]);

$("#input-button").on("click", function() { 
    let newtext= $("#input-text").val();
    let tempArr=JSON.parse(localStorage.wisdom);
    tempArr.push({text: newtext}); 
    localStorage.wisdom=JSON.stringify(tempArr);
    $("#conteiner").append(`<div>${newtext}</div>`)

})

render();



// let data = JSON.parse(localStorage.dataThatIsImportant || "[]")

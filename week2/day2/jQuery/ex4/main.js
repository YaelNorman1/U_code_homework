const allItems= $(".item")
console.log(allItems)

// for (item of allItems){
//     if (item.data().instock){
//         $(this).om("click", function(){
//             console.log("im in");
//         })
//     }
    
// }

for (let i=0; i< allItems.length; i++){
    if (allItems.eq(i).data().instock){
        allItems.eq(i).on("click", function(){
            $("#cart").append(`<div class='cart-item'>${allItems.eq(i).text()}</div>`)
        })
    }
}
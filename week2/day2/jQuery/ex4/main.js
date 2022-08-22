const allItems= $(".item")
console.log(allItems)


for (let i=0; i< allItems.length; i++){
    if (allItems.eq(i).data().instock){
        allItems.eq(i).on("click", function(){
            $("#cart").append(`<div class='cart-item'>${allItems.eq(i).text()}</div>`)
        })
    }
}
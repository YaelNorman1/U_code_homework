// spot check 1

// $("button").on("click",function() {
//     let temp= $(this).closest("div").find("span").text();
//     console.log(temp);
// })

// spot check 2

// $("button").on("click",function() {
//     console.log($(".container").find("p").text());
// })

//Exercises

let arr=[];

$(".generator").on("click", function(){
    console.log($(this).closest(".processor").attr("id"));
    console.log($(this).closest(".computer").data().id);
    arr.push({cmp_id: $(this).closest(".computer").data().id});
    console.log($(this).closest(".computer").find(".BUS").text());
})


$(".validator").on("click", function(){
    console.log($(this).closest(".computer").find(".generator").text());
    console.log($(this).closest(".computer").find(".MB").text());
    console.log($(this).closest(".computer").find(".QR").eq(0).text());
    console.log($(this).closest(".computer").find(".QR").eq(1).text());
})

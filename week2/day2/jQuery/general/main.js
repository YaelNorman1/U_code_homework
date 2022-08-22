// $("h1").css("color","blue");
// $(".red-div").css("color", "red");
// $("#brown-div").css("color", "brown");

// $("li:nth-child(1)").css("color","green");
// $("li:nth-child(2)").css("color","pink")

// $("#b1").addClass("box");
// $("#b2").addClass("box");

// // $('#my-input').val("Terabyte") ;


// const data = $("div").eq(4).data()
// // console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) //notice how we use expirationdate, even though in the HTML it's expirationDate


// //spot check 6
// $("#b1").hover(function () {
//     $("#b1").css("background-color", "red")
// })

// //spot check 7
// $("button").click(function(){
//     alert($("#my-input").val())
// })

// //spot check 8
// $(".box").hover(function () {
//     $(this).css("background-color", "blue")
// })

// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')

// //spot check 9
// $(".feedme").on("click", function(){
//     let divCopy = `<div class='feedme'> ${$(this).text()}</div>`;
//     console.log($(this).text())
//     
    
//     $("body").append(divCopy)
//   })


  //spot check 10
//   const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]

// for (let name of names){
//     $("body").append(`<div>${name.first} ${name.last}</div>`)

// }

// $("p").remove(".brown")

  //spot check 11
$("#removeMe").hover(function(){
    console.log("inside remove event")
    $("#removeMe").remove();
})

  //spot check 12
$("button").click(function(){
    $("#blogs").append("<div class='blog'>some text</div>");
})

// $("button").click(function(){
//     $(".blog").text("blargh")

// })

  //spot check 13
$("#blogs").on("click",".blog", function(){
    $(this).text("uncool blog") 
})
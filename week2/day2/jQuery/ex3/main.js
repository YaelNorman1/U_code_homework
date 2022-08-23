// $("body").append("<span class='box' id='box1'></span> <span class='box' id='box2'></span>")

// $("body").on("mouseover","#box1", function(){
//     $("#box2").css("background-color", "red");
//     $("#box1").css("background-color", "#8e44ad");
// })

// $("body").on("mouseover","#box2", function(){
//     $("#box1").css("background-color", "red");
//     $("#box2").css("background-color", "#8e44ad");
// })

$("body").append("<div class='box'></div>")
$("body").append("<div class='box'></div>")
    
let $boxes = $(".box")
    
$(".box").hover(function () {
  $boxes.css("background-color", "rgb(231, 76, 60)")
  $(this).css("background-color", "rgb(142, 68, 173)")
})
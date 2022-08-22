$("body").append("<span class='box' id='box1'></span> <span class='box' id='box2'></span>")

$("body").on("mouseover","#box1", function(){
    $("#box2").css("background-color", "red");
    $("#box1").css("background-color", "#8e44ad");
})

$("body").on("mouseover","#box2", function(){
    $("#box1").css("background-color", "red");
    $("#box2").css("background-color", "#8e44ad");
})
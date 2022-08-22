$("body").append("<input type='text' id='my-input' placeholder='Type a name'></input>");
$("body").append("<button>Add</button>")

$("body").on("click","button", function(){
    $("ul").append(`<li>${$("#my-input").val()}</li>`)
    $("#my-input").val("");
})

$("body").on("click","li",function(){
    $(this).remove();
})
const posts = [
    {
        name: "Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Jhon",
        text: "Hey ace, have a good one."
    }
]

const render= function() {
     $("#postsHere").empty();
    for (const post of posts){
        let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
        $("#postsHere").append(postBox);

    }
}


$("button").on("click", function(){
    const newName= $("#input-name").val();
    const newText= $("#input-text").val();
    $("#input-name").val("");
    $("#input-text").val("");
    posts.push({name:newName, text: newText });
    render();

})
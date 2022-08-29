// $.get("https://www.googleapis.com/books/v1/volumes?q=Wind:0439023521", function(result){
//     console.log(result)
// })


// $("button").on("click", function(queryType, queryValue){

//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })

// })

const fetch = function (queryType, queryValue){

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach(element => console.log(element.volumeInfo.title + element.volumeInfo.authors[0]));
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

// var xhr = $.get("http://upload.giphy.com/v1/gifs", {api_key: "BPHvfC36csYB6YFfdRGTLEvqRrmnRUx9", username: "YaelNorman", source_image_url: "http://www.mysite.com/myfile.mp4"});
// xhr.done(function(data) { console.log("success got data", data); });



 $("#inputBtn").on("click", function(){
    let gifText= $("#input").val();
    //console.log(gifText)
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${gifText}&api_key=BPHvfC36csYB6YFfdRGTLEvqRrmnRUx9&limit=5`);
    xhr.done(function(data) { 
    console.log("success got data", data);
    $("#gif").attr("src", data.data[0].embed_url);
 });
 })
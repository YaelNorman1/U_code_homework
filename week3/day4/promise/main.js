

$.get('https://random-word-api.herokuapp.com/word')
    .then(function(word){
        console.log(word)
        let bookTitel= $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        let gif= $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=BPHvfC36csYB6YFfdRGTLEvqRrmnRUx9&limit=5`)
        Promise.all([bookTitel,gif])
    })
        .then(function(results){
            $("body").append(`<h1>${results[0].items[0].volumeInfo.title}</h1>`);
            $("body").append(`<img src='${results[1].data[0].embed_url}'>`);

        })


const fetchRecipes = async function (ingredient) {
    let recipe= await $.get(`/recipe/${ingredient}`)
    console.log(recipe)
    }

// let p = $.get('https://random-word-api.herokuapp.com/all') 
// console.log(p)


// $.get('/randomWord')
//     .then(function(word){
//         console.log(word)
//     })

// let p2 = $.get('/sentiment/Ploy') 
// console.log(p2)
// const source = $('#store-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template({item: "bread", price: "15"});
// $('.items').append(newHTML);


//-----------------------------------------------------------------------
// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ]
// }
  
//   const source = $('#classData-template').html();
//   const template = Handlebars.compile(source);
//   const newHTML = template(classData);
  
//   // append our new html to the page
//   $('.classmates').append(newHTML);

//--------------------------------------------------------------------------
const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const source = $('#animal-template').html();
const template = Handlebars.compile(source);
const newHTML = template(animals);

// append our new html to the page
$('.animals').append(newHTML);

const source2 = $('#languages-template').html();
const template2 = Handlebars.compile(source);
const newHTML2 = template(languages);

// append our new html to the page
$('.languages').append(newHTML);

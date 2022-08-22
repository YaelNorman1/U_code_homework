// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback();
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)


// const square =(num)=> console.log(num**2)

// square(4);

// const getFormalTitle= (fname, lname)=>{
//     return `${fname} ${lname}`;
// }

// formalTitle = getFormalTitle("Madamme", "Lellouche");
// console.log(formalTitle); //returns "Maddame Lellouche"

//Exercise 1 - Callbacks
// const pushPull= (func)=> func();

// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   pushPull(push) 
//   pushPull(pull) 

  //Exercise 2 - Callbacks
//   const getTime = (func) => {
//     const time = new Date();
//     func(time);
//   }
  
//   const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  
//   getTime(returnTime);


//Exercise 3 - Callbacks
  const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };

  const alert= (data)=> this.alert(data);
  const logData= (data) => console.log(data);
  
  displayData(alert, logData, "I like to party");

  //Exercise 4 - Arrow Functions
  const sum = (num1,num2,num3) =>  num1+num2+num3;

 // Exercise 5 - Arrow Functions
const capitalize= (str) => console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

//Exercise 6 - Arrow functions
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

const commentOnWeather = (temp) => {
    console.log(`It's ${determineWeather(temp)}`);

}

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

//Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")

  let x = {
    count: 12,
    go: () => {
        setTimeout(function () {
            console.log(this.count)
        }, 1500)
    }
}
x.go()
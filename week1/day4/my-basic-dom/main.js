
// const arrows= document.getElementsByClassName("arrow");
// const upA = arrows[0];
// const leftA = arrows[1];
// const rightA = arrows[2];
// const downA = arrows[3];


const upA=document.getElementById("up");
const leftA=document.getElementById("left");
const rightA=document.getElementById("right");
const downA=document.getElementById("down");

upA.onclick = function (){ 
    upA.style.backgroundColor="red";
}

leftA.onclick = function (){ 
    leftA.style.backgroundColor="red";
}

rightA.onclick = function (){ 
    rightA.style.backgroundColor="red";
    moveRight();
}

downA.onclick = function (){ 
    downA.style.backgroundColor="red";
    moveDown();
}


 const moveRight = function(){
    const ball = document.getElementById("ball");
    let left = parseInt(ball.style.left) || 0;
    left += 15;
    ball.style.left = left + "px";
  }


  const moveDown = function(){
    console.log("in down func");
    const ball = document.getElementById("ball");
    let top = parseInt(ball.style.top) || 0;
    top += 15;
    ball.style.top = top + "px";
  }












//  console.log(document);

//  document.getElementById('playing-field').style.backgroundColor = "blue";

//  const playingField = document.getElementById("playing-field");
//  console.log(playingField);

//  const down= document.getElementById('down');
//  console.log(down);
 
//  console.log(down.innerHTML)
//  down.innerHTML = "Down"

//  const ball= document.getElementById("ball").style.backgroundColor="yellow";

//  const moveRight = function(){
//     const ball = document.getElementById("ball");
//     let left = parseInt(ball.style.left) || 0;
//     left += 15;
//     ball.style.left = left + "px";
//   }

//   const subHeader= document.createElement("h2")
//   subHeader.innerHTML = "some header"
//   subHeader.setAttribute("class", "myClass");
//   document.body.appendChild(subHeader);
  
//   //onclick function, change color of button
//   function myFunction(){
//     const box = document.getElementById("down");
//     box.style.backgroundColor = "#8e44ad";
//   }

//   //add itrem to the list
//   function listClickFunc(){
//     console.log("in on click of list");
//     const item= document.createElement("li");
//     item.innerHTML= "added item";
//     document.getElementsByClassName("list")[0].appendChild(item);

//   }

//   const box = document.getElementById("box");

//   box.onclick = function () {
//   box.innerHTML = "clicked"
// }
// box.onmouseenter = function() {
//     box.innerHTML = "onmouseenter"
// }
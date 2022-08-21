//   const subHeader= document.createElement("h2")
//   subHeader.innerHTML = "some header"
//   subHeader.setAttribute("class", "myClass");
//   document.body.appendChild(subHeader);


function getRandColor() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    const index= Math.floor(Math.random() * niceColors.length);
    return niceColors[index];

}

for (let i=0; i<5; i++){
    const box= document.createElement("div");
    box.setAttribute("id",`box${i}`);
    box.setAttribute("class", "box");
    box.innerHTML= `box${i}`;
    box.style.backgroundColor = "gray";
    document.getElementById("container").appendChild(box);

    console.log("after append child");

    box.onmouseenter= function() {

        box.style.backgroundColor= getRandColor();
        console.log("inside event");

    }
     


}
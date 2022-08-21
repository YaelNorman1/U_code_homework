const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

document.getElementById("submitBt").onclick = function() {

    const name= document.querySelector('input').value;

    console.log(name);

    const guest= document.createElement("div");

    if (reservations[name]){
        if (!reservations[name].claimed){
            guest.innerHTML= "Hmm, someone already claimed this reservation";
        } else {
            guest.innerHTML= `Welcome, ${name}`;
        }
    } else {
        guest.innerHTML= "You have no reservation";
    }

    document.body.appendChild(guest);
}

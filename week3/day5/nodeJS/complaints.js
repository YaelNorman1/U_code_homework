const manager= require('./complaintsHandler')
//const handleComplaint= require('./complaintsHandler')



let complaint1 = {
    text: "I'm not getting enough money",
    type: manager.allType.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: manager.allType.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: manager.allType.EMOTIONS
}

manager.handleComplaints(complaint1)
// handleComplaint //should print "Money doesn't grow on trees, you know."
manager.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
manager.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."
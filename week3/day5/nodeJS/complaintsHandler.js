const allType= require('./consts')

console.log(allType)

function handleComplaints(complaint){
    const type= complaint.type

    if (type== allType.EMOTIONS){
        console.log("It’ll pass, as all things do, with time.")
    }
    else if (type== allType.FINANCE){
        console.log("Money doesn’t grow on trees, you know.")
    }
    else if (type== allType.WEATHER){
        console.log("It is the way of nature. Not much to be done.")
    }

}

module.exports.handleComplaints= handleComplaints
module.exports.allType= allType

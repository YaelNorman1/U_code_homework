"use strict";
function concat(str, shouldPrint) {
    if (Array.isArray(str)) {
        str = str.join(' ');
    }
    else if (typeof str !== "string") {
        console.log("not an string");
        return;
    }
    if ((typeof shouldPrint === 'boolean' && shouldPrint) || (typeof shouldPrint === "number" && shouldPrint === 0)) {
        console.log(str);
    }
    else {
        console.log("shoudnt print");
        return;
    }
}
concat("hello", true);
concat("Tomer", false);
concat("Tomer", 2);
concat(["Tomer", "Sagi"], 1);
concat(["Tomer", "Sagi"], 0);
concat(["Michael", "Jordan", "is", "the", "King"], true);
function print_numbers(numbers) {
    if (typeof numbers === 'string') {
        console.log("string: " + numbers);
        return;
    }
    if (typeof numbers === 'number') {
        console.log("number: " + numbers);
        return;
    }
    if (Array.isArray(numbers)) {
        console.log("array: " + numbers);
    }
}
print_numbers(972528684411);
print_numbers([972528684411, 9725242223]);
print_numbers("052863423243");
print_numbers(["052343434286", "0547734343"]);

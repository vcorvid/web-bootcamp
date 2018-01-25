//while (answer !== "yes" && answer !== "yeah"){
//    var answer = prompt("Are we there yet?");
//}
//
//alert("Yay! We Made It.");

var answer = prompt("are we there yet?");

while (answer.indexOf("yes")=== -1 && answer !== "yeah"){
    var answer = prompt("Are we there yet?");
}

alert("Yay! We Made It.");

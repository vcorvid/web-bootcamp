var age = prompt("What is your age?");
if (age < 0) {
    alert("Age must be a positive number");
}
else if (age*age/age == age) {   
    alert("Perfect square!");
}
else if (age == 21) {
    alert("Happy 21st birthday!");
} 
else if (age % 2 != 0) {
    alert ("Your age is odd.");
}
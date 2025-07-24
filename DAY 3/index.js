// if else condition

var age = 40;

if (age == 18) {
    console.log("you are eligible for learning license");
} else if (age > 18 && age <= 80) {
    console.log("you are eligible for drive");
} else {
    console.log(" you are not eligible for license");

}

// switch case
var selectedfruit = "banana";

switch (selectedfruit) {
    case "apple":
        console.log("you selected apple.");
        break;
    case "mango":
        console.log("you selected mango.");
        break;
    case "papaya":
        console.log("you selected papaya.");
        break;
    case "banana":
        console.log("you selected banana.");
        break;
    case "orange":
        console.log("you selected orange.");
        break;
    default:
        console.log("selected fruit is not available.");


}

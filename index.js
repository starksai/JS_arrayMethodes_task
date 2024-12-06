// Question 1: Manage a Guest List
// You are managing a guest list for an event.
// Start with an array: ["Alice", "Bob", "Charlie", "David"].
// Add a new guest at the beginning of the list.
// Remove the last guest from the list.
// Check if "Bob" is still in the list after modifications.
// What does the final list look like?

var guest = ["Alice", "Bob", "Charlie", "David"];

if (guest.includes("Bob")) {
    guest.unshift("sai");
    guest.pop();
    console.log(guest);
}
else{
    console.log(guest);
}

// Question 2: Generate a Sentence
// Given a string: "Learn,Practice,Improve",
// Convert the string into an array of words.
// Reverse the order of the words.
// Join the reversed array into a single string with spaces between words.
// What is the final output?

var sent = "Learn,Practice,Improve";
var r = sent.split(",").reverse().join(" ");
console.log(r);

// Question 3: Create a Playlist
// You have two arrays of songs:
// ["Song1", "Song2", "Song3"] and ["Song4", "Song5"].
// Combine these two arrays into one playlist.
// Remove the first song from the playlist.
// Add a new song, "Song6", to the end of the playlist.
// What does the final playlist look like?

var playlist1 = ["Song1", "Song2", "Song3"];
var playlist2 = ["Song4", "Song5"];

var final_playlist = playlist1.concat(playlist2);
final_playlist.shift();
final_playlist.push("song6");

console.log(final_playlist);


// Question 5: Extract Favorite Movies
// You have a list of movies:
// ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"].
// Extract the middle three movies into a new array.
// Combine this new array with another array: ["The Matrix", "The Godfather"].
// Reverse the order of the combined list.
// What is the final list?

var movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
var fav_movies = movies.slice(1,4);
var other_movies = ["The Matrix", "The Godfather"];
var final_movies = fav_movies.concat(other_movies);
console.log(final_movies)


// Question 7: String Operations on Names
// Given a string: "John,Doe,Jane,Smith",
// Split the string into an array.
// Check if the array includes "Jane".
// Reverse the array and join the names with a space.
// What is the final output?

var str = "John,Doe,Jane,Smith";
var str1 = str.split(",");

if(str1.includes("Jane")){
    var final_str = str1.reverse().join(" ");
    console.log(final_str)
}
else{
    console.log(str1);   
}


// Question 8: Length-Based Manipulation
// You have an array of numbers: [1, 2, 3, 4, 5].
// Remove the first element from the array.
// Add the numbers 6 and 7 to the end.
// Calculate the final length of the array.
// What are the final array and its length?

var nums = [1,2,3,4,5];
nums.shift();
nums.push(6,7);
console.log("Length of array: " + nums.length);
console.log("final array " + nums);


// Question 9: Shopping Cart Operations
// You have a shopping cart array:
// ["Milk", "Bread", "Eggs", "Butter"].
// Check if "Eggs" are in the cart.
// Remove "Butter" from the cart.
// Add "Cheese" and "Juice" to the end of the cart.
// What does the final shopping cart look like?

var cart = ["Milk", "Bread", "Eggs", "Butter"];

if(cart.includes("Eggs")){
    cart.pop();
    cart.push("Cheese","Juice");
    console.log(cart);  
}
else{
    console.log(cart);
}

// Question 10: Rearrange and Combine Names
// You have two arrays of names:
// ["Alice", "Bob", "Charlie"] and ["David", "Eve"].
// Reverse the first array.
// Combine the reversed array with the second array.
// Add "Frank" to the beginning of the combined list.
// What is the final list?

var name1 = ["Alice", "Bob", "Charlie"];
var name2 = ["David", "Eve"];

var R_name1 = name1.reverse();

var c_names = R_name1.concat(name2);
c_names.unshift("Frank");

console.log(c_names);


// Question 11: Shopping Cart Operations
// You have a shopping cart:
// ["Milk", "Bread", "Eggs", "Butter"].
// Find the index of "Eggs" in the cart.
// Remove "Eggs" and replace it with "Cheese"
// Add "Juice" to the beginning of the cart.
// What does the final shopping cart look like?


var addToCart = ["Milk", "Bread", "Eggs", "Butter"];

var eggIndex = addToCart.indexOf("Eggs");

addToCart[eggIndex] = "Cheese";

addToCart.unshift("Juice");

console.log(addToCart);




// Write a code snippet to find the length of an array.
var arr1 = [3,1,5,4,6,2,7];
console.log("Length of arr1: "+arr1.length);

// How do you add an element to the end of an array?
console.log(arr1.push(8) ,"element added end of an arr1");
console.log("after adding element at end of any arr1: ",arr1);

// How do you remove the last element from an array?
console.log("remove the last element from an array",arr1.pop());
console.log("after remove the last element from an array: ",arr1);

// How do you add an element to the beginning of an array?
console.log("adding an element to the beginning of an array",arr1.unshift(9));
console.log("after adding an element to the beginning of an array: ",arr1);

// How can you remove the first element from an array?
console.log("removing the first element from an array",arr1.shift());
console.log("after removing the first element from an array: ",arr1);


// How do you reverse the elements in an array?
console.log("reversing the elements in an array",arr1.reverse());


// How can you find the index of a specific value in an array?
console.log("finding the index of a 3 value in an array:",arr1.indexOf(3));


// How can you check if a certain value exists in an array?
if(arr1.includes(3)){
    console.log(arr1.includes(3),"element is present");
}
else{
    console.log(arr1.includes(3),"Element not present");
}
// How can you sort the elements of an array in ascending order?
console.log("sorting the elements of an array in ascending order",arr1.sort((a,b)=>a-b));

// How can you convert an array to a string using commas as separators?
console.log("convert an array to a string using commas as separators",arr1.join(","));




// Write a code snippet that adds an element to the end of an array, then removes the first element.
var arr2 = [1,2,3,4,5];
arr2.push(6);
arr2.shift();
console.log("adding an element at the end of an array and removes the first element",arr2)


// How can you reverse an array and then join the elements into a string?
var arr3 = [3,7,1,9,4,2];
console.log("reverse an array and then join the elements into a string",arr3.reverse().join());
console.log("type of output ",typeof arr3.reverse().join());

// Write a code that first sorts an array in ascending order, then removes the last element.
var arr4 = [3,7,1,9,4,2];
console.log("sorting an array in ascending order",arr4.reverse());
arr4.pop();
console.log("after removing the last element",arr4);


// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var arr5 = [1,2,3,4,5];
arr5.unshift(6,7);
arr5.shift();
console.log("Length of an arr5 is : ", arr5.length)
console.log("addinf two elements at the beginning", arr5);


// How do you combine two arrays, sort the combined array, and then remove the last element?
var arr6 = [956,34,6,2,1];
var arr7 = [300,200,674,3,7];
var result = arr6.concat(arr7).sort((a,b) => a-b);

result.pop();
console.log(result);



























// Question 1
let arr1 = [3, 7, 34, 90, 12]
let arr2 = [true, "green", "where", 12, 56]

let lastValue = arr1.find(item => item === 12);
console.log({lastValue});

lastValue = arr2.find(item => item === 56);
console.log({ lastValue });

// Question 2
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = myPets.map(item => item).join(" ");
console.log(typeof pets);
console.log({pets});

// Question 3
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
let sortedItems = arr3.sort();
console.log({sortedItems});

// Question 4
let arr = ["boy", "man", "girl", "school", "girl", "woman"];

let duplicatesItems = [];
console.log({duplicatesItems});


// Question 5
let arr5 = ["the", "way", "x", 4];



// Question 6
let word = "renniw"
let sortedString = word.split();
console.log({sortedString});
let newWord = sortedString.sort();
console.log({newWord})


// Question 7
let fruits = new Array(10);
console.log(fruits.length);
fruits[5]= "Tomato";
console.log({fruits});





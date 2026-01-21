// Using the (!) NOT operator:
// ! reverses the boolean value (true becomes false, false becomes true)
var isWeekend = true;
var needToShowerToday = !isWeekend; // false because it IS the weekend
needToShowerToday;

// Joining strings together (string concatenation):
var greeting = "Hello";
var myName = "Nick";
greeting + myName; // "HelloNick"

// Finding the length of a string:
// .length counts how many characters are in the string
"Helloworld".length; // 10

// Getting a single character from a string:
// Strings are zero-indexed (start counting from 0)
var myName = "Nick";
myName[1]; // "i"

// Numbers and operators:
// Order of operations applies (*, / before +, -)
1234 + 57 * 3 - 31 / 4;

// Post Incrementing:
// ++ increases the value by 1
var highFives = 0;
++highFives; // highFives becomes 1

// Pre Decrementing:
// -- decreases the value by 1
var highFives = 5;
--highFives; // highFives becomes 4

// Boolean AND operator (&&):
// Both values must be true for the result to be true
var isRaining = true;
var isNotRaining = false;
isRaining && isNotRaining; // false

// OR operator (||):
// At least one value must be true for the result to be true
var hasApple = true;
var hasBanana = false;
hasApple || hasBanana; // true

// Numbers with booleans (comparison operators):
// Checks if height is less than the restriction
var height = 65;
var heightRestriction = 60;
height < heightRestriction; // false

// Converting a string to upper case:
"Hello there, how are you doing?".toUpperCase();

// Converting a string to lower case:
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();

// Strict equality (===):
// Checks both value AND type
var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess; // false

// Double equals (==):
// Checks value only, not type
var stringNumber = "5";
var actualNumber = 5;
stringNumber == actualNumber; // true

// Slice:
// Extracts part of a string using start and end indexes

// Example 1:
"This is a long string".slice(0, 4); // "This"

// Example 2:
"Hello, World!".slice(7, 12); // "World"

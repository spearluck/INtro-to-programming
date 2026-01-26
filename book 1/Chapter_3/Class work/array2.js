var mixedDataType = [42, 'hi', true, { name: 'peter' }, [1, 2, 3], false, [1, 2, 3, 6]];
console.log("Data type Value:", mixedDataType[4][6]);
var fruits = ['mango', 'peach', 'grape', 'kiwi', 'papaya'];
fruits.push('kiwi', 'mango');
console.log("After-appending:", fruits);
console.log("Fruits index:", fruits[2]);
fruits[2] = 'grape';
console.log("New value in the Array:", fruits);
console.log("Fruits Length:", fruits.length);
console.log("Removed item:", fruits.pop());
console.log("Array After-pop:", fruits);
var allFruits = fruits.concat(['Chicken', 'Beef', 'Pork', 'Pizza', 'and', 'Vegetables']);
console.log("Concat:", allFruits);
console.log("Index-Of the value:", allFruits.indexOf('Pizza'));
//9.  Finding Index:
console.log("Index-Of the value:", allFruits.indexOf('Pork'));

// //10. Turning into a String:
// // Convert the array into a single string with elements separated by a comma.
var mixedString = mixedDataType.join('- ');
 console.log("Coverted String:",mixedString);

// //11.  Building with push: Add new items to the end of the array.
 var numbers = [];
 numbers.push(1, 2, 3, 5, 6, 7);
 console.log("Numbers Array:",numbers);

// //12.  Adding to the beginning of the array:
 numbers.unshift(2, 8, 6);
 console.log("Added:",numbers);
console.log("Data type Value:", mixedDataType[4][2]);


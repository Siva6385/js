let stringArray = [];

function addString(str) {
  if (!stringArray.includes(str)) {
    stringArray.push(str);
    console.log(`"${str}" added to the array.`);
  } else {
    console.log(`"${str}" is already in the array.`);
  }
}

addString("banana");
addString("apple");
addString("orange");
addString("apple"); 

stringArray.sort();

console.log("Sorted Array:", stringArray);

console.log("Length of Array:", stringArray.length);

const myText = "   Pavan Sai    ";

// Trim the string to remove leading and trailing whitespace
const myTextAfterTrim = myText.trim();
console.log("After Trim :",myTextAfterTrim); // Output: "Pavan Sai"
console.log("Original Text :",myText); // Output: "   Pavan Sai    " (original string remains unchanged)  

console.log("Trimmed Text :",myText.trim()); // Output: "Pavan Sai" (trimmed version of the original string)


// Trim the string to remove only leading whitespace
console.log("Trimmed StartText :",myText.trimStart());


// Trim the string to remove only trailing whitespace
console.log("Trimmed EndText :",myText.trimEnd());0

console.log('Index of "Pavan" in the original string:', myText.indexOf("P")); // Output: 3 (index of "Pavan" in the original string)

//Index of a substring in the trimmed string
const indexOfSubstring = myTextAfterTrim.indexOf("Sai");
console.log("Index of 'Sai' in the trimmed string:", indexOfSubstring); // Output: 6 (index of "Sai" in "Pavan Sai")

console.log('Index of myText last index', myText.lastIndexOf("P")); // Output: 0 (index of "Pavan" in the trimmed string)

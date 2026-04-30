const myText = "Pavan Sai Koyalkar is a QA SDET Engineer";
const myTextSliced = myText.slice(6);
console.log(myTextSliced);
console.log("Sliced at -7 index " , myText.slice(-7));
console.log("Sliced Between 4 and 15 index " , myText.slice(4, 15));


const myReplacedString = myText.replace("QA SDET Engineer", "Software Engineer");
console.log(myReplacedString);
console.log( myText);


//Regular Expression to find and replace the string globaly in the text
const re = new RegExp("QA SDET Engineer", "g");
console.log(myText.replace(re, "Software Engineer"));
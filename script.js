function whaleLanguage(){
let input = document.getElementById("input").value;
const wovels = ["a","e","i","o","u"];
let whale = document.getElementById("whale");
let result = document.getElementById("demo");
let resultArray = [];
const error = "Cannot convert into whale language, because no vowels were provided";

for (let inputIndex = 0; inputIndex < input.length; inputIndex ++){
 for (let wovelIndex = 0; wovelIndex < wovels.length; wovelIndex++){
   if (input[inputIndex] === wovels[wovelIndex]){
     if (input[inputIndex] === "e"){
       resultArray.push("ee");
     }
     else if (input[inputIndex] === "u"){
       resultArray.push("uu");
     }
     else {
       resultArray.push(input[inputIndex]);
     }
   }
 }
};

if (resultArray.length < 1) {
result.innerHTML = error;
} else {
result.innerHTML = resultArray.join("").toUpperCase();
whale.innerHTML = "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f584c8d9-3240-4ad9-b0ed-77ac01ae1226/dbiu22u-6f07885b-6d51-4e38-ab33-7cfbf32e3240.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjU4NGM4ZDktMzI0MC00YWQ5LWIwZWQtNzdhYzAxYWUxMjI2XC9kYml1MjJ1LTZmMDc4ODViLTZkNTEtNGUzOC1hYjMzLTdjZmJmMzJlMzI0MC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.5tL56IRt5vZRHa_yZJDFFTbkLMzmn8NgIWWxnuGh92o'>"
}
};

function resetFunction() {
document.getElementById("input").value = " ";
document.getElementById("demo").innerHTML = " ";
document.getElementById("whale").innerHTML = " ";

};

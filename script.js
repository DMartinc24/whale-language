
let input = document.getElementById("input").value;

function whaleLanguage(){
let input = document.getElementById("input").value;
const wovels = ["a","e","i","o","u"];
let whale = document.getElementById("whale");

let resultArray = [];

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

document.getElementById("demo").innerHTML = resultArray.join("").toUpperCase();
whale.innerHTML = "<img src='http://rs191.pbsrc.com/albums/z91/snowell_28289/Animated%20gif/569752s4qsan8g6l.gif~c200'>"
};

function resetFunction() {
document.getElementById("input").value = " ";
};

// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
   let result = ""
   // 97 - 122 is the alphabet, from A-Z
   for(let i = 0; i < str.length; i++) {
      let firstLetter = str.charCodeAt(0)
      let currentLetter = str.charCodeAt(i)

      //console.log(i + firstLetter, currentLetter, result)
      if(currentLetter != i + firstLetter) {
         result += String.fromCharCode(i + firstLetter);
         str = (str.substring(0, i) + String.fromCharCode(i + firstLetter) + (str.substring(i, str.length)))
         //console.log(String.fromCharCode(i + firstLetter), result)
      }
   }

   if(result == "") {
      result = "no missing letters";
   }

   //console.log(str,"Final result: ", result)
   return result
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
   console.log("sumEqualsTarget", arr, target)
   for (let i = 0; i < arr.length; i++) {
      const num1 = arr[i];

      for (let j = i; j < arr.length; j++) {
         const num2 = arr[j];
         //console.log(num1, num2, num1 + num2);
         if(num1 + num2 == target)
            //console.log("true");
            return true;
      }
      
   }
   //console.log("false");
   return false;
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
}
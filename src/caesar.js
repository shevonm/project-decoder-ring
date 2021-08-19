// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
//let charValueArr = [];
  
  function caesar(input, shift=0, encode = true) {
    if(shift === 0 ||shift <= -25 || shift > 25){
      return false
    }
    if(encode === false) shift = -shift
  let valueToLowerCase = input.toLowerCase()
  let inputValues = [...valueToLowerCase]
  let chartValue = inputValues.map((inputValue)=> {
   let afterShift = inputValue.charCodeAt() + shift
   if (inputValue.match(/[a-z]/i)){
     
   
   //console.log(afterShift) 
   if(afterShift >= 97 && afterShift <= 122){
      afterShift
    
   } if (afterShift < 97){
     afterShift += 26
   }
    if (afterShift > 122) {
      afterShift -=26
    }
      return String.fromCharCode(afterShift)
   }else{
     return inputValue
   }
    
  
  //console.log(afterShift)
  })
  
  
    return chartValue.join("")
    console.log(chartValue)
 console.log()


  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

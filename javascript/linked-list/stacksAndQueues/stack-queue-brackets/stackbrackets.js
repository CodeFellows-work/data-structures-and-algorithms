'use strict';

const validateBrackets = (string) => {

  let bracketType = {
    ')':'(',
    '}':'{',
    ']':'['
  };
  let stack = [];
  for(let i =0; i<string.length;i++){
    if(string[i]==='(' || string[i]==='{' || string[i]==='[') {
      stack.push(string[i]);
    }else if(stack[stack.length -1]=== bracketType[string[i]]){
      stack.pop();
    }else return false;
  }
  return stack.length ? false: true;
};

module.exports = validateBrackets;

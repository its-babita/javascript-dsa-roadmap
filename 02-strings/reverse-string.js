//pattern: Traversal + String Building

function reverseString(str){
  let result='';
  for(let i=str.length-1; i>=0; i--){
    result+=str[i]
  }
  return result;
}

//Time Complexity: o(n)
//Space Complexity: o(n)
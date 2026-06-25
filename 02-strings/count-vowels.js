//Pattern:Traversal + Character Classification

function countVowels(str){
  let count=0;
  for(let ch of str.toLowerCase()){
    if('aeiou'.includes(ch)){
      count++
    }
  }
  return count;
}

//Time: O(n)
//Space: O(1)
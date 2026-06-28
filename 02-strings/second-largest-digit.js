function secondLargestDigit(str){
 let first=-1
 let second=-1
 
 for(let i=0; i<=str.length; i++){
   let ch=str[i];
   if(ch >= '0' && ch <= '9'){
     let digit = ch-'0'
     if(digit>first){
       second=first
       first=digit
     }else if(digit<first && digit>second){
       second=digit
     }
   }
 }
  return second;
}
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const arrayFinal=[]
function titleCased(){
  for(let x of tutorials){
  var first
  const arr = x.split(" ")
  //console.log(arr)
  var arr2=[]
  for (let ele of arr){
  ele=ele.charAt(0).toUpperCase() +ele.slice(1)
  arr2.push(ele)
  //console.log(ele)
  }
  first=arr2.join(" ")
  //console.log(first)
  arrayFinal.push(first)
  }
arrayFinal.splice(10,10)
return arrayFinal
}
titleCased()


/*

  
const titleCased = tutorials.map(x=>x[0].charAt(0).toUpperCase()) =>{
  return tutorials
}
titleCased()

*/

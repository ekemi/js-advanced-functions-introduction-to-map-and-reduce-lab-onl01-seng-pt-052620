// Your code here
const mapToNegativize = function(arr){
   let emptyArr = []
   arr.forEach(ar=>{
       emptyArr.push(ar*-1);

   })
   return emptyArr;
}
const mapToNoChange = function(arr){
  let emptyArr = []
  arr.forEach(ar=>{
      emptyArr.push(ar);

  })
  return emptyArr;
}
const mapToDouble = function(arr){
  let emptyArr = []
  arr.forEach(ar=>{
      emptyArr.push(ar*2);

  })
  return emptyArr;
}
const mapToSquare = function(arr){
  let emptyArr = []
  arr.forEach(ar=>{
      emptyArr.push(ar*ar);

  })
  return emptyArr;
}
const reduceToTotal = function(arr){
let em = []
arr.forEach(ar=>{
em.push(ar+ar);

})
return em[arr.length-1]+100;
}
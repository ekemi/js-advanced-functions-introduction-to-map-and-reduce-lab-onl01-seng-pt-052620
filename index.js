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

const fruits = ["mango","orange","melon","banana"];
fruits.sort();
console.log(fruits.sort());



//Question 2
var numbers= [-7,-6,4,5,6]
function myNumbers(numbers){
    let negative =numbers.filter((el) => el <0)
    let positive = numbers.filter((el)=> el>0)
    let zero = numbers.filter((el)=>el==0)
    return{
       negative:negative,
       positive:positive,
        zero:zero,
    }

}
console.log(myNumbers(numbers));


//QUESTION 4
function multiplication(nums){
  nums.forEach((element) => {
    console.log(element* 2);
})}
multiplication([1,2,3,4,5])


//QUESTION5
function nameArray(array){
  const firstFour = array.slice(0,4).map(item=> item*8)
  const lastTwo = array.slice(-2).map(item=>+5)
  const newArray = firstFour.concatenate(lastTwo)
  console.log(newArray)

}
nameArray([3,4,5,6,7,8,9,3])


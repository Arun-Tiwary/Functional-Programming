

const myArray = [1, 2, 3,77, 4, 10, 5, 6, 7, 8, 9, 3, 88, 1000];

// Higher Order Functions

// function which can tell a number is less than 10 or not


// const lestThanTen=(num)=>num<10?num:"";
// const passNumber= lestThanTen(55);
// console.log(passNumber);

// console.log(myArray.filter(lestThanTen));

// // return an object for each item in an array;

// console.log(myArray.map((arrayNum)=>{ return{arrayNum}}))

 
// // calculate sum for array of sum

// const arraySum=(num,sum)=>sum=sum+num;

// const getArraySum= myArray.reduce(arraySum,0)

// console.log(getArraySum);

                 // HOMEWORK QUESTIONS//////////////////

// sum of all odd numbers
const sumOfNumbers=(num,sum)=>sum=sum+num;

const filterdOddNumbersSum=myArray.filter((num)=>num%2!=0).reduce(sumOfNumbers,0)
console.log("filterdOddNumbersSum:",filterdOddNumbersSum);

// sum of even numbers
const filterEvenNumberSum=myArray.filter((num)=>num%2===0).reduce(sumOfNumbers,0);
console.log("filterEvenNumberSum:",filterEvenNumberSum);

// sum of all  numbers at odd indices.
const filterdOddIndicesSum=myArray.filter((num,idx)=>idx%2!=0).reduce(sumOfNumbers);
console.log("filterdOddIndicesSum:",filterdOddIndicesSum);

// BIGGEST NUMBER IN array

const biggestNumber=(num,big=0)=>num>big?num:big

const findBiggestNumber=myArray.reduce(biggestNumber,0)

console.log("findBiggestNumber:",findBiggestNumber);

// divisible by 10;
const numDivisibleByTen=(num)=>num%10===0;
console.log("numDivisibleByTen:",myArray.filter(numDivisibleByTen));

// odd number incremented by 1 and even decremented by 1
const oddEven=()=>myArray.map((num)=>num%2===0?num-1:num+1);
console.log("oddEven:",oddEven());

// obect of oddsum and evensum;
const sumOFOdddEven=()=>{
  const obj={
    oddsum:filterdOddNumbersSum,
    evensum:filterEvenNumberSum
  }
  return obj;
}
console.log("sumOFOdddEven:",sumOFOdddEven(myArray))

// ARRAYS AND OBJECTS USING STRING


const stringArr = [
  "z",
  "ok",
  "name",
  "place",
  "animal",
  "thing",
  "other",
  "four",
  "ascf"
];

// number of strings with similar no. of characters
 const obj={};
stringArr.map((item)=>
{
if(obj[item.length]){
   obj[item.length]=obj[item.length]+1;
}
else{
   obj[item.length]=1;
}
})

console.log("number of strings with similar no. of character:",obj);

// strings which have vowels

const vowels=['a','e','i','o','u'];
const handlers=str=>{
  const asplittedArray=str.split('');
  let found=false;
  asplittedArray.some(a => vowels.forEach(b => {if(a === b) {found=true} } ))
  return found;
}

const vowelFinder=(inputs) => {
  return resultArray = inputs.filter(item => {
    return handlers(item) === true;
  })
}

console.log("arraywithvowels",vowelFinder(stringArr))
// array of objects with key as item and value as number of characters

const object=(stringArr)=>{ 
  return {[stringArr]:stringArr.length}}


console.log(stringArr.map(object));


// The one Homework
const add = (num) => num + 1;

const subtract = (num) => num - 1;

const compose = (...args) => (n) => {
  return args.reduce(func, n);
};
const func = (num, calculate) => {
  return (num = calculate(num));
};

const getValue = compose(add, subtract);
console.log("reducefunctionValue:",getValue(5));
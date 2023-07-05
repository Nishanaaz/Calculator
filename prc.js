// let fact=(array)=>{
//     arr=[];
//     for(i=0;i<array.length;i++){
//         let k=1;
//         for (j=1;j<=array[i];j++){
//             k*=j
//     }arr.push(k);
// }
// console.log(arr);}
// fact([2,4,0,5,6]);


// let max=(array)=>{
//     arr=[];
//     for(i=0;i<array.length;i++){
//         let k=1;
//         for (j=1;j<=array[i];j++){
//             k*=j
//     }arr.push(k);
// }
// console.log(arr);}
// max([2,4,0,5,6]); 

// let maxNumber=(arr)=>{
//     k=Map(Math.max(arr));
//     return k;
// }
// console.log(maxNumber([2,4,0,5,6]));




// input=["apple","banana","grapes"];
// const result=input.map((str)=>{
//     return (str.length);
// });
// console.log(result);



//filter

// const number = [1, -2, 3, -4, 5, 6, 7,-8, 9, 10];

// const evenNumbers = number.filter((num) => num<0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]



//reduce
// const numbers = [1, 2, 3, 4, 5];

// const product= numbers.reduce((accumulator, currentValue) => accumulator*currentValue, 1);
// console.log(product);

// const numb = [1, 2, 3, 4, 5];

// const min= numb.reduce((accumulator, currentValue) => accumulator>currentValue, 99999);
// console.log(min);



//Objects:-->
// const students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 19 },
//     { name: "David", age: 16 },
//     { name: "Eve", age: 21 }                 
//   ];
// //   Q7 : Write a JavaScript function that takes an array of objects representing students, 
// //   filters out the students whose age is less than 18, and returns an array with the names of the remaining students

// const ages=students.filter((student)=>student.age<18)
// .map(student.name);

// const string=["name","cla","dd","dndj"];
// const result=string.map((str)=>{
//         str.filter(str.length>3);

// });
// console.log(result);


// const strings = ["name", "cla", "dd", "dndj"];
// const result = strings.filter((str) => str.length > 3).map(str).uppercase();
// console.log(result);

//concatenate using reduce,
// const array=["the", "man", "is", "playing"];
// const result=array.reduce((acc,curr) => acc+" "+curr);
// console.log(result)

const books = [
    { title: "The Great Gatsby", rating: 4.5 },
    { title: "To Kill a Mockingbird", rating: 4.8 },
    { title: "1984", rating: 3.9 },
    { title: "Pride and Prejudice", rating: 4.2 },
    { title: "The Catcher in the Rye", rating: 3.7 }
  ];
//   Q10 : Write a JavaScript function that 
//   takes an array of objects representing books, filters out the books with a rating less than 4, 
//   maps the remaining books to their titles, and returns an array of book titles.

const obj=books.filter(book=>book.rating<4).map(obj=>obj.title);
console.log(obj);
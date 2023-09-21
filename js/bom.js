// let testUrl ;

// function openWin(){
//     testUrl = window.open("https://www.facebook.com" , "" , "width=100 , height=100")
// }

// function closeWin ()  {
//     // testUrl.close(testUrl);
//     testUrl.close()
// }

// document.querySelector(".open").addEventListener("click", openWin);
// document.querySelector(".close").addEventListener("click" , closeWin)

// let myWindow;

// function openWin() {
//   myWindow = window.open("https://www.w3schools.com", "myWindow", "width=200, height=100");
// }

// function closeWin() {
//   myWindow.close();
// }

// document.querySelector(".open").addEventListener("click", openWin);
// document.querySelector(".close").addEventListener("click" , closeWin)

let btnOpen = document.querySelector(".open");
let btnClose = document.querySelector(".close");

let testUrl;

btnOpen.onclick = function () {
  testUrl = window.open(
    "https://www.w3schools.com",
    "title",
    "width=100 , height=100"
  );
};

btnClose.onclick = function () {
  testUrl.close();
};

function PrintParams(a, b) {
  //   console.log(a, b);
}

PrintParams(1, 4);

function Callsomething(thing = Something()) {
  return thing;
}

let numTimes = 1;

function Something() {
  numTimes += 1;
  return numTimes;
}

// console.log(Callsomething());
// console.log(Callsomething());

// function great(name , greating , message = greating + '' + name) {
//     return(name , greating , message)
// }

// console.log(great("ahmed", "hi "))

// let arr = [1, 2, 3]

// function add(x , y , z) {
//     console.log(x + y + z)
// }

// add(...arr)

// let obj = {
//     x: 1,
//     y: 2
// }

// let obj2 = {
//     ...obj,
//     z : 3
// }

// console.log(obj2)

// try  {
//     function test() {
//         console.log("test")
//     }

//     test()
// }

// catch (e) {
//     console.log(e)
// }

// let KvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// let reformate = KvArray.map((arr) => {
//     // console.log(arr);
//   let newArr = {};

//     newArr[arr.key] = arr.value;
//     return arr
// });

// console.log(reformate)

let arrString = ["html", "css", "js", "jQuery", "bootstrab"];
let NewArrString = arrString.filter((result) => {
  return result.length > 3;
});

console.log(NewArrString);

let fruits = ["apple", "banana", "mango", "orange", "graps"];

function filterItem(arr, query) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}

console.log(filterItem(fruits, "an"));
console.log(filterItem(fruits, "ap"));

let numArr = [1, 2, 3];

let NewNumArr = numArr.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    // return accumulator // tebd2 b2wl rakam || tebd2 b initial num (0)
    // return currentValue // 3adad el array
    // return currentIndex // tebd2 mn awel index 0
    // return array // terg3 el array tany
    return accumulator + currentValue + currentIndex;
  },
  0
);

// NewNumArr()
console.log(NewNumArr);

let Flatend = [
  [0, 1],
  [2, 3],
  [4, 5],
];

let fla = Flatend.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(fla);

let friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },

  {
    name: "Bob",
    books: ["War and peace", "romeo and juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["the lord of the king", "The Shining"],
    age: 18,
  },
];

let AllBooks = friends.reduce((accumulator, currentValue) => {
  return [...accumulator , ...currentValue.books]
}, ["Alphabet"])

console.log(AllBooks)

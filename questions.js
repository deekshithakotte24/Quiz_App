const quizArr = [
    {
      id: 1,
      question: "What is the correct way to write a JavaScript array?",
      options: {
        A: "var colors = 'red', 'green', 'blue';",
        B: "var colors = ['red', 'green', 'blue']",
        C: "var colors = (1:'red', 2:'green', 3:'blue');",
        D: "var colors = 'red' + 'green' + 'blue';",
      },
      answer: "B", 
    },
    {
      id: 2,
      question: "const clothes=['jacket','t-shirt']; clothes.length=0;console.log(clothes[0])?",
    //   "What is the correct way to write a JavaScript object?",
      options: {
        // A: "var person = 'John', 'Doe', 25;",
        // B: "var person = ('John', 'Doe', 25);",
        // C: "var person = {firstName:'John', lastName:'Doe', age:25};",
        // D: "var person = 'firstName:John, lastName:Doe, age:25';",
        A:"clothes",
        B:"tishirt",
        C:"error",
        D:"undefined"
      },
      answer: "D",
    },
    {
      id: 3,
      question: "How do you round the number 7.25, to the nearest integer?",
      options: {
        A: "Math.round(7.25)",
        B: "round(7.25)",
        C: "rnd(7.25)",
        D: "math.rnd(7.25)",
      },
      answer: "A",
    },
    {
      id: 4,
      question: "console.log(5+'5'); console.log(5-'5')?",
    //   "How do you find the length of a string in JavaScript?",
      options: {
        A:"10 0",
        // "length(myString)",
        B: "55 0",
        // "myString.length()",
        C: "55 Nan",
        // "myString.length",
        D:"NaN NaN",
        //  "str.length(myString)",
      },
      answer: "B",
    },
    {
      id: 5,
      question: "How do you create a function in JavaScript?",
      options: {
        A: "function:myFunction()",
        B: "new.function(myFunction)",
        C: "function myFunction()",
        D: "create.function(myFunction)",
      },
      answer: "C",
    },
    {
      id: 6,
      question: "console.log(2+2%3)?",
        // "What is the correct way to concatenate two strings in JavaScript?",
      options: {
        // A: "myString1 + myString2",
        // B: "myString1.concat(myString2)",
        // C: "myString1 && myString2",
        // D: "myString1.join(myString2)",
        A: "0",
        B: "2",
        C: "4",
        D: "6",
      },
      answer: "C",
    },
    {
      id: 7,
      question: "const a=[1,2,3]; const b=a.slice(0,2).push(4); console.log(b);?",
      options: {
        A:"[1,2,4]",
        B:"3",
        C:"[2,3,4]",
        D:"4"
      },
      answer: "B",
    },
    {
      id: 8,
      question: "What is the correct way to create a loop in JavaScript?",
      options: {
        A: "for (i = 0; i < 5; i++)",
        B: "for i = 1 to 5",
        C: "while (i < 5)",
        D: "loop i = 1 to 5",
      },
      answer: "A",
    },
    {
      id:9,
      question:"let a=NaN; let b=NaN; console.log(a==b); console.log(a===b)?",
      options: {
        A:"true,true",
        B:"false,false",
        C:"true,false",
        D:"false,true",
      }, 
      answer:"B",
    },
     {
      id: 10,
      question: "What is the difference between null and undefined?",
      options: {
        A: "null and undefined are same",
        B: "null is an assignment value and undefined is a default value",
        C: "undefined is an assignment value and null is a default value",
        D: "null is an object and undefined is not an object",
      },
      answer: "B",
    },
  ];











    // {
    //   id: 9,
    //   question:
    //     "What is the correct way to declare a variable using the let keyword?",
    //   options: {
    //     A: "let myVariable = 'hello';",
    //     B: "var myVariable = 'hello';",
    //     C: "const myVariable = 'hello';",
    //     D: "new myVariable = 'hello';",
    //   },
    //   answer: "A",
    // },
    // {
    //   id: 10,
    //   question: "What is the difference between let and var?",
    //   options: {
    //     A: "let and var are same",
    //     B: "let has block scope and var has function scope",
    //     C: "var has block scope and let has function scope",
    //     D: "let is used to declare constant and var is used to declare variable",
    //   },
    //   answer: "B",
    // },
    // {
    //   id: 11,
    //   question: "What is the correct way to create a closure in JavaScript?",
    //   options: {
    //     A: "function myFunction(){var x = 10; return function(){return x}}",
    //     B: "function myFunction(){let x = 10; return function(){return x}}",
    //     C: "function myFunction(){const x = 10; return function(){return x}}",
    //     D: "function myFunction(){x = 10; return function(){return x}}",
    //   },
    //   answer: "A",
    // },
    // {
    //   id: 12,
    //   question: "What is the difference between == and ===?",
    //   options: {
    //     A: "== checks for equality and === checks for identity",
    //     B: "== checks for identity and === checks for equality",
    //     C: "== and === checks for equality",
    //     D: "== and === checks for identity",
    //   },
    //   answer: "A",
    // },
    // {
    //   id: 13,
    //   question: "What is the correct way to check if a variable is an array?",
    //   options: {
    //     A: "Array.isArray(myArray)",
    //     B: "myArray instanceof Array",
    //     C: "myArray.isArray()",
    //     D: "typeof myArray === 'array'",
    //   },
    //   answer: "A",
    // },
    // {
    //   id: 14,
    //   question: "What is the correct way to declare a class in javascript?",
    //   options: {
    //     A: "class MyClass{}",
    //     B: "function MyClass(){}",
    //     C: "new MyClass(){}",
    //     D: "MyClass: function(){}",
    //   },
    //   answer: "A",
    // },
    // {
    //   id: 15,
    //   question: "What is the correct way to check if a variable is undefined?",
    //   options: {
    //     A: "typeof myVariable === undefined",
    //     B: "myVariable === undefined",
    //     C: "myVariable == undefined",
    //     D: "myVariable === 'undefined'",
    //   },
    //   answer: "B",
    // },
    // {
    //   id: 16,
    //   question:
    //     "What is the correct way to convert a string to a number in javascript?",
    //   options: {
    //     A: "parseInt(string)",
    //     B: "parseFloat(string)",
    //     C: "Number(string)",
    //     D: "string - 0",
    //   },
    //   answer: "C",
    // },
    // {
    //   id: 17,
    //   question: "What is the correct way to declare a Map in javascript?",
    //   options: {
    //     A: "var myMap = new Map();",
    //     B: "var myMap = {};",
    //     C: "var myMap = Object.create(null);",
    //     D: "var myMap = new Object.create(null);",
    //   },
    //   answer: "A",
    // },
    // {
    //   id: 18,
    //   question: "What is the difference between null and undefined?",
    //   options: {
    //     A: "null and undefined are same",
    //     B: "null is an assignment value and undefined is a default value",
    //     C: "undefined is an assignment value and null is a default value",
    //     D: "null is an object and undefined is not an object",
    //   },
    //   answer: "B",
    // },
    // {
    //   id: 19,
    //   question:
    //     "What is the correct way to check if a variable is a number in javascript?",
    //   options: {
    //     A: "typeof myVariable === 'number'",
    //     B: "isNaN(myVariable)",
    //     C: "myVariable instanceof Number",
    //     D: "Number.isFinite(myVariable)",
    //   },
    //   answer: "D",
    // },
    // {
    //   id: 20,
    //   question:
    //     "What is the correct way to check if a variable is an object in javascript?",
    //   options: {
    //     A: "typeof myVariable === 'object'",
    //     B: "myVariable instanceof Object",
    //     C: "Object.isObject(myVariable)",
    //     D: "myVariable.constructor === Object",
    //   },
    //   answer: "D",
    // },
 



//   Question 8: What is the purpose of the setTimeout() function in JavaScript?
// A) To set the text of an element
// B) To execute a function after a specified delay
// C) To change the color of an element
// D) To create a new object
// Answer: B) To execute a function after a specified delay
// Question 10: What does the addEventListener() method do in JavaScript?
// A) Adds a new element to the page
// B) Adds a click event to an element
// C) Changes the page's background color
// D) Removes an element from the page
// Answer: B) Adds a click event to an element
// Question 13: What is the result of the expression 5 + "5" in JavaScript?
// A) "55"
// B) 10
// C) "10"
// D) 55
// Answer: A)"55"

// Question 24: What does the Math.random() function return in JavaScript?
// A) A random integer
// B) A random boolean value
// C) A random floating-point number between 0 (inclusive) and 1 (exclusive)
// D) A random string
// Answer: C) A random floating-point number between 0 (inclusive) and 1 (exclusive)

// Question 17: How can you convert a string to an integer in JavaScript?
// A) parseInt()
// B) toInt()
// C) convertToInt()
// D) strToNum()
// Answer: A) parseInt()

// Question 16: Which method is used to remove the last element from an array in JavaScript?
// A) slice()
// B) remove()
// C) pop()
// D) delete()
// Answer: C) pop()
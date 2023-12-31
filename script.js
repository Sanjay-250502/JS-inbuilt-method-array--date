//get method==>toDateString()
var a = new Date(); //date object
console.log(a);  //Mon Aug 14 2023 21:39:35 GMT+0530 (India Standard Time)
console.log(a.toDateString()); //Mon Aug 14 2023

// ===>getDate() :- Returns the day of the month (1 to 31) of the date.
var a = new Date();
console.log(a.getDate()); //14

//===>getFullYear() :- REturn the full year(4 digits)of a date.
var a = new Date();
console.log(a.getFullYear())  //2023

//===>getMonth() :- Return the month(1 to 12)of a date.
var a = new Date();
console.log(a.getMonth()); //7


// ===>getDay() :- Return the day of the week(0 to 6)of a date.
// ===>getHours() :- Return the hrs(0 to 23)of a date.
// ===>getMinutes() :- Return the minutes(0 to 59)of a date.
// ===>getSeconds() :- Return the seconds(0 to 59)of a date.
// ===>getMilliseconds()  :- Return the milliseconds (0 to 999)of a date
// ===>getTime()  :- Return the number of milliseconds since jan 1.
var a = new Date();
console.log(a.getDay());  //1
console.log(a.getHours());  //22
console.log(a.getMinutes());  //8
console.log(a.getSeconds());  //14
console.log(a.getMilliseconds());    //909
console.log(a.getTime());   //1692031122482


// =>JavaScript Date Set method-8type:-
// ===>setDate():- sets the day of the month of a date.
// ===>setFullYear():- sets the full year of a date and also sets the month and day.
// ===>setHours():- sets the hour of the date also sets minutes, seconds, and milliseconds.
// ===>setMilliseconds():- sets the milliseconds of a date.
// ===>setMinutes():- sets the minutes of a date also sets seconds and milliseconds.
// ===>setSeconds():- sets the seconds of a date also sets milliseconds.
// ===>setMonth():-  sets the month of a date also sets day of the month.
// ===>setTime():- sets a date and time by adding or subtracting a specified number of milliseconds(to/from mid of jan 1 1990)

var a = new Date();
a.setDate(14);
console.log(a);  // Mon Aug 14 2023 22:57:07 GMT+0530 (India Standard Time)

a.setFullYear(2023,3,26)
console.log(a);  //Wed Apr 26 2023 22:58:52 GMT+0530 (India Standard Time)

a.setHours(8);
console.log(a);  //Wed Apr 26 2023 22:58:52 GMT+0530 (India Standard Time)

a.setMinutes(45);
console.log(a);   //Mon Aug 14 2023 23:45:03 GMT+0530 (India Standard Time)

a.setSeconds(55);
console.log(a);    //Mon Aug 14 2023 23:04:55 GMT+0530 (India Standard Time)

a.setMilliseconds(900);
console.log(a);        //Mon Aug 14 2023 23:05:26 GMT+0530 (India Standard Time)

a.setMonth(6);
console.log(a);       // Fri Jul 14 2023 23:05:46 GMT+0530 (India Standard Time)

a.setTime(1690437220346);
console.log(a);          //Thu Jul 27 2023 11:23:40 GMT+0530 (India Standard Time)



//Java script Array methods:-
//toString()
var arr = [1,2,3];
console.log(arr.toString());  //1,2,3

//join()
var arr = [1,2,3];
console.log(arr.join("*"))   //1*2*3

//push()
var a = ["a","b","c"];
console.log(a.push("z"));    //["a","b","c","z"]
console.log(a);

//pop()
console.log(a.pop());        //["a","b","c"]
console.log(a);

//unshift()
console.log(a.unshift("x"));  //["x","a","b","c"]
console.log(a);

//shift()
console.log(a.shift());       //["a","b","c"]
console.log(a);

//concat()
var a = [1,2] , b = ["a","b"] , c = ["x"];
var concatarray = a.concat(b,c);
console.log(concatarray);        //[1, 2, 'a', 'b', 'x']

//sort()
var a = [8,5,2,9] , b = ["x","b","f","a"];
console.log(a.sort());                          //[2, 5, 8, 9]
console.log(b.sort());                          //['a', 'b', 'f', 'x']

//splice(index,count,element1,...)
var arr = ["a","b","c","d"];
console.log(arr.splice(1,2,"x"));   //['b','c']
console.log(arr);                   // ['a', 'x', 'd'

//slice(start,end)
var abc = [11,22,33,44,55];
var slicearr = abc.slice(2,4);
console.log(abc);                     //[11,22,33,44,55]
console.log(slicearr);                //["33","44"] ===>New array

//reverse
var a = ["a","b", "mern"];
var b = [1,2,3,4,5];
var c = ["sanjay"]
console.log(a.reverse());         //["mern","b","a"]
console.log(b.reverse());         //[5, 4, 3, 2, 1]
console.log(c.reverse());         //["sanjay"]

//includes
var a = [1,2,3,"abc"];
console.log(a.includes(2));          //true
console.log(a.includes("abc"));      //true
console.log(a.includes(25));         //false

//********************************************************************************************************** */

//find()
//===>syntax :- arrayname.find(function(value));
var fruits = ["apple", "banana", "orange", "cherries", "mango"]
var result = fruits.find(function(value){
    return value === "cherries";
});
console.log(result);                         //cherries
console.log(fruits);                         //["apple", "banana", "orange", "cherries", "mango"]
// console.log(fruits.find("apple"));           //suntax error:apple is not a function.

var fruits = ["apple", "banana", "orange", "cherries", "mango"]
var result = fruits.find(function(value){
    return value === "watermelon";
});
console.log(result);                            //undefined

// findIndex()
// syntax :- arrayname.findIndex(function(value));
var arr = [1,4,24,56,88,2];
var result = arr.findIndex(function(value){
    return value === 24;
});
console.log(result);                     //2

var arr = [1,4,24,56,88,2];
var findInd = arr.findIndex(function(value){
    return value>40;
});
console.log("findIndex-->"+findInd);                 //3
console.log(findInd);                                //3

//entries()
//syntax:- entries()
var a = ["a","b","c"];
var b = a.entries();
console.log(b);                    //Array Iterator {}
console.log(b.next().value);       //[0, 'a']
console.log(b.next().value);       //[1, 'b']
console.log(b.next().value);       //[2, 'c']


//indexOf() ==>This method returns the first index at which given element can be found in the array, or it will print (-1),if the given element is not found.
// syntax:- indexOf(search element, fromIndex)
var flowers = ["rose", "lily", "jasmine", "rose"];
console.log(flowers.indexOf("rose"));       //0
console.log(flowers.indexOf("jasmine"));    //2
console.log(flowers.indexOf("lotus"));      //-1
console.log(flowers.indexOf("rose",2))       //3


// lastIndexOf() ==>This method returns the last index at which given element can be found in the array, or it will print (-1),if the given element is not found.
// syntax:- lastIndexOf(search element)
// syntax:- lastIndexOf(search Element,fromIndex)
 var flowers = ["rose", "lily", "jasmine", "rose"];
 console.log(flowers.lastIndexOf("rose"));     //3  
 console.log(flowers.lastIndexOf("jasmine"));  //2  
 console.log(flowers.lastIndexOf("lotus"));    //-1  
 console.log(flowers.lastIndexOf("rose",2))    // 0 

// isArray() ==>we use only let or const dont use var.It print only boolean value.whether the value inside this method is array or not.
// syntax:- Array.isArray(variableName);
 let name = ["sanjay", "ram", "ivar", "no one"]
 let number = 1234;
 let string = "computer";
 var result = Array.isArray(name);
 console.log(result);                      //true
 console.log(Array.isArray(name));         //true
 console.log(Array.isArray(number));       //false
 console.log(Array.isArray(string));       //false

// every()
// syntax:- 
 var a = (numbers) => numbers < 40;
 var arr = [1, 30, 39, 29, 10, 13];
 console.log(arr.every(a));               //true

 var a = (numbers) => numbers > 6;
 var arr = [1,2,3,4,5];
 console.log(arr.every(a));               //false

 //fill() ===> it fills specified element in an array with a value. 
 //syntax:- arrayname.fill(value);
 var a = [1,2,3,4,5];
 console.log(a.fill("a"));           //Array(5) [ "a", "a", "a", "a", "a" ]
 console.log(a);                     //Array(5) [ "a", "a", "a", "a", "a" ]

 var b = [1,2,3,4,5,6,7,8,9,10];
 console.log(b.fill("a",2,9));       //Array(10) [ 1, 2, "a", "a", "a", "a", "a", "a", "a", 10 ]
 console.log(b);                     //Array(10) [ 1, 2, "a", "a", "a", "a", "a", "a", "a", 10 ]   

//valueOf()===> The valueOf() method returns the array itself. ===>The valueOf() method doesnt cgange the original array.
 var a = ["banana","orange","apple","mango"];
 console.log(a.valueOf());             //Array(4) [ "banana", "orange", "apple", "mango" ]
 console.log(a.valueOf(2));            //Array(4) [ "banana", "orange", "apple", "mango" ]
 
//copyWithin()
//syntax:- arrayname.copywithin(target,start,end);
//syntax:- arrayname.copywithin(target,start);  
var arr = ['a','b','c','d','e','f','g'];
console.log(arr.copyWithin(1,3,5));                 //Array(7) [ "a", "d", "e", "d", "e", "f", "g" ]
var arr1 = ['a','b','c','d','e','f','g'];
console.log(arr1.copyWithin(0,2));                  //Array(7) [ "c", "d", "e", "f", "g", "f", "g" ]

//flat()
//1. It creates an new array by concatenate sub array or nested array upto a specified depth. 
//2. default depth is 1,[array.flat()];
//3. It also removes the empty space in specified depth.
//syntax:- array.flat(depth);
var a = [1,2,[3,4,5,[6,[7],[8],9,],10,11],12,[13,[14,15]],16,17,18];
console.log(a.flat());
var b = a.flat(1);
console.log(b);
var c = a.flat(2);
console.log(c);
var d = a.flat(3);
console.log(d);
var e = a.flat(Infinity);
console.log(e)
console.log(a);
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



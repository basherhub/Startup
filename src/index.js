"use strict" //We leave in ES6 world

// intro to JS
// var a = 5;
// var b = "salam";

// var human = {
//   height: 170,
//   weight: "500kg",
//   children: [ "ali", "mamad", 23 ],
//   humanInside: {
//     height: 180
//   }
// }

// console.log( power2(12) );
// console.log( a );

// function power2( par1 ) {
//   var a = par1 * par1;
//   return a;
// }



// Intro to ES6 -> let operator
// var counter = 8;

// for (let counter = 10; counter > 0; counter--) {
//   console.log(counter);
// }
// console.log(counter);

// more Objects
// var sag = {
//   type: "Ahli",
//   name: "sag",
//   sound: function() {
//     console.log("hop hop");
//   }
// }

// functions have values
// var sagSound = sag.sound;

// new function decleration
// var dogCreator = function(type, sound) {
//   var returnValue = {
//     name: "sag",
//     type: type,
//     sound: sound
//   }
//   return returnValue;
// }

// var mySound = function(){
//   console.log("hapo hapo");
// }

// var dogi = dogCreator("vahshi", mySound);
// dogi.sound()


// functions are objects
// var functionIsObject = function() {
//   console.log("salam");
// }

// console.log(functionIsObject);  


// Objects are soooo dynamic
// var obj = {
//   a: "slam",
//   b: 809
// }
// obj.c = "aleik";
// console.log(obj.c);

// var func = function() {
//   var a = 7;
// }
// func.a = 5;
// console.log(func.a);

// Global Object
// console.log( Date() );
// console.log(Math.random());

// start using DOM
// document.body.style.background = "black";

// // createElement
// var text = document.createElement("div");
// text.innerHTML = "click me!";
// text.style.color = "red";
// text.style.lineHeight = "65px";

// // getElementById
// var myBtn = document.getElementById("btn1");

// // appendChild
// myBtn.appendChild(text);

// events in DOM
// var sayHi = function() {
//   console.log("salam");
// }

// myBtn.addEventListener("click", sayHi);

 
// var addNumber =function () {
//     var y = document.getElementById("myBtn");
//     var z = document.getElementById("myBtn");
//     var x = y + z;
//     var text = document.getElementById("myBtn");
// 		text.innerHTML = "1000$";
// 		text.style.color = "red";
// 		text.style.lineHeight = "65px";
// }

// Closure
// var number = 1000;
// var sayNumber = function() {
//   console.log(number);
// }

// var addNumber = function(){
// 	a = number + 200;
// 	console.log(a);
// }

// myBtn.addEventListener("click", sayNumber);        // addNumber

// getElementById
var myBtn = document.getElementById("btn1");

var numberEl = document.createElement("div");
numberEl.innerHTML = "1000$";
numberEl.style.color = "white";
numberEl.style.lineHeight = "65px";

myBtn.appendChild(numberEl);

var number = 1000;

var sayNumber = function() {
	numberEl.innerHTML = number + "$";
	console.log( number );
	number = number + 1000;
  if(number > 10 * 1000) {
    clearInterval(interValDeleter);
  }
}

var interValDeleter = setInterval(sayNumber, 1000);

myBtn.addEventListener("click", sayNumber);





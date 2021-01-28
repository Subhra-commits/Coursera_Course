// var m;
// console.log(m);

// if(m == undefined){
// 	console.log("m is undefined");
// }

// m="This is my first test";
// if (m==undefined) {
// 	console.log("m is undefined");
// } 
// else {
// 	console.log("m = "+m);
// }

// var x;
// console.log(5*2);

// Object Creation
//-----------------------------------------------------------
// Using Object() keyword.
// var company = new Object();
// company.name="facebook";
// company.ceo = new Object();
// company.ceo.name = "Mark Zukerbarg";
// company.ceo.favcolor="Blue";

// console.log(company["name"]);
// console.log(company.ceo);

// // Using Object literal
// var company = {
// 	name: "facebook",
// 	ceo:{
// 		name:"Mark Zukerbarg",
// 		favcolor: "Blue"
// 	},
// 	"stock of share": 110
// };

// console.log(company);
//-----------------------------------------------------------

// // Function factory
// //-----------------------------------------------------------
// function makeMultiplier(m){
// 	var myFunc = function(x){
// 		return m*x;
// 	}
// 	return myFunc;
// }
// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var makeDouble = makeMultiplier(2);
// console.log(makeDouble(10));
// // //------------------------------------------------------------

// //Passing Functions as arguments
// function doOperation(x,op){
// 	return op(x);
// }
// console.log(doOperation(10,multiplyBy3));
// console.log(doOperation(10,makeDouble));
// //---------------------------------------------------------------

// // Passing values inside functions
// //------------------------------------------------------------------
// function changeprim(primValue){
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue=7;
// 	console.log("After: "+primValue);
// }
// var value = 5;
// changeprim(value);
// console.log("original value: "+value);
// ------------------------------------------------------------------

// // Passing values inside functions
// //------------------------------------------------------------------
// function changeprim(primValue){
// 	console.log("before: "+primValue.x);
// 	primValue.x=7;
// 	console.log("After: "+primValue.x);
// }
// var value = {x:5};
// changeprim(value);
// console.log("original value: "+value.x);
// // -------------------------------------------------------------------

// //Function Constructor, prototypes and "this" keyword
//----------------------------------------------------------------------
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy"); // The second argument is not used in the function but it's perfectly legal to pass it in.
// max.bark();
// //-------------------------------------------------------------------------

// //Array as object output
// //------------------------------------------------------------------------
// var array=["subhra",2,{std:"MSc 2ndyr"}];
// // for(var i in array){
// // 	console.log("Element "+i+" : "+array[i]);
// // }
// array.greet="hi";
// for(var i in array){
// 	console.log("Element "+i+" : "+array[i]); //Here "i" acts as the property name

// for(var i=0; i< array.length; i++){
// 	console.log("Element "+i+" : "+array[i]); //Here "i" acts as array index
// } //That's why "hi" is not printed here				
// //------------------------------------------------------------------------------------

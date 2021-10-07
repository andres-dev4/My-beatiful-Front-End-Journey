// What’s the result of executing this code and why.
// Response: 
/**
 * The var "a" will print "1" the reason is for the hoisting,
 * Is the same case for foo() when the compile make their double check find the function. 
 * 
 * */
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// What is result?
// Response: the var "a" will equal to 5, the reason y for the scope, inside of function the value of "a" is overwrite, like the 1'st 
// Example el hoisting goes into action, the number 9 and 2 don't do something chamge because the params the function never take.  
var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

// What is the result of the following code? Explain your answer.
// Response: the 1st console "Aurelio de la rosa", the reason is simple, in these line we acces to function "getFullname,"
/**           and with there word "this" the propierto looking for the 1rs parameter outside of their scope. 
 * 
 * whit the var "test" just Access at their definition of function, is the reason by which it takes full name: "John Doe", when in invocate
 * on the console.log 
 * 
 */
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

// What will you see in the console for the following example?
// Response: at the beginner I thought what is clousere, but i was trying pay attention and i can get two stuff, 
/**
 * the function b, it's wrong because never arrive at the function "a()" 
 * the intern function "a()" is empty and don´t return absolutely nothing
 */
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);    
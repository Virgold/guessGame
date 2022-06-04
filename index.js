// let num1 = parseInt(prompt('Enter first number'));
// let num2 = parseInt(prompt('Enter second number'));
// let operator = prompt('What operation do you wish to perform?');
// function Calc(num1,num2,operator){
//   if (operator == '+'){
//     return num1 + num2;
//   }
//   else if(operator == '-'){
//     return num1 - num2;
//   }
//     else if(operator == '/'){
//     return num1 / num2;
//   }
//   else if(operator == '*'){
//     return num1 * num2;
//   }
//   else {
//       while(operator != '-'){
//          prompt('Input a valid operator');
//       } 
//   }
// }

// console.log(Calc(num1,num2,operator));

// const circle = {
//   raduis: 1,
//   location:{
//     x:1,
//     y:1,
//   },
//   draw: function(){
//     console.log('raw');
//   }
// };

// circle.draw();

// Factory functions 
function createCircle(raduis){
 return (
          this.me   = raduis
   )
};


const circle = createCircle(8);
console.log(circle);

// const circle = createCircle(1)
//   // circle.draw();

// // constructor function
// function Circle(radius){
//   this.radius = 'radius'
//   this.draw = function draw(){
//     console.log('raw')
//   }
// }
// const another = new Circle(1);

// function vehicles(model,make){
//   return{
//     model,
//     make,
//   }
// } 

// const myVehicle = vehicles('Lexus',360);
// console.log(myVehicle);
// var obj = {
//   name: "john",
//   surname: "smith",
//   fn: () => {
//     console.log((this.surname));
//                     }
// };
// // console.log(obj);

// function fn() {
//   let name = "Max";
//   console.log(this);
//                   }

// // let func1 = fn(name);
// obj.fn();
// // func1();

// var bnt = document.querySelector("button");
// var fn2 = () => console.log(this);

// function fn() {
//   console.log(this);
// }
// bnt.addEventListener('click', fn2);

// function isEqualTo(number, compare){

//   return number == compare;

// }
// console.log(isEqualTo(10));


// let name = "Anna";
// let age = 25;

// let ageField = "age";

// let obj = {
//   name: "Max",
//   [ageField]: 28,
// 'greet'() {
//   console.log(this.name + ', ' + this.age);
// }
// };
// console.log(obj[ageField]);
// let numbers = [1,2,3,4,5];
// function sumUp(...toAdd) {
//   let result = 0;
//   for (let i = 0; i < toAdd.length; i++) {
// result += toAdd[i];    
//   }
//   return result;
// }
// console.log(sumUp(100, 10, "20"));

const a = {
  a: 'a'
};
const obj = {
  getThis: () => this,
  getThis2 () {
    return this;
  }
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);
const answers = [
  obj.getThis(),
  obj.getThis.call(a),
  obj.getThis2(),
  obj.getThis2.call(a),
  obj.getThis3(),
  obj.getThis3.call(a),
  obj.getThis4(),
  obj.getThis4.call(a)
];
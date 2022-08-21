let obj = {age:23}

  let a = function (b,c,d) {
    return this.age + b +c +d;
  }
//  Question 1
 console.log(a.call(obj, 45,73,2));

 let array=[45,73,2]
//  Question 2
 console.log(a.apply(obj, array))
//  Question 3
 let d = a.bind(obj)
 console.log(d(45,73,2))
// Question 4
 let Student={age:20}

 let ageprint = function age() {
       return this.age
 }

let e = ageprint.bind(Student)
console.log(e())

//  Currying

let multiply = function (x,y) {
    console.log(x*y)
}

let multiplyby2 = multiply.bind(this, 2)
multiplyby2(6)

let multiply1 = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

let multiplyby3 = multiply1(5)
multiplyby3(4)
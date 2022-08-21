//  1 & 2 type of usages with example
// In Global scope
this.mobile = 'iphone 6s'
console.log(mobile)
console.log(window.mobile)
console.log(this.mobile)

// Inside an object
this.mobileshop={
    mobile:'iphone 6s'
}
console.log(this.mobileshop.mobile)

// Inside an object with method
let mobileshop = {
    mobile:'Iphone 6s',
    costofmobile () {
        console.log(`${this.mobile} comes at a price of 35,000 `)
    }
}
mobileshop.costofmobile();

// Inside a function

this.mobile = 'iphone 6s'

function mobilewarranty() {
    console.log(`${this.mobile} comes with a warranty of 1 year`)
}
mobilewarranty()

//  nested function

this.mobile = 'iphone 6s'

function cost(cost) {
    const warranty = (warranty) => {
        console.log(`${this.mobile} comes with ${cost} and ${warranty} year of warranty`)
    }

   warranty(1)
    }
    cost(35000)

    // as a constructor 

    let mobile1 = function (name) {
        this.name = `The mobile is ${name}`
    }

    let mob1 = new mobile1('iphone 6s')
    console.log(mob1.name)

    // In class
    class mobilemarket{
        constructor(name){
            this.name =  name;
        }

        printprice(price) {
            console.log(`${this.name} mobile comes for ${price}`)
        }
    }

    let newmob = new mobilemarket('iphone 6s')
    newmob.printprice(38000)






     // 3 Design pattern
     class Student{

        static count = 0;
        constructor(name,age,number,marks) {
            this.name =  name;
            this.age = age;
            this.number= number;
            this.marks=marks;
        }
        
        static countStudent() {
           
            return (Student.count++);
        }

        checkEligibility() {
            if(this.marks > 40) {
                console.log(`${this.name} is eligible for college`)
            } if(this.marks < 40){
                console.log(`${this.name} is not eligible for college`)
            }
        }

        eligibleForPlacement(min_marks) {
           
            return (min_age) => {
                
                if(this.marks > min_marks && this.age > min_age) {
                     
                    console.log(this.name,'is eligible for placements.');
                }
               
            
            }
            
        
            
        }
    }

    let student1 = new Student('AK',23,12345,45)
    let student2 = new Student('CD',24,12545,55)
    let student3 = new Student('EF',18,12745,35)
    let student4 = new Student('GH',17,18345,65)
    let student5 = new Student('IJ',21,92345,75)

    console.log(Student.countStudent());

    student1.checkEligibility()
    student2.checkEligibility()
    student3.checkEligibility()
    student4.checkEligibility()
    student5.checkEligibility()
  student1.eligibleForPlacement(50)(18)
  student2.eligibleForPlacement(50)(18)
  student3.eligibleForPlacement(50)(18)
  student4.eligibleForPlacement(50)(18)
  student5.eligibleForPlacement(50)(18)



  // Fat arrow function Q1

// let getA = (a) => a
// console.log(getA(2))

// let square = (a) => {return a*a};
// console.log(square(5))

// let a = 25

// let cube = () =>  {return a**3}
// console.log(cube())

// let x = function() {
//     this.val = 1;
//     setTimeout(() =>{
//         this.val++;
//         console.log(this.val)
//     },5000)
// }
// let y=new x();
// // to pass arguments

// let z = (...n) => {
//     console.log(n[2])
// }
// z(1,2,3)


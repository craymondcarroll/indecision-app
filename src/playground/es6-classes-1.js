//

class Person {


    constructor(name ='Anonymous', age = 0) {
         this.name = name;
         this.age = age;
    }


    getGreeting() {
        //return this.name;
        return `Hi. I am  ${this.name} and I am ${this.age}`;
    }


    getDescription() {
        //return this.name;
        return `Hi. I am  ${this.name} and I am ${this.age}`;
    }


}

class Student extends Person {

    constructor(name,age,major = "nothing") {
      super(name,age);
      this.major=major;
    }


   hasMajor() {
        return !!this.major;
   }


    getDescription() {
         let description = super.getDescription();
         //return `Hi. I am  ${this.name} and I am ${this.age}`;
         return super.getDescription() + `my major is ${this.major}`;
    }


}



const me = new Student("Raymond",50,'csm');
console.log(me.getDescription());

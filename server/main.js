//import './../imports/utils';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
  let obj = {
    name: 'Errold',
    printName() {
      console.log(`Name: ${this.name}`);
    }
};
    setTimeout(obj.printName.bind(obj),1000);

//   class Person {
//     // sets argument default
//     constructor(name = 'Anonymous', age = '15') {
//       this.name = name;
//       this.age = age;
//     }
//     getGreeting() {
//       return `Hi! I am ${this.name}`;
//     }
//     getPersonDescription() {
//       return `${this.name} is ${this.age} years old.`;
//     }
//   }
//
// class Employee extends Person {
//     constructor(name,age,title){
//       super(name,age);
//       this.title = title;
//     }
//     getGreeting() {
//       if (this.title) {
//         return `Hi! I am ${this.name} and I am a(n) ${this.title}.`;
//       }
//       else {
//         return super.getGreeting();
//       }
//     }
//     hasJob() {
//       return !!this.title;
//     }
// }
//
// class Programmer extends Person {
//     constructor(name,age,preferredLanguage = 'Assembly'){
//       super(name,age);
//       this.preferredLanguage = preferredLanguage;
//     }
//     getGreeting() {
//         return `Hi! I am ${this.name}. I am a(n) ${this.preferredLanguage} developer.`;
//     }
//
// }
//
//   let errold = new Programmer();
//   console.log(errold.getGreeting());
});

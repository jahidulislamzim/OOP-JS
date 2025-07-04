// What is Object ?
// Answer: An object in JavaScript is a collection of data. It stores information in key-value pairs.


// Creating Object using object literal
const person = {
    full_name: "Zim",
    age : 23,
    city: "Dhaka",
    isBangladeshi: true,
    greeting : () =>{
        console.log("Hello" + full_name + "!");
    } 
}


// Creating Object using instance 

let human =new Object();

human.full_name = "Zim",
human["age"] = 34;
human.city = "Bangladesh";
human.isBangladeshi = true;

// Accessing Object
console.log(person); // print full object 
console.log(human);

// 1. Using Dot Notation
console.log(person.age); // print age

// 2. Using Bracket Notation 
console.log(person["city"]); // print city



// Creating Object using Object constructor

function Person() {
    this.full_name = "Zim";
    this.age = 23;
    this.city = "Dhaka";
    this.isBangladeshi = true;

    // 1. Anonymous Function (assigned to a property)
    this.anonymousFunc = function() {
        console.log("Anonymous Function: Hello from " + this.full_name);
    };

    // 2. Named Function (assigned to a property)
    this.namedFunc = function namedGreeting() {
        console.log("Named Function: Hello, I am " + this.full_name);
    };

    // 3. Arrow Function (Note: 'this' does NOT refer to the object)
    this.arrowFunc = () => {
        console.log("Arrow Function: Hi from " + this.full_name); // 'this' refers to lexical scope
    };

};


// creating person instance to access value
const personInstance = new Person();

console.log(personInstance);
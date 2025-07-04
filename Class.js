// What is Class?

//Creating Class
class Person {
  first_name = "Jahidul";
  last_name = "Islam";
  age = 24;
  isBangladeshi = true;
  city = "Dhaka";

  namedFunc() {
    console.log(this.first_name);
  }

  arrowFunc = () => {
    console.log(`${this.first_name} lives in ${this.city}`);
  };

  anonymousFunc = function () {
    console.log(`Anonymous Function: ${this.last_name} from ${this.city}`);
  };
}

//Creating a class using class expression
let Person = class {
  first_name = "Jahidul";
  last_name = "Islam";
  age = 24;
  isBangladeshi = true;
  city = "Dhaka";
};

let person = new Person();

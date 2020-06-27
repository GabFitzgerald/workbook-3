// defines a new class called Car
class Car {
    // constructor function is called every time a new instance of Car is created, takes one paramater: "brand"
    constructor(brand) {
      // when a new instance of Car is created, the brand parameter passed in is stored as the Car's "carname"
      this.carname = brand;
    }
    // a function for the class called "present" has been defined
    present() {
      //   
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it was made in ' + this.model;
    }
  }
  
  let makes = ["Ford", "Holden", "Toyota"]
  let models = Array.from(new Array(40), (x,i) => i + 1980)
  
  function randomIntFromInterval(min,max) { // min and max included
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  
  for (model of models) {
  
    make = makes[randomIntFromInterval(0,makes.length-1)]
    model = models[randomIntFromInterval(0,makes.length-1)]
      
    mycar = new Model(make, model);
    console.log(mycar.show())
  }
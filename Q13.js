// defines a new class called Car
class Car {
    // constructor function is called every time a new instance of Car is created, takes one parameter: "brand"
    constructor(brand) {
      // when a new instance of Car is created, the brand parameter passed in is stored as the Car's "carname"
      this.carname = brand;
    }
    // a function for the class called "present" has been defined
    present() {
      // the function will return a string. e.g. If "Toyota" passed in as the brand parameter, this function would return: 'I have a Toyota'  
      return 'I have a ' + this.carname;
    }
  }
  
  // the subclass Model has been defined. It will inherit, the constructor and present function from the parent class. 
  class Model extends Car {
    // the constructor function defined taking in two parameters: brand and mod. This function is called whenever a new instance of a Model is created.
    constructor(brand, mod) {
      // the brand parameter is inherited for the Car class. So it will also store the brand parameter in carname
      super(brand);
      // the mod parameter is stored in model. Can be accessed using .model method. 
      this.model = mod;
    }
    // defines a new function in mode called show. Called as .show()
    show() {
      // Returns a string based on the make and model of the car, by calling the present function inherited from the Car class. e.g. it Toyota was passed in as the brand and 2016 was passed in as the model, the function would return: 'I have a Toyota, it was made in 2016'
      return this.present() + ', it was made in ' + this.model;
    }
  }
  
  // stores the array in the makes variable
  let makes = ["Ford", "Holden", "Toyota"]
  // creates a new Array with 40 elements, which are numbers from 1980 to 2019 inclusive
  let models = Array.from(new Array(40), (x,i) => i + 1980)

  // defines a function called randomIntFromInterval which takes two parameters: min and max.
  function randomIntFromInterval(min,max) { // min and max included
      // Creates a random number between 0 and 1, numtiplied it by the difference between max and min plus 1, then adds min. Then rounds down to the next interger (takes the floor). E.g. if min was 1 and max was 3, it would return 1, 2 or 3 randomly
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  // begins a loop which will iterate over each of the elements of the previously defined models array.
  for (model of models) {
  
    // picks a random make from the makes array, by selecting a random index out of the possible indexes of the array and storing the value of that index in the make variable
    make = makes[randomIntFromInterval(0,makes.length-1)]
    // picks are random model from the models array, by selecting a random index out of the possible indexes of the array and storing the value of that index in model
    model = models[randomIntFromInterval(0,makes.length-1)]
     
    // defines as new instance of a Model passing in the previously defined make and model, and storing it in the variable called mycar
    mycar = new Model(make, model);
    // logs the result of the show function on the mycar variable to the console. E.g. is make was Toyota and model was 1980, it would log out: 'I have a Toyota, it was made in 1980'.
    console.log(mycar.show())
  }
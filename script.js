// Complete the js code
function Car(make, model) {
    this.make = make;
	this.model = model;
}
Car.prototype.getMakeModel = function(){
	  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
   Car.call(this, make, model);
	this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

 SportsCar.prototype.getTopSpeed = function(){
	return this.topspeed;
};
// Do not change the code below
const SportsCar = win.SportsCar;
  const car = new SportsCar("Ferrari", "Testarossa", 200);
  console.log("Car Object:", car); // Check the car object
  console.log("Top Speed:", car.getTopSpeed());

// const car = new SportsCar("Ferrari", "Testarossa", 200);
// console.log(car.getMakeModel()); // Output: Ferrari Testarossa
// console.log(car.getTopSpeed()); // Output: 200

window.Car = Car;
window.SportsCar = SportsCar;



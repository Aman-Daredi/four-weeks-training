var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayCarInfo = function () {
        console.log("".concat(this.make, "  ").concat(this.model, "  ").concat(this.year));
    };
    return Car;
}());
var car1 = new Car("Maruti Suzuki", "Swift", 2000);
car1.displayCarInfo();

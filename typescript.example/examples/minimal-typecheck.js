var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
;
;
var c = new Car("");
var d = c;
c = d;

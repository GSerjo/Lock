var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
})();
var Car = (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined) {
                throw "Set engine";
            }
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert("test");
    };
    return Car;
})();
window.onload = function () {
    var engine = new Engine(100, 'V8');
    var car = new Car(engine);
    alert(car.engine.engineType);
};
//# sourceMappingURL=car.js.map
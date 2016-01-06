
class Engine {
    constructor(public horsePower: number, public engineType: string) { }
}

class Car {
    private _engine: Engine;

    constructor(engine: Engine) {
        this._engine = engine;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value == undefined) {
            throw "Set engine";
        }
        this._engine = value;
    }
    start(): void {
        alert("test");
    }
}

window.onload = function () {
    var engine = new Engine(100, 'V8');
    var car = new Car(engine);
    alert(car.engine.engineType);
};
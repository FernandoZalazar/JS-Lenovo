const car = {
    /* attributes */
    make: 'Volvo',
    model: 'Polestar',
    turnedOn: true,
    engineDisplacement: 620,
    year: 2020,

    /* methods */
    isOn(){
        return false;
    },
    turnOn(){

    },
    turnOff(){

    },
    toString(){
        this.year.toString();
        this.make.toString();
        this.model.toString();
        this.engineDisplacement.toString();
    },
    getMarketingData(){
        let makeString = this.make.toString();
        let modelString = this.model.toString();
        let yearString = this.year.toString();
        return [yearString, makeString, modelString];
    }

}

const bicycle = {
    /* attributes */
    make: 'Scott',
    model: 'Cyclocross',
    year: 2021,
}

class newCar {
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
        console.log(this.year, this.make, this.model);
    }
}
let car2 = new newCar(car.getMarketingData());
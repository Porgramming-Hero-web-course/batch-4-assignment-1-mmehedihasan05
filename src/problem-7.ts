class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number {
        const currYear: number = new Date().getFullYear();
        // console.log(currYear - this.year);
        return currYear - this.year;
    }
}

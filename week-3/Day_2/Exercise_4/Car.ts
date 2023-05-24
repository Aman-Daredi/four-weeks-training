class Car {
    private make: string;
    private model: string;
    private year: number;

    public constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public displayCarInfo(): void {
        console.log(`${this.make}  ${this.model}  ${this.year}`);
    }
}


const car1: Car = new Car("Maruti Suzuki", "Swift", 2000);

car1.displayCarInfo();
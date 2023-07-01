let persone = {
    name: "Nastya",
    age: 20,

    greeting() {
        return `Доброго дня ${this.name}`;
    },
};

console.log(persone.greeting())

let car = {
    brand: "Mini",
    model: "Cooper F56",
    year: "2014",
    information() {
        return this.brand + ", " + this.model + ", " + this.year
    }
}

console.log(car.information())
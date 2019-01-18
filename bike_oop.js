class Bike {
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo = () => {
        return console.log("Price is $" + this.price + ", max speed is " + this.max_speed + ", miles is " + this.miles);
    }
    ride = () => {
        this.miles = this.miles + 10;
        console.log("Riding");
        return this;
    }
    reverse = () => {
        if (this.miles >= 5) {
            this.miles = this.miles - 5;
        }
        console.log("Reversing");
        return this;
    }
}

var bike1 = new Bike(200, "25mph");
bike1.ride().ride().ride().reverse().displayInfo();

var bike2 = new Bike(300, "45mph");
bike2.ride().ride().reverse().reverse().displayInfo();

var bike3 = new Bike(100, "10mph");
bike3.reverse().reverse().reverse().displayInfo();
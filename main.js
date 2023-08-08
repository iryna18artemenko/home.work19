class Human {
    name;
    age;

    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

     getHumanInfo() {
       console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }

}


class Car {

    brand;
    model;
    production;
    number;
    person;

    constructor (brand, model, production, number) {

        this.brand = brand;
        this.model = model;
        this.production = production;
        this.number = number; 
    }
   
   
    addOwner (val) {

        if (val.age > 18 ){
             this.person = val;
                } else {
             console.log("Людина молодше 19 років");
            }
    }

    getcarInfo () {

        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік випуску: ${this.production}, Номерний знак: ${this.number}`);
        
        if (this.person) {
            this.person.getHumanInfo();
        } 
    }

}

const human1 = new Human ("John", "23");
const human2 = new Human ("Anna", "38");
const human3 = new Human ("Ben", "15");

const car1 = new Car ("Opel", "Insignia", "2015", "1818");
const car2 = new Car ("Audi", "Q3", "2020", "1589");
const car3 = new Car ("Toyota", "Camry", "2018", "8569");

car1.addOwner(human1);
car1.getcarInfo();

car2.addOwner(human2);
car2.getcarInfo();

car3.addOwner(human3);
car3.getcarInfo();
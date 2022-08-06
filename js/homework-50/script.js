class Product {
    constructor(item, value) {
        this.product = item;
        this.calories = value;
    }
}

class Dish {
    constructor(title) {
        this.dishName = title;
        this.dishComponents = [];
    }
    addProduct = (products, value) => {
        this.dishComponents.push({
            ...products,
            value
        });
    }
    getDishColories = () => {
        let total = 0;
        this.dishComponents.forEach(e => {
            const componentsColories = (e.calories / 100) * e.value;
            total += componentsColories;
        })
        return total;
    }
}

class CaloriesCalculator {
    constructor() {
        this.dishes = [];
    }
    addDish = item => {
        this.dishes.push(item);
    }
    getTotalCalories = () => {
        let total = 0;
        this.dishes.forEach(e => {
            total += e.getDishColories();
        })
        return total;
    }
    getAllDishesInfo = () => {
        let printTotal = '';
        this.dishes.forEach(e => {
            let print = '';
            e.dishComponents.forEach(e => {
                print += ` *${e.product},${e.value} гр,${e.calories} ккал\n`
            })
            printTotal += `${e.dishName} - 1 порция, ${e.getDishColories()} \n${print}\n`
        })
        return printTotal;
    }
}

const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);

const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const calculator = new CaloriesCalculator();
calculator.addDish(plov);
calculator.addDish(plov);
calculator.addDish(plov);
calculator.addDish(plov);
const calories = calculator.getTotalCalories();
console.log(calories); // должно вывести 373.25

const totals = calculator.getAllDishesInfo();
console.log(totals);
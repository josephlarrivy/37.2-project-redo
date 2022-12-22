const items = require("./fakeDb")




class Item {

    constructor(name, price) {
        this.name = name;
        this.price = price;

        // keep track of all items
        items.push(this);
    }
}








module.exports = Item;
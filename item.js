const items = require("./fakeDb")




class Item {

    constructor(item, price) {
        this.item = item;
        this.price = price;

        items.push(this);
    }

    // get all items in fakeDB
    static getAll() {
        return items
    }

    // add an item to fakeDB
    static postItem(item, price) {
        this.item = item;
        this.price = price;

        items.push({item, price})
        return items
    }

    // get an item by name
    static getByName(name) {
        let gottenItem = items.find(v => v.name === name);
        if (gottenItem === undefined) {
            throw { message: "Not Found", status: 404 }
        }
        return gottenItem
    }
}








module.exports = Item;
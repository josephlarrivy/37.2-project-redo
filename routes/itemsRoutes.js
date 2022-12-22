const Item = require("../item")
const express = require("express");
const router = new express.Router();
const items = require("../fakeDb")

// ###################

// Your application should have the following routes:




// GET / items - this should render a list of shopping items.
// Here is what a response looks like:
// [{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]
router.get("/", (req, res, next) => {
    currentItems = Item.getAll()
    return res.send(currentItems)
})


// POST / items - this route should accept JSON data and add it to the shopping list.
// Here is what a sample request / response looks like:
// {“name”:”popsicle”, “price”: 1.45 } => {“added”: {“name”: “popsicle”, “price”: 1.45 } }
router.post("/", (req, res, next) => {
    let newItemName = req.body.item;
    let newItemPrice = req.body.price;

    Item.postItem(newItemName, newItemPrice)
    return res.send(items)
})


// GET / items /: name - this route should display a single item’s name and price.
// Here is what a sample response looks like:
// {“name”: “popsicle”, “price”: 1.45 }
router.get("/:name", (req, res, next) => {
    let lookFor = req.params.name;
    let singleItem = Item.getByName(lookFor)

    return res.send(singleItem)
})


// PATCH / items /: name, this route should modify a single item’s name and / or price.
// Here is what a sample request / response looks like:

// {“name”:”new popsicle”, “price”: 2.45 } => {“updated”: {“name”: “new popsicle”, “price”: 2.45 } }

// DELETE / items /: name - this route should allow you to delete a specific item from the array.

// Here is what a sample response looks like:

// { message: “Deleted” }




module.exports = router;
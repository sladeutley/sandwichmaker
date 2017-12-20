'use strict';

require("./DOMInteraction"); //DON'T UNDERSTAND WHY THIS REQUIRES DOMINTERACTION.JS
let bread = require("./bread");
let meat = require("./meat");
let cheese = require("./cheese");
let condiment = require("./condiments");
let veggies = require("./veggies");
let total = 0;
let sandwich = {
    "bread": [],
    "meat": [],
    "cheese": [],
    "condiments": [],
    "veggies": []
};

// module.exports.addIngredient = (id, value) => {
//     if (id === "bread") {
//         sandwich[id].push(value);
//         total += bread.addBread(value);
//     } if (id === "meat") {
//         sandwich[id].push(value);
//         total += meat.addMeat(value);
//     } if (id === "cheese") {
//         sandwich[id].push(value);
//         total += cheese.addCheese(value);
//     } if (id === "condiments") {
//         sandwich[id].push(value);
//         total += condiment.addCondiments(value);
//     } if (id === "veggies") {
//         sandwich[id].push(value);
//         total += veggies.addVegies(value);
//     }
//     console.log("Your total cost", total);
//     return total;
// };

//SWITCH STATEMENT - ANOTHER WAY TO DO WHAT YOU DID UP ABOVE
module.exports.addIngredient = (id, value) => {
    sandwich[id].push(value);
    switch (id) {
        case "bread":
        bread.addBread(value);
        total += bread.breadTotal();
        break;
        case "meat":
        total += meat.addMeat(value);
        break;
        case "cheese":
        total += cheese.addCheese(value);
        break;
        case "condiments":
        total += condiment.addCondiments(value);
        break;
        case "veggies":
        total += veggies.addVegies(value);
    }
    console.log("total cost", total);
    return total;
};

module.exports.removeIngredient = (id, value) => {
    sandwich[id].splice(sandwich[id].indexOf(value), 1);
    switch (id) {
        case "bread":
        total -= bread.addBread(value);
        break;
        case "meat":
        total -= meat.addMeat(value);
        break;
        case "cheese":
        total -= cheese.addCheese(value);
        break;
        case "condiments":
        total -= condiment.addCondiments(value);
        break;
        case "veggies":
        total -= veggies.addVegies(value);
    }
    console.log("your total", total);
    return total;
};

module.exports.clearCategoryTotal = (category) => {
    total -= bread.breadTotal();
};


module.exports.getTotal = () =>  //THIS IS CALLED A 'GETTER'
     total;

module.exports.getSandwich = () => sandwich;

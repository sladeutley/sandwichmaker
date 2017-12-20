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
        total += bread.getBreadPrice(value);
        // total += bread.breadTotal();
        break;
        case "meat":
        total += meat.getMeatPrice(value);
        break;
        case "cheese":
        total += cheese.getCheesePrice(value);
        break;
        case "condiments":
        total += condiment.getCondimentPrice(value);
        break;
        case "veggies":
        total += veggies.getVeggiesPrice(value);
    }
    console.log("add", total.toFixed(2));
    return total.toFixed(2);
};

module.exports.removeIngredient = (id, value) => {
    sandwich[id].splice(sandwich[id].indexOf(value), 1);
    switch (id) {
        case "bread":
        total -= bread.getBreadPrice(value);
        break;
        case "meat":
        total -= meat.getMeatPrice(value);
        break;
        case "cheese":
        total -= cheese.getCheesePrice(value);
        break;
        case "condiments":
        total -= condiment.getCondimentPrice(value);
        break;
        case "veggies":
        total -= veggies.getVeggiesPrice(value);
    }
    console.log("remove", total.toFixed(2));
    return total.toFixed(2);
};

module.exports.clearCategoryTotal = (id, ingredient) => {
    if (ingredient.checked) {
        switch (id) {
            case "bread":
            total -= bread.getBreadPrice(ingredient.value).toFixed(2);
            break;
            case "meat":
            total -= meat.getMeatPrice(ingredient.value).toFixed(2);
            break;
            case "cheese":
            total -= cheese.getCheesePrice(ingredient.value).toFixed(2);
            break;
            case "condiments":
            total -= condiment.getCondimentPrice(ingredient.value).toFixed(2);
            break;
            case "veggies":
            total -= veggies.getVeggiesPrice(ingredient.value).toFixed(2);
            break;
        }
        
    }
};


module.exports.getTotal = () =>  //THIS IS CALLED A 'GETTER'
     total.toFixed(2);

module.exports.getSandwich = () => sandwich;

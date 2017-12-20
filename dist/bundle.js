(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let menu = document.getElementById("menu");
let submit = document.getElementById("submit");
let bread = document.getElementById("bread");
let meat = document.getElementById("cheese");
let condiments = document.getElementById("condiments");
let veggies = document.getElementById("veggies");
let output = document.getElementById("output");
// required the SandwichMaker js page
let sandwichMaker = require("./SandwichMaker");

submit.addEventListener("click", function(){
    output.innerHTML = `Your ${sandwichOutput(sandwichMaker.getSandwich())} sandwich costs $${sandwichMaker.getTotal()}`;
});

//when 'none' is selected, the checkboxes need to clear
//if none is selected, you need to be able to select other checkboxes and none disappears
//if none is selected, you need to clear that categories total out
//only if item is checked, does it add to the total
function clearCheckboxes (div) {
    let checkCheckboxes = div.getElementsByClassName(div.id);
    for (let i=0; i<checkCheckboxes.length; i++) {
        sandwichMaker.clearCategoryTotal(div.id, checkCheckboxes[i]);
        checkCheckboxes[i].checked = false;
    }
}

menu.addEventListener("change", function(){
    let category = event.target.closest("div");
    let none = category.getElementsByClassName("none");
    if (event.target.value === "none") {
        console.log("you pressed none");
        clearCheckboxes(category);
    }
    if (!event.target.checked) {
        sandwichMaker.removeIngredient(category.id, event.target.value);
    }
    else if (event.target.checked) {
        sandwichMaker.addIngredient(category.id, event.target.value);
        if (none[0].checked) {
            none[0].checked = false;
            console.log(none);
        }
    }
});

function sandwichOutput (sandwichObject) {
    let sandwichString = "";
    for(let ingredient in sandwichObject){ //A 'FOR EACH' FOR AN OBJECT. INGREDIENT IS JUST RANDOM DEFINED 
        for (let i=0; i<sandwichObject[ingredient].length; i++){
            sandwichString += `${sandwichObject[ingredient][i]} `;
        }
    }
    return sandwichString;
}



},{"./SandwichMaker":2}],2:[function(require,module,exports){
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

},{"./DOMInteraction":1,"./bread":3,"./cheese":4,"./condiments":5,"./meat":6,"./veggies":7}],3:[function(require,module,exports){
'use strict';

let breadCost = 0;
let breadPrices = {
    "white" : 0.19,
    "wheat" : 0.25,
    "rye" : 0.30,
    "none" : 0 
};

module.exports.getBreadPrice = (breadType) => {
    return breadPrices[breadType];
};

// module.exports.addBread = (breadType) => {
//     breadCost += breadPrices[breadType]; //BC THE VALUE DECLARED IN INDEX (E.G "WHEAT"), IS SAME AS 'WHEAT' HERE, WE GET PRICE!
//     console.log("bread cost", breadCost);
//     return breadCost;
// };

// module.exports.removeBread = (breadType) => {
//     breadCost -= breadPrices[breadType];
//     console.log("deducted bread cost", breadCost);
//     return ;
// };

// module.exports.breadTotal = () => breadCost;
},{}],4:[function(require,module,exports){
'use strict';

let cheesePrices = {
    "american" : 0.19,
    "pepper-jack" : 0.25,
    "munster" : 0.30,
    "none" : 0 
};

module.exports.getCheesePrice = (cheeseType) => {
    return cheesePrices[cheeseType];
};
},{}],5:[function(require,module,exports){
'use strict';

let condimentPrices = {
    "ketchup" : 0.19,
    "mustard" : 0.25,
    "mayo" : 0.30,
    "none" : 0 
};

module.exports.getCondimentPrice = (condimentType) => {
    return condimentPrices[condimentType];
};
},{}],6:[function(require,module,exports){
'use strict';

let meatPrices = {
    "turkey" : 0.19,
    "ham" : 0.25,
    "bacon" : 0.30,
    "none" : 0 
};

module.exports.getMeatPrice = (meatType) => {
    return meatPrices[meatType];
};
},{}],7:[function(require,module,exports){
'use strict';

let veggiePrices = {
    "peppers" : 0.19,
    "onions" : 0.25,
    "lettuce" : 0.30,
    "none" : 0 
};

module.exports.getVeggiesPrice = (veggieType) => {
    return veggiePrices[veggieType];
};
},{}]},{},[2]);

'use strict';

require("./DOMInteraction"); //DON'T UNDERSTAND WHY THIS REQUIRES DOMINTERACTION.JS
let bread = require("./bread");
let total = 0;

module.exports.addIngredient = (id, value) => {
    total += bread.addBread(value);
    console.log(total);
};
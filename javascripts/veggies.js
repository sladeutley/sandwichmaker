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
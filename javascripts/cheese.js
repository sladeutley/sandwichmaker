'use strict';

let cheesePrices = {
    "american" : 0.19,
    "pepper-jack" : 0.25,
    "munster" : 0.30,
    "none" : 0 
};

module.exports.addCheese = (cheeseType) => {
    return cheesePrices[cheeseType];
};
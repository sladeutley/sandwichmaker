'use strict';

let breadCost = 0;
let breadPrices = {
    "white" : 0.19,
    "wheat" : 0.25,
    "rye" : 0.30,
    "none" : 0 
};

module.exports.addBread = (breadType) => {
    breadCost += breadPrices[breadType]; //BC THE VALUE DECLARED IN INDEX (E.G "WHEAT"), IS SAME AS 'WHEAT' HERE, WE GET PRICE!
};

module.exports.breadTotal = () => breadCost;
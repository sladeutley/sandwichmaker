'use strict';

let breadPrices = {
    "white" : 0.19,
    "wheat" : 0.25,
    "rye" : 0.30,
    "none" : 0 
};

module.exports.addBread = (breadType) => {
    return breadPrices[breadType]; //BC THE VALUE DECLARED IN INDEX (E.G "WHEAT"), IS SAME AS 'WHEAT' HERE, WE GET PRICE!
};
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
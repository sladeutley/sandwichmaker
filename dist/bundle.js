(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let menu = document.getElementById("menu");
let submit = document.getElementById("submit");
let bread = document.getElementById("bread");
let meat = document.getElementById("cheese");
let condiments = document.getElementById("condiments");
let veggies = document.getElementById("veggies");
// required the SandwichMaker js page
let sandwichMaker = require("./SandwichMaker");

submit.addEventListener("click", function(){
    console.log("button clicked");
});

// bread.addEventListener("checked",function(){
//     console.log('boxchecked');
// });

menu.addEventListener("change", function(){
    console.log(event.target.value);
    console.log(event.target.closest("div").id);
    sandwichMaker.addIngredient(event.target.closest("div").id, event.target.value);
});
},{"./SandwichMaker":2}],2:[function(require,module,exports){
'use strict';

require("./DOMInteraction"); //DON'T UNDERSTAND WHY THIS REQUIRES DOMINTERACTION.JS
let bread = require("./bread");
let total = 0;

module.exports.addIngredient = (id, value) => {
    total += bread.addBread(value);
    console.log(total);
};
},{"./DOMInteraction":1,"./bread":3}],3:[function(require,module,exports){
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
},{}]},{},[2]);

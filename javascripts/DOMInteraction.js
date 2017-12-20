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

menu.addEventListener("change", function(){
    console.log(event.target.value);
    console.log(event.target.closest("div").id);
    sandwichMaker.addIngredient(event.target.closest("div").id, event.target.value);
});

function sandwichOutput (sandwichObject) {
    let sandwichString = "";
    for(let ingredient in sandwichObject){ //A 'FOR EACH' FOR AN OBJECT. INGREDIENT IS JUST RANDOM DEFINED 
        console.log("ingredient",sandwichObject[ingredient]);
        for (let i=0; i<sandwichObject[ingredient].length; i++){
            sandwichString += `${sandwichObject[ingredient][i]} `;
        }

    }
    return sandwichString;
}
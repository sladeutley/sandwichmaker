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
        checkCheckboxes[i].checked = false;
    }
}

menu.addEventListener("change", function(){
    let category = event.target.closest("div");
    if (event.target.value === "none") {
        console.log("you pressed none");
        clearCheckboxes(category);
        sandwichMaker.clearCategoryTotal(category);
    }
    if (!event.target.checked) {
        sandwichMaker.removeIngredient(category.id, event.target.value);
    }
    else if (event.target.checked) {
        sandwichMaker.addIngredient(category.id, event.target.value);
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



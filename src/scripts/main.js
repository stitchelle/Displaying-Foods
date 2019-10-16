/* 
Step 2: Create a function which returns a string template. The template is the HTML representation for a food item.
*/
const foods = (Foods)


let foodClass = ""
const createFoodComponent = (food) =>{
    return `
        <div class = "foodItem">
            <h1>${food.id}</h1>
            <section>${food.name}</section>
            <section>${food.type}</section>
            <section>${food.ethnicity}</section>
        </div>
    `
}

/*
Step 3: Create a function that inserts an HTML representation of a food into the DOM
*/

let foodHTML = "";

for (let i = 0; i < foods.length; i++) {
    const singleFoodHTML = createFoodComponent(
        foods[i]);
    foodHTML += singleFoodHTML;
    console.log(foodHTML);
}

const foodContainer = document.querySelector("#container");
foodContainer.innerHTML = foodHTML;


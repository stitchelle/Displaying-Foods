/* 
Step 2: Create a function which returns a string template. The template is the HTML representation for a food item.
*/

let foodClass = ""
const createFoodComponent = (food) => {
    return `
        <div class = "foodItem">
            <h1>${food.id}</h1>
            <section>${food.name}</section>
            <section>${food.category}</section>
            <section>${food.ethnicity}</section>
        </div>
    `
}

/*
Step 3: Create a function that inserts an HTML representation of a food into the DOM
*/
const addFoodToDOM = (html) => {
    const foodContainer = document.querySelector(".foodList");
    foodContainer.innerHTML += html;
}

// fetch call from exercise


fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodHTML = createFoodComponent(food)
            addFoodToDOM(foodHTML)
        })
    })



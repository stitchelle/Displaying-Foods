/* 
Step 2: Create a function which returns a string template. The template is the HTML representation for a food item.
*/
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    })



/*
Step 3: Create a function that inserts an HTML representation of a food into the DOM
*/
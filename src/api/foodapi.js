fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodHTML = foodFactory(food)
            addFoodToDom(foodHTML)
        })
    })
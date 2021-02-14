// console.log("string")
$(document).ready(function () {


    $('.Submit-recipe').on('click', function (event) {
        event.preventDefault();


        // if (nameInput) {
        var RecipeInfo = {
            recipeName: "Blue berry toast",
            ingredients: "Blue berry bread",
            instructions: "blue blue"
        };
        console.log(RecipeInfo);
        $.ajax({
            method: 'POST',
            url: '/api/recipes/create',
            data: RecipeInfo,
        }).then(function (data) {
            // console.log(data)
            location.reload();
        });
        // }
    })
})

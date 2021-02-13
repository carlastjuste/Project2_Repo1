
$(document).ready(function () {




    $('.Submit-recipe').on('click', function (event) {
        event.preventDefault();


        if (nameInput) {
            var RecipeInfo = {
                name: "Blue berry toast",
            };
            console.log(RecipeInfo);
            $.ajax({
                method: 'POST',
                url: '/api/Recipes-Search-Results',
                data: RecipeInfo,
            }).then(function (data) {
                console.log(data)
                // location.reload();
            });
        }
    })
})

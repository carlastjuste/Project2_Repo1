
$(document).ready(function () {




    $('.Submit-recipe').on('click', function (event) {
        event.preventDefault();


        if (nameInput) {
            var RecipeInfo = {
                name: "Blue berry toast",
            };
            console.log(berryInfo);
            $.ajax({
                method: 'POST',
                url: '/api/recipes',
                data: berryInfo,
            }).then(function (data) {
                console.log(data)
                // location.reload();
            });
        }
    });

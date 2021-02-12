$(document).ready(function () {


    $('.Submit-recipe').on('click', function (event) {
        event.preventDefault();

        if (nameInput) {
            var recipeInfo = {
                name: "blue berry toast"
            };
            console.log(blueberryinfo);
            $.ajax({
                method: 'POST',
                url: '/api/recipes',
                data: blueberryinfo,
            }).then(function (data) {
                // reload page to display devoured burger in proper column
                console.log(data)
                location.reload();

            });
        }
    })

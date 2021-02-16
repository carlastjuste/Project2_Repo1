//js for recipes handlebar to send info to recipe_controller.js
$(document).ready(function () {

    $(document).on("click", "button.search-recipes-name", sendMatchingName);
    $(document).on("click", "button.search-recipe-type", sendMatchingType);
    $(document).on("click", "button.search-all-recipes", sendAll);


    function sendMatchingName() {
        var userInput = $("#recipeName").val()

        $.ajax({
            method: 'POST',
            url: '/recipes/name',
            data: {
                recipeName: userInput
            }
        }).then(function (data) {
            console.log(data)
            // location.reload();
        });
    };


    function sendMatchingType() {
        console.log("matching type button")
        // categoryType: $("#categoryType").val()
    }

    function sendAll() {
        console.log("send all button")
        $.ajax({
            method: 'POST',
            url: '/search-all-recipes',
        }).then(function (data) {
            console.log(data)
        });
    }
});

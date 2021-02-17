//js for recipes handlebar to send info to recipe_controller.js
$(document).ready(function () {

    $(document).on("click", "button.search-recipes-name", sendMatchingName);
    $(document).on("click", "button.search-recipe-type", sendMatchingType);
    $(document).on("click", "button.search-all-recipes", sendAll);


    function sendMatchingName(event) {
        event.preventDefault();

    //     var userInput = $("#recipeName").val();

    //     var recipeInfo = {
    //         recipeName: userInput,
    //     };

    //     console.log(recipeInfo)

    //     $.ajax({
    //         method: 'POST',
    //         url: '/recipes/name',
    //         data: recipeInfo
    //     }).then(function (data) {
    //         location.reload();
    //     });
    };

    function sendMatchingType() {
        console.log("matching type button")
    //     // categoryType: $("#categoryType").val()
    }

    function sendAll() {
        location.replace("/search-all-recipes")
    }
});
    
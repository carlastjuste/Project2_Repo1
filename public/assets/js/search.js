//js for recipes handlebar to send info to recipe_controller.js
$(document).ready(function () {

    $(document).on("click", "button.search-recipes-name", sendMatchingName);
    $(document).on("click", "button.search-recipe-type", sendMatchingType);
    $(document).on("click", "button.search-all-recipes", sendAll);

// function to search by recipe name
    function sendMatchingName(event) {
        event.preventDefault();

        var userInput = $("#recipeName").val();

        $.ajax({
            method: 'GET',
            url: '/recipes/' + userInput,
        }).then(function (data) {
            location.replace('/recipes/' + userInput);
        });
    };

    // function to search by recipe type 
    function sendMatchingType(event) {
        event.preventDefault();

        var userInput = $("#categoryType").val();

        $.ajax({
            method: 'GET',
            url: '/search/' + userInput,
        }).then(function (data) {
            location.replace('/search/' + userInput);
        });
    };

    // function to show all recipes 
    function sendAll() {
        location.replace("/search-all-recipes")
    }
});

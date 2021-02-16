//js for recipes handlebar to send info to recipe_controller.js
$(document).ready(function () {

    $(document).on("click", "button.search-recipes-name", sendMatchingName);
    $(document).on("click", "button.search-recipe-type", sendMatchingType);
    $(document).on("click", "button.search-all-recipes", sendAll);


    function sendMatchingName(event) {
        event.preventDefault();
        location.replace("/search-all-recipes");
    }


        function sendMatchingType() {
            // categoryType: $("#categoryType").val()
        }

        function sendAll(event) {
            event.preventDefault();
            location.replace("/search-all-recipes");
        }
    });

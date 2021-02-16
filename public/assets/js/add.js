//js to add recipe to db
$(document).ready(function () {
    var nameInput = $("#recipe-name");
    var typeInput = $("#recipe-type");
    var ingredientsInput = $("#recipe-ingredients");
    var instructionsInput = $("#recipe-instructions");

    $(document).on("click", "button.add-recipe", handleFormSubmit);

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Constructing a newPost object to hand to the database
        var newPost = {
            recipeName: nameInput
                .val()
                .trim(),
            ingredients: ingredientsInput
                .val()
                .trim(),
            instructions: instructionsInput
                .val()
                .trim(),
            categoryType: typeInput
                .val()
                .trim()
        };

        console.log(newPost)
    }
});

    // Submits a new post and brings user to blog page upon completion
    // function submitPost(post) {
    //     $.post("/api/posts", post, function () {
    //         window.location.href = "/";
    //     });
    // }


    // Post a given recipe, bring user to the home page when done
    //     function updatePost(post) {
    //         $.ajax({
    //             method: "PUT",
    //             url: "/api/posts",
    //             data: post
    //         })
    //             .then(function () {
    //                 window.location.href = "/";
    //             });
    //     }
    // });

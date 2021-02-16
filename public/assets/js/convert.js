//js for convert onclick events and to send conversion info to recipes_controller
$(document).ready(function () {

    //add click events and call function for each html button
    $(document).on("click", "button.modal-btn", displayModal);
    $(document).on("click", "button.close-modal", closeModal);
    $(document).on("click", "button.convert-btn", convertMeasurement);

    //-----------define button functions------------------
    function displayModal(event) {
        event.stopPropagation();
        $('#myModal').modal('show');
    }

    function closeModal(event) {
        event.stopPropagation();
        $('#myModal').modal('hide');
    }

    function convertMeasurement() {
        var ingredientName = $("#ingredient").val();
        var startingUnit = $("#startUnit").val();
        var sourceAmount = $("#quantity").val();
        var targetUnit = $("#targetUnit").val();
        // ajax post req
        $.ajax({
            method: "POST",
            url: "/api/convert",
            data: {
                name: ingredientName,
                unit: startingUnit,
                amount: sourceAmount,
                target: targetUnit
            },
        }).then(function (data) {
            $(".converted-answer").text(data.answer)
        });
    }

});

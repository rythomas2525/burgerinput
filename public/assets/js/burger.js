// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");




    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(
      function () {
        console.log("Burger Devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#nb").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // POST
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newShawarma = {
      shawarma_name: $("#newshawarma")
        .val()
        .trim(),
      ordered: 0
    };

     // Send the POST request.
    $.ajax("/api/shawarmas", {
      type: "POST",
      data: newShawarma
    }).then(function() {
      console.log("Added new shawarma");
      location.reload();
    });
  });

  // UPDATE
  $(".ordershawarma").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newOrdered = $(this).data("newOrdered")
    var newOrderedState = {
      ordered: newOrdered
    };

    // Send the PUT request.
    $.ajax("/api/shawarmas/" + id, {
      type: "PUT",
      data: newOrderedState
    }).then(function() {
      console.log("Shawarma ordered");
      location.reload();
    });
  });

   // DELETE
  $(".trashshawarma").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/shawarma/" + id
    }).then(location.reload());
  });
});

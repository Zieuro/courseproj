$(document).ready(function () {
    $("#suggestForm").submit(function (event) {
      event.preventDefault(); // stop page refresh
  
      const suggestion = {
        name: $("#name").val().trim(),
        genre: $("#genre").val(),
        movie: $("#movie").val().trim(),
        watched: $("#watched").is(":checked"),
        notes: $("#notes").val().trim(),
      };
  
      // Get existing favorites array (or start new)
      const existing = JSON.parse(localStorage.getItem("favorites")) || [];
      existing.push(suggestion);
      localStorage.setItem("favorites", JSON.stringify(existing));
  
      // Show confirmation
      alert("Thanks! Your suggestion was saved.");
      this.reset(); // Clear the form
    });
  });
  
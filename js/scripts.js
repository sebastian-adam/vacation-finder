// Frontend
$(document).ready(function() {
  $("#prompt form").submit(function() {
    event.preventDefault();
    var name = $("#name").val();
    var weather = $("#weather").val();
    var location = $("#location").val();
    var attraction = $("input:radio[name=choice]:checked").val();
    var sleep = $("#sleep").val();
    var miss = $("#miss").val();
    var result = weather + location + attraction + sleep + miss;
    var tampa = parseInt(result.replace(/[^1]/g, "").length);
    var canada = parseInt(result.replace(/[^2]/g, "").length);
    var beau = parseInt(result.replace(/[^3]/g, "").length);
    var cape = parseInt(result.replace(/[^4]/g, "").length);

    $("#tampa, #alert, #beau, #cape").hide();

    if (name=="") {
      alert("Please enter your name.");
      return false;
    }

    if (miss === "1") {
      document.getElementById("greeting").innerHTML = "Don't worry about Sarah, " + name + ".";
    }

    if (miss === "2") {
      document.getElementById("greeting").innerHTML = "Don't worry about Tom, " + name + ".";
    }

    if (miss === "3") {
      document.getElementById("greeting").innerHTML = "Don't worry about Becky, " + name + ".";
    }

    if (miss === "4") {
      document.getElementById("greeting").innerHTML = "Don't worry about Blake, " + name + ".";
    }

    if (tampa > 2) {
      $("#tampa").show();
    } else if (canada > 2) {
      $("#canada").show();
    }  else if (beau > 2) {
      $("#beau").show();
    }  else if (cape > 2) {
      $("#cape").show();
    }  else if (tampa > 1) {
      $("#tampa").show();
    } else if (canada > 1) {
      $("#canada").show();
    }  else if (beau > 1) {
      $("#beau").show();
    }  else if (cape > 1) {
      $("#cape").show();
    }

  });
});



// Backend

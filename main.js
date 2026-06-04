$("#hamb-button").on("click", function() { // ← click event

  // ↓ action snippets ↓
  if ($("#hamb-nav").hasClass("hidden")) { // ← element has css class

    // ↓ action snippets (class on element) ↓
    $("#hamb-nav").removeClass("hidden");

    // ↑ action snippets (class on element) ↑

  } else { // ← element has css class

    // ↓ action snippets (class not on element) ↓
    $("#hamb-nav").addClass("hidden");

    // ↑ action snippets (class not on element) ↑

  } // ← element has css class
}); // ← click event
$(document).ready(function() { // ← page ready event

  // ↓ action snippets ↓
  if ($(window).width() >= 750) {
    $("#hamb-nav").removeClass("hidden");
  }
  if ($(window).width() < 750) {
    $("#hamb-nav").addClass("hidden");
  }
  // ↑ action snippets ↑
}); // ← page ready event
$(window).on("resize", function() { // ← resize browser window event

  // ↓ action snippets ↓
  if ($(window).width() >= 750) {
    $("#hamb-nav").removeClass("hidden");
  }
  else{
    $("#hamb-nav").addClass("hidden");
  }
  // ↑ action snippets ↑

}); // ← resize browser window event
$("#close-button1").on("click", function() { // ← click event
  // ↓ action snippets ↓
  $("#modal-1").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

$("#buttonA").on("click", function() { // ← click event
  // ↓ action snippets ↓
  $("#modal-1").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event
$("#close-button2").on("click", function() { // ← click event
  // ↓ action snippets ↓
  $("#modal-2").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

$("#buttonB").on("click", function() { // ← click event
  // ↓ action snippets ↓
  $("#modal-2").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event
$("#close-button3").on("click", function() { // ← click event
  // ↓ action snippets ↓
  $("#modal-3").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

$("#buttonC").on("click", function() { // ← click event
  // ↓ action snippets ↓
  $("#modal-3").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

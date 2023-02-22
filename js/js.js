
/******
 Bundels Carousel buttons (HomePage)
 *****/
$(document).ready(function () {
  $('section.Bundels .Next').click(function () {
    $('#carouselExample').carousel('next');
  });
  $('section.Bundels .Prev').click(function () {
    $('#carouselExample').carousel('prev');
  });
  $(".dropdown-toggle").click(function () {
    $(".dropdown-menu").toggle();
  });


/**** 
Changing the add to cart button on click (HomePage)
******/


  $('.BundelCard .card .purpleBtn').click(function () {
    var button = $(this);
    if (button.hasClass('AddedToCart')) {
      button.removeClass('AddedToCart');
      button.html('<img loading="lazy" src="images/bag-2.svg" alt="">');
    } else {
      button.addClass('AddedToCart');
      button.html('<img loading="lazy" src="images/AddedToCart.png" alt="">');
    }
  });


/***************
 Changing the favorite icon color 
 ***********/
 $("section.LevelOfEducation .card .Favorite button img").click(function() {
  $(this).toggleClass("grayscale");
});

/********
 COpy Btn 
 ******/
 $("#copy-button").click(function() {
  var text = $("#text-to-copy").text();
  var textarea = $("<textarea>");
  textarea.val(text).appendTo("body").select();
  document.execCommand("copy");
  textarea.remove();
  alert("Copied the text: " + text);
});


/*********
 SHow Password
 *******/
 $(".ShowPassword").click(function() {
  var x = $("#exampleInputPassword3");
  if (x.attr("type") === "password") {
    x.attr("type", "text");
  } else {
    x.attr("type", "password");
  }
});

$(".ShowPassword2").click(function() {
  var x = $("#exampleInputPassword4");
  if (x.attr("type") === "password") {
    x.attr("type", "text");
  } else {
    x.attr("type", "password");
  }
});

});


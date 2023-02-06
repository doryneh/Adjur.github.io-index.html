$(document).ready(function () {
  $('section.Bundels .Next').click(function () {
    $('#carousel').carousel('next');
  });
  $('section.Bundels .Prev').click(function () {
    $('#carousel').carousel('prev');
  });


  $(document).ready(function () {
    $('.d-flex .purpleBtn').click(function () {
      var button = $(this);
      if (button.hasClass('AddedToCart')) {
        button.removeClass('AddedToCart');
        button.html('<img src="images/bag-2.svg" alt="">');
      } else {
        button.addClass('AddedToCart');
        button.html('<img src="images/AddedToCart.png" alt="">');
      }
    });

  });


});
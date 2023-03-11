
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
  // $(".dropdown-toggle").click(function () {
  //   $(".dropdown-menu").toggle();
  // });


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
  //  $('.Favorite button').click(function() {
  //   var img = $(this).find('img');
  //   if (img.attr('src') === 'images/FilledHeartShape.svg') {
  //     img.attr('src', 'images/HeartShape.svg');
  //   } else {
  //     img.attr('src', 'images/FilledHeartShape.svg');
  //   }
  // });

  /********
   COpy Btn 
   ******/
  $("#copy-button").click(function () {
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

  $('.ShowPassword').click(function() {
    var passwordField = $('#exampleInputPassword3');
    var passwordFieldType = passwordField.attr('type');
    if (passwordFieldType == 'password') {
      passwordField.attr('type', 'text');
      $(this).html('<i class="fa-solid fa-eye"></i>');
    } else {
      passwordField.attr('type', 'password');
      $(this).html('<i class="fa-solid fa-eye-slash"></i>');
    }
  });

  $('.ShowPassword2').click(function() {
    var passwordField = $('#exampleInputPassword4');
    var passwordFieldType = passwordField.attr('type');
    if (passwordFieldType == 'password') {
      passwordField.attr('type', 'text');
      $(this).html('<i class="fa-solid fa-eye"></i>');
    } else {
      passwordField.attr('type', 'password');
      $(this).html('<i class="fa-solid fa-eye-slash"></i>');
    }
  });



  /*********
  Hide Form When check the applepay
   *******/
  // Listen for changes in the radio buttons
  $('input[name="inlineRadioOptions"]').change(function () {
    // If Apple Pay is checked, hide the PaymentForm
    if ($('#inlineRadio4').is(':checked') || $('#inlineRadio2').is(':checked') || $('#inlineRadio3').is(':checked')) {
      $('.PaymentForm').hide();
      $('#payvisabtn').prop('disabled', false);


      $('#paybankbtn').prop('disabled', true);

    } else {
      // If any other option is checked, show the PaymentForm
      $('.PaymentForm').show();
      $('#payvisabtn').prop('disabled', true);
      $('#paybankbtn').prop('disabled', false);


    }
  });




  /***************
   Exam Hide and display
   ***************/
  // Select the StartExam button
  var startBtn = $('.StartExam');
  var Exit = $('.Exit');
  // Attach a click event listener to the StartExam button
  startBtn.click(function () {
    // Find the tab-content element and hide it
    var tabContent = $('.tab-content');
    tabContent.css('display', 'none');

    // Find the Exam element and show it
    var exam = $('.Exam');
    exam.css('display', 'block');
  });
  Exit.click(function () {
    // Find the tab-content element and hide it
    var tabContent = $('.tab-content');
    tabContent.css('display', 'block');

    // Find the Exam element and show it
    var exam = $('.Exam');
    exam.css('display', 'none');
  });



});


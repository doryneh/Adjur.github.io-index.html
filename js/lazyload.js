  $(window).on('load scroll', function() {
    $('img[data-src]').each(function() {
      var image = $(this);
      if (image.offset().top < $(window).scrollTop() + $(window).height()) {
        image.attr('src', image.data('src'));
      }
    });
  });

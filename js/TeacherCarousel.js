function setCarouselProperties(items) {
    items = Math.max(5, items);
    $('main#carousel').css({
        '--items': items,
        '--middle': Math.ceil(items / 2),
        '--position': Math.ceil(items / 2)
    });
}

function applyOffsets(items) {
    items.each(function (index) {
        $(this).css({ '--offset': (index + 1) });
    });
}

$(document).ready(function () {
    var inputs = $('section.CarouselPart .carousel-indicator input');
    var itemElements = $('div.item');
    
    inputs.each(function(index) {
      $(this).css({
        'grid-column': (index + 2) + ' / ' + (index + 3),
        'grid-row': '2 / 3'
      });
    
      $(this).click(function() {
        var position = index + 1;
        $('main#carousel').css({'--position': position});
        itemElements.each(function(itemIndex) {
          if (itemIndex == index) {
            $(this).css({'--offset': position});
          }
        });
      });
    });
    
    itemElements.click(function() {
      var position = $(this).index() + 1;
      $('main#carousel').css({'--position': position});
    });
    
    var items = $('div.item');
    applyOffsets(items);
    
    setCarouselProperties(3);
    
    $('section.CarouselPart .carousel-indicator input:checked').parent('section.CarouselPart .carousel-indicator').css('opacity', '100%');
    
    $('  section.CarouselPart .carousel-indicator input').on('change', function () {
        $('section.CarouselPart .carousel-indicator').css('opacity', '50%');
        $('section.CarouselPart .carousel-indicator input:checked').parent('section.CarouselPart .carousel-indicator').css('opacity', '100%');
    });
    
    /*Prev and next Buttons */
    var $carousel = $('main#carousel');
    var items = parseInt($carousel.css('--items'));
    var middle = parseInt($carousel.css('--middle'));
    var position = parseInt($carousel.css('--position'));
    
    $('#NextBtn').click(function() {
        position = (position + 1) % items;
        if (position < 0) {
          position += items;
        }
        $carousel.css('--position', position + 1);
    
        var currentPosition = parseInt($carousel.css('--position'));
        var totalItems = parseInt($carousel.css('--items'));
        if (currentPosition > totalItems) {
          $carousel.css({'--position': totalItems });
        }
      });
    
      $('#PrevBtn').click(function() {
        position = (position - 1 + items) % items;
        $carousel.css('--position', position + 1);
        var currentPosition = parseInt($carousel.css('--position'));
    
        if (currentPosition < 1) {
          $carousel.css({'--position': 1});
        }
      });

      // setInterval function to increase position every 7 seconds
      //  setInterval(function() {
      //   position = (position + 1) % items;
      //   if (position < 0) {
      //     position += items;
      //   }
      //   $carousel.css('--position', position + 1);
    
      //   var currentPosition = parseInt($carousel.css('--position'));
      //   var totalItems = parseInt($carousel.css('--items'));
      //   if (currentPosition > totalItems) {
      //     $carousel.css({'--position': totalItems });
      //   }
      // }, 7000);


});



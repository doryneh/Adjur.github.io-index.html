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
    var inputs = $('input');

    inputs.each(function (index) {
        $(this).css({
            'grid-column': (index + 2) + ' / ' + (index + 3),
            'grid-row': '2 / 3'
        });

        $(this).click(function () {
            var position = index + 1;
            $('main#carousel').css({ '--position': position });
        });
    });


    var items = $('div.item');
    applyOffsets(items);

    setCarouselProperties(3);

    $('section.CarouselPart .carousel-indicator input:checked').parent('section.CarouselPart .carousel-indicator').css('opacity', '100%');

    $('  section.CarouselPart .carousel-indicator input').on('change', function () {
        $(' section.CarouselPart .carousel-indicator').css('opacity', '50%');

        $('section.CarouselPart .carousel-indicator input:checked').parent('section.CarouselPart .carousel-indicator').css('opacity', '100%');
    });



    /*Prev and next Buttons */
    $('#NextBtn').click(function() {
        $('section.CarouselPart .carousel-indicator :radio[name="position"]').each(function(index) {
            if ($(this).is(':checked')) {
            $(this).removeAttr('checked');
            $(':radio[name="position"]').eq(index + 1).attr('checked', 'checked');
            return false;
          }
        });
      });

      $('#PrevBtn').click(function() {
        $('section.CarouselPart .carousel-indicator :radio[name="position"]').each(function(index) {
            if ($(this).is(':checked')) {
            $(this).removeAttr('checked');
            $(':radio[name="position"]').eq(index - 1).attr('checked', 'checked');
            return false;
          }
        });
      });


});



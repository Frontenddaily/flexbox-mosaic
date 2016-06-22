(function(window, document, $, undefined){
  'use strict';

  var
    currentCardIndex = 0,
    cardInterval,
    $cardContainer = $('.card-container'),
    $cards = $cardContainer.find('.card'),
    cardCount = $cards.length,
    $columnCount = $('input[name="column-count"]');

  $columnCount.val($cardContainer.css('column-count'));

  $columnCount.change(function(){
    $cardContainer.css('column-count', $columnCount.val());
  });

  cardInterval = setInterval(function(){
    $cards.eq(currentCardIndex).addClass('shown');
    currentCardIndex++;
    if(cardCount <= currentCardIndex){
      clearInterval(cardInterval);
    }
  }, 50);

})(window, document, jQuery);

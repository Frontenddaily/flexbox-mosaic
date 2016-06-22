(function(window, document, $, undefined){
  'use strict';

  var
    currentCardIndex = 0,
    cardInterval,
    $cards = $('card-container .card'),
    cardCount = $cards.length;

  cardInterval = setInterval(function(){
    $cards.eq(currentCardIndex).addClass('shown');

    if(cardCount <= currentCardIndex){
      clearInterval(cardInterval);
    }
  }, 1500);

})(window, document, jQuery);

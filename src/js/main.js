const WOW = require('wowjs');   
window.wow = new WOW.WOW({
    live: false
});

window.wow.init();

$(document).ready(function() {
    $('li.animated').hover(
     function() {
      $(this).addClass('bounce');
     },
     function() {
      $(this).removeClass('bounce');
     }
    )

    $('.animated').hover(
        function() {
         $(this).addClass('pulse');
        },
        function() {
         $(this).removeClass('pulse');
        }
       )
})
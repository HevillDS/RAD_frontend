$(document).ready(function() {
  // WOW connection
  const WOW = require('wowjs');   
  window.wow = new WOW.WOW({
    live: false
  });
  window.wow.init();

  //animation
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


  //menu opening functionality
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('nav').toggleClass('menu_state_open');
    });
  });
    
});
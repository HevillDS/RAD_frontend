$(document).ready(function() {
  // подключение wow.js
  const WOW = require('wowjs');   
  window.wow = new WOW.WOW({
    live: false
  });
  window.wow.init();

  //открытие меню
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('nav').toggleClass('menu_state_open');
    });
  });

  //Якоря
  $(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault(); // отменяем стандартное действие
      
      let a = $(this).attr("href"),
          b = $(a).offset().top;
      /*
      * a - в переменную заносим информацию о том, к какому блоку надо перейти
      * b - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: b}, 300);
      
      $('.arrow').toggle(200);
    });
  });
});
jQuery('#slider img:gt(0)').hide();

setInterval(function(){
 jQuery('#slider :first-child')
 .fadeTo(500, 0)
 .next('img')
 .fadeTo(500, 1)
 .end()
 .appendTo('#slider');
}, 3000);

$(document).ready(function() {
    $('li.animated').hover(
     function() {
      $(this).addClass('bounce'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('bounce'); // Убираем класс
     }
    )})
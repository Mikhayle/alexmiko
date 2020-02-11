$(document).ready(function(){

  $('.burger').on('click', function(){
      $('.menu_mini').fadeIn();
      $(this).css('display', 'none');
      $('.close').css('display', 'block');
  });

    $('.close').on('click', function(){
        $('.menu_mini').fadeOut();
        $(this).css('display', 'none');
        $('.burger').css('display', 'inline-block');
  });

});
  
$(document).ready(function () {
    $('.phone').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });   
});

// $(document).ready(function () {
//     $('.btn-outline-danger').on('click', function(){
//       $('#call-back').hide();
//     });  
// });
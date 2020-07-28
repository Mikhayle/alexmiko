$(document).ready(function(){

function disableScroll() 
{
  $('html, body').on('mousewheel', function(){
    return false;
  });
}

function enableScroll() {
  $('html, body').off('mousewheel');
}


  $('.burger').on('click', function(){
      $('.list_heading').fadeIn();
      $(this).css('display', 'none');
      $('.close').css('display', 'block');
  });

    $('.close').on('click', function(){
        $('.list_heading').fadeOut();
        $(this).css('display', 'none');
        $('.burger').css('display', 'inline-block');
  });

    $('.btn-call-back').on('click', function(){
        $('.popup-container_call-back').fadeIn(400, disableScroll);
        $('.popup_call-back').addClass('popup-active');        
    });

    $('.popup-container_call-back').on('click', function(event){
      if (event.target === this) {
        $(this).fadeOut(400, enableScroll);
        $('.popup_call-back').removeClass('popup-active');      
      }
    });

    $('.close-form, .btn_after').on('click', function(){
      $('.popup-container_call-back, .popup-container_feedback').fadeOut(400, enableScroll);
        $('.popup_call-back, .popup_feedback').removeClass('popup-active');
    });

    $('.btn').on('click', function(){
      $('.modal-header, .modal-body, .modal-footer').hide();
      $('.modal-after').fadeIn();
    });

    $('.btn_after').on('click', function(){
      $('.modal-header, .modal-body, .modal-footer').show(900);
      $('.modal-after').hide(1000);
    });

    $('.btn-main').on('click', function(){
      $('.popup-container_feedback').fadeIn(400, disableScroll);
      $('.popup_feedback').addClass('popup-active');
    });

    $('.popup-container_feedback').on('click', function(event){
      if (event.target === this) {
        $(this).fadeOut(400, enableScroll);
        $('.popup_feedback').removeClass('popup-active');      
      }
    });

});
  
$(document).ready(function () {
    $('.phone').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });   
});





jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.crunchify-top').fadeIn(duration);
        } else {
            jQuery('.crunchify-top').fadeOut(duration);
        }
    });

    jQuery('.crunchify-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
$('#newsletter , .apply').on('submit', function(e){
    e.preventDefault()
  })
  
  function showMessage(){
    let email = $('#email').val()
    let confirmation = confirm('Confirm the submission')
    if(confirmation == true){
      $('.message-box').removeClass('animate__fadeOutRight animate__animated')
      $('.message-box').show()
      $('.message-text').html('Thank You for subscription!')
      $('.message-box').addClass('animate__fadeInRight animate__animated')
      
      setTimeout(function(){
        $('.message-box').removeClass('animate__fadeInRight animate__animated')
        $('.message-box').addClass('animate__fadeOutRight animate__animated')
      },3000)
    }
  
  }

  $('#exampleFormControlTextarea1').on('focus', function(){
    $('.text-areas').css({'font-size':'9px','top':'-1px'})
  })
  $('#exampleFormControlTextarea1').on('blur', function(){
    if($(this).val()==''){
      $('.text-areas').css({'font-size':'14px','top':'10px'})
    }else{
      $('.text-areas').css({'font-size':'9px','top':'-1px'})
    }
    
  })
  $('#contact-form').submit(function(e){
    e.preventDefault()
  })
  function contactMessage(){
    $('.message-box').removeClass('animate__fadeOutRight animate__animated')
      $('.message-box').show()
      $('.message-text').html('Thank You !')
      $('.message-box').addClass('animate__fadeInRight animate__animated')
      
      setTimeout(function(){
        $('.message-box').removeClass('animate__fadeInRight animate__animated')
        $('.message-box').addClass('animate__fadeOutRight animate__animated')
      },3000)
  }
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }


function resize(){
  let para = $('.text-para').height()
  let address = $('.addresss').height()
  let form =  $('.form-section').height()
  let locateHeading = $('.locate-heading').height()
  let heightOfMap = (form - (para + 16 + address + locateHeading + 22))
  let iframe = $('.iframe-map')
  iframe.css({'height': heightOfMap+'px'})
 
  
}
$(window).on("load",function(){
  resize()
})
$(window).resize(function(){
  resize()
})
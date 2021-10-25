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
  // $(document).ready(function(){
  //   $(document).ready(function(){
  //       $(".contents").slice(0, 4).show();
  //       $("#loadMore").on("click", function(e){
  //         e.preventDefault();
  //         $(".contents:hidden").slice(0, 4).slideDown();
  //         if($(".contents:hidden").length == 0) {
  //           $("#loadMore").hide();
  //         }
  //       });
        
  //     })
    
  // })
  var lazyLoadInstance = new LazyLoad({
    elements_selector: "img"
    // ... more custom settings?
});
// $(document).ready(function(){
//  
// })
$('.a , .b').attr({'data-aos':"fade-up"})
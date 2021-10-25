


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

 var lazyLoadInstance = new LazyLoad({
    elements_selector: "img"
    // ... more custom settings?
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
$('.overlay-text').on('mouseover',function(){
  $(this).addClass('animate__animated animate__headShake')
})
$('.overlay-text').on('mouseout',function(){
  $(this).removeClass('animate__animated animate__headShake')
})
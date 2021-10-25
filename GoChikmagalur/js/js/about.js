$(".carousel2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    nextArrow: $(".next2"),
    prevArrow: $(".prev2"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


$('.left-para').each(function(){
    if($('.left-para').text().length>140){
        $(this).html($(this).text().slice(0,144)+'...')
    }
})
$('.image-row.a').on('mouseover',function(){
    $('.image-row.a p.hover-effect-text').addClass('animate__fadeInUp animate__animated')
    $('.image-row.a p.hover-effect-text').show()
})
$('.image-row.a').on('mouseout',function(){
    $('.image-row.a p.hover-effect-text').removeClass('animate__fadeInUp animate__animated')
    $('.image-row.a p.hover-effect-text').hide()
})
$('.image-row.b').on('mouseover',function(){
    $(' .image-row.b p.hover-effect-text').addClass('animate__fadeInUp animate__animated')
    $(' .image-row.b p.hover-effect-text').show()
})
$('.image-row.b').on('mouseout',function(){
    $('.image-row.b p.hover-effect-text').removeClass('animate__fadeInUp animate__animated')
    $('.image-row.b p.hover-effect-text').hide()
})

$('.image-row.c').on('mouseover',function(){
    $(' .image-row.c p.hover-effect-text').addClass('animate__fadeInUp animate__animated')
    $(' .image-row.c p.hover-effect-text').show()
})
$('.image-row.c').on('mouseout',function(){
    $('.image-row.c p.hover-effect-text').removeClass('animate__fadeInUp animate__animated')
    $('.image-row.c p.hover-effect-text').hide()
})
$('.post-img .para').each(function(){
    let x = $(this).text().length
    // console.log($(this).text().length)
    if(x>157){
        $(this).html($(this).text().slice(0,170)+'...')
    }
})

$('#services').on('mouseover',function(){
    $(this).attr('src','./images/services-hover.svg')
  })
  $('#services').on('mouseout',function(){
    $(this).attr('src','./images/service.svg')
  })
  $('#travel').on('mouseover',function(){
    $(this).attr('src','./images/travel-hover.svg')
  })
  $('#travel').on('mouseout',function(){
    $(this).attr('src','./images/travel.svg')
  })
  $(' #money').on('mouseover',function(){
    $(this).attr('src','./images/money-hover.svg')
  })
  $('#money').on('mouseout',function(){
    $(this).attr('src','./images/money.svg')
  })
  $(' #booking').on('mouseover',function(){
    $(this).attr('src','./images/boking-hover.svg')
  })
  $('#booking').on('mouseout',function(){
    $(this).attr('src','./images/booking.svg')
  })
  $('#support').on('mouseover',function(){
    $(this).attr('src','./images/support-hover.svg')
  })
  $('#support').on('mouseout',function(){
    $(this).attr('src','./images/support.svg')
  })
  
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
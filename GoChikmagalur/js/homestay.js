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




$('.load-btn').click(function(e){
e.preventDefault()
})

$(document).ready(function(){
$(".inside-sorting .load-sec").slice(0,1).fadeIn();
$(".load-btn").on("click", function(e){

  $(".inside-sorting .load-sec:hidden").slice(0, 6).slideDown();
  if($(".inside-sorting .load-sec:hidden").length == 0) {
    $(".load-btn").hide();
    console.log('hey hideme')
  }
});

})



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

 $(".carousel1").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        // dots: true
      }
    },
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
$(".carousel3").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  nextArrow: $(".next3"),
  prevArrow: $(".prev3"),
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

//  $(".carousel2").slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 4000,
//   nextArrow: $(".next2"),
//   prevArrow: $(".prev2"),
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         // dots: true
//       }
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         // dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

function sortImages(val){
 let x = document.getElementById('sortBy')
 let title = x.options[x.selectedIndex].value.trim()
  console.log(title)
  selectedClass = title;

  $("#gallery").fadeTo(100, 0.1);
    $("#gallery .col-md-6 div").not("."+selectedClass).closest('div').parent().fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).closest('div').parent().fadeIn().addClass('animation');
    $('.'+selectedClass+', .right-label ,.label-image, .bottom-content, .gallery-name, .row, .cost, .rupees-icon, .fas, .stars-div, .stars, .booknow').fadeIn()
    $("#gallery").fadeTo(300, 1);
    }, 300);
   
    $('.load-btn').hide()


  // $(function() {
  //   var selectedClass = "";
  //   $(".filter").click(function(){
  //   selectedClass = $(this).attr("data-rel");
  //   $("#gallery").fadeTo(100, 0.1);
  //   $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
  //   setTimeout(function() {
  //   $("."+selectedClass).fadeIn().addClass('animation');
  //   $("#gallery").fadeTo(300, 1);
  //   }, 300);
  //   });
  //   });
}
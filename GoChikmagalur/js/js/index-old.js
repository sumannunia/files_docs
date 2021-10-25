



$('#location, #arive-date, #Depart-date, #Guest,#email').on('focus',function(){
   
  $('#'+this.id).css({'padding-left':'5px'})
   $('#'+this.id+"Img").hide()
   
})
$('#location, #arive-date, #Depart-date, #Guest,#email').on('blur',function(){
   
  $('#'+this.id).css({'padding-left':'36px'})
   $('#'+this.id+"Img").show()
   if(this.id == 'email'){
    $('#'+this.id).css({'padding-left':'50px'})
   }
})
$('#arive-date, #Depart-date').on('focus', function (){
  $(this).attr('type','date')
})
$('#arive-date, #Depart-date').on('blur', function (){
  $(this).attr('type','text')
})

let str = []
$('.info').each(function(){

  // console.log($(this).text().length)
  if($(this).text().length>200){
    $(this).html($(this).text().slice(0,200)+'...')
    
  }
 
})
let str2 = []
$('.explore-para p').each(function(){

 
  // console.log($(this).text().length)
  if($(this).text().length>240){
    $(this).html($(this).text().slice(0,240)+'...')
    
  }
 
})
let str3 = []
$('.image-infos .infos-para').each(function(){


  // console.log($(this).text().length)
  if($(this).text().length>150){
    $(this).html($(this).text().slice(0,150)+'...')
   
  }
 
})
$('.card-text').each(function(){
  // console.log($(this).text().length)
  if($(this).text().length>95){
    $(this).html($(this).text().slice(0,95)+'...')
  }
})
$(window).on("resize", function(){
  
  if( screen.width>760 || screen.width<1020){
    console.log(screen.width)
    $('.card-text').each(function(){
      
      // console.log($(this).text().length)
      if($(this).text().length>80){
        $(this).html($(this).text().slice(0,80)+'')
      }
    })
  }
});
$('.holiday-para:first').each(function(){
  // console.log($(this).text().length)
  if($(this).text().length>200){
    $(this).html($(this).text().slice(0,200)+'...')
  }
})
$('.holiday-para:last').each(function(){
  // console.log($(this).text().length)
  if($(this).text().length>100){
    $(this).html($(this).text().slice(0,100)+'...')
  }
})
$('.explore-para p').each(function(){
  console.log($(this).text().length)
  if($(this).text().length>170){
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

var distance = $('.footer').offset().top;

$(window).scroll(function() {
  console.log(distance)
    if ( $(this).scrollTop() >= distance ) {
        console.log('is in top');
    } else {
        console.log('is not in top');
    }
});
$('.image-content.right').on('mouseover', function(){
  $('.b').addClass('animate__fadeInUp animate__animated')
  $('.b').css('left','0')
})
$('.image-content.right ').on('mouseout', function(){
  $('.b').removeClass('animate__fadeInUp animate__animated')
})


$('.image-content.left').on('mouseover', function(){
  $('.a').addClass('animate__fadeInUp animate__animated')
  $('.a').css('left','0')
})
$('.image-content.left ').on('mouseout', function(){
  $('.a').removeClass('animate__fadeInUp animate__animated')
})
  $('.input-box  option').on('mouseover',function(){
    $(this).css({'background':'red','color':'#fff'})
  })
 

   $('.left-img').on('mouseover', function(){
     $('.left-side').addClass('animate__fadeInUp animate__animated')
     $('.left-side').show()
   })
   $('.left-img').on('mouseout', function(){
    $('.left-side').removeClass('animate__fadeInUp animate__animated')
    $('.left-side').hide()
  })
  

  $('.right-img').on('mouseover', function(){
    $('.right-side').addClass('animate__fadeInUp animate__animated')
    $('.right-side').show()
  })
  $('.right-img').on('mouseout', function(){
   $('.right-side').removeClass('animate__fadeInUp animate__animated')
   $('.right-side').hide()
 })

 $('.explore-container .carousel-item').on('mouseover', function(){
  $('p.text-carousel').addClass('animate__fadeInUp animate__animated')
})
$('.explore-container .carousel-item').on('mouseout', function(){
 $('p.text-carousel').removeClass('animate__fadeInUp animate__animated')
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
  
  function showPage(){
    let loading = document.getElementById('loading')
    loading.style.display = 'none'
    $('header.navbar-light').addClass('fixed-top')
  }
$('.overlay-text').on('mouseover',function(){
  $(this).addClass('animate__animated animate__headShake')
})
$('.overlay-text').on('mouseout',function(){
  $(this).removeClass('animate__animated animate__headShake')
})


$('#newsletter').on('submit', function(e){
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



// ======functioon for cookies=====
(function(){"use strict";var cookieAlert=document.querySelector(".cookiealert");var acceptCookies=document.querySelector(".acceptcookies");cookieAlert.offsetHeight;if(!getCookie("acceptCookies")){cookieAlert.classList.add("show");}
acceptCookies.addEventListener("click",function(){setCookie("acceptCookies",true,60);cookieAlert.classList.remove("show");});})();function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)===0){return c.substring(name.length,c.length);}}
return "";}





$('#location, #arive-date, #Depart-date, #Guest,#email').on('focus',function(){
   
  // $('#'+this.id).css({'padding-left':'5px'})
   $('#'+this.id+"Img").hide()
   $(this).addClass('lol-date')
   
})
$('.guest-div').on('mouseover', function(){
  $('.guest-div').addClass('lol-guest')
})
$('.guest-div').on('mouseout', function(){
  $('.guest-div').removeClass('lol-guest')
})

$('#location, #arive-date, #Depart-date, #Guest,#email').on('blur',function(){
  // $('.input-box .col-md-3.mb-4').removeClass('lol')
  // $('.lol').css({'width':'0'})
  // $('#'+this.id).css({'padding-left':'36px'})

   $('#'+this.id+"Img").show()
   
   if(this.id == 'email'){
    $('#'+this.id).css({'padding-left':'50px'})
   }
   
})
$('#arive-date, #Depart-date').on('focus', function (){
  var today = new Date();
  let date, month, day
  if(today.getDate()<10){
    day = '0'+today.getDate()
  }else{
    day = today.getDate()
  }
  if(today.getMonth()<10){
    month = '0'+parseInt(today.getMonth()+1)
  }else{
    month = today.getMonth()
  }
  date = today.getFullYear()+'-'+((month))+"-"+day


// var date = today.getFullYear()+'-'+'0'+(today.getMonth()+1)+'-'+'0'+today.getDate();
console.log(date)
  $(this).attr('type','date')
  $(this).attr('min', date)
})
$('#arive-date, #Depart-date').on('input', function(){
  

})
$('#arive-date, #Depart-date').on('blur', function (){
  $(this).attr('type','text')
  
  let getdate = $(this).val().split('-')
  console.log(getdate)
  let arr = {
    '01':',Jan ',
    '02':',Feb ',
    '03':',Mar ',
    '04':',Apr ',
    '05':',May ',
    '06':',Jun ',
    '07':',Jul ',
    '08':',Aug ',
    '09':',Sep ',
    '10':',Oct ',
    '11':',Nov ',
    '12':',Dec ',

  }
  if (arr[getdate[1]]){
    getdate[1] = arr[getdate[1]]
  }
  console.log(getdate[1])
  $(this).val(getdate[2]+getdate[1]+getdate[0])
  if(getdate.length==1){
    if(this.id=='arive-date'){
      $(this).val('')
      $(this).attr('placeholder','Check In')
    }else{
      $(this).val('')
      $(this).attr('placeholder','Check Out')
    }
  }
})

// $('.input-box .col-md-3.mb-4').on('click',function(){
//   $(this).addClass('lol')
//   // $('.lol').css({'width':'calc(100% - 18px)'})
// })
// $('body').on('blur',function(){
//   $('.input-box .col-md-3.mb-4').removeClass('lol')
// })


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

// var distance = $('.footer').offset().top;

// $(window).scroll(function() {
//   console.log(distance)
//     if ( $(this).scrollTop() >= distance ) {
//         console.log('is in top');
//     } else {
//         console.log('is not in top');
//     }
// });
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

//  $('.explore-container .carousel-item').on('mouseover', function(){
//   $('p.text-carousel').addClass('animate__fadeInUp animate__animated')
// })
// $('.explore-container .carousel-item').on('mouseout', function(){
//  $('p.text-carousel').removeClass('animate__fadeInUp animate__animated')
// })
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



// ======functioon for cookies=====
(function(){"use strict";var cookieAlert=document.querySelector(".cookiealert");var acceptCookies=document.querySelector(".acceptcookies");cookieAlert.offsetHeight;if(!getCookie("acceptCookies")){cookieAlert.classList.add("show");}
acceptCookies.addEventListener("click",function(){setCookie("acceptCookies",true,60);cookieAlert.classList.remove("show");});})();function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)===0){return c.substring(name.length,c.length);}}
return "";}


// function for search
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("location");
  filter = input.value.toUpperCase().trim();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
$('#location').on('focus',function lol(){
  $('#myUL').show()
  $('#myUL').css({'opacity':'1'})
  $(".input-box .col-md-3.mb-4").addClass('lol')
})
$('#location').on('blur',function lol(){
  $('#myUL').css({'opacity':'0'})
  $(".input-box .col-md-3.mb-4").removeClass('lol')
  
})
$('#myUL li').on('click',function(){
  $('.input-box .col-md-3.mb-4').removeClass('lol')
  let x = $(this).text()
  console.log("x" +x)
  $('#location').val(x)
  $('#myUL').hide()
})
$('#myUL li a').click(function(e){
  e.preventDefault()
})
$('#location').change(function(){
  $('.input-box .col-md-3.mb-4').removeClass('lol')
})

function showDropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        //openDropdown.classList.remove('show');
      }
    }
  }
}
let i=0
$('.plus').click(function(){
  
  i++
  $('.count-numbers').html(i)
})
$('.minus').click(function(){
  
  i--
  $('.count-numbers').html(i)
  if(i==0 || i<0){
    $('.count-numbers').html('0')
    i=0
  }
})
let child = 0
$('.plus-child').click(function(){
  
  child++
  $('.count-numbers-child').html(child)
})
$('.minus-child').click(function(){
  
  child--
  $('.count-numbers-child').html(child)
  if(child==0 || child<0){
    $('.count-numbers-child').html('0')
    child=0
  }
})
$('#apply-btn').click(function(){
  let add =   $('.count-numbers').text()
  let chil = $('.count-numbers-child').text()
  let sum =parseInt( add) + parseInt(chil)
  console.log(sum)
  $('#Guests').val(sum+' Guests')
  $('#myDropdown').removeClass('show')
}) 

let elementTargeted

// $('body').on('click' ,function(e){
//   // console.log(e.target)
//   // console.log(e.currentTarget)
//   // console.log(e.target.id)
//   elementTargeted = e.target.closest('#myDropdown')
//  console.log( e.target.closest('#myDropdown'))
//  if(e.target.id = 'Guests'){
//   elementTargeted = true
  
//  }
//  if(elementTargeted == true){
//   $('#myDropdown').addClass('show')
//  }
//  else if( elementTargeted == null){
//   $('#myDropdown').removeClass('show')
//  }
// //  if(elementTargeted == 'Guests' ){
// //   $('#myDropdown').removeClass('show')
// // }
// // else if(elementTargeted == null){
// //   $('#myDropdown').removeClass('show')
// // }
//   // if(e.target.id =='myDropdown'){
//   //  disp = true

//   // }else{
//   //  disp = false
//   // }
//   // console.log(disp)

// })
// let disp  =true
// $('#Guests').on('focus', function(e){
  
// })

// $('#Guests').on('blur', function(){
  
  
  
// })

// // function showDrop(){
// //   if(disp){
// //     $('#myDropdown').addClass('show')
// //   }
// //   else{
// //     $('#myDropdown').removeClass('show')
// //   }
// // }


$('body').click(function (e){
  console.log(e.target.closest('#myDropdown'))
  console.log(e.target.closest('#Guests'))
  if(e.target.closest('#apply-btn')){
    $('#myDropdown').removeClass('show')
  } 
  else if(e.target.closest('#myDropdown') || e.target.closest('#Guests')){
    console.log(true)
    $('#myDropdown').addClass('show')
  } 
  else{
    $('#myDropdown').removeClass('show')
  }
})

var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        $('#arive-date').datepicker({
            uiLibrary: 'bootstrap4',
            iconsLibrary: 'fontawesome',
            minDate: today,
            maxDate: function () {
                return $('#Depart-date').val();
            }
        });
        $('#Depart-date').datepicker({
            uiLibrary: 'bootstrap4',
            iconsLibrary: 'fontawesome',
            minDate: function () {
                return $('#arive-date').val();
            }
        });
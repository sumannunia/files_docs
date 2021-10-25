let checkInDate = null, checkOutDate = null;


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
  $('#arive-date').on('focus', function (){
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
    // $(this).attr('type','date')
    $(this).attr('min', date)
  })
  $('#arive-date, #Depart-date').on('input', function(){
    
  
  })
  $('#arive-date').on('blur', function (){
    $(this).attr('type','text')
    
    let getdate = $(this).val().split('-')
    console.log(getdate)
    $('#Depart-date').html(getdate[1])
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
  let i=1
  $('.plus').click(function(){
    i++
    if(i<=10){
      $('.count-numbers').html(i)
      updateGuestInput()
    }else if(i>10){
      i=10
    }
   
    
  })
  $('.minus').click(function(){
    
    i--
    
    if(i==1 || i<1){
      $('.count-numbers').html('1')
      i=1
    }
    $('.count-numbers').html(i)
    updateGuestInput()
  })
  let child = 0
  $('.plus-child').click(function(){
    
    child++
    if(child<=10){
      $('.count-numbers-child').html(child)
      updateGuestInput()
    }else if(child>10){
      child=10
    }
  })
  $('.minus-child').click(function(){
    
    child--
    
    if(child==0 || child<0){
      $('.count-numbers-child').html('0')
      child=0
    }
    $('.count-numbers-child').html(child)
    updateGuestInput()
  })
  // $('#apply-btn').click(function(){
  //   let add =   $('.count-numbers').text()
  //   let chil = $('.count-numbers-child').text()
  //   let sum =parseInt( add) + parseInt(chil)
  //   console.log(sum)
  //   $('#Guests').val(sum+' Guests')
  //   $('#myDropdown').removeClass('show')
  // }) 
  function updateGuestInput(){
    let add =   $('.count-numbers').text()
    let chil = $('.count-numbers-child').text()
    let sum =parseInt( add) + parseInt(chil)
    // console.log(sum)
    $('#Guests').val(sum+' Guests')

  
    $('.hidden-child-filed').val(chil+" children")
    $('.hidden-adult-filed').val(add+" Adults")
    console.log( $('.hidden-adult-filed').val())
    console.log($('.hidden-child-filed').val())
  }



$('body').click(function (e){
    // console.log(e.target.closest('#myDropdown'))
    // console.log(e.target.closest('#Guests'))
    if(e.target.closest('#apply-btn')){
      $('#myDropdown').removeClass('show')
    } 
    else if(e.target.closest('#myDropdown') || e.target.closest('#Guests')){
      // console.log(true)
      $('#myDropdown').addClass('show')
    } 
    else{
      $('#myDropdown').removeClass('show')
    }
  })

  // $(function() {
  //   var $startDate = $('#arive-date');
  //   var $endDate = $('#Depart-date');
  //   var $guests = $('#Guests')

  //   $startDate.datepicker({
  //     autoHide: true,
  //     startDate: new Date()
  //   });
  //   $endDate.datepicker({
  //     autoHide: true,
  //     startDate: $startDate.datepicker('getDate'),
  //   });

  //   $startDate.on('change', function () {
  //     $endDate.datepicker('setStartDate', $startDate.datepicker('getDate'));
  //     $endDate.focus()
  //   });
  //   $endDate.on('change', function () {
       
  //       $guests.focus()
  //     });
  // });


  $('#arive-date').on('focus',function(){
    $('.arrive').addClass('underline')
    console.log('vndflvd')
  })
  $('#arive-date').on('blur',function(){
    $('.arrive').removeClass('underline')
  })
  $('#Depart-date').on('focus',function(){
    $('.depart').addClass('underline')
    console.log('vndflvd')
  })
  $('#Depart-date').on('blur',function(){
    $('.depart').removeClass('underline')
  })


$('.load-btn').click(function(e){
  e.preventDefault()
})

// $(document).ready(function(){
//   $(".inside-sorting .all").slice(0, 1).fadeIn();
//   $(".load-btn").on("click", function(e){
  
//     $(".inside-sorting .load-sec:hidden").slice(0, 3).slideDown();
//     if($(".inside-sorting .load-sec:hidden").length == 0) {
//       $(".load-btn").hide();
//       console.log('hey hideme')
//     }
//   });
  
// })
$(function(){
  $('.inside-sorting .all').fadeOut()
  $('.inside-sorting .all').slice(0,9).fadeIn()
  $('.load-btn').click(function(e){
    e.preventDefault()
    $('.inside-sorting .all:hidden').slice(0,9).slideDown()
    if( $('.inside-sorting .all:hidden').length == 0){
      $('.load-btn').hide()
    }
  })
})


function sortImages(val){
  let x = document.getElementById('sortBy')
  let title = x.options[x.selectedIndex].value.trim()
   console.log(title)
   selectedClass = title;
  
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery .col-md-6 div").not("."+selectedClass).closest('div').parent().fadeOut();
    setTimeout(function() {
    $("."+selectedClass).closest('div').parent().removeAttr('data-aos').fadeIn();
    $('.'+selectedClass+', .top-image-content ,.d-flex ,.rupees-icon, .starts, .fa-star,.fa-rupee-sign,.bottom-content,.row, .booknow a').fadeIn()
    $("#gallery").fadeTo(300, 1);
    }, 300);
   $('.bottom-layout .col-md-6').removeAttr('data-aos','fade-up')
   //  $('.load-btn').hide()

$('.load-btn').hide()
   
 
  
 }


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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
  
  $(document).ready(function(){
    // Call global the function
    $('.t-datepicker').tDatePicker({
      // options here
     
      limitDateRanges :100
    })
    .on("selectedCO",function(e, changeDateCO){
     $('.dropdown-content').addClass('show')
    })
    .on('afterCheckOut',function(e, dataDate) {
      console.log(dataDate)
        console.log(new Date(dataDate[0])) // check-in
      
        console.log(new Date(dataDate[1])) // check-out
      
      })
      .on('clickDateCO',function(e, dateCO) {
        
         console.log(dateCO)
       
        })
        
        $('.t-datepicker').tDatePicker('getEndDate');

   
  });
  
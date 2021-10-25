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

  $(function() {
    var $startDate = $('#arive-date');
    var $endDate = $('#Depart-date');
    var $guests = $('#Guests')

    $startDate.datepicker({
      autoHide: true,
      startDate: new Date()
    });
    $endDate.datepicker({
      autoHide: true,
      startDate: $startDate.datepicker('getDate'),
    });

    $startDate.on('change', function () {
      $endDate.datepicker('setStartDate', $startDate.datepicker('getDate'));
      $endDate.focus()
    });
    $endDate.on('change', function () {
       
        $guests.focus()
      });
  });

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
    
    $('#Guests').val(sum+' Guests')
    $('#myDropdown').removeClass('show')
  }) 
  
$('body').click(function (e){
    
    if(e.target.closest('#apply-btn')){
      $('#myDropdown').removeClass('show')
    } 
    else if(e.target.closest('#myDropdown') || e.target.closest('#Guests')){
     
      $('#myDropdown').addClass('show')
    } 
    else{
      $('#myDropdown').removeClass('show')
    }
  })


  $('.text-for-image').on('mouseover',function(){
    $(this).addClass('animate__animated animate__headShake')
  })
  $('.text-for-image').on('mouseout',function(){
    $(this).removeClass('animate__animated animate__headShake')
  })
  


  $(".carousel2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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


  function changeAttributeOfInput(){
     let passInput =  document.getElementById('form-password')
    
     if(passInput.type =='password'){
         passInput.type = "text"
         $('.eye-cross').fadeIn()
     }else{
         passInput.type = 'password'
         $('.eye-cross').fadeOut()
     }
  }
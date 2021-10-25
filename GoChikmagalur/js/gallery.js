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

  
$('.card-para').each(function(){
  let x = $(this).text()
  // console.log(x.length)
  if(x.length >=170){
    $(this).html($(this).text().slice(0,170)+ ' ...')
    // console.log($(this).html())
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
$('.buttons-name').click(function(e){
    e.preventDefault()
})





let obj = {
  "ImageGallery":{
      "Images":[
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Kemmanagundi.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Kemmanagundi.jpg","ImageTitle":"Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Bhadra-Wildlife-Sanctuary.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Bhadra-Wildlife-Sanctuary.jpg","ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-rafting.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-rafting.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Baba-Budangiri.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Baba-Budangiri.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-water-sports.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-water-sports.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-hebbe-waterfalls.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-hebbe-waterfalls.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-hebbe-waterfalls.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-hebbe-waterfalls.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Ayyanakere-Lake.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Ayyanakere-Lake.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Fort.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Fort.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Adventure","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-kudremukh.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-kudremukh.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Attraction","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/wildlife01.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/wildlife01.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Attraction","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/landmarks.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/landmarks.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Attraction","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/coffee.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/coffee.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Attraction","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/homestay.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/homestay.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Attraction","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/exp-water-sports.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/exp-water-sports.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Attraction","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/baba-budangiri01.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/baba-budangiri01.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Heritage","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Sringeri.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Sringeri.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Heritage","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Belavadi.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Belavadi.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Heritage","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Belur-temple.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Belur-temple.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Heritage","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Fort.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Fort.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Waterfall","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Manikyadhara-Falls.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Manikyadhara-Falls.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Waterfall","ImageThumnailURL":"http://goc.dubaiklix.com/images/hp/explore-10-waterfalls.jpg","ImageURL":"http://goc.dubaiklix.com/images/hp/explore-10-waterfalls.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Waterfall","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-Kadambi-falls.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-Kadambi-falls.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"},
          {"ImageCategory":"Waterfall","ImageThumnailURL":"http://goc.dubaiklix.com/images/explore/todo-hebbe-waterfalls.jpg","ImageURL":"http://goc.dubaiklix.com/images/explore/todo-hebbe-waterfalls.jpg" ,"ImageTitle":"Lorem ipsum dolar sit"}]}}


          

          
//Getting all the images from the object
        $(window).on('load', function(){
          $('.spinner-border').remove()
          
          allImages()
          allImagesCarousel()
          
        })
        function allImages(){
        
          let mainDiv = document.getElementById('gallery');
          if(obj.ImageGallery.Images.length>6){
            $('.top-load-btn').show()
          }else(
            $('.top-load-btn').hide()
          )
          let i = 0
        obj.ImageGallery.Images.map(data =>{
         
         
          let columnDiv = document.createElement('div')
        columnDiv.className = "col-md-6 col-lg-4"
        columnDiv.setAttribute("data-target","#carouselModal")
        columnDiv.setAttribute("data-toggle","modal")
        let insideColumnDiv = document.createElement('div')
        insideColumnDiv.className = "card-up all"
        let imageContainerDiv = document.createElement('div')
        imageContainerDiv.className = "up-gallery-image-content"
        let imgae = document.createElement('img')
        imgae.setAttribute("data-target","#carouselExampleControls")
        
        imgae.setAttribute("data-slide-to" , i)
        imgae.id = i
        imgae.src = data.ImageThumnailURL;
        
        let imagetitle = document.createElement('h3')
        imagetitle.className = "gallery-image-title"
        imagetitle.innerHTML = data.ImageTitle;

        mainDiv.appendChild(columnDiv)
        columnDiv.appendChild(insideColumnDiv)
        insideColumnDiv.appendChild(imageContainerDiv)
        imageContainerDiv.appendChild(imgae)
        imageContainerDiv.appendChild(imagetitle)
        i++
      })
     
      $(function(){
        $('.up-gallery .all').fadeOut()
        $('.up-gallery  .all').slice(0,6).fadeIn()
        $('.top-load-btn').click(function(e){
            e.preventDefault()
            $('.up-gallery  .all:hidden').slice(0,6).slideDown()
            if($('.up-gallery  .all:hidden').length==0){
                $('.top-load-btn').hide()
            }
        })
    })
        }

// function for filter based on the tab clicked. Currently 4 tabs available.



let carouselContainer = $('#carousel-modal')[0]
let carouselIndicators = $('.carousel-indicators')[0]
        function filterGallery(value){
          console.log(value)
        //   selectedClass = value;
        //   $("#gallery").fadeTo(100, 0.1);
        //   $("#gallery .col-md-6 div").not("."+selectedClass).closest('div').parent().hide();
        //   setTimeout(function() {
        //   $("."+selectedClass).closest('div').parent().removeAttr('data-aos').show().addClass('animation');
        //   $('.'+selectedClass).show()
        //   $("#gallery").fadeTo(300, 1);
        //   }, 300);
        //  $('.bottom-layout .col-md-6').removeAttr('data-aos','fade-up')
         //  $('.load-btn').hide()
       $("#gallery ").empty();
       $('#carousel-modal').empty()
      let mainDiv = document.getElementById('gallery');
      let oll = obj.ImageGallery.Images.filter(details=>{
        return details.ImageCategory == value
      })
      if(oll.length>6){
        $('.top-load-btn').show()
      }else(
        $('.top-load-btn').hide()
      )


      let x = 0;
      console.log(oll.length)
      $('.totalImageCounter').html(oll.length)
     
      oll.map(ll=>{
       
        
        console.log(ll.ImageThumnailURL)

        let columnDiv = document.createElement('div')
        columnDiv.className = "col-md-6 col-lg-4"
        columnDiv.setAttribute("data-target","#carouselModal")
        columnDiv.setAttribute("data-toggle","modal")
        let insideColumnDiv = document.createElement('div')
        insideColumnDiv.className = "card-up all"
        let imageContainerDiv = document.createElement('div')
        imageContainerDiv.className = "up-gallery-image-content"
        let imgae = document.createElement('img')
       
        imgae.setAttribute("data-target","#carouselExampleControls")
        
        imgae.setAttribute("data-slide-to" , x)
        imgae.id = x
        imgae.src = ll.ImageThumnailURL;
        
        let imagetitle = document.createElement('h3')
        imagetitle.className = "gallery-image-title"
        imagetitle.innerHTML = ll.ImageTitle;

        mainDiv.appendChild(columnDiv)
        columnDiv.appendChild(insideColumnDiv)
        insideColumnDiv.appendChild(imageContainerDiv)
        imageContainerDiv.appendChild(imgae)
        imageContainerDiv.appendChild(imagetitle)

       

        let carouselItem = document.createElement('div')
        carouselItem.className = 'carousel-item'
        let carouselImage = document.createElement('img')
        carouselImage.className = "w-100 d-block"
        carouselImage.src = ll.ImageThumnailURL
        let imagetitle2 = document.createElement('h3')
        imagetitle2.className = "gallery-image-title"
        imagetitle2.innerHTML = ll.ImageTitle;

        carouselContainer.appendChild(carouselItem)
        carouselItem.appendChild(carouselImage)
        carouselItem.appendChild(imagetitle2)

        x++

      })
      $('.carousel-item:first').addClass("active")

      $(function(){
        $('.up-gallery .all').fadeOut()
        $('.up-gallery  .all').slice(0,9).fadeIn()
        $('.top-load-btn').click(function(e){
            e.preventDefault()
            $('.up-gallery  .all:hidden').slice(0,6).slideDown()
            if($('.up-gallery  .all:hidden').length==0){
                $('.top-load-btn').hide()
            }
        })
    })
      if(value =='all'){
        allImages()
        $('#carousel-modal').empty()
        // obj.ImageGallery.Images.map(allImages =>{
        //   console.log(allImages)
        //   let carouselItem = document.createElement('div')
        //   carouselItem.className = 'carousel-item'
        //   let carouselImage = document.createElement('img')
        //   carouselImage.className = "w-100 d-block"
        //   carouselImage.src = allImages.ImageThumnailURL

        
        //   carouselContainer.appendChild(carouselItem)
        //   carouselItem.appendChild(carouselImage)
        
        
        
        // })
        // $('.carousel-item:first').addClass("active")
        allImagesCarousel()
        
       }
     
}


function allImagesCarousel(){
  console.log(obj.ImageGallery.Images.length)
  $('.totalImageCounter').html(obj.ImageGallery.Images.length)
  let sliderCountNumber = 1
  obj.ImageGallery.Images.map(allImages =>{
    // console.log(allImages)
    let carouselItem = document.createElement('div')
    carouselItem.className = 'carousel-item'
    let carouselImage = document.createElement('img')
    carouselImage.className = "w-100 d-block"
    carouselImage.id = sliderCountNumber
    carouselImage.src = allImages.ImageThumnailURL
    let imagetitle = document.createElement('h3')
    imagetitle.className = "gallery-image-title"
    imagetitle.innerHTML = allImages.ImageTitle;
    let lists = document.createElement('li')
    lists.setAttribute("data-target","#carouselExampleControls")
    lists.setAttribute("data-slide-to" , sliderCountNumber)
  
    carouselContainer.appendChild(carouselItem)
    carouselItem.appendChild(carouselImage)
    carouselItem.appendChild(imagetitle)
    carouselIndicators.appendChild(lists)
  
    sliderCountNumber++
  
  })
  $('.carousel-item:first').addClass("active")
  $('#carousel-indicators li:first').addClass('active')
}
$('#carouselModal').on('slid.bs.carousel', function () {
  let value = parseInt($('.carousel-indicators .active').attr('data-slide-to'))
  if(value == 0){
    $('.carousel-indicators li').length
    $('.imageCounter').html($('.carousel-indicators li').length)
  }else{
    $('.imageCounter').html(value)
  }
  
 console.log(value)
})


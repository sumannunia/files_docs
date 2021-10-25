let data = null;
let checkinDate = "2020-07-26", checkoutDate= "2020-07-29"
 $('#guest').val('1 Guest')
 let guestInputvalue = $('#guest').val('1 Guest')
$(window).on('load', function(){
  let arr ;
  let data;

  $('#guests').val("1 Guest")
  
  // loadSearchDetails()
  var lazyLoadInstance = new LazyLoad({
    elements_selector: "img"
    // ... more custom settings?
  });
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


  



  function showDropMenu() {
    // document.getElementById("myDropdown").classList.toggle("show");
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
  
  function updateGuestInput(){
    let add =   $('.count-numbers').text()
    let chil = $('.count-numbers-child').text()
    let sum =parseInt( add) + parseInt(chil)
    // console.log(sum)
   if(sum == 1){
    $('#guests').val(sum+' Guest')
    
  }else{
    $('#guests').val(sum+' Guests')
   
  }
  if(parseInt(add) == 1){
    $('.adult-text').html(' Adult')
  }else{
    $('.adult-text').html(' Adults')
  }
  
    $('.hidden-child-filed').val(chil+" children")
    $('.hidden-adult-filed').val(add+" Adults")
    console.log( $('.hidden-adult-filed').val())
    console.log($('.hidden-child-filed').val())

    $('.childrenInputValue').val($('.hidden-child-filed').val())
    $('.adultsInputValue').val($('.hidden-adult-filed').val())
  }

  $('body').click(function (e){
    
    if(e.target.closest('#apply-btn')){
      $('#myDropdown').removeClass('show')
    } 
    else if(e.target.closest('#myDropdown') ){
      console.log(true)
      $('#myDropdown').addClass('show')
    } else if(e.target.closest('.dropdown')){
      if($('#myDropdown').hasClass('show')){
        $('#myDropdown').removeClass('show')
      }else{
        $('#myDropdown').addClass('show')
      }
    }
    else{
      $('#myDropdown').removeClass('show')
    }
  })


  function showDatePicker(){
    $(function() {
      var $startDate = $('#arive-date');
      var $endDate = $('#depart-date');
      var $guests = $('#guests')
  
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
  } 






    



// filter-drpdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function filterFunction() {
  document.getElementById("filterDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.filterdropbtn')) {
    var dropdowns = document.getElementsByClassName("filter-dropMenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        // openDropdown.classList.remove('show');

      }
    }
  } 
}
$('body').click(function (e){
    
  if(e.target.closest('#filter-apply-btn') || e.target.closest('#show-all')){
    $('#filterDropdown').removeClass('show')
  } 
  else if(e.target.closest('#filterDropdown') || e.target.closest('#more-filter')){
   
    $('#filterDropdown').addClass('show')
  } 
  else{
    $('#filterDropdown').removeClass('show')
  }
})









$("#filter-apply-btn").on("click",function(){
  $('#sortByFilter').each(function () {
    if (this.defaultSelected) {
        this.selected = true;
        return false;
    }
  });
  $('#sortBy').each(function () {
    if (this.defaultSelected) {
        this.selected = true;
        return false;
    }
  });
  let searchvalue = $('.search-field-for-filter').val()
  let type = $('#hotel-type')[0]
  let typeValue = type.options[type.selectedIndex].text;
  let range = $('.slider-value-hidden').text().split(' ')
  let minRange = parseInt(range[0])
  let maxRange = parseInt(range[1])
 
  let ameneties = $('#ameneties')[0]
  let amenetiesValue = ameneties.options[ameneties.selectedIndex].text

  $(".first-filter").addClass('d-none')
  $(".second-filter-for-sorting").removeClass('d-none')

 
  async function searchresults(){
    $('#search-result-container').empty()
    $('.loader-container-second').css({"display":"block"})
   
    return data
}
searchresults()
.then(data =>{
 
  let filteredArray
  let reExp = new RegExp(searchvalue,"gi")
  let facilities = new RegExp(amenetiesValue,"gi")
  
  if(searchvalue == "" && typeValue == "Please Select" && amenetiesValue == "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      
      return  details.netRate >= minRange && details.netRate <= maxRange
     
    })
  }
  
  else if(searchvalue != "" && typeValue == "Please Select" && amenetiesValue == "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      return  details.productName.match(reExp)  && details.netRate >= minRange && details.netRate <= maxRange
     
    })
  }
  else if(searchvalue != "" && typeValue != "Please Select" && amenetiesValue == "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      return  details.productName.match(reExp) && details.productType == typeValue  && details.netRate >= minRange && details.netRate <= maxRange
     
    })
  }
  else if(searchvalue != "" && typeValue == "Please Select" && amenetiesValue != "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      return  details.productName.match(reExp) &&  details.facilities.match (facilities) && details.netRate >= minRange && details.netRate <= maxRange
     
    })
  }
  else if(searchvalue != "" && typeValue != "Please Select" && amenetiesValue != "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      return details.productType == typeValue && details.productName.match(reExp) && details.facilities.match (facilities) && details.netRate >= minRange && details.netRate <= maxRange 
     
    })
  }
  else if(searchvalue == "" && typeValue != "Please Select" && amenetiesValue != "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      return details.productType == typeValue && details.facilities.match (facilities) && details.netRate >= minRange && details.netRate <= maxRange 
     
    })
  }
  else if(searchvalue == "" && typeValue != "Please Select" && amenetiesValue == "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      return details.productType == typeValue  && details.netRate >= minRange && details.netRate <= maxRange 
     
    })
  }
  else if(searchvalue == "" && typeValue == "Please Select" && amenetiesValue != "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      return details.facilities.match (facilities) && details.netRate >= minRange && details.netRate <= maxRange 
     
    })
  }
  // else if(searchvalue != "" && typeValue != "Please Select" && amenetiesValue != "Please Select" && minRange<5000){
  //   filteredArray = data.SearchResult.Product.filter(details =>{
  //     console.log("insider")
  //     return details.productType == typeValue && details.productName.match(reExp) && details.facilities.match (facilities) && details.netRate >= minRange && details.netRate <= maxRange 
     
  //   })
  // }
 
  else if(searchvalue = "" && typeValue != "Please Select" && amenetiesValue != "Please Select"){
    filteredArray = data.SearchResult.Product.filter(details =>{
      return  details.productType == typeValue && details.facilities.match (facilities) && details.netRate >= minRange && details.netRate <= maxRange 
     
    })
  }
  
  
 
 
  arr = filteredArray
  
  let sortedarrays
  let exvalue  = "priceh2l"
  if(exvalue == "priceh2l"){
    sortedarrays =  arr.sort(function (a, b) {
      return b.netRate - a.netRate;
    });
  }
 


  $('.loader-container-second').css({"display":"none"})
  $('.search-count').html(filteredArray.length + " search results available")
  $('.accomodation-text').html(filteredArray.length + " accomodation found")
  let resultContainer = $('#search-result-container')[0];
  if(filteredArray.length == 0){
    $('.load-btn').css({"display":"none"})
    $(".loader-container-no-filter-result").css({"display":"block"})
  }else if(filteredArray.length < 12){
    $('.load-btn').hide()
    $(".loader-container-no-filter-result").css({"display":"none"})
  }else if(filteredArray.length > 12){
    $('.load-btn').css({"display":"inline-block"})
    $(".loader-container-no-filter-result").css({"display":"none"})
  }
  else{
    $(".loader-container-no-filter-result").css({"display":"none"})
  }
 filteredArray.map(details =>{
  


      let star ;
      let noOfNights = details.noOfNights
      let stars1 = '<i class="fas fa-star">' 
      let stars2 = '<i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
      let stars3 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
      let stars4 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' 
      let stars5 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
      
      if(details.classificationName == 1){
        starr = stars1
      }else if(details.classificationName == 2){
        star = stars2
      }else if(details.classificationName == 3){
        star = stars3
      }else if(details.classificationName == 4){
        star = stars4
      }else if(details.classificationName == 5){
        star = stars5
      }else {
        star = "Norating"
      }

      if(noOfNights>1){
        noOfNights = noOfNights+" Nights"
      }else{
        noOfNights = noOfNights+" Night"
      }
        // image block
        let cardBlock = document.createElement('div');
        cardBlock.className = ("row mx-0 card-blocks")
        cardBlock.innerHTML = ` <div class="col-md-4 px-0">
                                  <div class="image-container">
                                      <img src=${details.imgThumbnail} alt="">
                                  </div>
                              </div>
                              <div class="col-md-8 information-blocks">
                                <div class="">
                                    <h3 class="card-title-heading">${details.productName}</h3>
                                    <p class="card-para mb-0">
                                      ${details.ClassificationType}
                                  </p>
                                  <p class="card-para mt-0">
                                    ${details.shortDesc}
                                </p>
                                    <div class="row mx-0">
                                        <ul class="list-unstyled  list-for-icons">
                                            <li id="d${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/description.png" alt=""> Description</li>
                                            <li id="f${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/facilities.png" alt=""> Reviews</li>
                                            <li id="m${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/location.png" alt=""> Map</li>
                                        </ul>
                                    </div>
                                    <div class="stars-div">
                                        <span class="stars">
                                        ${star}
                                          </span>
                                    </div>
                                    <div class="row align-items-center mx-0 mb-2 ">
                                        <div class="cost d-flex align-items-center "> 
                                          
                                          <span >${details.custCurrencySymbol}  ${Math.round(details.netRate)} | ${noOfNights}</span>
                                        </div>  
                                        <div class="book-btn">
                                        <form class="hidden-form-with-info" action="./search-details.html" method="POST" id="form${details.productID}">
                                        <div class="form-row hidden-form" id="hidden-form">
                                          <div class="form-group col-md-6">
                                          
                                          <input type="hidden"  class="form-control" value=${details.resultID} id="resultID" name="resultID">
                                          <input type="hidden" class="form-control" value =${details.searchID} id="searchID" name="searchID" >
                                          <input type="hidden" class="form-control" value=${details.spID} id="spID" name="spID">
                                          <input type="hidden" class="form-control" value= ${details.SuperProductID}  id="SuperProductID" name="SuperProductID">
                                          <input type="hidden" class="form-control" value=${details.productID} id="productID" name="productID">
                                          <input type="hidden" class="form-control" value=${details.pageID} id="pageId" name="pageId">
                                          <input type="hidden" class="form-control checkOutInputValue" value=${checkoutDate} id="depart-date" name="depart-date">
                                          <input type="hidden" class="form-control checkInInputValue" value=${checkinDate} id="arrive-date" name="arrive-date">
                                          <input type="hidden" class="form-control adultsInputValue" value="" id="adults" name="adults">
                                          <input type="hidden" class="form-control childrenInputValue" value="" id="children" name="children">
                                          </div>
                                          
                                        </div>
                                        <button type="submit" class="btn btn-primary" >Book now</button>
                                        
                                        </div>
                                      
                                      </form></div> 
                                    </div>
                                </div>
                            </div>
                            <div class="">
                            
                            
                            </div>`
        

      

        
       

        resultContainer.appendChild(cardBlock)
   })
  
     
      // $(window).on('load', function(){
        $('.card-blocks').fadeOut()
        $('.card-blocks').slice(0,12).slideDown()
  
        $('.load-btn').click(function(e){
            e.preventDefault()
            $('.card-blocks:hidden').slice(0,4).slideDown()
            if($('.card-blocks:hidden').length == 0){
              $('.load-btn').hide()
            }
        })
})

})


$('#show-all, #showall2').on("click", function(){

  $(".loader-container-no-result, .loader-container-no-filter-result").css({"display":"none"})
  $(".first-filter").removeClass('d-none')
  $(".second-filter-for-sorting").addClass('d-none')
  $('#hotel-type option ').each(function () {
    if (this.defaultSelected) {
        this.selected = true;
        return false;
    }
});
$('#sortByFilter').each(function () {
  if (this.defaultSelected) {
      this.selected = true;
      return false;
  }
});
$('#sortBy').each(function () {
  if (this.defaultSelected) {
      this.selected = true;
      return false;
  }
});
$('#ameneties option ').each(function () {
  if (this.defaultSelected) {
      this.selected = true;
      return false;
  }
});
$(".search-field-for-filter").val("")
  
  $('#search-result-container').empty()
  $('.search-count').html(data.SearchResult.Product.length + " search results available")
    $('.accomodation-text').html(data.SearchResult.Product.length + " accomodation found")
  let resultContainer = $('#search-result-container')[0];
  data.SearchResult.Product.map(details=>{
    // console.log(details)
    let star ;
    let noOfNights = details.noOfNights
  let stars1 = '<i class="fas fa-star">' 
  let stars2 = '<i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  let stars3 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  let stars4 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' 
  let stars5 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  
  if(details.classificationName == 1){
    starr = stars1
  }else if(details.classificationName == 2){
    star = stars2
  }else if(details.classificationName == 3){
    star = stars3
  }else if(details.classificationName == 4){
    star = stars4
  }else if(details.classificationName == 5){
    star = stars5
  }else {
    star = "Norating"
  }

  if(noOfNights>1){
    noOfNights = noOfNights+" Nights"
  }else{
    noOfNights = noOfNights+" Night"
  }
    // image block
    let cardBlock = document.createElement('div');
    cardBlock.className = ("row mx-0 card-blocks")
    cardBlock.innerHTML = ` <div class="col-md-4 px-0">
                              <div class="image-container">
                                  <img src=${details.imgThumbnail} alt="">
                              </div>
                          </div>
                          <div class="col-md-8 information-blocks">
                            <div class="">
                                <h3 class="card-title-heading">${details.productName}</h3>
                                <p class="card-para mb-0">
                                  ${details.ClassificationType}
                              </p>
                              <p class="card-para mt-0">
                                ${details.shortDesc}
                            </p>
                                <div class="row mx-0">
                                    <ul class="list-unstyled  list-for-icons">
                                        <li id="d${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/description.png" alt=""> Description</li>
                                        <li id="d${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/facilities.png" alt=""> Reviews</li>
                                        <li id="d${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/location.png" alt=""> Map</li>
                                    </ul>
                                </div>
                                <div class="stars-div">
                                    <span class="stars">
                                    ${star}
                                      </span>
                                </div>
                                <div class="row align-items-center mx-0 mb-2 ">
                                    <div class="cost d-flex align-items-center "> 
                                      
                                      <span >${details.custCurrencySymbol}  ${Math.round(details.netRate)} | ${noOfNights}</span>
                                    </div>  
                                    <div class="book-btn"><form class="hidden-form-with-info" action="./search-details.html" method="POST" id="form${details.productID}">
                                    <div class="form-row hidden-form" id="hidden-form">
                                      <div class="form-group col-md-6">
                                      
                                      <input type="hidden"  class="form-control" value=${details.resultID} id="resultID" name="resultID">
                                      <input type="hidden" class="form-control" value =${details.searchID} id="searchID" name="searchID" >
                                      <input type="hidden" class="form-control" value=${details.spID} id="spID" name="spID">
                                      <input type="hidden" class="form-control" value= ${details.SuperProductID}  id="SuperProductID" name="SuperProductID">
                                      <input type="hidden" class="form-control" value=${details.productID} id="productID" name="productID">
                                      <input type="hidden" class="form-control" value=${details.pageID} id="pageId" name="pageId">
                                      <input type="hidden" class="form-control checkOutInputValue" value=${checkoutDate} id="depart-date" name="depart-date">
                                      <input type="hidden" class="form-control checkInInputValue" value=${checkinDate} id="arrive-date" name="arrive-date">
                                      <input type="hidden" class="form-control adultsInputValue" value="" id="adults" name="adults">
                                      <input type="hidden" class="form-control childrenInputValue" value="" id="children" name="children">
                                      </div>
                                      
                                    </div>
                                    <button type="submit" class="btn btn-primary" >Book now</button>
                                    
                                    </div>
                                  
                                  </form></div> 
                                </div>
                            </div>
                        </div>
                        <div class="">
                        
                        
                        </div>`
    

  

    
   

    resultContainer.appendChild(cardBlock)
    
})
if($('.card-blocks').length < 1){
  $('.load-btn').hide()
 }else{
  $('.load-btn').css({"display":"inline-block"})
 }
  
 
//     $('.card-blocks').fadeOut()
//     $('.card-blocks').slice(0,12).slideDown()

//     $('.load-btn').click(function(e){
//         e.preventDefault()
//         $('.card-blocks:hidden').slice(0,4).slideDown()
//         if($('.card-blocks:hidden').length == 0){
//           $('.load-btn').hide()
//         }
// })
loadmoreButton()


  
  console.log(data)
  slider.noUiSlider.updateOptions({
    start: [1000, 3000]
});
})




function loadSearchDetails (){
 try {
  $.ajaxSetup({ cache: false });
  $.ajax({ 
    'async': false,
     type: 'GET', 
  
    url: './json.txt', 
    // data: { get_param: 'value' }, 
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    success: onSuccess,
    failure: function (response) {
      $('.loader-container-no-result').css({"display":"block"})
      $('.loader-container-no-filter-result').css({"display":"none"})
  }
});
 } catch (error) {
   console.log(error)
   $('.responsemessage-from-server').html(error)
 }
 

 function onSuccess(response){
  data = response
  // console.log(response , data)
  $('.loader-container-main').css({"display":"none"})
  $('.left-row').css({"display":"flex"})
  
  if(data.SearchResult.Product.length <1){
    $('.loader-container-no-result').css({"display":"block"})
    $('.loader-container-no-filter-result').css({"display":"none"})
    $('.left-row').css({"display":"none"})
  }
    let resultContainer = $('#search-result-container')[0];
    // console.log(data.SearchResult.Product.length)
    $('.search-count').html(data.SearchResult.Product.length + " search results available")
    $('.accomodation-text').html(data.SearchResult.Product.length + " accomodation found")
    cardBlockHtml(resultContainer)


    $('.childrenInputValue').val("0 Children")
    $('.adultsInputValue').val('1 Adult')
   

    
   if($('.card-blocks').length < 1){
    $('.load-btn').hide()
   }else{
    $('.load-btn').css({"display":"inline-block"})
   }
    
   
   let x = data.SearchResult.Product.sort(function(a, b){
    let m =  a.netRate - b.netRate
     return m
  })
  // console.log(x)
  let len = x.length
 
// console.log(x[0],x[len-1].netRate)
console.log(x[0].netRate ,)
let rangeMin = parseInt(x[0].netRate)
let rangeMax = parseInt(x[len-1].netRate)

if(rangeMax<rangeMin){
  [rangeMin, rangeMax] = [rangeMax, rangeMin];
 console.log(rangeMin, rangeMax )
  slider.noUiSlider.updateOptions({
    start: [rangeMin, rangeMax],
    range: {
      'min': [rangeMin],
      'max': [rangeMax]
  }
  });
}
else{
  slider.noUiSlider.updateOptions({
    start: [rangeMin, rangeMax],
    range: {
      'min': [rangeMin],
      'max': [rangeMax]
  }
  });
}

      loadmoreButton()
}

 
}
$('.loader-container-main').show()
$(window).on('load', function(){
  
  loadSearchDetails ()
 
 
})


function filterTheSearch(){
  let valueOfFilter = $('#sortBy')[0]
  let exactValue = valueOfFilter.options[valueOfFilter.selectedIndex].value
  
    async function searchresults(){
      $('#search-result-container').empty()
      $(".loader-container-no-result").css({"display":"none"})
      $('.loader-container-second').css({"display":"block"})

      $('.load-btn').hide()
      // let response  =  await fetch('./json.txt',{
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json;charset=utf-8'
      //     },
      // })
      // let data  = await response.json()
      // // console.log(data)
      return data
     
  }
  searchresults()
  .then(data =>{
    $('.loadmore-button span').css({"visibility":"hidden"})
   setTimeout(function(){
    sortFunction(data, exactValue)
    $('.loadmore-button span').css({"visibility":"visible"})
   },1000)
      
  })
  
}
function sortTheFilteredSearchResult(){
  $('#search-result-container').empty()
  $('.loader-container-second').css({"display":"block"})
  let valueOfFilter = $('#sortByFilter')[0]
  let exactValue = valueOfFilter.options[valueOfFilter.selectedIndex].value
  // console.log(exactValue)
  let sortedarrays
  // console.log(arr)
 
  
  if(exactValue == "property"){
    sortedarrays =  arr.sort(function (a, b) {
      return a.productName.localeCompare(b.productName);
    });
    
  }else if(exactValue == "Starl2h"){
    sortedarrays =  arr.sort(function (a, b) {
      return a.classificationName.localeCompare(b.classificationName);
    });
  }else if(exactValue == "Starh2l"){
    sortedarrays =  arr.sort(function (a, b) {
      return b.classificationName.localeCompare(a.classificationName);
    });
  }else if(exactValue == "pricel2h"){
    sortedarrays =  arr.sort(function (a, b) {
      return a.netRate - b.netRate;
    });
  }else if(exactValue == "priceh2l"){
    sortedarrays =  arr.sort(function (a, b) {
      return b.netRate - a.netRate;
    });
  }else if(exactValue == "please-select"){
    sortedarrays =  arr
    
  }
  // console.log(sortedarrays)

  $('.loader-container-second').css({"display":"none"})
  $('.search-count').html(sortedarrays.length + " search results available")
  $('.accomodation-text').html(sortedarrays.length + " accomodation found")
  let resultContainer = $('#search-result-container')[0];
  if(sortedarrays.length == 0 || sortedarrays.length<1){
    $('.load-btn').hide()
    $('.load-btn').css({"display":"none"})
    // $(".loader-container-no-result").css({"display":"block"})
  }else if(sortedarrays.length < 12){
    $('.load-btn').hide()
    $(".loader-container-no-result").css({"display":"none"})
  }else if(sortedarrays.length > 12){
    $('.load-btn').css({"display":"inline-block"})
    $(".loader-container-no-result").css({"display":"none"})
  }
  else{
    $(".loader-container-no-result").css({"display":"none"})
  }
 sortedarrays.map(details =>{
  


  let star ;
      let noOfNights = details.noOfNights
      let stars1 = '<i class="fas fa-star">' 
      let stars2 = '<i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
      let stars3 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
      let stars4 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' 
      let stars5 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
      
      if(details.classificationName == 1){
        starr = stars1
      }else if(details.classificationName == 2){
        star = stars2
      }else if(details.classificationName == 3){
        star = stars3
      }else if(details.classificationName == 4){
        star = stars4
      }else if(details.classificationName == 5){
        star = stars5
      }else {
        star = "Norating"
      }

      if(noOfNights>1){
        noOfNights = noOfNights+" Nights"
      }else{
        noOfNights = noOfNights+" Night"
      }
        // image block
        let cardBlock = document.createElement('div');
        cardBlock.className = ("row mx-0 card-blocks")
        cardBlock.innerHTML = ` <div class="col-md-4 px-0">
                                  <div class="image-container">
                                      <img src=${details.imgThumbnail} alt="">
                                  </div>
                              </div>
                              <div class="col-md-8 information-blocks">
                                <div class="">
                                    <h3 class="card-title-heading">${details.productName}</h3>
                                    <p class="card-para mb-0">
                                      ${details.ClassificationType}
                                  </p>
                                  <p class="card-para mt-0">
                                    ${details.shortDesc}
                                </p>
                                    <div class="row mx-0">
                                        <ul class="list-unstyled  list-for-icons" >
                                            <li onclick= "addClasstoModal(this.id)" id="d${details.productID}" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/description.png" alt=""> Description</li>
                                            <li id="f${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/facilities.png" alt=""> Reviews</li>
                                            <li id="m${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/location.png" alt=""> Map</li>
                                        </ul>
                                    </div>
                                    <div class="stars-div">
                                        <span class="stars">
                                        ${star}
                                          </span>
                                    </div>
                                    <div class="row align-items-center mx-0 mb-2 ">
                                        <div class="cost d-flex align-items-center "> 
                                          
                                          <span >${details.custCurrencySymbol}  ${Math.round(details.netRate)} | ${noOfNights}</span>
                                        </div>  
                                        <div class="book-btn"><form class="hidden-form-with-info" action="./search-details.html" method="POST" id="form${details.productID}">
                                        <div class="form-row hidden-form" id="hidden-form">
                                          <div class="form-group col-md-6">
                                          
                                          <input type="hidden"  class="form-control" value=${details.resultID} id="resultID" name="resultID">
                                          <input type="hidden" class="form-control" value =${details.searchID} id="searchID" name="searchID" >
                                          <input type="hidden" class="form-control" value=${details.spID} id="spID" name="spID">
                                          <input type="hidden" class="form-control" value= ${details.SuperProductID}  id="SuperProductID" name="SuperProductID">
                                          <input type="hidden" class="form-control" value=${details.productID} id="productID" name="productID">
                                          <input type="hidden" class="form-control" value=${details.pageID} id="pageId" name="pageId">
                                          <input type="hidden" class="form-control checkOutInputValue" value=${checkoutDate} id="depart-date" name="depart-date">
                                          <input type="hidden" class="form-control checkInInputValue" value=${checkinDate} id="arrive-date" name="arrive-date">
                                          <input type="hidden" class="form-control adultsInputValue" value="" id="adults" name="adults">
                                          <input type="hidden" class="form-control childrenInputValue" value="" id="children" name="children">
                                          </div>
                                          
                                        </div>
                                        <button type="submit" class="btn btn-primary" >Book now</button>
                                        
                                        </div>
                                      
                                      </form></div> 
                                    </div>
                                </div>
                            </div>
                            <div class="">
                            
                            
                            </div>`
        

      

        
       

        resultContainer.appendChild(cardBlock)
   })

  //  $('.card-blocks').fadeOut()
  //  $('.card-blocks').slice(0,12).slideDown()

  //  $('.load-btn').click(function(e){
  //      e.preventDefault()
  //      $('.card-blocks:hidden').slice(0,4).slideDown()
  //      if($('.card-blocks:hidden').length == 0){
  //        $('.load-btn').hide()
  //      }
  //  })
  loadmoreButton()


}


function cardBlockHtml(resultContainer){
  data.SearchResult.Product.map(details=>{
    // console.log(details)
    let star ;
    let noOfNights = details.noOfNights
  let stars1 = '<i class="fas fa-star">' 
  let stars2 = '<i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  let stars3 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  let stars4 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' 
  let stars5 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  
  if(details.classificationName == 1){
    starr = stars1
  }else if(details.classificationName == 2){
    star = stars2
  }else if(details.classificationName == 3){
    star = stars3
  }else if(details.classificationName == 4){
    star = stars4
  }else if(details.classificationName == 5){
    star = stars5
  }else {
    star = "Norating"
  }

  if(noOfNights>1){
    noOfNights = noOfNights+" Nights"
  }else{
    noOfNights = noOfNights+" Night"
  }
    // image block
    let cardBlock = document.createElement('div');
    cardBlock.className = ("row mx-0 card-blocks")
    cardBlock.innerHTML = ` <div class="col-md-4 px-0">
                              <div class="image-container">
                                  <img src=${details.imgThumbnail} alt="">
                              </div>
                          </div>
                          <div class="col-md-8 information-blocks">
                            <div class="">
                                <h3 class="card-title-heading">${details.productName}</h3>
                                <p class="card-para mb-0">
                                  ${details.ClassificationType}
                              </p>
                              <p class="card-para mt-0">
                                ${details.shortDesc}
                            </p>
                                <div class="row mx-0">
                                    <ul class="list-unstyled  list-for-icons">
                                        <li id="d${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/description.png" alt=""> Description</li>
                                        <li id="f${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/facilities.png" alt=""> Reviews</li>
                                        <li id="m${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/location.png" alt=""> Map</li>
                                    </ul>
                                </div>
                                <div class="stars-div">
                                    <span class="stars">
                                    ${star}
                                      </span>
                                </div>
                                <div class="row align-items-center mx-0 mb-2 ">
                                    <div class="cost d-flex align-items-center "> 
                                      
                                      <span >${details.custCurrencySymbol}  ${Math.round(details.netRate)} | ${noOfNights}</span>
                                    </div>  
                                    <div class="book-btn"><form class="hidden-form-with-info" action="./search-details.html" method="POST" id="form${details.productID}">
                                    <div class="form-row hidden-form" id="hidden-form">
                                      <div class="form-group col-md-6">
                                      
                                      <input type="hidden"  class="form-control" value=${details.resultID} id="resultID" name="resultID">
                                      <input type="hidden" class="form-control" value =${details.searchID} id="searchID" name="searchID" >
                                      <input type="hidden" class="form-control" value=${details.spID} id="spID" name="spID">
                                      <input type="hidden" class="form-control" value= ${details.SuperProductID}  id="SuperProductID" name="SuperProductID">
                                      <input type="hidden" class="form-control" value=${details.productID} id="productID" name="productID">
                                      <input type="hidden" class="form-control" value=${details.pageID} id="pageId" name="pageId">
                                      <input type="hidden" class="form-control checkOutInputValue" value=${checkoutDate} id="depart-date" name="depart-date">
                                      <input type="hidden" class="form-control checkInInputValue" value=${checkinDate} id="arrive-date" name="arrive-date">
                                      <input type="hidden" class="form-control adultsInputValue" value="" id="adults" name="adults">
                                      <input type="hidden" class="form-control childrenInputValue" value="" id="children" name="children">
                                      </div>
                                      
                                    </div>
                                    <button type="submit" class="btn btn-primary" >Book now</button>
                                    
                                    </div>
                                  
                                  </form></div> 
                                </div>
                            </div>
                        </div>
                        <div class="">
                        
                        
                        </div>`
    

  

    
   

    resultContainer.appendChild(cardBlock)
    
})


}



function sortFunction(data, exactValue ){
  $('.loader-container-second').css({"display":"none"})
  let resultContainer = $('#search-result-container')[0];
  // console.log(data.SearchResult.Product.length)
  // $('.loader-container-no-filter-result').css({"display":"block"})
  $('.search-count').html(data.SearchResult.Product.length + " search results available")
  let sortedarray ;

  if(exactValue == "property"){
    sortedarray =  data.SearchResult.Product.sort(function (a, b) {
      return a.productName.localeCompare(b.productName);
    });
    
  }else if(exactValue == "Starl2h"){
    sortedarray =  data.SearchResult.Product.sort(function (a, b) {
      return a.classificationName.localeCompare(b.classificationName);
    });
  }else if(exactValue == "Starh2l"){
    sortedarray =  data.SearchResult.Product.sort(function (a, b) {
      return b.classificationName.localeCompare(a.classificationName);
    });
  }else if(exactValue == "pricel2h"){
    sortedarray =  data.SearchResult.Product.sort(function (a, b) {
      return a.netRate - b.netRate;
    });
  }else if(exactValue == "priceh2l"){
    sortedarray =  data.SearchResult.Product.sort(function (a, b) {
      return b.netRate - a.netRate;
    });
  }
  else if(exactValue == "please-select"){
    sortedarray =  data.SearchResult.Product
    
  }
 
 
 
  
 if(sortedarray.length <1){
   $('.loader-container-no-filter-result').css({"display":"block"})
 }
  sortedarray.map(details=>{
 


      

      let star ;
    let noOfNights = details.noOfNights
  let stars1 = '<i class="fas fa-star">' 
  let stars2 = '<i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  let stars3 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  let stars4 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' 
  let stars5 = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ' 
  
  if(details.classificationName == 1){
    starr = stars1
  }else if(details.classificationName == 2){
    star = stars2
  }else if(details.classificationName == 3){
    star = stars3
  }else if(details.classificationName == 4){
    star = stars4
  }else if(details.classificationName == 5){
    star = stars5
  }else {
    star = "Norating"
  }

  if(noOfNights>1){
    noOfNights = noOfNights+" Nights"
  }else{
    noOfNights = noOfNights+" Night"
  }
    // image block
    let cardBlock = document.createElement('div');
    cardBlock.className = ("row mx-0 card-blocks")
    cardBlock.innerHTML = ` <div class="col-md-4 px-0">
                              <div class="image-container">
                                  <img src=${details.imgThumbnail} alt="">
                              </div>
                          </div>
                          <div class="col-md-8 information-blocks">
                            <div class="">
                                <h3 class="card-title-heading">${details.productName}</h3>
                                <p class="card-para mb-0">
                                  ${details.ClassificationType}
                              </p>
                              <p class="card-para mt-0">
                                ${details.shortDesc}
                            </p>
                                <div class="row mx-0">
                                    <ul class="list-unstyled  list-for-icons">
                                        <li id="d${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/description.png" alt=""> Description</li>
                                        <li id="f${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/facilities.png" alt=""> Reviews</li>
                                        <li id="m${details.productID}" onclick= "addClasstoModal(this.id)" data-toggle="modal" data-target="#staticBackdrop"><img src="./images/location.png" alt=""> Map</li>
                                    </ul>
                                </div>
                                <div class="stars-div">
                                    <span class="stars">
                                    ${star}
                                      </span>
                                </div>
                                <div class="row align-items-center mx-0 mb-2 ">
                                    <div class="cost d-flex align-items-center "> 
                                      
                                      <span >${details.custCurrencySymbol}  ${Math.round(details.netRate)} | ${noOfNights}</span>
                                    </div>  
                                    <div class="book-btn"> <form class="hidden-form-with-info" action="./search-details.html" method="POST" id="form${details.productID}">
                                    <div class="form-row hidden-form" id="hidden-form">
                                      <div class="form-group col-md-6">
                                      
                                        <input type="hidden"  class="form-control" value=${details.resultID} id="resultID" name="resultID">
                                        <input type="hidden" class="form-control" value =${details.searchID} id="searchID" name="searchID" >
                                        <input type="hidden" class="form-control" value=${details.spID} id="spID" name="spID">
                                        <input type="hidden" class="form-control" value= ${details.SuperProductID}  id="SuperProductID" name="SuperProductID">
                                        <input type="hidden" class="form-control" value=${details.productID} id="productID" name="productID">
                                        <input type="hidden" class="form-control" value=${details.pageID} id="pageId" name="pageId">
                                        <input type="hidden" class="form-control checkOutInputValue" value=${checkoutDate} id="depart-date" name="depart-date">
                                        <input type="hidden" class="form-control checkInInputValue" value=${checkinDate} id="arrive-date" name="arrive-date">
                                        <input type="hidden" class="form-control adultsInputValue" value="" id="adults" name="adults">
                                        <input type="hidden" class="form-control childrenInputValue" value="" id="children" name="children">
                                      </div>
                                      
                                    </div>
                                    <button type="submit" class="btn btn-primary" >Book now</button>
                                    
                                    </div>
                                  
                                  </form></div> 
                                </div>
                            </div>
                        </div>
                        <div class="hiddenblock">
                       

                       
                        </div>`
    resultContainer.appendChild(cardBlock)
  })
  loadmoreButton()
   
// })

}


function loadmoreButton(){
  $('.load-btn').show()
  $('.load-btn').css({"display":"inline-block"})
  // $(window).on('load', function(){
    $('.card-blocks').fadeOut()
    $('.card-blocks').slice(0,12).slideDown()

    $('.load-btn').click(function(e){
        e.preventDefault()
        $('.card-blocks:hidden').slice(0,4).slideDown()
        if($('.card-blocks:hidden').length == 0){
          $('.load-btn').hide()
        }
    })
}


// $(function() {
//   var $startDate = $('#arive-date');
//   var $endDate = $('#depart-date');
//   var $guests = $('#guests')

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


let slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [101, 900],
  range: {
      'min': [100],
      'max': [1000]
  }
});
var nonLinearStepSliderValueElement = document.getElementById('sliderValue');

slider.noUiSlider.on('update', function (values) {
  
    nonLinearStepSliderValueElement.innerHTML = "Rs "+Math.round( values[0]) +" - " +"Rs "+Math.round( values[1])
    $('.slider-value-hidden').html(values[0]+ " "+values[1])
});




let modalBody = $('.append-details')[0]
function addClasstoModal( productId){

  $('.details-modal-body').addClass(' d-flex justify-content-center align-items-center')
  $('.loader-container-modal').show()
  let productID = productId.slice(1,)
  let modalTarget  = productId.slice(0,1)
  let url ;

  // if(modalTarget =='d'){
  //   url = './search-details-section-only.html#description'
  // }else if(modalTarget == 'm'){
  //   url = './search-details-section-only.html#map'
  // }else if(modalTarget == 'f'){
  //   url = './search-details-section-only.html#review'
  // }

  console.log(productID)
  $('.details-modal').addClass('animate__slideInRight fade')
  try {
    $.ajaxSetup({ cache: false });
    $.ajax({ 
      'async': false,
       type: 'GET', 
    
      url: './search-details-section-only.html#lol2',
      headers: {
        "ProductID":productID
       
    } ,
      data: { get_param: productID }, 
      contentType: "text",
      dataType: 'text',
      success: onSuccess,
      failure: function (response) {
       $('.modal-no-result').css({"display":"block"})
    }
  });
   } catch (error) {
    
  }
  function onSuccess(response){
    $('.details-modal-body').removeClass(' d-flex justify-content-center align-items-center')
    $('.loader-container-modal').hide()
    $('.modal-no-result').css({"display":"none"})
    $('.tabs li.nav-item').css({"width":"25%"})
    // console.log(response)
    modalBody.innerHTML = response
    console.log(modalTarget)
    if(modalTarget == "m"){
      $('#map-tab').click()
    }if(modalTarget == "d"){
      $('#description-tab').click()
    }if(modalTarget == "f"){
      $('#review-tab').click()
    }
    // $('.left-large-container').removeClass('col-md-8')
    // $('.left-large-container').addClass('col-md-10 mx-auto')
  }
}
// $('.details-modal-close').click(function(){
//   $('.details-modal').removeClass('animate__slideInRight fade ')
//   $('.details-modal').addClass('animate__slideOutRight ')
// })

// function getBlockDetails(val ){
 
//   console.log()
//     let selectedArray = data.SearchResult.Product.filter(value =>{
//       return value.productID == val
//     })
//     let productID
//     let resultId
//     let searchID
//     let spID
//     let SuperProductID
//     let pageID
//     // console.log(data)
//     // console.log(selectedArray)
//     selectedArray.map(hotelDetails =>{
//        productID = hotelDetails.productID
//        resultId = hotelDetails.resultID
//        searchID = hotelDetails.searchID
//        spID = hotelDetails.spID
//        SuperProductID = hotelDetails.SuperProductID
//        pageID = hotelDetails.pageID
//       console.log("productID " + productID)
//       console.log("resultId " + resultId)
//       console.log("searchID " + searchID)
//       console.log("spID " + spID)
//       console.log("SuperProductID " + SuperProductID)
//       console.log("pageID " + pageID)
//     })
//     let form = $('#form'+val)[0]
    
//     console.log(form)
//     // $('#form'+val).submit()
//     // $('#form'+val).submit(function(e){
//     //   // e.preventDefault()
     
//     //   window.location = './search-details.html'
//     // })
//     // window.location = './search-details.html?'+"productID="+productID+"&resultId="+resultId+"&searchID="+searchID+"&spID="+spID+"&SuperProductID="+SuperProductID+"&pageID="+pageID;
  
//     $('#form'+val).submit()
//   }
  
  let checkInDate = null, checkOutDate = null;
$(document).ready(function(){
// $('.placeholder').hide()
//   $('.form-row').css({"display":"flex"})
  // Call global the function
  $('.t-datepicker').tDatePicker({
    // options here
   
    limitDateRanges :100, 
    toDayShowTitle  :false,
    numCalendar:1,
    // iconArrowTop :false,
    titleCheckIn :"Check In",
    iconDate :" ",
    dateCheckOut: checkoutDate,
    dateCheckIn: checkinDate

  })
  .on("selectedCO",function(e, changeDateCO){
    $('.dropdown-content').addClass('show')
   })
   .on('afterCheckOut',function(e, dataDate) {
     console.log(dataDate)
     checkInDate = new Date(dataDate[0])
     checkOutDate = new Date(dataDate[1]) 
     let monthin = checkInDate.getMonth()+1
     let dayin = checkInDate.getDate()
     let yearin = checkInDate.getFullYear()
     let monthout = checkOutDate.getMonth()+1
     let dayout = checkOutDate.getDate()
     let yearout = checkOutDate.getFullYear()

      //  console.log(dayin+"-"+monthin+"-"+yearin)
      //  console.log(dayout+"-"+monthout+"-"+yearout) // check-in
     
       $('.checkOutInputValue').val(dayout+"-"+monthout+"-"+yearout)
       $('.checkInInputValue').val(dayin+"-"+monthin+"-"+yearin)
      
      $('#hidden-checkin-date').val(checkInDate)
      $('#hidden-checkout-date').val(checkOutDate)
      // $('.depart').removeClass('underline-dates')
      console.log($('.t-input-check-in').val())
      console.log($('.t-input-check-out').val())
      
     })
     .on('clickDateCI',function(e, dateCO) {
       
        $('.arrive').addClass('underline-dates')
      
       })
       
       .on('onChangeCI',function(e, slDateCI) {
        
        $('.depart').addClass('underline-dates')
        $('.arrive').removeClass('underline-dates')
        
        })
        
        $('.t-input-check-in').val("2020-07-24")
        $('.t-input-check-out').val("2020-07-24")
        console.log($('.t-input-check-in').val())
});
  
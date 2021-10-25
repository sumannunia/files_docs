$('.reset-button').on('click', function(){
    let fadeOutDuration = 300
   let email = $('#forgoot-email').val()
   let emailValidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
   if(!email.match(emailValidation)){
       console.log('invalid')
   }else{
       console.log("valid")
       $('#reset-form').on('submit', function(e){
           e.preventDefault()
       })
       $('#reset-form').on('submit',function(e){
           e.preventDefault()
       })
       $('#reset-form').slideUp(400)
       $('.message-after-button-clicked').slideDown(400)
   }
})

$('#reset-form').on('submit',function(e){
    e.preventDefault()
})
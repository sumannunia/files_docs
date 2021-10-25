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

 function changeAttributeOfInputLogin(){
     let loginPassInput = document.getElementById('loginPassword')

     if(loginPassInput.type =='password'){
        loginPassInput.type = "text"
        $('.eye-cross').fadeIn()
    }else{
        loginPassInput.type = 'password'
        $('.eye-cross').fadeOut()
    }
 }

 $('.Close-login').click(function(){
    $('.loginClose').click()
    })
    $('.closeSignup').click(function(){
      $('.signUpClose').click()
    })
$('form').attr("autocomplete","off")
    $('input').attr('autocomplete', "off")

    $('.login-button').on('click', function(e){
        $('.alert-for-incorrect-password-email').slideDown(700)
        $('.login-loader-container-modal').css({'display':"flex"})
        $(this).slideUp(200)
    })

    $('.close-alert-for-incorrect-password-email').on('click', function(e){
        $('.alert-for-incorrect-password-email').slideUp(700)
    })
   



    // password validation

    $('#form-password').on('blur', function(e){
        let inputPassword = $(this).val()
        console.log()
        let inputArray = inputPassword.split(" ")
        console.log(inputArray)

        let lowerCaseLetters = /[a-z]/g;
        let numbers = /[0-9]/g;
        let space = /\s/
        if(inputPassword.length>0){
            if(inputPassword.match(lowerCaseLetters) && inputPassword.match(numbers) && inputPassword.length >= 6 &&!inputPassword.match(space)) {
                $('.password-validation-message').slideUp(600)
                
              }
               else {
                  $('.password-validation-message').slideDown(300)
                  $('#sign-up-form-validation').on('submit', function(e){
                      e.preventDefault()
                  })
              }
        }else{
            $('.password-validation-message').slideUp(600)
        }
        
    })
    // $('#form-password').on('blur', function(e){
    //     let inputPassword = $(this).val()
        
    // if(inputPassword == ""){
    //     $('.password-validation-message').slideUp(600)
    // }
        
        
    // })


//signupModal
    $('.close-alert-for-already-member').on('click', function(e){
        $('.message-for-already-member').slideUp(700)
    })
    $('.create-account-button').click(function(e){
        $('.message-for-already-member').slideDown(700)
    })
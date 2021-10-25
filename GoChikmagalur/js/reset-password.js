$('.new-password').on('input focus', function(e){
    let inputPassword = $(this).val()
    console.log()
    let inputArray = inputPassword.split(" ")
    // console.log(inputArray)

    let lowerCaseLetters = /[a-z]/g;
    let numbers = /[0-9]/g;
    let space = /\s/
    if(inputPassword.match(lowerCaseLetters) && inputPassword.match(numbers) && inputPassword.length >= 6 && !inputPassword.match(space)) {
      $(this).css({"border-color":"green"})
    
    }
     else {
        $(this).css({"border-color":"red"})
        $('#reset-password-form').on('submit', function(e){
              e.preventDefault()
          })
    }
    
})

$('.new-password').on('input focus', function(e){
    let newPass = $('.new-password').val()
    let confirmPass = $('.confirm-password').val()

    if(newPass !== confirmPass){
        $('.password-match-mismatch-message').slideDown(600)
        $('#reset-password-form').on('submit', function(e){
            e.preventDefault()
        })
    }
    else{
        $('.password-match-mismatch-message').slideUp(600)
    }
})

$('.confirm-password').on('input focus', function(){
    let newPass = $('.new-password').val()
    let confirmPass = $('.confirm-password').val()

    if(newPass !== confirmPass){
        $('.password-match-mismatch-message').slideDown(600)
        $(this).css({"border-color":"red"})
        $('#reset-password-form').on('submit', function(e){
            e.preventDefault()
        })
    }
    else{
        $('.password-match-mismatch-message').slideUp(600)
        $(this).css({"border-color":"#ced4da"})
    }
})

$('#basic-addon4').click(function(){
    let inputTypeOfConfirmPassword = $('.new-password')[0]
    if(inputTypeOfConfirmPassword.type == "password"){
        inputTypeOfConfirmPassword.type = "text"
        $('.slash1').fadeIn()
    }else{
        inputTypeOfConfirmPassword.type = "password"
        $('.slash1').fadeOut()
    }
})

$('#basic-addon5').click(function(){
    let inputTypeOfConfirmPassword = $('.confirm-password')[0]
    if(inputTypeOfConfirmPassword.type == "password"){
        inputTypeOfConfirmPassword.type = "text"
        $('.slash2').fadeIn()
    }else{
        inputTypeOfConfirmPassword.type = "password"
        $('.slash2').fadeOut()
    }
})
$('.update-button').click(function(){
    let newPass = $('.new-password').val()
    let confirmPass = $('.confirm-password').val()

    let lowerCaseLetters = /[a-z]/g;
    let numbers = /[0-9]/g;
    let space = /\s/

    if(newPass == confirmPass && newPass !="" && confirmPass != "" && newPass.match(lowerCaseLetters) && newPass.match(numbers) && newPass.length >= 6 && !newPass.match(space)){
        $('#reset-password-form').slideUp(600)
        $('.after-password-reset-message').slideDown(600)
    }


    // if(newPass !== confirmPass ||  newPass == '' || confirmPass == '' && newPass.match(lowerCaseLetters) && newPass.match(numbers) && newPass.length >= 6  && !newPass.match(space)){
    //     // $('.password-match-mismatch-message').slideDown(600)
    //     $(this).css({"border-color":"red"})
    //     $('#reset-password-form').on('submit', function(e){
    //         e.preventDefault()
    //     })
    // }
    // else{
    //    $('#reset-password-form').slideUp(600)
    //    $('.after-password-reset-message').slideDown(600)
    // }
})

$('#reset-password-form').on('submit', function(e){
    e.preventDefault()
})
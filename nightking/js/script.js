

let data = {
    userName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    orderId: '',
    paymentId: '',
    onlinePayment: true
};
let address = {
    address: ''
};
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
          event.preventDefault()
          event.stopPropagation()
        if (!form.checkValidity()) {
          
        }else{
            if(data.userName && data.phoneNumber){

                
                saveUserDetails();
            }else{
                alert("please fill valid details!")
            }
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

async function saveUserDetails(){
    data.city = document.getElementById('city').value;
    data.pincode = document.getElementById('pincode').value;
    data.address = document.getElementById('address').value;
    // data.state = document.getElementById('state').value;
    console.log('userobj', data);
    let paymentOnline = document.getElementById('onlinePayment');
    if(paymentOnline.checked){
        console.log(paymentOnline)
        getOrderId();
    }else {
        data.paymentOnline = false;
        postuserApi();

    }
    console.log(paymentOnline.checked)
    
    
}
async function postuserApi(){
    try {
        let req = await fetch(`https://www.nightkingoil.in:3000/api/user/create`,{
            headers:{
                "content-type": "application/json"
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        });
        let response = await req.json();
        console.log( "response  ",response);
        if(response.data){
            alert('Order placed successfully');
            let successBlock = document.getElementById('success-block');
            let mainBlock = document.getElementById('main-block');
            let formShow = document.getElementById('form-show');


            successBlock.classList.remove('d-none');
            mainBlock.classList.add('d-none');
            formShow.classList.add('d-none');
            document.getElementById('phNo').textContent = data.phoneNumber;
            document.getElementById('name-succes').textContent = data.userName;
            // PopRazrPay();
            // console.log(data)
        }else if(response.message){
            alert(response.message);
    }
    } catch (error) {
        alert(error);
    }
}

function interval(){
    // / 10 minutes from now
var time_in_minutes = 6;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
		clock.innerHTML = t.minutes+' : '+t.seconds;
		if(t.total<=0){ 
            clearInterval(timeinterval)
            interval()
        }
	}
	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);
}
interval()




function changeValue(item, val){
    if(item == 'name'){
        data.userName = val;

    }else{
        const PHONE_REGEXP = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (val.match(PHONE_REGEXP)) {
        // data.phoneNumber = parseInt(val);
        verifyNumber(parseInt(val))
        
    }else{
        document.getElementById('top-ph-error').style.display = 'block';
        document.getElementById('top-ph-error').textContent = 'Please enter a valid phone number';
    }
        
    }
}
function changeValue2(item, val){
    if(item == 'name'){
        data.userName = val;

    }else{
        const PHONE_REGEXP = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (val.match(PHONE_REGEXP)) {
        data.phoneNumber = parseInt(val);
        document.getElementById('bot-ph-error').style.display = 'none';
    }else{
        document.getElementById('bot-ph-error').style.display = 'block';
    }
        
    }
}

function changeLayout(){
    document.getElementById('main-block').classList.add('d-none');
    document.getElementById('form-show').classList.remove('d-none');
}

function setState(val){
    data.state = val
}

	
function PopRazrPay(id) {
    // var LocalOId = LoId;
    let x = {  
        "amount": 1000,  
        "currency": "INR",  
        "accept_partial": true,  
        "first_min_partial_amount": 100,  
        "reference_id": "#20",  "description": 
        "Payment for policy no #23456",  
        "customer": {    
            "name": "Gaurav Kumar",    
            "contact": "+919999999999",    
            "email": "gaurav.kumar@example.com"  
        },  
        "notify": {    
            "sms": true,    
            "email": true  
        },  
            "reminder_enable": true,  
            "options": {    
                "checkout": {      
                    "readonly": {       
                         "email": "1",        
                         "contact": "1"      
                        }    
                    }  
                }
            }
    var options = {
        amount: 1 * 100,
        key: "rzp_live_c9kw0nllS110Pi",
        currency: "INR",
        name: "nightkingoil",
        order_id: id,
        prefill: {
            email: "lorem@gmail.com",
            contact: data.phoneNumber
        },
        handler: function(response) {
            console.log(response);
            savePaymentDetails(
                response
            );
        },
    };
    var rzp1 = new Razorpay(options);
    
    rzp1.open();
}

async function getOrderId(){
     
    try {
        let req = await fetch(`https://www.nightkingoil.in:3000/api/user/order/get-order-id`);
        let response = await req.json();
        console.log( "response  ",response);
        PopRazrPay(response.id);
    } catch (error) {
        alert(error);
    }
    
};

async function savePaymentDetails(details){
    try {
        let paymentDetails = {
                razorpayOrderId: details.razorpay_order_id,
                razorpayPaymentId: details.razorpay_payment_id,
                razorpaySignature: details.razorpay_signature,
                userName: data.userName,
                phoneNumber: data.phoneNumber,
                address: data.address,
                city: data.city,
                state: data.state,
                pincode: data.pincode,
                orderId: data.orderId,
        };
        let req = await fetch(`https://www.nightkingoil.in:3000/api/user/order/verify`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(paymentDetails)
        });
        let response = await req.json();
        if(response.success){
            alert(response.message);
            alert('Order placed successfully');
            let successBlock = document.getElementById('success-block');
            let mainBlock = document.getElementById('main-block');
            let formShow = document.getElementById('form-show');
            successBlock.classList.remove('d-none');
            mainBlock.classList.add('d-none');
            formShow.classList.add('d-none');
            document.getElementById('phNo').textContent = data.phoneNumber;
            document.getElementById('name-succes').textContent = data.userName;
        }else{
            alert(response.message);
        }
        console.log('payment: ', response);
    } catch (error) {
        alert(error);
    }
}

async function verifyNumber(phNumber){
    try {
        let req = await fetch(`https://www.nightkingoil.in:3000/api/user/${phNumber}`);
        let response = await req.json();
        console.log('phone number: ', response);
        if(response.count == 1){
            document.getElementById('top-ph-error').style.display = 'block';
            document.getElementById('top-ph-error').textContent = 'Phone number already exits.';
        }else{
            data.phoneNumber = parseInt(phNumber);
            document.getElementById('top-ph-error').style.display = 'none';
            document.getElementById('top-ph-error').textContent = 'Please enter a valid phone number';
        }
    } catch (error) {
        alert(error);
    }
}

let whatsapp = document.createElement('div');
whatsapp.className = 'whatsappIconFloat'
whatsapp.style.cssText = `
    position: fixed;
    background: #25d366;
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 010px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 999;`
whatsapp.innerHTML = `<a target="_blank" href="//api.whatsapp.com/send?phone=918050610900&text=Hi, I need a help on: " id="whatsappAnchor"><i class="fab fa-whatsapp"></i></a>`
document.body.appendChild(whatsapp);
document.getElementById('whatsappAnchor').style.cssText = `
    background-color: #25d366;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none !important;
    `
var mq = window.matchMedia("(min-width: 1024px)");
if (mq.matches) {
    whatsapp.style.cssText = `
        position: fixed;
        background: #25d366;
        width: 70px;
        height: 70px;
        bottom: 30px;
        right: 20px;
        font-size: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        z-index: 999;`
}

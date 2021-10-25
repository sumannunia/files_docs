console.log('orem inside js');
$('#calculation-form').submit(function(e){
    e.preventDefault();
    let kidNo = $('#kids').val();
    let prgnantNo = $('#pwoman').val();
    let riceQnt = $('#rice').val();
    let motorQnt = $('#motor').val();
    riceQnt = riceQnt * 1000;
    motorQnt = motorQnt * 1000;

    // console.log(kidNo,"\n", prgnantNo,"\n", riceQnt,"\n", motorQnt);
    let kidsEachDayQntRice = kidNo * 75;
    let pregnantEachDayQntRice = prgnantNo * 100;
    let totalAmtPerDay = kidsEachDayQntRice + pregnantEachDayQntRice;
    let riceTotalDays = Math.floor(riceQnt / totalAmtPerDay);
    let riceLeft =  riceQnt - (riceTotalDays * totalAmtPerDay);
    let totalAmtForPWoman = riceTotalDays * 100;
    let totalAmtForKids = riceTotalDays * 75;

    let kidsEachDayQntmotor = kidNo * 25;
    let pregnantEachDayQntmotor = prgnantNo * 20;
    let totalAmtPerDayMotor = kidsEachDayQntmotor + pregnantEachDayQntmotor;
    let motorTotalDays = Math.floor(motorQnt / totalAmtPerDayMotor);
    let motorLeft =  motorQnt - (motorTotalDays * totalAmtPerDayMotor);
    let totalMotorAmtForPWoman = motorTotalDays * 20;
    let totalMotorAmtForKids = motorTotalDays * 25;



    // console.log(riceLeft / 1000 + 'Kg');
    $('#rQnt').text(riceLeft / 1000 + 'Kg');
    $('#riceDays').text(riceTotalDays + 'days');
    $('#kQnt').text(totalAmtForKids / 1000 + 'Kg');
    $('#pQnt').text(totalAmtForPWoman / 1000 + 'Kg');
    
    $('#mQnt').text(motorLeft / 1000 + 'Kg');
    $('#motorDays').text(motorTotalDays + 'days');
    $('#kmQnt').text(totalMotorAmtForKids / 1000 + 'Kg');
    $('#pmQnt').text(totalMotorAmtForPWoman / 1000 + 'Kg');
})
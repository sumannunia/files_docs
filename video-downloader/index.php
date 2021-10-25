<?php 
    $psp = "https://r3---sn-gwpa-b506.googlevideo.com/videoplayback?expire=1619449613&ei=rYKGYIS9I9Pe3LUPz5O1iAg&ip=47.29.244.212&id=o-AKb7lRfOhK-Lx6JXg5LhitjjlED4VBElLixGL8m1TCH2&itag=18&source=youtube&requiressl=yes&mh=V5&mm=31%2C29&mn=sn-gwpa-b506%2Csn-cvh7knek&ms=au%2Crdu&mv=m&mvi=3&pl=19&initcwndbps=171250&vprv=1&mime=video%2Fmp4&ns=_pvux6YNs95zgXRP11zfe1EF&gir=yes&clen=62729977&ratebypass=yes&dur=811.862&lmt=1602426547560474&mt=1619427638&fvip=3&fexp=24001373%2C24007246&c=WEB&txp=5530434&n=HS5hKWim7tFvtgaOE8&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANoSDi9fQQ0MqWJpKoPvV2vVOWUtAAuCmphlHNc_deY0AiEAl_fpqpeW9yb9ya68C1KitVfu9EPmOToyIQzIJHtiJ4E%3D&sig=AOq0QJ8wRgIhAOH-8cn0zY1xpJazog6Zx8JyMpS6VcffC2fQFglK7PyrAiEA4ye7z2QRcDP2bcR2m0K_5M-RlNSo4nytf9mq2RurCs8%3D";
    header('Content-type: video/mp4');

    header("Content-Disposition:attachment;filename=\"$psp\"");
    //allways a good idea to let the browser know how much data to expect

    header("Content-length: " . filesize($psp) . "\n\n"); 

    echo file_get_contents($psp);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cupiditate dolorem illo, veniam tempora laudantium quis consequuntur nesciunt fugiat voluptas reiciendis iusto quod obcaecati commodi doloremque asperiores ratione. Cumque voluptatem nesciunt ullam odio saepe quis, aut odit quibusdam explicabo totam fugit minus iste, iusto ratione corporis quidem et, accusamus maxime.
</body>
</html>
<?php 

$folderName = "newfile";
if (file_exists($folderName)) {
    foreach (new DirectoryIterator($folderName) as $fileInfo) {
        if ($fileInfo->isDot()) {
        continue;
        }
        if ($fileInfo->isFile() && time() - $fileInfo->getCTime() >= 5*24*60*60) {
            unlink($fileInfo->getRealPath());
        }
    }
}
$folderName2 = "uploads";
if (file_exists($folderName2)) {
    foreach (new DirectoryIterator($folderName2) as $fileInfo) {
        if ($fileInfo->isDot()) {
        continue;
        }
        if ($fileInfo->isFile() && time() - $fileInfo->getCTime() >= 5*24*60*60) {
            unlink($fileInfo->getRealPath());
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Ballet&family=Montez&family=Montserrat:wght@400;500;600;700&family=PT+Sans:wght@400;700&family=Roboto&display=swap"
        rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Damion&family=Dancing+Script:wght@700&family=Hanalei&family=Lobster&family=Long+Cang&family=Mr+Dafoe&family=Pacifico&family=Sacramento&family=Satisfy&family=Six+Caps&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Original+Surfer&display=swap" rel="stylesheet">
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" rel="stylesheet">
        <meta property="og:image" content="http://localhost:8080/cakeWeb/uploads/s5enrcti52_yourCake.jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:title" content="Happy Birthday Card" />
        <meta property="og:description" content="Now wish any one a very warm birthday with happy birthday cake with name.here is collection of 51 happy birthday wishes templates just enter birthday girl/boy name and wish her/him a happy birthday with name." />
        <meta name="description" content="Now wish any one a very warm birthday with happy birthday cake with name.here is collection of 51 happy birthday wishes templates just enter birthday girl/boy name and wish her/him a happy birthday with name.">
        <meta name='dmca-site-verification' content='V3NaS2R4Wmg2b2J5Z3dLNnZCWkd4M0ZRUjRHVFVReDJzNkY1QWM4NGtVOD01' />

    <title>Happy Birthday Wishes With Name(50+unique style)</title>
    <link rel="stylesheet" href="./css/common-style.css">
</head>
<body>

<div class="modal fade" id="theShareButtons" tabindex="-1" aria-labelledby="theShareButtonsLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="theShareButtonsLabel">Share it on</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="icons-for-share">
            <div class="whatsapp-share">
                <a href="whatsapp:send?link=" class="text-decoration-none whatsappshareIcon" id="whatsappShare" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
            <div class="faebook-share">
                <a href="whatsapp:send?link=" class="text-decoration-none fbshareIcon" id="fbShare" target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
            </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
    <header class="bg-light">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="./">Wishes with name.com <i class="fas fa-birthday-cake"></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="./">Home <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="./contact.html">DMCA</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./privacy.html">Privacy</a>
                        </li>
                        
                        
                    </ul>
                   
                </div>
            </nav>
        </div>
    </header>
    <main>
        <article class="theTop-bannerSection">
            <div class="container">
                <div class="row top-banner-row">
                    <div class="col-md-6 col-lg-7 top-banner-col mx-auto">
                        <div class="inside-top-banner-col">
                            <h3 class="thebrandname">
                                Wish Happy Birthday with Name
                               
                            </h3>
                            <h3 class="descrip">
                                
                                Write Name on Cake Images
                            </h3>
                            <div class="name-section">
                    
                            <div class="input-group">
                                <input value="" class="form-control" type="text" name="text-1542372332072" id="forCommorName" required="required" placeholder="Your Name" oninput="updateUserName(this)">
                                <label for="forCommorName">Your Name</label>
                                <div class="req-mark"></div>
                            </div>
                        </div>
                            <!-- <p class="the-descrip-top">
                                Send happy birthday wishes by writing name on birthday cake images via NameBirthdayCakes.net web app. Send birthday
                                quotes & wishes to friends, family members & others. Make a birthday special for your loved ones.
                            </p> -->
                        </div>
                    </div>
                    <!-- <div class="col-md-6 col-lg-5 top-banner-right-col ">
                        <div class="inside-the-right-col-top-banner">
                            <h5 class="theform-heading">Write name on cake</h5>
                            <form id="theCakeFormTop">
                                <div class="form-group">
                                    
                                    <input type="email" class="form-control" id="topFormnameInput" aria-describedby="emailHelp" placeholder="Enter Name / Wish here" required>   
                                </div>
                                <button type="submit" class="btn theCakeFormTopbtn">Generate Image Now</button>
                            </form>
                            <p class="thecaution-text">*Generate a random cake image with name</p>
                        </div>
                    </div> -->
                </div>
            </div>
           
        
        </article>
        <article class="main-content">
            <div class="container">
                
                <div class="row main-data" id="theRowForCols">
                    <div class="col-md-4 col-xl-3 thecard-col d-none">
                        <div class="inside-card-col">
                            
                            <canvas id="can" class="" width="400" height="400" style="border:2px solid #000"></canvas>
                           
                        </div>
                    </div>
                </div>
            </div>
            <article class="thecontent-paras">
            <div class="container for-parasection">
                <div class="thepara-part">
                    <h1 class="heading-ofpara large-heading">
                        Happy Birthday Wishes With Name(50+unique style).
                    </h1>
                    <p class="thecontent-para">
                        Now wish any one a very warm birthday with happy birthday cake with name.here is collection of 51 happy birthday wishes templates just enter birthday girl/boy name and wish her/him a happy birthday with name.
                    </p>
                </div>
                <div class="thepara-part">
                    <h3 class="heading-ofpara">
                        Happy birthday cake with name.
                    </h3>
                    <p class="thecontent-para">
                        Now you can wish your loved ones Happy Birthday with name and make their day special.There are more than 50+ beautiful templates in it, along with the beautiful cakes in those templates, a beautiful Happy Birthday Wishes have also been written,To wish a happy birthday to your loved one, first of all you have to come in this website, after entering their name, more than 50 beautiful using templates will come in front of you, you can download and share any one of them.Now you can make their birthday even more special by sharing the downloaded Happy Birthday Wishes with Name Template with them.
                    </p>
                </div>
                <div class="thepara-part">
                    <h3 class="heading-ofpara">
                        About this wisheswithname.com tool?
                    </h3>
                    <p class="thecontent-para">
                        This is a happy birthday wishing tool. So you can wish Happy Birthday to your dear ones, wishing someone with their name is a very special thing and this tool does the same thing. This tool helps you to make Happy Birthday special wishes with name and quotes.It has more than 50+ wishing templates and all very superior templates.After downloading your favorite template, you can make their day even more special by putting it on your WhatsApp status, Facebook status, Instagram status.All these images have been created by wisheswithname.com and the owner of all the matches is wisheswithname.com.
                    </p>
                </div>
                <div class="thepara-part">
                    <h3 class="heading-ofpara">
                        How to wish someone happy birthday with name?
                    </h3>
                    <p class="thecontent-para">
                        now happy birthday wishes with name is very easy with help of this tool, just enter birthday boy/girl name in the above box, after entering you will see 51+ happy birthday wishing image with name(you entered).now simply download or share any one you like.
                    </p>
                </div>
                
            </div>
        </article>
        </article>
        <!-- <form action="./createFile.php" method="POST">
            <input type="text" name="generateFile">
        </form> -->
        
    </main>

    <footer class="footer-side">
        <div class="container">
            <div class="inside-footer-container">
                <ul class="list-unstyled footer-ul">
                    <li class="the-footer-li"><a href="./" class="text-decoration-none -thefooter-anchors">Home</a></li>
                    <!-- <li class="the-footer-li"><a href="./about.html" class="text-decoration-none -thefooter-anchors">About Us</a></li> -->
                    <li class="the-footer-li"><a href="./contact.html" class="text-decoration-none -thefooter-anchors">DMCA</a></li>
                    <li class="the-footer-li"><a href="./privacy.html" class="text-decoration-none -thefooter-anchors">Privacy</a></li>
                    <li class=""><a href="//www.dmca.com/Protection/Status.aspx?ID=2d437023-01c0-4051-92c5-0f910a2c5a38"
            title="DMCA.com Protection Status" class="dmca-badge"> <img
                src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=2d437023-01c0-4051-92c5-0f910a2c5a38"
                alt="DMCA.com Protection Status" /></a></li>
                </ul>
            </div>
        </div>
        
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.17/fabric.min.js"></script>
    <script src="https://rawgit.com/EffEPi/fabric.curvedText/master/fabric.curvedText.js"></script>

    <script src="./js/common-script.js"></script>
    <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
</body>
</html>
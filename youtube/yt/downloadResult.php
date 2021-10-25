<?php
require_once "class.youtube.php";
$yt  = new YouTubeDownloader();
$downloadLinks ='';
$error='';
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $videoLink = $_POST['video_link'];
    if(!empty($videoLink)) {
        $vid = $yt->getYouTubeCode($videoLink);
        if($vid) {
            echo $vid;
            $result = $yt->processVideo($vid);
            
            if($result) {
                //print_r($result);
                $info = $result['videos']['info'];
                $formats = $result['videos']['formats'];
                $adapativeFormats = $result['videos']['adapativeFormats'];

                

                $videoInfo = json_decode($info['player_response']);

                $title = $videoInfo->videoDetails->title;
                $thumbnail = $videoInfo->videoDetails->thumbnail->thumbnails{0}->url;
            }
            else {
                $error = "Something went wrong";
            }

        }
    }
    else {
        $error = "Please enter a YouTube video URL";
    }
}
?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/header-fotter.css">
    <link rel="stylesheet" href="./css/result.css">
    <meta name="robots" content="noindex,nofollow" />

    <title>Youtube similar search</title>
</head>

<body>
    <div class="menu-forhamburger hamburger-hide">
        <div class="inside-hamburger-menu">
            <div class="thecloseButton" onclick="showHideBar()">
                <i class="fas fa-times"></i>
            </div>
            <div class="the-menuMan">
                <ul class="list-unstyled thetrightnav-ul">
                    <li class="list-of-right-nav"><a href="javascript:void(0)" class="text-decoration-none right-nav-anchor theBrand">Hojai.net</a></li>
                    <li class="list-of-right-nav"><a href="javascript:void(0)" class="text-decoration-none right-nav-anchor theMenuText">Menu</a></li>
                    <li class="list-of-right-nav"><a href="#" class="text-decoration-none right-nav-anchor">link 1</a></li>
                    <li class="list-of-right-nav"><a href="#" class="text-decoration-none right-nav-anchor">link 2</a></li>
                    <li class="list-of-right-nav"><a href="#" class="text-decoration-none right-nav-anchor">link 3</a></li>
                </ul>
            </div>
        </div>
    </div>
    <main>
        <section>
            <article class="container article-for-search">
                <div class="thetopNav">
                    <div class="homebutton">
                        <a href="./index.html" class="homebutton-anchor">
                            hojai.net

                        </a>
                    </div>
                    <div class="theSearchInput">
                        <form class="d-flex position-relative" id="theSearchForm">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search your video"
                                aria-label="Search" id="theSearchInput" readonly>
                            <button class="btn theSearch-btn" type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                    <!-- <div class="hamburger-menu" onclick="showHideBar()">
                        <i class="fas fa-bars"></i>
                        
                    </div> -->
                </div>

                
            </article>
            <hr>
            <article class="container thedata-section">
                <div class="row the-data-row">
                    <div class="col-md-12 col-lg-12 column-for-data-row">
                        <div class="left-col" id="theVidsRow">
                            <!-- <div class="spinner-star d-flex justify-content-center align-items-center">
                                <div class="spinner-border"></div>
                            </div> -->
                            <div class="theIframeSection">
                                <div class="titleTop">Download:  <span class="title-top-text">Lorem, ipsum dolor.</span></div>
                                <div class="theIframe">
                                    <iframe src="https://www.youtube.com/embed/-" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen class="theIframeMan"> </iframe>
                                </div>
                                <div class="file-name-of-video">
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <!-- <div class="theDownLoadButton">
                                    <a href="https://www.mykidsdrawing.in/dashboard?lol" class="text-decoration-none theDownloadAnchor">Download video</a>
                                </div> -->
                            </div>
                            <?php if($error) :?>
                                    <div style="color:red;font-weight: bold;text-align: center"><?php print $error?></div>
                                <?php endif;?>
                                <a href="#" class="thedownloadAnchorMan text-decoration-none"> Download (360p)</a>
                                <?php if($formats):?>
                                
                                
                                

                                <div class="card formSmall">
                                    <!-- <div class="card-header">
                                        <strong>With Video & Sound</strong>
                                    </div> -->
                                    <div class="card-body">
                                       
                                            
                                            <?php foreach ($formats as $video) :?>
                                               <a href="http://indiasblogger.com?link=<?php print urlencode($video['link'])?>&title=<?php print urlencode($title)?>&type=<?php print urlencode($video['type'])?>" class="thedownloadAnchorMan">Download (<?php print $video['quality']?>)</a>
                                               
                                            <?php endforeach;?>
                                        
                                    </div>
                                </div>

                                <div class="card formSmall">
                                    <div class="card-header">
                                        <strong>Videos video only/ Audios audio only</strong>
                                    </div>
                                    <div class="card-body">
                                        <table class="table ">
                                            <tr>
                                                <td>Type</td>
                                                <td>Quality</td>
                                                <td>Download</td>
                                            </tr>
                                            <?php foreach ($adapativeFormats as $video) :?>
                                                <?php if($video['type'] == "audio/mp4") :?>
                                                    <tr>
                                                        <td><?php print $video['type']?></td>
                                                        <td><?php print $video['quality']?></td>
                                                        <td><a href="http://indiasblogger.com?link=<?php print urlencode($video['link'])?>&title=<?php print urlencode($title)?>&type=<?php print urlencode($video['type'])?>">Download</a> </td>
                                                    </tr>
                                                <?php endif;?>
                                                 
                                                
                                            <?php endforeach;?>
                                        </table>
                                    </div>
                                </div>
                                <?php endif;?>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>
    <div class="footer">
        <footer>
            <article class="container">
                <ul class="list-unstyled the-footerul">
                    <a href="./index.html" class="text-decoration-none">
                        <li class="thefooter-nav-item">Home</li>
                    </a>
                    <a href="./privacy.html" class="text-decoration-none">
                        <li class="thefooter-nav-item">Privacy & Policy</li>
                    </a>
                    <a href="./contact.html" class="text-decoration-none">
                        <li class="thefooter-nav-item">Contact Us</li>
                    </a>
                </ul>
            </article>
        </footer>
    </div>


    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
    <script src="./js/result.js"></script>

</body>

</html>
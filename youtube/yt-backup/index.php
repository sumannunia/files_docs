
<!doctype html>
<html lang="en" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Download YouTube video</title>
    <!-- Font-->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet">
    <style>
        /* body {
            font-family: 'Montserrat', sans-serif;
        } */
        .formSmall {
            width: 700px;
            margin: 20px auto 20px auto;
        }
    </style>

     <link rel="stylesheet" href="./css/header-fotter.css">
        <link rel="stylesheet" href="./css/index.css">

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
    <div class="container d-none">
        <form method="post" action="downloadResult.php" class="formSmall">
            <div class="row">
                <div class="col-lg-12">
                    <h7 class="text-align"> Download YouTube Video</h7>
                </div>
                <div class="col-lg-12">
                    <div class="input-group">
                        <input type="text" class="form-control" name="video_link" id="theFormInput" placeholder="Paste link.. e.g. https://www.youtube.com/watch?v=OK_JCtrrv-c">
                        <span class="input-group-btn">
                        <button type="submit" name="submit" id="submit" class="btn btn-primary">Go!</button>
                      </span>
                    </div><!-- /input-group -->
                </div>
            </div><!-- .row -->
        </form>
    </div>
            <main>
        <section>
            <article class="container article-for-search">
                <div class="thetopNav">
                    <div class="homebutton">
                    <a href="./index.php" class="homebutton-anchor">
                        <i class="fas fa-home"></i>
                       
                    </a>
                    </div>
                    <div class="theSearchInput">
                        <form class="d-flex position-relative" id="theSearchForm">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" id="theSearchInput" >
                            <button class="btn theSearch-btn" type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div class="hamburger-menu" onclick="showHideBar()">
                        <i class="fas fa-bars"></i>
                        
                    </div>
                </div>
                
                <hr>
            </article>
            <article class="container thedata-section">
                <div class="row the-data-row" id="theRowForData">
                    <div class="col-md-4 col-lg-3 column-for-data-row">
                        <div class="left-col" id="theVidsRow">
                            
                                <!-- <div class="spinner-border"></div> -->
                                <div class=" inside-col-row">
                                    <a href="./downloadResult.html?videoID=W6NZfCO5SIk" class="text-decoration-none the-redirectanchor" id="W6NZfCO5SIk">
                                    <div class=" col-ofimg">
                                        <div class="image-for-video-poster">
                                            <img src="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg" loading="lazy" alt="" class="theposter-image">
                                        </div>
                                        <div class="col-for-video-details position-relative">
                                            <div class="video-details-text">
                                                <h3 class="thetitle">JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]</h3>
                                            </div>
                                            <div class="play-icon">
                                                <i class="fas fa-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                    
                                </div>
                            
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 column-for-data-row">
                        <div class="left-col" id="theVidsRow">
                            
                                <!-- <div class="spinner-border"></div> -->
                                <div class=" inside-col-row">
                                    <div class=" col-ofimg">
                                        <div class="image-for-video-poster">
                                            <img src="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg" loading="lazy" alt="" class="theposter-image">
                                        </div>
                                        <div class="col-for-video-details">
                                            <div class="video-details-text">
                                                <h3 class="thetitle">JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]</h3>
                                            </div>
                                            <div class="the-anchors">
                                                <a href="./downloadResult.html?videoID=W6NZfCO5SIk" class="text-decoration-none the-redirectanchor"
                                                    id="W6NZfCO5SIk">Download</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 column-for-data-row">
                        <div class="left-col" id="theVidsRow">
                            
                                <!-- <div class="spinner-border"></div> -->
                                <div class=" inside-col-row">
                                    <div class=" col-ofimg">
                                        <div class="image-for-video-poster">
                                            <img src="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg" loading="lazy" alt="" class="theposter-image">
                                        </div>
                                        <div class="col-for-video-details">
                                            <div class="video-details-text">
                                                <h3 class="thetitle">JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]</h3>
                                            </div>
                                            <div class="the-anchors">
                                                <a href="./downloadResult.html?videoID=W6NZfCO5SIk" class="text-decoration-none the-redirectanchor"
                                                    id="W6NZfCO5SIk">Download</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 column-for-data-row">
                        <div class="left-col" id="theVidsRow">
                            
                                <!-- <div class="spinner-border"></div> -->
                                <div class=" inside-col-row">
                                    <div class=" col-ofimg">
                                        <div class="image-for-video-poster">
                                            <img src="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg" loading="lazy" alt="" class="theposter-image">
                                        </div>
                                        <div class="col-for-video-details">
                                            <div class="video-details-text">
                                                <h3 class="thetitle">JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]</h3>
                                            </div>
                                            <div class="the-anchors">
                                                <a href="./downloadResult.html?videoID=W6NZfCO5SIk" class="text-decoration-none the-redirectanchor"
                                                    id="W6NZfCO5SIk">Download</a>
                                            </div>
                                        </div>
                                    </div>
                                    
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
    <script src="./js/index.js"></script>
</body>
</html>
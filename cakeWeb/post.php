<?php

    if ($_SERVER['REQUEST_METHOD'] == "POST")
    {
        // print
        function random_string($length) {
                $key = '';
                $keys = array_merge(range(0, 9), range('a', 'z'));

                for ($i = 0; $i < $length; $i++) {
                    $key .= $keys[array_rand($keys)];
                }

                return $key;
        }
        $file_name = random_string(10) . "_" . $_FILES["file"]["name"];
        $file_type = $_FILES["file"]["type"];
        $temp_name = $_FILES["file"]["tmp_name"];
        $file_size = $_FILES["file"]["size"];
        $error = $_FILES["file"]["error"];
        if (!$temp_name)
        {
            // echo $_FILES;
            exit();
        }
        function compress_image($source_url, $destination_url, $quality)
        {
            

            // echo random_string(10);
            $info = getimagesize($source_url);
            if ($info['mime'] == 'image/jpeg') $image = imagecreatefromjpeg($source_url);
            elseif ($info['mime'] == 'image/gif') $image = imagecreatefromgif($source_url);
            elseif ($info['mime'] == 'image/png') $image = imagecreatefrompng($source_url);
            imagejpeg($image, $destination_url, $quality);
            // echo $_FILES["file"]["name"];
            
            $file = 'newfile/' . random_string(10) . ".html";
            // The new person to add to the file
            // list($name, $extension) = split('[.]', $_FILES["file"]["name"]);
            $person = '<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Ballet&family=Montez&family=Montserrat:wght@400;500;600;700&family=PT+Sans:wght@400;700&family=Roboto&display=swap"
        rel="stylesheet">
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" rel="stylesheet">
    <meta property="og:image" content="https://wisheswithname.com/'. $destination_url . '" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:title" content="Happy Birthday Card" />
    <meta property="og:description" content="Share your birthday card without any effort" />

    <title>Cake for Birthday</title>
    <link rel="stylesheet" href="../css/common-style.css">
</head>

<body>
    <header class="bg-light">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#">Birthday Cake <i class="fas fa-birthday-cake"></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="../">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../about.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../contact.html">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../privacy.html">Privacy</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    </header>
    <article class="theTop-bannerSection theResultPage">
        <div class="container">
            <div class="row top-banner-row">
                <div class="col-md-6 col-lg-5 top-banner-col mx-auto">
                    <div class="inside-top-banner-col">
                    <h5 class="theBirhdayWIsherPage">
                    Happy Birthday 
                    <span id="theFileName"> '.$_FILES["file"]["name"].'</span></h5>
                        <div class="image-container-for-theresult">
                            <img src="https://wisheswithname.com/'.$destination_url.'" alt="">
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-6 col-lg-5 top-banner-right-col">
                    <div class="inside-the-right-col-top-banner">
                        <h5 class="theform-heading">Write name on cake</h5>
                        <form id="theCakeFormTop">
                            <div class="form-group">

                                <input type="email" class="form-control" id="topFormnameInput"
                                    aria-describedby="emailHelp" placeholder="Enter Name / Wish here" required>
                            </div>
                            <button type="submit" class="btn theCakeFormTopbtn">Generate Image Now</button>
                        </form>
                        <p class="thecaution-text">*Generate a random cake image with name</p>
                    </div>
                </div> -->
            </div>
        </div>


    </article>
    <footer class="footer-side">
        <div class="container">
            <div class="inside-footer-container">
                <ul class="list-unstyled footer-ul">
                    <li class="the-footer-li"><a href="../" class="text-decoration-none -thefooter-anchors">Home</a></li>
                    <li class="the-footer-li"><a href="../about.html" class="text-decoration-none -thefooter-anchors">About Us</a></li>
                    <li class="the-footer-li"><a href="../contact.html" class="text-decoration-none -thefooter-anchors">Contact Us</a></li>
                    <li class="the-footer-li"><a href="../privacy.html" class="text-decoration-none -thefooter-anchors">Privacy</a></li>
                </ul>
            </div>
        </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"></script>
        <script src="../js/scr.js"></script>
</body>

</html>';

            // Write the contents to the file, 
            // using the FILE_APPEND flag to append the content to the end of the file
            // and the LOCK_EX flag to prevent anyone else writing to the file at the same time
            file_put_contents($file, $person, FILE_APPEND | LOCK_EX);
            $response = array("message"=>"Success", "FileName"=> $destination_url, "htmllink" => $file);
            echo json_encode($response); 
            // echo $response; 


        }
        if ($error > 0)
        {
            echo $error;
        }
        else if (($file_type == "image/gif") || ($file_type == "image/jpeg") || ($file_type == "image/png") || ($file_type == "image/pjpeg"))
        {
            $filename = compress_image($temp_name, "uploads/" . $file_name, 80);
        }
        else
        {
            echo "Uploaded image should be jpg or gif or png.";
        }
    } 
?>
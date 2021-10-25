<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form  method="post">
        <input type="text" name="url">
        <input type="submit" name="submit">Submit </input>
    </form>
    <?php
        if(isset($_POST['submit'])){
            include_once 'assets/YouTubeDownloader.class.php'; 
            $handler = new YouTubeDownloader(); 
            $youtubeURL = $_POST['url'];
            if(!empty($youtubeURL) && !filter_var($youtubeURL, FILTER_VALIDATE_URL) === false){ 
                // Get the downloader object 
                $downloader = $handler->getDownloader($youtubeURL); 
                
                // Set the url 
                $downloader->setUrl($youtubeURL); 
                
                // Validate the youtube video url 
                if($downloader->hasVideo()){ 
                    // Get the video download link info 
                    $videoDownloadLink = $downloader->getVideoDownloadLink(); 
                    
                    $videoTitle = $videoDownloadLink[0]['title']; 
                    $videoQuality = $videoDownloadLink[0]['qualityLabel']; 
                    $videoFormat = $videoDownloadLink[0]['format']; 
                    $videoFileName = strtolower(str_replace(' ', '_', $videoTitle)).'.'.$videoFormat; 
                    $downloadURL = $videoDownloadLink[0]['url']; 
                    $fileName = preg_replace('/[^A-Za-z0-9.\_\-]/', '', basename($videoFileName)); 
                    
                    if(!empty($downloadURL)){ 
                        // Define header for force download 
                        header("Cache-Control: public"); 
                        header("Content-Description: File Transfer"); 
                        header("Content-Disposition: attachment; filename=$fileName"); 
                        header("Content-Type: application/zip"); 
                        header("Content-Transfer-Encoding: binary"); 
                        
                        // Read the file 
                        readfile($downloadURL); 
                    } 
                }else{ 
                    echo "The video is not found, please check YouTube URL."; 
                } 
            }else{ 
                echo "Please provide valid YouTube URL."; 
            }
        }
    ?>
</body>
</html>
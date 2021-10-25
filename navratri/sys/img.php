<?php
	require_once('function.php');
	$img_path = '../assets/images/base-img.jpg';
	if(isset($_GET['n'])){
		header('Content-type: image/jpeg');
		$jpg_image = imagecreatefromjpeg($img_path);
		$font_color= imagecolorallocate($jpg_image, 111, 63, 4);
		$font_path1 = realpath('../assets/fonts/Redressed.ttf');

		$text = ucfirst($_GET['n']);
		imagettftext($jpg_image, 38, 0, 230, 100, $font_color, $font_path1, $text);
		imagejpeg($jpg_image);
		imagedestroy($jpg_image);
	}else{
		header('Content-type: image/jpeg');
		$jpg_image = imagecreatefromjpeg($img_path);
		imagejpeg($jpg_image);
		imagedestroy($jpg_image);
	}
	
?>
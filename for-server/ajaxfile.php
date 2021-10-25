<?php



if (isset($_FILES['file']['name'])) {
	// file name






	function createThumbnail($imageName, $newWidth, $newHeight, $uploadDir, $moveToDir, $temname, $oldSize)
	{
		// $path = 'uploads/' . $imageName;

		$mime = getimagesize($temname);
		echo $mime;
		if ($mime['mime'] == 'image/png') {
			$src_img = imagecreatefrompng($temname);
		}
		if ($mime['mime'] == 'image/jpg') {
			$src_img = imagecreatefromjpeg($temname);
		}
		if ($mime['mime'] == 'image/jpeg') {
			$src_img = imagecreatefromjpeg($temname);
		}
		if ($mime['mime'] == 'image/pjpeg') {
			$src_img = imagecreatefromjpeg($temname);
		}
		// if($mime['mime'] == 'image/webp'){
		// 	$im = imagecreatefromwebp($temname);
		// 	imagejpeg($im, './example.jpeg', 100);
		// 	$src_img = 
		// }

		$old_x = imageSX($src_img);
		$old_y = imageSY($src_img);

		if ($old_x > $old_y) {
			$thumb_w    =   $newWidth;
			$thumb_h    =   $old_y / $old_x * $newWidth;
		}

		if ($old_x < $old_y) {
			$thumb_w    =   $old_x / $old_y * $newHeight;
			$thumb_h    =   $newHeight;
		}

		if ($old_x == $old_y) {
			$thumb_w    =   $newWidth;
			$thumb_h    =   $newHeight;
		}

		$dst_img        =   ImageCreateTrueColor($thumb_w, $thumb_h);

		imagecopyresampled($dst_img, $src_img, 0, 0, 0, 0, $thumb_w, $thumb_h, $old_x, $old_y);


		// New save location
		$new_thumb_loc = $moveToDir.$imageName;

		if ($mime['mime'] == 'image/png') {
			$result = imagepng($dst_img, $new_thumb_loc, 5);
		}
		if ($mime['mime'] == 'image/jpg') {
			$result = imagejpeg($dst_img, $new_thumb_loc, 50);
		}
		if ($mime['mime'] == 'image/jpeg') {
			$result = imagejpeg($dst_img, $new_thumb_loc, 50);
		}
		if ($mime['mime'] == 'image/pjpeg') {
			$result = imagejpeg($dst_img, $new_thumb_loc, 50);
		}
		if ($mime['mime'] == 'image/svg+xml') {
			$result = imagejpeg($dst_img, $new_thumb_loc, 50);
		}
		if ($mime['mime'] == 'image/gif') {
			$result = imagejpeg($dst_img, $new_thumb_loc, 50);
		}



		imagedestroy($dst_img);
		imagedestroy($src_img);

		$fileSize = filesize("new/$imageName");
		// $width = imagesx($im);
		// $height = imagesy($im);
		// readfile($remoteImage);
		$theSize = round($fileSize / 1024);
		// echo "New file size: $theSize Kb";
		// echo "filePath: new/$imageName";

		$myArr = array($theSize, "new/$imageName", "$imageName", $oldSize);

		$myJSON = json_encode($myArr);
		// echo $theSize;

		echo $myJSON;

		return $result;
	}


	// Upload file
	// if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
	// 	$response = $location;
	// }
	$fileName = $_FILES['file']['name'];
	$type = $_FILES['file']['type'];
	$size = $_FILES['file']['size'];
	$tempName = $_FILES['file']['tmp_name'];
	$error = $_FILES['file']['error'];
	createThumbnail($fileName, 200, 200, "uploads", "new/", $tempName, $size);
	// $response = "new/'.$imageName";


	// echo $response;
	// echo $location;
	exit;
}
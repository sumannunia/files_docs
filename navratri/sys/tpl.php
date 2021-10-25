<?php defined('LAZYFROG') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<?php echo $template->gCode();?>
		<?php echo $meta; ?>
		<?php echo $og;?>
		<!--=====================================
		|				css Part				 |
		=======================================-->
		<!-- Font Awesome -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<!-- Bootstrap core CSS -->
		<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
		<!-- Material Design Bootstrap -->
		<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.9/css/mdb.min.css" rel="stylesheet">
		<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
		<link href="assets/cssjs/style.css" rel="stylesheet">
		<!--=====================================
		|				End of css Part			 |
		=======================================-->
    </head>
    <body>
    	
    	<div class="container-fluid">

    		<div class="wrapper">
    			<img src="assets/images/topnotch.png" class="img-fluid">
	    		<div class="row mb-5 mt-3">
	    			<div class="col-12 p-4">
	    				<span class="header-slogan">
	    					Happy<br/>Navratri
	    				</span>
	    			</div>

	    			<div class="col-12 mb-1">
	    				<img src="assets/images/dividertop.png" class="img-fluid">
					</div>
	    			<div class="col-12">
						<img src="<?php echo $img;?>" class="img-fluid z-depth-1-half">
	    			</div>
	    			<div class="col-12 mb-2 mt-1">
	    				<img src="assets/images/dividerbottom.png" class="img-fluid">
					</div>
	    			
					<div class="col-12 mb-5"><?php echo $template->ad1();?></div>
					</div>
								
					<div class="col-12 mb-2">
	    				<img src="assets/images/dividertop.png" class="img-fluid">
					</div>
					<div class="col-12 mb-3">
						<div class="qtext">
							“Aaya hai Maa Durga ka tyohaar.
Maa aap aur aapke parivaar par sada apni kripa banaye rakhe .
Aapko Navaratri ke pawan avsar par bahut bahut badhai ho.”
						</div>
						<img src="assets/images/dividerbottom.png" class="img-fluid">
					</div>
					<div class="col-12 mb-5"><?php echo $template->ad2();?></div>
					<div class="col-12 mb-2">
	    				<img src="assets/images/navratri.jpg" class="img-fluid z-depth-1-half">
					</div>
					<div class="col-12 mb-5"><?php echo $template->ad3();?></div>
					<iframe src="assets/sound/navratri.mp3" allow="autoplay" id="audioPlay"></iframe>
	    		</div>
			</div>
			

			<footer>
				<?php if($share_exist){ ?>
				<div class="container">
					<div class="row">
						<div class="col-4">
							<a class="btn-warning btn-sm btn-block" style="animation: pulse 1s infinite" href="whatsapp://send?text=*<?php echo $name;?> Wishing You A Very Happy Navratri.* Create your own 👉 <?php echo $og_url;?> " data-action="share/whatsapp/share">
							<img src="assets/images/wp.png">  
				 				SHARE
							</a>
						</div>
						<div class="col-4">
							<a class="btn-warning btn-sm btn-block" style="animation: pulse 1s infinite" href="fb-messenger://share/?link=<?php echo $fb_url;?>">
							<img src="assets/images/fbmsg.png">  
				 				SHARE
							</a>
						</div>
						<div class="col-4">
							<a class="btn-warning btn-sm btn-block" style="animation: pulse 1.1s infinite" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $fb_url;?>" target="_blank" title="Share this post on Facebook">
							<img src="assets/images/fb.png">  
				 				SHARE
							</a>
						</div>
					</div>
				</div>
				<?php }else{ ?>
				
				<div class="container">
					<div class="row">
						<div class="col-12">
							<form method="POST" action="index.php">
								<div class="form-row">
									<div class="col-7">
								  		<input type="text" class="form-control form-control-sm align-middle" name="set-name" placeholder="Enter you name to set it on image" required>
									</div>
									<div class="col-5">
										<button type="submit" class="btn btn-sm btn-warning">Set Name</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<?php }?>
			</footer>
			<div class="left-scroll"></div>
			<div class="right-scroll"></div>
			<div class="hang-left"><img src="assets/images/left.png"></div>
			<div class="hang-right"><img src="assets/images/right.png"></div>
		
		</div><!-- end container -->


		<!--=====================================
		|				js Part				 	|
		=======================================-->
		<!-- jquery and bootstrap cdn -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<!-- Bootstrap core JavaScript -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
		<!-- MDB core JavaScript -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.9/js/mdb.min.js"></script>
		<!-- Custom js -->
		<script src="assets/cssjs/custom.js"></script>
		<!--Designed by Creative_Hat / Freepik>-->
		<!--=====================================
		|				End Of JS Part			 |
		=======================================-->
    </body>
</html>
<?php define("LAZYFROG",true);
	
	/**
	 * This is index file
	 * Generate whole script
	 * DO NOT ALTER DATA AND REDISTRIBUTE WITHOUT MY PERMISSION 
	 */
	require_once('sys/bootstrap.php');

	$data = (Object) array(
		'get_name' => isset($_GET['n']) ? $_GET['n'] : null,
		'post_name' => isset($_POST['set-name']) ? $_POST['set-name'] : null,
		'site_title' => "Create your own Happy Navratri Greetings",
		'event_wish' => "sent you a Happy Navratri Greetings",
		'og_desc' => "Click here and Create your own Navratri Greetings with you name and share with your friends.",
		'user_agent' => $user_agent
	);

	$template = new ClassLib($data);
		$meta = $template->meta();
		$og = $template->og();
		$share_fun = $template->shareFun();
			$img = $share_fun->img_src;
			$share_exist = $share_fun->share_exist;
			$fb_url = $share_fun->fb_url;
			$name = $share_fun->name;
			$og_url = $share_fun->og_url;
	require_once('sys/tpl.php');

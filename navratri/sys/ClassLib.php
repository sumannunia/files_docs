<?php
	/**
	 * This is system class
	 * Generate header section
	 * DO NOT ALTER DATA AND REDISTRIBUTE WITHOUT MY PERMISSION 
	 */
	require_once('function.php');
	class ClassLib
	{
		
		private $get_name;
		private $post_name;
		private $site_title;
		private $event_wish;
		private $og_desc;
		private $user_agent;
		
		
		function __construct($data)
		{
			if(is_object($data)){
				$this->get_name = isset($data->get_name) ? $data->get_name : null;
				$this->post_name = isset($data->post_name) ? $data->post_name : null;
				$this->site_title = $data->site_title;
				$this->event_wish = $data->event_wish;
				$this->og_desc = $data->og_desc;
				$this->user_agent = $data->user_agent;
			}else{
				$this->get_name = "";
				$this->post_name = "";
				$this->site_title = "";
				$this->event_wish = "";
				$this->og_desc = $data->og_desc;
			}
			
		}

		public function meta(){
			return ' 
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	    	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	    	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	    	<meta name="HandheldFriendly" content="true" />
			<link rel="shortcut icon" href="assets/images/fav.png">
			<meta name="description" content="'.$this->og_desc.'">
			<meta name="google" value="notranslate">
			<title>'.$this->site_title.'</title>

			';
		}

		public function og(){
			$og = "";

			if($this->get_name){
				$name = htmlspecialchars($this->get_name);
				$og_title = ucfirst($name)." " . $this->event_wish;
				$img_src = base_url() . "sys/img.php?n=".$name;
				$og_url = base_url() . "index.php?n=".$name;
				$og_image = '<meta property="og:image" itemprop="image" content="'.$img_src.'" />';
				$og_desc = $this->og_desc;
			}elseif($this->post_name){
				$name = htmlspecialchars($_POST['set-name']);
				$og_title = ucfirst($name)." " . $this->event_wish;
				$img_src = base_url()."sys/img.php?n=".$name;
				$og_url = base_url()."index.php?n=".$name;
				$og_image = '<meta property="og:image" itemprop="image" content="'.$img_src.'" />';
				$og_desc = $this->og_desc;
			}else{
				$og_title = $this->event_wish;
				$img_src = "sys/img.php";
				$og_url = base_url()."index.php";
				$fb_url = urlencode(base_url()."index.php");
				$og_image = '<meta property="og:image" itemprop="image" content="'.$img_src.'" />';
				$og_desc = $this->og_desc;
			}
			if($this->user_agent == "wp"){
				$og_image = '<meta property="og:image" itemprop="image" content="'.base_url().'assets/images/wapp.jpg" />';
			}

		    $og = ' 
			    <meta property="og:type" content="website" />
			    <meta property="og:title" content="'.$og_title.'" />
			    <meta property="og:url" content="'.$og_url.'">
			    <meta property="og:description" content="'.$og_desc.'" />
			    <meta property="og:site_name" content="'.$og_title.'" />
			    '.$og_image.'
		    ';

		    return $og;
		}


		public function shareFun(){
			$share_exist = true;
			if($this->get_name){
				$name = htmlspecialchars($this->get_name);
				$name = str_replace(" ", "-", $name);
				$img_src = base_url() . "sys/img.php?n=".$name;
				$share_exist = false;
				$fb_url = urlencode(base_url(). "index.php?n=".$name);
				$og_url = base_url() . "index.php?n=".$name;
			}elseif($this->post_name){
				$name = htmlspecialchars($_POST['set-name']);
				$name = str_replace(" ", "-", $name);
				$img_src = base_url()."sys/img.php?n=".$name;
				$share_exist = true;
				$fb_url = urlencode(base_url()."index.php?n=".$name);
				$og_url = base_url() . "index.php?n=".$name;
			}else{
				$share_exist = false;
				$fb_url = urlencode(base_url()."index.php");
				$img_src = "sys/img.php";
				$og_url = base_url()."index.php";
				$name = "";
			}
			return $share = (Object)array(
				'share_exist' => $share_exist,
				'fb_url' => $fb_url,
				'img_src' => $img_src,
				'name' => $name,
				'og_url' => $og_url
			);
		}

		public function gCode(){
			require_once('google_analytic.php');
		}
		public function ad1(){
			require_once('ad1.php');
		}
		public function ad2(){
			require_once('ad2.php');
		}
		public function ad3(){
			require_once('ad3.php');
		}
	}
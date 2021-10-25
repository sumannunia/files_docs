<?php
	/**
	 * This is bootstrap
	 * DO NOT ALTER DATA AND REDISTRIBUTE WITHOUT MY PERMISSION 
	 */
	require_once('ClassLib.php');
	if(strpos($_SERVER["HTTP_USER_AGENT"], "WhatsApp") !== false){
		$user_agent = "wp";
	}else{
		$user_agent = "";
	}
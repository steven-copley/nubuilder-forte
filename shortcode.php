<?php
	session_start();

	if ( !isset($_SESSION['nubuilder_short_code_data']) ) {
		echo 'error no: 301 - permission denied ';
		die();
	}
	
	$nubuilder_short_code_data			= $_SESSION['nubuilder_short_code_data'];
	$decoded_short_code_data 			= base64_decode($nubuilder_short_code_data);
	$short_code_data 				= json_decode($decoded_short_code_data);
	$session_name					= $short_code_data->SHORT_CODE_SESSION_NAME;

	session_destroy();
	session_name($session_name);
	session_start();

        $_SESSION['nubuilder_wordpress_session_data'] 	= $nubuilder_short_code_data;
	$url 						= "index.php?wpsnsc=$session_name";

	header('Location: ' . $url);
?>

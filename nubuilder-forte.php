<?php
/**
 * @package nubuilder-forte
 * @version 1.5
*/
 
/*
Plugin Name: nuBuilder Forte
Plugin URI: https://www.nubuilder.com/
Description: nuBuilder is a low-code, open-source application builder. Build reports and forms using Wordpress tables and any other table created in your Wordpress database.
Author: nuSoftware
Version: 1.5
Text Domain: nubuilder-forte
*/

if ( ! defined( 'ABSPATH' ) ) exit;

require_once('nubuilder-include.php');

class nuBuilderForte {
	
	function __construct() {

		nubuilderInitDB();
		add_action('auth_redirect', 'nubuilderSetMenu');
		add_action('init', 'nubuilderStartSession', 1);
		add_shortcode( 'nubuilder', 'nubuilderForteShortcode' );
	}
	
	function activate() {

		nubuilderWordpressImportNewDB();
		nuCreateViews(true);
		nubuilderConstructAccessLevels();
		
		flush_rewrite_rules();
		wp_register_script('nubuilder-forte', plugins_url('nubuilder-forte.php', __FILE__));
		wp_enqueue_script('nubuilder-forte');
	}

	function deactivate() {
		flush_rewrite_rules();
	}
}

if ( class_exists( 'nuBuilderForte' ) ) {

	$nuBuilderForte = new nuBuilderForte();
}

register_activation_hook(   __FILE__, array( $nuBuilderForte, 'activate' ) );
register_deactivation_hook( __FILE__, array( $nuBuilderForte, 'deactivate' ) );

function nubuilderSetMenu() {

        add_menu_page('nuBuilder Forte', 'nuBuilder', 'read', 'nubuilder-forte-slug', 'nubuilderMenuFunction', 'dashicons-chart-bar');
}

function nubuilderStartSession() {

        if(!session_id()) {
                session_start();
        } else {
                $_SESSION['nubuilder_wordpress_session_data'] = array();
                $_SESSION['nubuilder_session_data'] = array();
        }
}

function nubuilderMenuFunction() {

	nubuilderStartSession();
	nubuilderConstructSessionData();
	nubuilderConstructAccessLevels();
	
	$url = plugin_dir_url( __FILE__ );
	$user 	= wp_get_current_user();
	$roles 	= $user->roles;

	if ( in_array('administrator', $roles) ) {

		echo "<div class='welcome-panel'>";
		echo "<p class='breadcrumbs'><span class='prefix'>You are here: <strong>nuBuilder for Wordpress</strong></span></p>";
		echo "<h1 class='page-title'>nuBuilder Forte</h1>";
		echo "<div class='welcome-panel'>";
			echo "Using nuBuilder Forte with Wordpress will enable you to build your own custom reports and forms to manage your data.<br>";
			echo "<a class='button button-primary button-hero' href='$url' target='_BLANK'>Start nuBuilder</a>";
			echo '
			<p>You can find help with nuBuilder Forte from the following sites:</p>
        		<ul>
            			<li><a href="https://www.nubuilder.com/wiki" target="_blank">Wiki Documentation</a></li>
            			<li><a href="https://www.nubuilder.com/videos" target="_blank">Video Tutorials</a></li>
            			<li><a href="https://www.nubuilder.com/forums" target="_blank">Forums</a></li>
            			<li><a href="https://www.nubuilder.com/nusoftware" target="_blank">nuSoftware Professional Services</a></li>
        		</ul>';
			echo "When you use nuBuilder Forte inside of Wordpress, all Roles built into your Wordpress setup will be automatically inserted into your nuBuilder Access Levels.<br>";
                        echo "Users in Wordpress with the 'Administrator' role will be automatically granted <em>globeadmin</em> access inside nuBuilder.";	
		echo "</div>";
		echo "</div>";

	} else {
		echo "<script type=\"text/javascript\">window.open('$url');</script>";		
	}
}

function nubuilderForteShortcode($short_code_attributes){

	nubuilderStartSession();

	$validated_short_code_attributes                        	= nuValidateShortCode($short_code_attributes);
	$is_user_logged_in_status 					= is_user_logged_in();

	if ( empty($validated_short_code_attributes[NU_SHORT_CODE_AL]) && false === $is_user_logged_in_status ) {

		// blank access level and no user signed in :: Scenario #3
		return '';

	}  elseif ( empty($validated_short_code_attributes[NU_SHORT_CODE_AL]) && true === $is_user_logged_in_status ) {

 		// blank access level and a user is signed in :: Scenario #2
		$nubuilder_session_data                                 = nubuilderConstructSessionDataHelper();
		$nubuilder_session_data->SHORT_CODE_REQUEST             = 'N';
        	$nubuilder_session_data->SHORT_CODE_SESSION_NAME        = nuID();
		$nubuilder_session_data->SHORT_CODE_ACCESS_LEVEL	= ''; // will get when inside nubuilder
		$auth_info                                      	= wp_get_current_user();
                $nubuilder_session_data->USER_LOGIN             	= $auth_info->user_login;
                $nubuilder_session_data->USER_PASS              	= $auth_info->user_pass;
                $nubuilder_session_data->USER_EMAIL             	= $auth_info->user_email;
                $nubuilder_session_data->USER_DISPLAY_NAME      	= $auth_info->display_name;
                $nubuilder_session_data->USER_ROLES             	= $auth_info->roles;

		if ( in_array('administrator',$auth_info->roles) ) {
                	$nubuilder_session_data->GLOBEADMIN     = true;
        	}

        } elseif ( !empty($validated_short_code_attributes[NU_SHORT_CODE_AL]) ) {

		// non-blank access level :: Scenario #1 
		$nubuilder_session_data                                 = nubuilderConstructSessionDataHelper();
		$nubuilder_session_data->SHORT_CODE_REQUEST             = 'Y';
                $nubuilder_session_data->SHORT_CODE_SESSION_NAME        = nuID();
		$nubuilder_session_data->SHORT_CODE_ACCESS_LEVEL	= $validated_short_code_attributes[NU_SHORT_CODE_AL];
		$nubuilder_session_data->USER_LOGIN             	= '';
                $nubuilder_session_data->USER_PASS              	= '';
                $nubuilder_session_data->USER_EMAIL             	= '';
                $nubuilder_session_data->USER_DISPLAY_NAME      	= '';
                $nubuilder_session_data->USER_ROLES             	= '';

	} else {

		 return '';
	}

	$json                                           		= json_encode($nubuilder_session_data);
        $encode                                         		= base64_encode($json);
	$_SESSION['nubuilder_short_code_data']	   			= $encode;
        $iframe_url     						= plugin_dir_url( __FILE__ ).'shortcode.php';
        $width          						= $validated_short_code_attributes[NU_SHORT_CODE_WIDTH] 	. 'px';
        $height         						= $validated_short_code_attributes[NU_SHORT_CODE_HEIGHT] 	. 'px';
        $top            						= $validated_short_code_attributes[NU_SHORT_CODE_TOP] 		. 'px';
        $left           						= $validated_short_code_attributes[NU_SHORT_CODE_LEFT] 		. 'px';

	if ( $validated_short_code_attributes[NU_SHORT_CODE_STYLE] == '' ) {

		$style = "style='position:absolute;overflow:hidden;top:$top;left:$left;border-style:hidden;border-width:0px;border-color:lightgrey;width:$width;height:$height'";
	} else {
		$style = "style='" . $validated_short_code_attributes[NU_SHORT_CODE_STYLE] ."'";
	}

        $result = "<iframe id='nubuilder4_iframe' $style scrolling='yes' src='$iframe_url'></iframe>";

        return $result;
}

function nubuilderConstructSessionDataHelper() {

	$nubuilder_session_data                         = new stdClass;
        $nubuilder_session_data->PLUGIN                 = true;
	$nubuilder_session_data->GLOBEADMIN             = false;
	$nubuilder_session_data->DB_NAME                = DB_NAME;
        $nubuilder_session_data->DB_USER                = DB_USER;
        $nubuilder_session_data->DB_PASSWORD            = DB_PASSWORD;
        $nubuilder_session_data->DB_HOST                = DB_HOST;
        $nubuilder_session_data->DB_CHARSET             = DB_CHARSET;
        $nubuilder_session_data->NU_SITE_URL            = function_exists('plugin_dir_url') ? plugin_dir_url( __FILE__ ) : '';
        $nubuilder_session_data->WP_ADMIN_URL           = function_exists('admin_url') ?  admin_url() : '';
        $nubuilder_session_data->WP_ROLES               = nubuilderConstructRoles();
        $nubuilder_session_data->WP_SITE_URL            = function_exists('site_url') ? site_url() : '';
        $nubuilder_session_data->WP_HOME_PATH           = function_exists('get_home_path') ? get_home_path() : '';
        $nubuilder_session_data->WP_ABSPATH             = ABSPATH;
        $nubuilder_session_data->WP_WPINC               = WPINC;
        $nubuilder_session_data->WP_BLOG_CHARSET        = function_exists('get_option') ? get_option('blog_charset') : '';
	return $nubuilder_session_data;
}

function nubuilderConstructSessionData() {

        $auth_info                                      = wp_get_current_user();
        
	$nubuilder_session_data       			= nubuilderConstructSessionDataHelper();
        if ( in_array('administrator',$auth_info->roles) ) {
                $nubuilder_session_data->GLOBEADMIN     = true;
        }
        $nubuilder_session_data->USER_LOGIN             = $auth_info->user_login;
        $nubuilder_session_data->USER_PASS              = $auth_info->user_pass;
        $nubuilder_session_data->USER_EMAIL             = $auth_info->user_email;
        $nubuilder_session_data->USER_DISPLAY_NAME      = $auth_info->display_name;
        $nubuilder_session_data->USER_ROLES             = $auth_info->roles;
        
	$json                                           = json_encode($nubuilder_session_data);
        $encode                                         = base64_encode($json);
	$_SESSION['nubuilder_wordpress_session_data']   = $encode;
}

// used during activation
function nubuilderConstructAccessLevels() {

	$select = "SELECT * FROM zzzzsys_access WHERE zzzzsys_access_id = ? ";
	$insert	= "INSERT INTO zzzzsys_access (zzzzsys_access_id, sal_code, sal_description, sal_zzzzsys_form_id) VALUES (?, ?, ?, 'nuuserhome')";
	$roles  = nubuilderConstructRoles();

	for( $x=0; $x < count($roles); $x++ ) {
		
		$zzzzsys_access_id	= $roles[$x][0];
		$sal_code		= $roles[$x][1];
		$sal_description	= $roles[$x][2];
		$select_values		= array($zzzzsys_access_id);
		$insert_values		= array($zzzzsys_access_id, $sal_code, $sal_description);
		$rs			= nuRunQuery($select, $select_values);

		if ( db_num_rows($rs) == 0 ) {
			// this will insert access level only if they don't already exits
			nuRunQuery($insert, $insert_values);
		}
	}
}

// used during activation
function nubuilderConstructRoles() {

        global $wp_roles;
        $roles                          = $wp_roles->get_names();
        $nu_roles                       = array();

        foreach ($roles as $key => $value) {

                $nu_wp_role_id          = nubuilderDerriveId($key);
                $nu_wp_role_code        = nubuilderDerriveCode($key);
                $nu_wp_role_desc        = trim($value);
                $this_array             = array($nu_wp_role_id,$nu_wp_role_code,$nu_wp_role_desc);
                $nu_roles[]             = $this_array;
        }

        return $nu_roles;
}

?>

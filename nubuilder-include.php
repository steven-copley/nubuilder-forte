<?php

if (basename(__FILE__) === basename($_SERVER['SCRIPT_NAME']) ) die('error no: 101 - permission denied');

define('NU_BUILD',				'1.5.0.2018');
define('NU_PRODUCTION_MODE',			true);
define('NU_USE_APACHE_ERROR_LOG',		false);

define('NU_DEFAULT_TIMEZONE',                   'America/New_York');

define('NU_NUBUILDER_GLOBALS',			'NU_NUBUILDER_GLOBALS');
define('NU_GLOBAL_DB',				'NU_GLOBAL_DB');

define('DB_HOST',				'DB_HOST');
define('DB_NAME',				'DB_NAME');
define('DB_USER',				'DB_USER');
define('DB_PASSWORD',				'DB_PASSWORD');
define('DB_CHARSET',				'DB_CHARSET');

define('RULE_NAME',				'rule_name');
define('RULE_LENGTH',				'rule_length');
define('RULE_ALLOWED',				'rule_allowed');
define('RULE_REGX',		           	'rule_reg_expression');
define('RULE_SET_DEFAULT',			'rule_set_default');	

define('NU_REQUEST_TYPE_API',           	'api');
define('NU_REQUEST_TYPE_PMA', 			'pma');
define('NU_REQUEST_TYPE_PDF',			'pdf');
define('NU_REQUEST_TYPE_PHP',			'php');
define('NU_REQUEST_TYPE_HTML',			'html');
define('NU_REQUEST_TYPE_SELECT',		'nuselect');
define('NU_REQUEST_TYPE_CALL',			'nucall');
define('NU_REQUEST_TYPE_SYSTEM_UPDATE',		'nusystemupdate');
define('NU_REQUEST_TYPE_REPORT_DESIGNER',	'nureportdesigner');
define('NU_REQUEST_TYPE_ACE',  			'ace');
define('NU_REQUEST_TYPE_LOGOUT',              	'lo');
define('NU_REQUEST_ILLEGAL',			'illegal');

define('NU_RESPONSE_TYPE_ECHO',			'echo');
define('NU_RESPONSE_TYPE_PAGE',			'page');
define('NU_RESPONSE_TYPE_JSON',			'json');
define('NU_RESPONSE_TYPE_PDF',			'pdf');
define('NU_RESPONSE_TYPE_EVAL',			'eval');
define('NU_RESPONSE_TYPE_BAD',			'bad');

define('NU_DEFAULT_I',                          '');
define('NU_DEFAULT_LAUNCH',                    	'');
define('NU_DEFAULT_OPENER',                    	'');
define('NU_DEFAULT_TARGET',                     '');
define('NU_DEFAULT_SEARCH',                   	'');
define('NU_DEFAULT_IFRAME',                   	'');
define('NU_DEFAULT_BROWSE_FUNCTION',            'browse');
define('NU_DEFAULT_LIKE',                     	'');
define('NU_DEFAULT_USER',                     	'');
define('NU_DEFAULT_PASSWORD',                  	'');

define('NU_SHORT_CODE_AL',			'al');
define('NU_SHORT_CODE_WIDTH',                   'width');
define('NU_SHORT_CODE_HEIGHT',                 	'height');
define('NU_SHORT_CODE_TOP',                     'top');
define('NU_SHORT_CODE_LEFT',                   	'left');
define('NU_SHORT_CODE_STYLE',                   'style');

define('NU_GET_WPSNSC',				'wpsnsc'); //session name used for short code
define('NU_GET_RT',				'rt');	
define('NU_GET_I',                             	'i');
define('NU_GET_LAUNCH',                        	'launch');
define('NU_GET_OPENER',				'opener');
define('NU_GET_TARGET',				'target');
define('NU_GET_SEARCH',				'search');
define('NU_GET_IFRAME',				'iframe');
define('NU_GET_BROWSE_FUNCTION',		'browsefunction');
define('NU_GET_LIKE',				'like');
define('NU_GET_USER',				'u');
define('NU_GET_PASSWORD',			'p');
define('NU_GET_PROCEDURE_CODE',	                'proc');
define('NU_GET_TIME_STAMP',                    	'ts');
define('NU_GET_TABLE_LIST',                     'tt');

define('NU_POST_NUSTATE',			'nuSTATE');
define('NU_POST_PROCEDURE_CODE',                'proc');
define('NU_POST_FILTER',			'nuFilter');

define('NU_SESSION_NUHASH',			'nuHash');
define('NU_SESSION_EXTRAJS',			'EXTRAJS');
define('NU_SESSION_TABLE_ID',			'TABLE_ID');
define('NU_SESSION_NUCOUNTER',          	'nuCounter');
define('NU_SESSION_NUERRORS',                   'nuErrors');
define('NU_SESSION_FORMID',                     'FORM_ID');
define('NU_SESSION_NUVALIDATE',               	'nuValidate');
define('NU_SESSION_NUCALLBACK',               	'nuCallback');
define('NU_SESSION_NUAFTEREVENT',             	'nuAfterEvent');
define('NU_SESSION_NUSETUP',               	'nuSetup');
define('NU_SESSION_TIMESTAMP',                  'SESSION_TIMESTAMP');
define('NU_SESSION_ID',                  	'SESSION_ID'); 
define('NU_SESSION_PERMISSIONS',		'nuPermissions');
define('NU_SESSION_PERMS_FORMS',                'forms');
define('NU_SESSION_PERMS_REPORTS',              'reports');
define('NU_SESSION_PERMS_PHP',                	'procedures');
define('NU_SESSION_PERMS_SESSION',		'session');
define('NU_SESSION_REPORT',			'nu_report');
define('NU_SESSION_COLUMNS',                  	'nu_columns');
define('NU_SESSION_FILES',                     	'nu_files');
define('NU_SESSION_ERROR_FOUND',		'nuErrorFound');	
define('NU_SESSION_SYSTEM_EVAL',		'nuSystemEval');
define('NU_SESSION_PROC_EVAL',			'nuProcedureEval');
define('NU_SESSION_VALIDATED_INPUT',		'nuValidatedInput');
define('NU_SESSION_GRAPHICS',			'nuGraphics');

define('NU_PAGE_LOGOUT',			'index.php');
define('NU_PAGE_PMA',				'vendor/phpmyadmin/db_structure.php?server=1&db=');

define('NU_NUBUILDER_SESSION_DATA', 		'nubuilder_session_data');
define('NU_ACTION',				'nuIndexAction');

define('NU_MSG_INVALID_INPUT',                  'Invalid Input');
define('NU_MSG_ILLEGAL',			'Invalid Session, You do not have any permission within this application');
define('NU_MSG_INVALID',			'There appears to be an error');
define('NU_MSG_PMA_INVALID',			'You have been log out of phpMyAdmin');
define('NU_MSG_PERMISSION_INVALID',             'You do not have permissions to access this page');
define('NU_MSG_POST_INVALID',			'Invalid POST type ');
define('NU_MSG_GET_INVALID',                    'Invalid GET type ');
define('NU_MSG_NO_CODE_PROVIDED_INVALID',	'No procedure code is provided.');
define('NU_MSG_CODE_NOT_FOUND_INVALID',		'Could not find procedure with code given.');
define('NU_MSG_CODE_INVALID',			'Invalid procedure was found.');
define('NU_MSG_NO_SESSION_SESSION_INVALID',	'Could not find session data.');
define('NU_MSG_NO_ACCESS_SYSUPDATE_INVALID',    'You do not have access to the system updater.');
define('NU_MSG_NO_ACCESS_DESIGNER_INVALID',    	'You do not have access to the Report Designer.');
define('NU_MSG_NO_ACCESS_TO_CODE_INVALID',	'You do not have access to this procedure.');
define('NU_MSG_NO_ACCESS_PRINT_HTML_INVALID',  	'You do not have permissions to access this form.');

require_once('vendor/tcpdf/tcpdf.php');

$nu_datetime = date("YmdHis");	

class nubuilder_session_data {

        public static $nubuilder 				= array(
	'NEW'							=> 'unknown',
        'PLUGIN'                				=> true,
	'isGlobeadmin'						=> false,
        'GLOBEADMIN'            				=> false,
        'GLOBEADMIN_NAME'       				=> '',
        'GLOBEADMIN_PASS'       				=> '',
        'USER_LOGIN'            				=> '', // sus_login_name or globeadmin 
        'USER_PASS'             				=> '',
        'USER_EMAIL'            				=> '',
        'USER_DISPLAY_NAME'     				=> '', // sus_name or globeadmin
        'USER_ROLES'            				=> '',
        'DB_NAME'               				=> '',
        'DB_USER'               				=> '',
        'DB_PASSWORD'           				=> '',
        'DB_HOST'               				=> '',
        'DB_CHARSET'            				=> '',
        'NU_SITE_URL'           				=> '',
        'WP_ADMIN_URL'          				=> '',
        'WP_ROLES'              				=> '',
        'WP_SITE_URL'           				=> '',
	'WP_HOME_PATH'						=> '',
	'WP_ABSPATH'						=> '',	
	'WP_WPINC'						=> '',	
	'WP_BLOG_CHARSET'                                       => 'UTF-8',
        'JQ_PATH'               				=> '',
	'PHP_MAILER_PATH'					=> '',
        'SESSION_ID'            				=> null,
        'SESSION_TIMESTAMP'     				=> null,
        'translation'           				=> null,
	'ACCESS_LEVEL_CODE'					=> '', // sal_code
	'ACCESS_LEVEL_ID'					=> '', // zzzzsys_access_id
	'USER_ID'						=> '', // zzzzsys_user_id
	'HOME_FORM_ID'						=> '', // zzzzsys_form_id
	'GLOBAL_ACCESS'						=> '', // 0 or 1
	'nuPermissions'                                         => null,
	'nuGraphics'                                            => null,
	'nuSetup'                                               => null,
	'SHORT_CODE_SESSION_NAME'				=> '',
	'SHORT_CODE_ACCESS_LEVEL'				=> '',
	'SHORT_CODE_REQUEST'					=> 'N'
	);

        public static function get_nubuilder_session_data() {

                return self::$nubuilder;
        }
		
	public static function construct_wordpress($wpdata) {

                self::$nubuilder['PLUGIN']              	= true;
		if ( $wpdata->GLOBEADMIN === true ) {

                        self::$nubuilder['GLOBEADMIN_NAME']     = $wpdata->USER_LOGIN;
                        self::$nubuilder['GLOBEADMIN_PASS']     = $wpdata->USER_PASS;
                        self::$nubuilder['GLOBEADMIN']          = true;
			self::$nubuilder['isGlobeadmin']	= true;	

                } else {
		
			self::$nubuilder['GLOBEADMIN_NAME']     = nuID();
                        self::$nubuilder['GLOBEADMIN_PASS']     = nuID();
                        self::$nubuilder['GLOBEADMIN']          = false;
                        self::$nubuilder['isGlobeadmin']        = false;
		}

		self::$nubuilder['USER_LOGIN']                  = $wpdata->USER_LOGIN;
                self::$nubuilder['USER_PASS']                   = $wpdata->USER_PASS;
                self::$nubuilder['USER_EMAIL']                  = $wpdata->USER_EMAIL;
                self::$nubuilder['USER_DISPLAY_NAME']           = $wpdata->USER_DISPLAY_NAME;
		self::$nubuilder['USER_ROLES']                  = $wpdata->USER_ROLES;

                self::$nubuilder['DB_NAME']             	= $wpdata->DB_NAME;
                self::$nubuilder['DB_USER']             	= $wpdata->DB_USER;
                self::$nubuilder['DB_PASSWORD']         	= $wpdata->DB_PASSWORD;
                self::$nubuilder['DB_HOST']             	= $wpdata->DB_HOST;
                self::$nubuilder['DB_CHARSET']          	= $wpdata->DB_CHARSET;

                self::$nubuilder['NU_SITE_URL']         	= $wpdata->NU_SITE_URL;

                self::$nubuilder['WP_ADMIN_URL']        	= $wpdata->WP_ADMIN_URL;
                self::$nubuilder['WP_ROLES']            	= $wpdata->WP_ROLES;
                self::$nubuilder['WP_SITE_URL']         	= $wpdata->WP_SITE_URL;
		self::$nubuilder['WP_HOME_PATH']		= $wpdata->WP_HOME_PATH;	
                self::$nubuilder['WP_ABSPATH']			= $wpdata->WP_ABSPATH;
                self::$nubuilder['WP_WPINC']			= $wpdata->WP_WPINC;
                self::$nubuilder['WP_BLOG_CHARSET']     	= $wpdata->WP_BLOG_CHARSET;
		self::$nubuilder['JQ_PATH']                     = $wpdata->WP_SITE_URL . '/' . $wpdata->WP_WPINC . '/js/jquery/jquery.js';
		self::$nubuilder['PHP_MAILER_PATH']		= $wpdata->WP_ABSPATH . $wpdata->WP_WPINC . '/class-phpmailer.php';
		self::$nubuilder['ACCESS_LEVEL_CODE']        	= $wpdata->USER_ROLES[1];
		self::$nubuilder['ACCESS_LEVEL_ID']             = $wpdata->USER_ROLES[0];

		if ( isset($wpdata->SHORT_CODE_SESSION_NAME) ) { 
			self::$nubuilder['SHORT_CODE_SESSION_NAME'] 	= $wpdata->SHORT_CODE_SESSION_NAME;
		}
		if ( isset($wpdata->SHORT_CODE_ACCESS_LEVEL) ) {
                        self::$nubuilder['SHORT_CODE_ACCESS_LEVEL'] 	= $wpdata->SHORT_CODE_ACCESS_LEVEL;
                }
		if ( isset($wpdata->SHORT_CODE_REQUEST) ) {
                        self::$nubuilder['SHORT_CODE_REQUEST']          = $wpdata->SHORT_CODE_REQUEST;
                }

        }
}

function nuGetValidationPostRules() {

	/*
        RULE_NAME               ::      the name of the $_GET variable
        RULE_LENGTH             ::      null or integer
        RULE_ALLOWED            ::      null or an array
        RULE_REGX               ::      null or a regx expression
        RULE_SET_DEFAULT        ::      null or a value
        see function            ::      nuValidateItemOrDie
        */

	$rules                          = array();

	$rules[0][RULE_NAME]           = NU_POST_PROCEDURE_CODE;
        $rules[0][RULE_LENGTH]         = 500;
        $rules[0][RULE_ALLOWED]        = null;
        $rules[0][RULE_REGX]           = '/[^-a-zA-Z0-9_]/';
        $rules[0][RULE_SET_DEFAULT]    = null;
	
	$rules[1][RULE_NAME]           = NU_POST_FILTER;
        $rules[1][RULE_LENGTH]         = null;
        $rules[1][RULE_ALLOWED]        = null;
        $rules[1][RULE_REGX]           = null;
        $rules[1][RULE_SET_DEFAULT]    = null;	

	$rules[2][RULE_NAME]           = NU_POST_NUSTATE;
        $rules[2][RULE_LENGTH]         = null;
        $rules[2][RULE_ALLOWED]        = null;
        $rules[2][RULE_REGX]           = null;
        $rules[2][RULE_SET_DEFAULT]    = null;

	return $rules;
}

function nuGetAllowedShortCodeVariablesList() {

        $allowed_short_code_variables         = array();
        $allowed_short_code_variables[]       = NU_SHORT_CODE_AL;
        $allowed_short_code_variables[]       = NU_SHORT_CODE_WIDTH;
        $allowed_short_code_variables[]       = NU_SHORT_CODE_HEIGHT;
	$allowed_short_code_variables[]       = NU_SHORT_CODE_TOP;
	$allowed_short_code_variables[]       = NU_SHORT_CODE_LEFT;
	$allowed_short_code_variables[]       = NU_SHORT_CODE_STYLE;

        return $allowed_short_code_variables;
}

function nuGetValidationShortCodeRules() {

	/*
        RULE_NAME               ::      the name of the $_GET variable
        RULE_LENGTH             ::      null or integer
        RULE_ALLOWED            ::      null or an array
        RULE_REGX               ::      null or a regx expression
        RULE_SET_DEFAULT        ::      null or a value
        see function            ::      nuValidateItemOrDie
        */
	$rules                          = array();

	$rules[0][RULE_NAME]            = NU_SHORT_CODE_AL;
        $rules[0][RULE_LENGTH]          = 25;
        $rules[0][RULE_ALLOWED]         = null;
        $rules[0][RULE_REGX]            = '/[^a-zA-Z0-9]/';
        $rules[0][RULE_SET_DEFAULT]     = '';

	$rules[1][RULE_NAME]            = NU_SHORT_CODE_WIDTH;
        $rules[1][RULE_LENGTH]          = 25;
        $rules[1][RULE_ALLOWED]         = null;
        $rules[1][RULE_REGX]            = '/[^a-zA-Z0-9]/';
        $rules[1][RULE_SET_DEFAULT]     = '900';

	$rules[2][RULE_NAME]            = NU_SHORT_CODE_HEIGHT;
        $rules[2][RULE_LENGTH]          = 25;
        $rules[2][RULE_ALLOWED]         = null;
        $rules[2][RULE_REGX]            = '/[^a-zA-Z0-9]/';
        $rules[2][RULE_SET_DEFAULT]     = '500';

	$rules[3][RULE_NAME]            = NU_SHORT_CODE_LEFT;
        $rules[3][RULE_LENGTH]          = 25;
        $rules[3][RULE_ALLOWED]         = null;
        $rules[3][RULE_REGX]            = '/[^a-zA-Z0-9]/';
        $rules[3][RULE_SET_DEFAULT]     = '0';

	$rules[4][RULE_NAME]            = NU_SHORT_CODE_TOP;
        $rules[4][RULE_LENGTH]          = 25;
        $rules[4][RULE_ALLOWED]         = null;
        $rules[4][RULE_REGX]            = '/[^a-zA-Z0-9]/';
        $rules[4][RULE_SET_DEFAULT]     = '0';

	$rules[5][RULE_NAME]            = NU_SHORT_CODE_STYLE;
        $rules[5][RULE_LENGTH]          = null;
        $rules[5][RULE_ALLOWED]         = null;
        $rules[5][RULE_REGX]            = null;
        $rules[5][RULE_SET_DEFAULT]     = 'overflow:hidden;border-style:hidden;border-width:0px;width:1900px;height:1900px';

	return $rules;
}

function nuGetValidationGetRules() {

	/*
	RULE_NAME		:: 	the name of the $_GET variable
        RULE_LENGTH 		:: 	null or integer
        RULE_ALLOWED		:: 	null or an array
       	RULE_REGX		:: 	null or a regx expression
        RULE_SET_DEFAULT	:: 	null or a value
	see function 		::	nuValidateItemOrDie
	*/
	$rules				= array();
	
	$rules[0][RULE_NAME]        	= NU_GET_RT;
	$rules[0][RULE_LENGTH]        	= 16;
	$rules[0][RULE_ALLOWED]       	= nuGetAllowedRequestTypesList();
	$rules[0][RULE_REGX]		= '/[^-a-z]/';
	$rules[0][RULE_SET_DEFAULT]	= null;

        $rules[1][RULE_NAME]        	= NU_GET_I;
	$rules[1][RULE_LENGTH]        	= 25;
	$rules[1][RULE_ALLOWED]       	= null;
	$rules[1][RULE_REGX]            = '/[^a-zA-Z0-9]/';
	$rules[1][RULE_SET_DEFAULT]     = NU_DEFAULT_I;

        $rules[2][RULE_NAME]        	= NU_GET_LAUNCH;
	$rules[2][RULE_LENGTH]        	= 25;
	$rules[2][RULE_ALLOWED]       	= null;
	$rules[2][RULE_REGX]            = '/[^a-zA-Z0-9]/';
	$rules[2][RULE_SET_DEFAULT]     = NU_DEFAULT_LAUNCH;

        $rules[3][RULE_NAME]        	= NU_GET_OPENER;
	$rules[3][RULE_LENGTH]        	= 25;
	$rules[3][RULE_ALLOWED]       	= null;
	$rules[3][RULE_REGX]            = '/[^a-zA-Z0-9]/';
	$rules[3][RULE_SET_DEFAULT]     = NU_DEFAULT_OPENER;

        $rules[4][RULE_NAME]        	= NU_GET_TARGET;
	$rules[4][RULE_LENGTH]        	= 500;
	$rules[4][RULE_ALLOWED]       	= null;
	$rules[4][RULE_REGX]            = '/[^-a-zA-Z0-9_]/';
	$rules[4][RULE_SET_DEFAULT]     = NU_DEFAULT_TARGET;

        $rules[5][RULE_NAME]        	= NU_GET_SEARCH;
	$rules[5][RULE_LENGTH]        	= 25;
	$rules[5][RULE_ALLOWED]       	= null;
	$rules[5][RULE_REGX]            = '/[^a-zA-Z0-9]/';
	$rules[5][RULE_SET_DEFAULT]     = NU_DEFAULT_SEARCH;

        $rules[6][RULE_NAME]        	= NU_GET_IFRAME;
	$rules[6][RULE_LENGTH]        	= 25;
	$rules[6][RULE_ALLOWED]       	= null;
	$rules[6][RULE_REGX]            = '/[^a-zA-Z0-9]/';
	$rules[6][RULE_SET_DEFAULT]     = NU_DEFAULT_IFRAME;

        $rules[7][RULE_NAME]        	= NU_GET_BROWSE_FUNCTION;
	$rules[7][RULE_LENGTH]        	= 99;
	$rules[7][RULE_ALLOWED]       	= null;
	$rules[7][RULE_REGX]            = '/[^-a-zA-Z0-9_]/';
	$rules[7][RULE_SET_DEFAULT]     = NU_DEFAULT_BROWSE_FUNCTION;

        $rules[8][RULE_NAME]        	= NU_GET_LIKE;
	$rules[8][RULE_LENGTH]        	= 99;
	$rules[8][RULE_ALLOWED]       	= null;
	$rules[8][RULE_REGX]            = '/[^-a-zA-Z0-9_]/';
	$rules[8][RULE_SET_DEFAULT]     = NU_DEFAULT_LIKE;

        $rules[9][RULE_NAME]        	= NU_GET_USER;
	$rules[9][RULE_LENGTH]        	= 60; // zzzzsys_user -> sus_login_name
	$rules[9][RULE_ALLOWED]       	= null;
	$rules[9][RULE_REGX]            = '/[^-a-zA-Z0-9_]/';
	$rules[9][RULE_SET_DEFAULT]     = NU_DEFAULT_USER;

        $rules[10][RULE_NAME]        	= NU_GET_PASSWORD;
	$rules[10][RULE_LENGTH]       	= 300; // zzzzsys_user -> sus_login_password
	$rules[10][RULE_ALLOWED]       	= null;	
	$rules[10][RULE_REGX]           = '/[^-a-zA-Z0-9_]/';
	$rules[10][RULE_SET_DEFAULT]    = NU_DEFAULT_PASSWORD;

        $rules[11][RULE_NAME]        	= NU_GET_TIME_STAMP;
	$rules[11][RULE_LENGTH]       	= 14; // date("YmdHis");		
	$rules[11][RULE_ALLOWED]       	= null;
	$rules[11][RULE_REGX]           = '/[^0-9]/';
	$rules[11][RULE_SET_DEFAULT]    = null;

        $rules[12][RULE_NAME]        	= NU_GET_PROCEDURE_CODE;
	$rules[12][RULE_LENGTH]       	= 300; // zzzzsys_php - > sph_code
	$rules[12][RULE_ALLOWED]     	= null; 
	$rules[12][RULE_REGX]           = '/[^-a-zA-Z0-9_]/';
	$rules[12][RULE_SET_DEFAULT]    = null;

        $rules[13][RULE_NAME]        	= NU_GET_TABLE_LIST;
	$rules[13][RULE_LENGTH]      	= null;
	$rules[13][RULE_ALLOWED]     	= null;
	$rules[13][RULE_REGX]           = null;
	$rules[13][RULE_SET_DEFAULT]    = null;

	$rules[14][RULE_NAME]           = NU_GET_WPSNSC;
        $rules[14][RULE_LENGTH]         = 25;
        $rules[14][RULE_ALLOWED]        = null;
        $rules[14][RULE_REGX]           = '/[^a-zA-Z0-9]/';
        $rules[14][RULE_SET_DEFAULT]    = null;

	return $rules;
}

function nuGetAllowedPostVariablesList() {

	$allowed_post_variables		= array();
	$allowed_post_variables[]       = NU_POST_NUSTATE;
        $allowed_post_variables[]       = NU_POST_PROCEDURE_CODE;
        $allowed_post_variables[]       = NU_POST_FILTER;

	return $allowed_post_variables;
}

function nuGetAllowedGetVariablesList() {

	$allowed_get_variables		= array();
	$allowed_get_variables[]	= NU_GET_WPSNSC;
	$allowed_get_variables[]        = NU_GET_RT;
        $allowed_get_variables[]        = NU_GET_I;
        $allowed_get_variables[]        = NU_GET_LAUNCH;
        $allowed_get_variables[]        = NU_GET_OPENER;
        $allowed_get_variables[]        = NU_GET_TARGET;
        $allowed_get_variables[]        = NU_GET_SEARCH;
        $allowed_get_variables[]        = NU_GET_IFRAME;
        $allowed_get_variables[]        = NU_GET_BROWSE_FUNCTION;
        $allowed_get_variables[]        = NU_GET_LIKE;
        $allowed_get_variables[]        = NU_GET_USER;
        $allowed_get_variables[]        = NU_GET_PASSWORD;
        $allowed_get_variables[]        = NU_GET_TIME_STAMP;
        $allowed_get_variables[]        = NU_GET_PROCEDURE_CODE;
        $allowed_get_variables[]        = NU_GET_TABLE_LIST;
	
	return $allowed_get_variables;
}

function nuGetAllowedRequestTypesList() {

	$allowed_request_types		= array();
	$allowed_request_types[]        = NU_REQUEST_TYPE_API;
        $allowed_request_types[]        = NU_REQUEST_TYPE_PMA;
        $allowed_request_types[]        = NU_REQUEST_TYPE_PDF;
        $allowed_request_types[]        = NU_REQUEST_TYPE_PHP;
        $allowed_request_types[]        = NU_REQUEST_TYPE_HTML;
        $allowed_request_types[]        = NU_REQUEST_TYPE_SELECT;
        $allowed_request_types[]        = NU_REQUEST_TYPE_CALL;
        $allowed_request_types[]        = NU_REQUEST_TYPE_SYSTEM_UPDATE;
        $allowed_request_types[]        = NU_REQUEST_TYPE_REPORT_DESIGNER;
        $allowed_request_types[]        = NU_REQUEST_TYPE_ACE;
        $allowed_request_types[]        = NU_REQUEST_TYPE_LOGOUT;

	return $allowed_request_types;
}

function nuValidateInput() {
	
        $nuValidatedInput		= array();
	$posts 				= nuValidatePost();
	$gets  				= nuValidateGet();	
	$nuValidatedInput 		= array_merge($posts,$gets);

	return $nuValidatedInput; 
}

function nuValidateShortCode($short_code_attributes) {

	$sanitizedShortCode          		= array();
	$allowed_short_code_variables 		= nuGetAllowedShortCodeVariablesList();
        $rules                  		= nuGetValidationShortCodeRules();

	// this makes sure we are using an array
	if ( !is_array($short_code_attributes)){
		$short_code_attributes = null;
	        $short_code_attributes = array();
	}

	// this checks if any array elements that are supplied are in our allowed list of items
	foreach ($short_code_attributes as $key => $value) {

                nuValidateCheckAllowedOrDie($key, $allowed_short_code_variables, 'allowed_short_code_variables');
        }

	for ( $x=0; $x<count($rules); $x++ ) {

                $rule_name = $rules[$x][RULE_NAME];
		if ( !array_key_exists ($rule_name, $short_code_attributes) ) {
			$short_code_attributes[$rule_name] = '';
		}
		$sanitizedShortCode[$rule_name] = nuValidateItemOrDie( $short_code_attributes[$rule_name], $rules[$x] );
        }

        return $sanitizedShortCode;
}

function nuValidatePost() {

	$sanitizedPost 		= array();
	$input			= $_POST;

	$allowed_post_variables = nuGetAllowedPostVariablesList();
	$rules			= nuGetValidationPostRules();

	foreach ($input as $key => $value) {

                nuValidateCheckAllowedOrDie($key, $allowed_post_variables, 'allowed_post_variables');
        }

	for ( $x=0; $x<count($rules); $x++ ) {

                $rule_name      = $rules[$x][RULE_NAME];

                if ( isset($input[$rule_name]) ) {

                        $sanitizedPost[$rule_name] = nuValidateItemOrDie( $input[$rule_name], $rules[$x] );
                }
        }

	return $sanitizedPost;
}

function nuValidateItemOrDie($item, $rule) {

        /*
        RULE_NAME               ::      the name of the $_GET variable
        RULE_LENGTH             ::      null or integer
        RULE_ALLOWED            ::      null or an array
        RULE_REGX               ::      null or a regx expression
	RULE_SET_DEFAULT        ::      null or a value
        see function            ::       nuGetValidationGetRules()
        */

	$rule_name      = $rule[RULE_NAME];	
   	$rule_length    = $rule[RULE_LENGTH];  		
      	$rule_allowed   = $rule[RULE_ALLOWED]; 	
	$rule_regx	= $rule[RULE_REGX];  
	$rule_default	= $rule[RULE_SET_DEFAULT];  		

	// Validate Max Allowed Length
	if ( !is_null($rule_length) ) {

		nuValidateCheckLengthOrDie($item, $rule_length, $rule_name);
	}

	// Validate allowed item from within an array of allowed items
	if ( !is_null($rule_allowed) ) {

		nuValidateCheckAllowedOrDie($item, $rule_allowed, $rule_name);
	}	

	// Validate against a regx rule
        if ( !is_null($rule_regx) ) {

		nuValidateCheckRegXOrDie($item, $rule_regx, $rule_name);
        }

	if ( !is_null($rule_default) && empty($item) ) {
	
		return $rule_default;
	}

        return $item;
}

function nuValidateCheckAllowedOrDie($item, $list, $rule_name) {

        if ( !in_array($item, $list) ) {
                 nuDie("$rule_name :: $item not allowed");
        }
}

function nuValidateCheckLengthOrDie($item, $length, $rule_name) {

        if ( strlen($item) > $length ) {
                nuDie("$rule_name :: $item exceeds allowed length");
        }
}

function nuValidateCheckRegXOrDie($item, $regx, $rule_name) {

	// check for empty string which is allowed
	if ( $item == '' ) {
		return;
	}

	$passed_item = preg_replace($regx, '', $item);	
	
	if ( $passed_item !== $item ) {
		 nuDie("$rule_name :: $item includes non allowed characters");
	}
}

function nuValidateGet() {

	$sanitizedGet 		= array();
	$input			= $_GET;
	$allowed_get_variables 	= nuGetAllowedGetVariablesList();
	$rules 			= nuGetValidationGetRules();

	foreach ($input as $key => $value) {

		nuValidateCheckAllowedOrDie($key, $allowed_get_variables, 'Allowed GET Variables');
	}

	for ( $x=0; $x<count($rules); $x++ ) {

		$rule_name 	= $rules[$x][RULE_NAME];

		if ( isset($input[$rule_name]) ) {

			$sanitizedGet[$rule_name] = nuValidateItemOrDie( $input[$rule_name], $rules[$x] ); 
		}
	}

	return $sanitizedGet;
}

function nuInitialization() {

	// do stuff that can only happen before session_start is called
        nuPreSessionInitialization();

        // setup session
        nuSessionInitialization();

        // setup items that require both the session and database connection
        nuAfterSessionInitialization();
}

function nuCheckForNamedSession() {

	$rule                           = array();
        $rule[RULE_NAME]                = NU_GET_WPSNSC;
        $rule[RULE_LENGTH]              = 25;
        $rule[RULE_ALLOWED]             = null;
        $rule[RULE_REGX]                = '/[^a-zA-Z0-9]/';
        $rule[RULE_SET_DEFAULT]         = null;

	// this the only place where a GET variable is used before the session starts
	if ( !empty($_GET[NU_GET_WPSNSC]) ) {

                $session_name = nuValidateItemOrDie($_GET[NU_GET_WPSNSC],$rule);
	} else {	
		$session_name = '';
	}
	return $session_name;
}

function nuSessionName() {

	$session_name = nuCheckForNamedSession();

	if ( $session_name != '' ) {
          	session_name($session_name);
	}
}

function nuSessionInitialization() {

	if ( !session_id() ) {
		
		nuSessionName();
                session_start();
        }

	if ( nuCheckToLoadNewSession() ) {

                nuLoadNewSession();

        } else {

		nuRefreshSession();

	}

	// setup the global database connection
	nubuilderInitDB();

	// put input into session 
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT] = nuValidateInput();
}

function nuCheckToLoadNewSession() {

	if ( !isset($_SESSION[NU_NUBUILDER_SESSION_DATA])) {
		return true;			
	}

	if ( !isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]) ) {	
		return true;
	}
	
	if ( $_SESSION[NU_NUBUILDER_SESSION_DATA] == array() ) {
                return true;
        }

	if ( empty($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]) ) {
                return true;
        }

	if ( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID] == 'unknown' ) {
                return true;
        }

	return false;
}

function nuPreSessionInitialization() {

	set_time_limit(0);
        mb_internal_encoding('UTF-8');
        error_reporting( error_reporting() & ~E_NOTICE );
}

function nuAfterSessionInitialization() {

	// update session if NEW or existing
	if ( true === $_SESSION[NU_NUBUILDER_SESSION_DATA]['NEW'] ) {

		// Check if we have a logged in user from wordpress  and make sure they have an access level inside nubuiler
		nuCheckWPUser();

		// update setup info, process login and put permission into session 
		nuAfterSessionInitializationNewSession(); // dies if login is invalid
       
	 } else {
		// check session
		nuAfterSessionInitializationExistingSession();  // dies if session has timed out 
	}

	// Set timezone region in the database to the same as the php setting
        nuClientTimeZone();

	//Set the Index Action
	nuMarshalIndexAction();
}

// this function runs during loading index.php and requires $_SESSION['nubuilder_session_data'] to be loaded
function nuCheckWPUser() {

	if ( $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_LOGIN'] == '' ) {
		return;
	}

        $zzzzsys_user_id        = nuID();
        $sus_zzzsys_access_id   = nubuilderDerriveId($_SESSION['nubuilder_session_data']['USER_ROLES'][0]);
        $sus_language           = '';
        $sus_name               = $_SESSION['nubuilder_session_data']['USER_DISPLAY_NAME'];
        $sus_email              = $_SESSION['nubuilder_session_data']['USER_EMAIL'];
        $sus_login_name         = $_SESSION['nubuilder_session_data']['USER_LOGIN'];
        $sus_login_password     = $_SESSION['nubuilder_session_data']['USER_PASS'];
        $select                 = "SELECT * FROM zzzzsys_user WHERE sus_login_name = ? ";
        $insert                 = "INSERT INTO zzzzsys_user (zzzzsys_user_id, sus_zzzzsys_access_id, sus_language, sus_name, sus_email, sus_login_name, sus_login_password)  VALUES (?,?,?,?,?,?,?) ";
        $update                 = "UPDATE zzzzsys_user SET sus_name = ?,  sus_email = ?, sus_login_password = ? WHERE sus_login_name = ? "; // notice we do not update the access level
        $select_values          = array($sus_login_name);
        $insert_values          = array($zzzzsys_user_id, $sus_zzzsys_access_id, $sus_language, $sus_name, $sus_email, $sus_login_name, $sus_login_password);
        $update_values          = array($sus_name, $sus_email, $sus_login_password, $sus_login_name);
        $rs                     = nuRunQuery($select, $select_values);

        if ( db_num_rows($rs) > 0 ) {

                 nuRunQuery($update, $update_values);
        } else {

                 nuRunQuery($insert, $insert_values);
        }

	_nuCheckWPUserInitialForm($sus_zzzsys_access_id);
}

function _nuCheckWPUserInitialForm($slf_zzzzsys_access_id) {

	$sql = "REPLACE INTO zzzzsys_access_form 
	(zzzzsys_access_form_id,slf_zzzzsys_access_id,slf_zzzzsys_form_id,slf_add_button,slf_save_button,slf_delete_button,slf_clone_button,slf_new_button,slf_print_button)
	VALUES
	('initialform','$slf_zzzzsys_access_id','nuuserhome','0','0','0','0','0','0')
	";
	nuRunQuery($sql);
}

function nubuilderDerriveId($key) {

        $key            = trim($key);
        $nu_wp_role_id  = 'wp'.$key;

        // make sure key is no longer than 25 chards
        if ( $nu_wp_role_id > 25 ) {
                $nu_wp_role_id = substr($nu_wp_role_id,0,25);
        }

        return $nu_wp_role_id;
}

function nubuilderDerriveCode($key){

        $key                    = trim($key);

        if ( strlen($key) < 4 ) {
                $nu_wp_role_code = strtoupper($key);
        } else {
                $nu_wp_role_code = strtoupper(substr($key, 0, 4));
        }

        return $nu_wp_role_code;
}

function _nuMarshalIndexActionHelper($item) {

	if ( empty($item) ) {
		return 0;
	}
	if ( is_array($item) ) {
		return count($item);
	}		

	return 0;	
}	

function nuMarshalIndexAction() {

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_ACTION] = '';

	$total_permissions = 0;
	$total_permissions = $total_permissions + _nuMarshalIndexActionHelper($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_FORMS]);
	$total_permissions = $total_permissions + _nuMarshalIndexActionHelper($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_REPORTS]);
	$total_permissions = $total_permissions + _nuMarshalIndexActionHelper($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_PHP]);
	$total_permissions = $total_permissions + _nuMarshalIndexActionHelper($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_SESSION]);

	// Request Type Permitted
	if ( $total_permissions > 0 ) {
		$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_ACTION] = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_GET_RT];	
	}

	// This means someone has submitted a valid request but has no permission, probaly due to coping a url and then using it after loogging out
	if ( $total_permissions == 0 && $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_GET_RT] != '' ) {
		$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_ACTION] = NU_REQUEST_ILLEGAL;	
	}
}

function nuAfterSessionInitializationExistingSession() {
	
	$timeout_allowance = nuSessionTimeOutAllowance();	

	if ( $timeout_allowance >= time() ) {
		 $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_TIMESTAMP] = time();
	} 

	nuCheckTimeout(); // add SG 4 Jan 2019
}


function nuCheckTimeout(){
	
	$i	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID];
	$m	= time() - (60*60*2);											//-- 2 hours

	nuRunQuery('DELETE FROM zzzzsys_session WHERE sss_time < ' . $m);

	$t	= nuRunQuery('SELECT zzzzsys_session_id FROM zzzzsys_session WHERE zzzzsys_session_id = ? ',[$i]);
	
	if(db_fetch_row($t)[0] == ''){
		
		nuDisplayError('Session has timed out.');
		return;
		
	}	
		
	nuRunQuery('UPDATE zzzzsys_session SET sss_time = ? WHERE zzzzsys_session_id = ?', [time(), $i]);
}

function nuSessionTimeOutAllowance() {

        $timeout_seestings_in_seconds 	= (int) $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_time_out_minutes * 60;
        $current_session_timestamp 	= (int) $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_TIMESTAMP];
        $timeout_allowance		= (int) bcadd($timeout_seestings_in_seconds, $current_session_timestamp, 0);
        
        return $timeout_allowance;
}

function nuAfterSessionInitializationNewSession() {

	// check if views are missing and creates them if needed
        nuCreateViews();

	// update setup info
	$nuprepare	= 	'SELECT zzzzsys_setup.*,zzzzsys_timezone.stz_timezone AS set_timezone 
					FROM zzzzsys_setup 
					LEFT JOIN zzzzsys_timezone ON zzzzsys_timezone_id = set_zzzzsys_timezone_id';
					
 	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP] = nuRunQueryObject($nuprepare);

	// Login processiong
	if ( $_SESSION[NU_NUBUILDER_SESSION_DATA]['NEW'] == true ) {

		if ( $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBEADMIN'] ) {

			nuMigrateSQL();
			nuLoginSetupGlobeadmin();

		} else if ( $_SESSION[NU_NUBUILDER_SESSION_DATA]['SHORT_CODE_REQUEST'] == 'Y' ) {

                        nuLoginSetupShortCodeAccess();

                } else {

			nuLoginSetupNOTGlobeadmin();
                }
	} 

	// update user permissions
 	nuPutUserPermissionsIntoSession();
}

function nuPutUserPermissionsIntoSession() {

	$obj            									= nuRunQueryObject('SELECT * FROM zzzzsys_session WHERE zzzzsys_session_id = ?', array($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]));
        $nuJ                 									= json_decode($obj->sss_access);
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_FORMS]   	= $nuJ->forms;
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_REPORTS]  = $nuJ->reports;
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_PHP] 	= $nuJ->procedures;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_SESSION] 	= $nuJ->session;

}

function nuRouteResponse($responseArry) {

	$response 	= $responseArry[0]; 
	$type 		= $responseArry[1];

	switch ( $type )   {
		
		case NU_RESPONSE_TYPE_ECHO;
			echo $response;
			break;

		case NU_RESPONSE_TYPE_PAGE;
			header("Location: $response");
                	break;

		case NU_RESPONSE_TYPE_JSON;
			header("Content-Type: application/json");
			header("Cache-Control: no-cache, must-revalidate");
                	echo $response;
			break;
		
		case NU_RESPONSE_TYPE_PDF;
			$response->Output('nureport.pdf', 'I');
                	break;

		case NU_RESPONSE_TYPE_EVAL;
			nuEval($response);
                	break;

		case NU_RESPONSE_TYPE_BAD;
			header("Content-Type: text/html");
                	header("HTTP/1.0 400 Bad Request");
                	echo $response;
                	break;

		default;
			header("Content-Type: text/html");
                        header("HTTP/1.0 400 Bad Request");
			echo NU_MSG_INVALID;
  			break;
	}
	die();
}

function nuLogoutResponse() {

	nuRunQuery('DELETE FROM zzzzsys_session WHERE zzzzsys_session_id = ?', [$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]] );

        $_SESSION[NU_NUBUILDER_SESSION_DATA] = array();
        $responseArry[0] = NU_PAGE_LOGOUT;
        $responseArry[1] = NU_RESPONSE_TYPE_PAGE;

        nuRouteResponse($responseArry);
}

function nuApiResponse() {

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUCOUNTER] 			= rand(0, 999);
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUERRORS]  			= array();	
	$formAndSessionData                                                             = nuGatherFormAndSessionData($_SESSION[NU_NUBUILDER_SESSION_DATA]['HOME_FORM_ID']);
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_FORMID] 			= $formAndSessionData->form_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]				= array_merge(nuGetUserAccess(), nuSetHashList($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]));
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['PREVIOUS_RECORD_ID']	= $formAndSessionData->record_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID']		= $formAndSessionData->record_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['FORM_ID']		= $formAndSessionData->form_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['nuFORMdata']		= json_decode( json_encode( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['nuFORMdata'] ) );
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['TABLE_ID']		= nuTT();
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH][NU_SESSION_ID]		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID];
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUVALIDATE]			= array();
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUCALLBACK]			= '';
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUAFTEREVENT]			= false;

	$f->forms[0]                            					= new stdClass;
	$call_type                                                                      = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['call_type'];
	$form_id									= $formAndSessionData->form_id;
	$record_id									= $formAndSessionData->record_id;	
	$nu_state									= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE];

        if ( count($formAndSessionData->errors) == 0 ) {

                if ($call_type == 'login') {
			nuBeforeEdit(); 
			$f->forms[0] = nuGetFormObject($form_id, $record_id, 0, $nu_state);
		}

                if ($call_type == 'getform') { 
			nuBeforeEdit(); 
			$f->forms[0] = nuGetFormObject($form_id, $record_id, 0, $nu_state);
		}

                if ($call_type == 'getphp') {
			nuBeforeEdit(); 
			$f->forms[0] = nuGetFormObject($form_id, $record_id, 0, $nu_state);
		}

                if ($call_type == 'getreport') { 
			nuBeforeEdit(); 
			$f->forms[0] = nuGetFormObject($form_id, $record_id, 0, $nu_state);
		}

                if ($call_type == 'getlookupid') {
			$f->forms[0] = nuGetAllLookupValues();
		}

                if ($call_type == 'getlookupcode') {
			$f->forms[0] = nuGetAllLookupList();
		}
                
		if ($call_type == 'getfile') {
			$f->forms[0]->JSONfile = nuGetFile();
		}

                if ($call_type == 'runhiddenphp') {
			$f->forms[0]  = nuRunPHPHidden($record_id);
		}
                
		if ($call_type == 'runphp') {
			$f->forms[0]->id = nuRunPHP($form_id);
		}

                if ($call_type == 'runreport') { 
			$f->forms[0]->id = nuRunReport($form_id);
		}

                if ($call_type == 'runhtml') {
			$f->forms[0]->id = nuRunHTML();
		}

                if ($call_type == 'update') {
			$f->forms[0]->record_id = nuUpdateDatabase();
		}
 
                if ($call_type == 'nudragsave') {
			$f->forms[0] = nuDragSave();
		}

                if ($call_type == 'systemupdate') {
			$f->forms[0]->id = nuRunSystemUpdate();
		}
        }

	$f->forms[0]->after_event               					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUAFTEREVENT];
        $f->forms[0]->user_name                 					= $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_DISPLAY_NAME'];
        $f->forms[0]->access_level_code         					= $_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_CODE'];
        $f->forms[0]->user_id                   					= $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_ID'];
        $f->forms[0]->database                  					= $_SESSION[NU_NUBUILDER_SESSION_DATA]['DB_NAME'];
        $f->forms[0]->dimensions                					= $formAndSessionData->dimensions;
        $f->forms[0]->translation               					= $formAndSessionData->translation;
        $f->forms[0]->tableSchema               					= nuUpdateTableSchema();
        $f->forms[0]->viewSchema                					= nuBuildViewSchema();
        $f->forms[0]->formSchema                					= nuUpdateFormSchema();
        $f->forms[0]->session_id                					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID];
        $f->forms[0]->callback                  					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUCALLBACK];
        $f->forms[0]->errors                    					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUERRORS];
        $f->forms[0]->form_access               					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_denied;
		$f->forms[0]->javascript                					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_EXTRAJS];
        $f->forms[0]->target                    					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['target'];
        $f->forms[0]->global_access             					= $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBAL_ACCESS'];
		$f->forms[0]->shortcode_session	        					= $_SESSION[NU_NUBUILDER_SESSION_DATA]['SHORT_CODE_SESSION_NAME'];
        $b                                      					= nuButtons();
        $f->forms[0]->buttons                   					= $b[0];
        $f->forms[0]->run_code                  					= $b[1];
        $f->forms[0]->run_description           					= $b[2];
        $j                                      					= json_encode($f->forms[0]);

	$return 									= array();
	$return[0]									= $j;
	$return[1]									= NU_RESPONSE_TYPE_JSON;

        return $return;
}

function nuIllegalResponse() {

	$return                 = array();
        $return[0]              = NU_MSG_ILLEGAL; 
        $return[1]              = NU_RESPONSE_TYPE_ECHO;

	return $return;
}

function nuPmaLoginResponse() {

	$return			= array();
	$return[0]      	= nuPmaBad();
        $return[1]      	= NU_RESPONSE_TYPE_ECHO;

	if ( nuIsGlobeadmin() ) {
        	$return[0]   	= nuPmaGood();
		$return[1]	= NU_RESPONSE_TYPE_PAGE;
        }

	return $return;
}

function nuPmaGood() {

        $time = time();
        $page = NU_PAGE_PMA.$_SESSION[NU_NUBUILDER_SESSION_DATA][DB_NAME]."&$time=$time";
        setcookie("nupmalogin",         "good");
        setcookie("nuConfigDBHost",     $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_HOST]);
        setcookie("nuConfigDBUser",     $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_USER]);
        setcookie("nuConfigDBPassword", $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_PASSWORD]);

        if ( $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_PASSWORD] == '' ) {
                setcookie("nuConfigDBPasswordBlank", 'BLANK');
        }
        return $page;
}

function nuPmaBad() {

        $time = time();
        $html                         	= NU_MSG_PMA_INVALID;
        setcookie("nupmalogin",         "bad");
        setcookie("nuConfigDBHost",     null);
        setcookie("nuConfigDBUser",     null);
        setcookie("nuConfigDBPassword", null);
        return $html;
}

function nuAceResponse() {

	$return         = array();
        $return[0]      = NU_MSG_PERMISSION_INVALID;
        $return[1]      = NU_RESPONSE_TYPE_ECHO;

        if ( nuIsGlobeadmin() ) {
			
		$return[0] = nuAceResponseHelper();
        }

        return $return;
}

function nuAceResponseHelper() {

	$jquery = $_SESSION[NU_NUBUILDER_SESSION_DATA]['JQ_PATH'];

	$content  = "<!DOCTYPE html>\n";
        $content .= "<html>\n";
        $content .= "<head>\n";
        $content .= "<title>nuBuilder 4 Ace Editor</title>\n";
        $content .= "<meta http-equiv='Content-type' content='text/html;charset=UTF-8'>\n";
	
	$content .= nuDefaultJSIncludes();

	$content .= "<script src=\"vendor/ace/ace.js\" type=\"text/javascript\" charset=\"utf-8\"></script>";
	$content .= "<script src=\"vendor/ace/src-min-noconflict/ace.js\" type=\"text/javascript\" charset=\"utf-8\"></script>";
	$content .= "<script src=\"vendor/ace/src-min-noconflict/ext-language_tools.js\" type=\"text/javascript\" charset=\"utf-8\"></script>";
	$content .= "<link rel=\"stylesheet\" href=\"nubuilder4.css\">";

$content .= "
<script>
window.c = opener.window.nuAce[0];
window.o = opener.window.nuAce[1];
window.t = opener.window.nuFORM.tableSchema;
window.f = opener.window.nuFORM.formSchema;
window.l = $('#' + o, window.opener.document).attr('data-nu-label');
function nuLoad(){
        ace.require(\"ace/ext/language_tools\");
        window.editor = ace.edit(\"nu_editor\");
        editor.setTheme(\"ace/theme/monokai\");
        editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true
        });
        editor.on('change', function() {\$('#copy_to_nubuilder').css('background-color', 'red');});
        window.startValue = opener.window.document.getElementById(window.o).value;
        editor.setFontSize(14);
        var cl                  = '';
        if ( window.c == 'HTML' )               {editor.getSession().setMode({path:\"ace/mode/html\", inline:true});cl='html';}
        if ( window.c == 'Javascript' )         {editor.getSession().setMode({path:\"ace/mode/javascript\", inline:true});cl='js';}
        if ( window.c == 'MySql' )              {editor.getSession().setMode({path:\"ace/mode/mysql\", inline:true});cl='sql';}
        if ( window.c == 'PHP' )                {editor.getSession().setMode({path:\"ace/mode/php\", inline:true});cl='php';}
        if ( window.c == 'SQL' )                {editor.getSession().setMode({path:\"ace/mode/sql\", inline:true});cl='sql';}
        document.getElementById('nu_language').innerHTML        = c;
        if(\$('#' + o, window.opener.document)[0].id == 'deb_message'){
                \$('#copy_to_nubuilder').remove();
        }else{
                document.getElementById('copy_to_nubuilder').value      = 'Copy changes back to ' + l;
        }
        nuResize();
        editor.setValue(window.startValue);
        editor.focus();
        editor.navigateFileStart();
        \$('#copy_to_nubuilder').css('background-color', '');
}

function nuResize(){
   document.getElementById('nu_editor_pad').style.width = String(Number(window.innerWidth))             + 'px';
   document.getElementById('nu_editor').style.width     = String(Number(window.innerWidth))             + 'px';
   document.getElementById('nu_editor').style.height    = String(Number(window.innerHeight) - 75)       + 'px';
}
function nuAceSave(){
        window.nuWarn      = 0;
        if(!opener.window.document.getElementById(window.o)){
                alert('The opening Form is no longer available.');
                return;
        }
        opener.window.document.getElementById(o).value = editor.getValue();
        if (\"createEvent\" in document) {
                var evt = document.createEvent(\"HTMLEvents\");
                evt.initEvent(\"change\", false, true);
                opener.window.document.getElementById(window.o).dispatchEvent(evt);
        }else{
                opener.window.document.getElementById(window.o).fireEvent(\"onchange\");
        }
        window.close();
}
function nuWarning(){
        if(editor.getValue() != window.startValue && window.nuWarn == 1){
                return \"Close this window without Saving?\";
        }
}
function nuUpdateDrag(t){
        document.getElementById('nuDrag').value = document.getElementById('nuField')[t.value].innerHTML;
}
function nuChooseFields(){
        var n = document.getElementById('nuTable').value;
        var t = window.s[n];
        var f = document.getElementById('nuField').value;
        document.getElementById('nuDrag').value = t.fields[f];
}
function nuChooseSnips(t){
        document.getElementById('nuDrag').value = t.value;
}
window.nuWarn         = 1;
window.onbeforeunload = nuWarning;
</script>
</head>
<body onload='nuLoad()' onresize='nuResize()'>
        <input type='button' id='copy_to_nubuilder' class='nuActionButton' style='top:8px;left:8px;position:absolute' onclick='nuAceSave()'>
        <span id='nu_language'  class=\"nuNotBreadcrumb\" style='top:35px;left:10px;position:absolute;font-wieght:500'></span>
        <div  id='nu_editor_pad' style='width:1000px;height:10px;top:55px;left:0px;text-align:left;position:absolute;background-color:#272822;' ></div>
        <div  id='nu_editor'    style='width:1000px;height:800px;top:65px;left:0px;text-align:left;position:absolute;' ></div>
        <img  id='nulogo'      style='position:absolute;top:5px;right:20px' width='120px' src='graphics/logo.png'>
</body>
</html>
";

	return $content;
}

function nuSelectResponse() {

	$content  = "<!DOCTYPE html>\n";
        $content .= "<html>\n";
        $content .= "<head>\n";
        $content .= "<title>nuBuilder 4</title>\n";
        $content .= "<meta http-equiv='Content-type' content='text/html;charset=UTF-8'>\n";
	
	$content .= nuDefaultJSIncludes();

	$content .= "
	<style> body { background-image: url(\"graphics/grid.png\"); } </style>
	<script>
        window.nuSuffix                         = 1000;
        window.nuSQL                            = new nuSelectObject();
        window.nuCurrentID                      = '';
        window.nuY                              = 0;
        window.nuX                              = 0;
        function nuLoad(){
                if(!nuSQL.rebuildGraphic()){
                        return;
                }
                $(document).mousemove(function(event){
                        nuMove(event);
                });
                $(document).mousedown(function(event){
                        nuDown(event);
                });
                $(document).mouseup(function(event){
                        nuUp(event);
                });
                parent.nuHasNotBeenEdited();
        }
	</script>
	</head><body onload='nuLoad()'></body></html>
	";

	$return		= array();
	$return[0] 	= $content;
	$return[1] 	= NU_RESPONSE_TYPE_ECHO;

	return $return;
}

function nuMarshallIndexRequests($key, $default = '') {

	$set	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT];
        $result = $default;

        if ( isset($set[$key]) ) {

                $result = $set[$key];
        }

        return $result;
}

function nuIndexContentResponse($debugging = false ) {

	$opener                                 = nuMarshallIndexRequests(NU_GET_OPENER, 		NU_DEFAULT_OPENER);
        $search                                 = nuMarshallIndexRequests(NU_GET_SEARCH, 		NU_DEFAULT_SEARCH);
        $iframe                                 = nuMarshallIndexRequests(NU_GET_IFRAME, 		NU_DEFAULT_IFRAME);
        $target                                 = nuMarshallIndexRequests(NU_GET_TARGET, 		NU_DEFAULT_TARGET);
        $nuBrowseFunction                       = nuMarshallIndexRequests(NU_GET_BROWSE_FUNCTION, 	NU_DEFAULT_BROWSE_FUNCTION);
        $like                                   = nuMarshallIndexRequests(NU_GET_LIKE, 			NU_DEFAULT_LIKE);
        $nuUser                                 = nuMarshallIndexRequests(NU_GET_USER, 			NU_DEFAULT_USER);
        $nuPassword                             = nuMarshallIndexRequests(NU_GET_PASSWORD, 		NU_DEFAULT_PASSWORD);
	$nuForm                                 = '';
        $nuRecord                               = '';
        $nuHome                                 = '';
	$images                                 = nuGetGraphicsList();
        $welcome                                = '';

	$content  = "<!DOCTYPE html>\n";
	$content .= "<html onclick=\"nuClick(event)\">\n";
	$content .= "<head>\n";
	$content .= "<title>nuBuilder 4</title>\n";
	$content .= "<meta http-equiv='Content-type' content='text/html;charset=UTF-8'>\n";
	$content .= "<script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n";
	$content .= nuDefaultJSIncludes();

	// starting main js scripy section
	$content .= "<script>\n";
	$content .= "window.nuVersion = 'nuBuilder4';\n";
        $content .= "window.nuDocumentID = Date.now();\n";
	$content .= "if ( parent.window.nuDocumentID == window.nuDocumentID ) {\n";
        $content .= "window.onbeforeunload = nuHomeWarning;\n";
        $content .= "}\n";
       	$content .= "window.nuHASH = [];\n";
	$content .= "window.nuLoginU = '$nuUser';\n";
        $content .= "window.nuLoginP = '$nuPassword';\n";
        $content .= "window.nuLoginF = '$nuForm';\n";
        $content .= "window.nuLoginR = '$nuRecord';\n";
        $content .= "window.nuLoginH = '$nuHome';\n";
        $content .= "window.nuGraphics = $images;\n";
        $content .= "window.nuIsWindow = '$iframe';\n";
        $content .= "window.nuImages = [];\n";	

	if ( $_SESSION[NU_NUBUILDER_SESSION_DATA]['PLUGIN'] ) {

        	$content .= "window.nuWordpress = true;\n";
        } else {

        	$content .= "window.nuWordpress = false;\n";
        }

	// build the nuLoad Function
	$content .= nuIndexContentResponseHelper( $nuBrowseFunction, $target, $welcome, $opener, $search, $like, $nuUser, $nuPassword );

	$content .= nuHeader();
        $content .= "function nuResize(){ \n";
        $content .= "	if($('#nuTabHolder').css('display') == 'block'){ \n";
	$content .= "		$('#nuActionHolder').css('width', window.innerWidth); \n";
	$content .= "		$('#nuBreadcrumbHolder').css('width', window.innerWidth); \n";
	$content .= "		$('#nuTabHolder').css('width', window.innerWidth); \n";
	$content .= "	} \n";
	$content .= "} \n";
	
	// ending main js scripy section
        $content .= "</script>\n";
        $content .= "<script id='nuheader'>\n";
	$content .= $nuHeader;
	$content .= "</script>\n";
	$content .= "</head>\n";
        $content .= nuLoadBody($debugging);
	$content .= "</body></html>";

	$return		= array();
	$return[0] 	= $content;
	$return[1] 	= NU_RESPONSE_TYPE_ECHO;

	return $return;
}

function nuIndexContentResponseHelper( $nuBrowseFunction, $target, $welcome, $opener, $search, $like, $nuUser, $nuPassword ) { 

	if ( $nuUser != ''  &&  $nuPassword != '' ) {
		return nuUseUP($nuBrowseFunction, $target, $welcome, $nuUser, $nuPassword);
	}

	if( $_SESSION[NU_NUBUILDER_SESSION_DATA]['PLUGIN'] ) {

        	return nuIndexContentResponseWordPress($nuBrowseFunction, $target, $welcome, $opener, $search, $like);
	}

	return nuIndexContentResponseStandalone($nuBrowseFunction, $target, $welcome, $opener, $search, $like);	
}

function nuIndexContentResponseWordPress($nuBrowseFunction, $target, $welcome, $opener, $search, $like) {

	if ( $opener == '' ) {

		return nuGetJS_plugin_login($nuBrowseFunction, $target);
	}

       return nuGetJS_action_screen($nuBrowseFunction, $target, $welcome, $opener, $search, $like);
}

function nuDefaultJSIncludes() {

	$content  = '';
	$content .= nuJQueryInclude();
	$content .= nuJSNamedSessionInclude();
        $content .= nuJSIndexInclude('nubuilder-classes.js');
        $content .= nuJSIndexInclude('nubuilder-include.js');
	$content .= nuCSSIndexInclude('nubuilder4.css');
	return $content;
}

function nuJSNamedSessionInclude() {
	
	$content 		= '';
	$session_name 		= nuCheckForNamedSession();
	$content 		= "<script> window.nubuilder_session_name = '$session_name'; </script>"; 
	return $content;
}

function nuJQueryInclude() {

	$content  = '';
	$content .= nuJSIndexInclude($_SESSION[NU_NUBUILDER_SESSION_DATA]['JQ_PATH']);
        $content .= $_SESSION[NU_NUBUILDER_SESSION_DATA]['PLUGIN'] ? '<script> var $ = jQuery; </script>' : '';
	$content .= "\n";
	return $content;
}

function nuJSIndexInclude($pfile){
		
	global $nu_datetime;
        $timestamp = NU_PRODUCTION_MODE ? NU_BUILD : $nu_datetime;
        return "<script src='$pfile?ts=$timestamp' type='text/javascript'></script>\n";
}

function nuCSSIndexInclude($pfile){

	global $nu_datetime;
       	$timestamp = NU_PRODUCTION_MODE ? NU_BUILD : $nu_datetime;
        return "<link rel='stylesheet' href='$pfile?ts=$timestamp' />\n";
}

function nuHeader(){

	$HTMLHeader             =$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_header;
        $j                      = "\n\n" . $HTMLHeader . "\n\n";
        return $j;
}

function nuRefreshSession() {

	$persistent_items = array_keys(nubuilder_session_data::$nubuilder);
	$persistent_list  = array();	

	for ( $x=0; $x<count($persistent_items); $x++ ) {
		
		$item 			= $persistent_items[$x];
		$persistent_list[$item]	= $_SESSION[NU_NUBUILDER_SESSION_DATA][$item];
	}
	
	nuSetSession($persistent_list);
}

function nuSetSession($array = array(), $new = false) {
	
	$_SESSION[NU_NUBUILDER_SESSION_DATA] = array();
        $_SESSION[NU_NUBUILDER_SESSION_DATA] = $array;
	
	if ( $new ) {
		$_SESSION[NU_NUBUILDER_SESSION_DATA]['NEW'] = true;
	} else {
		$_SESSION[NU_NUBUILDER_SESSION_DATA]['NEW'] = false;
	}
}

function nuIsGlobeadmin() {

	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBEADMIN']) ) {

		return $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBEADMIN'];

	} else {

		return false;
	}
}

function nuLoadNewSession() {

	if ( isset($_SESSION['nubuilder_wordpress_session_data']) ) {
		
		$decode = base64_decode($_SESSION['nubuilder_wordpress_session_data']);
                $wpdata = json_decode($decode);
		$_SESSION['nubuilder_wordpress_session_data'] = array();
		nubuilder_session_data::construct_wordpress($wpdata);

	} else {
		nuDie('error no: 102 - permission denied');
	} 

	nuSetSession(nubuilder_session_data::get_nubuilder_session_data(), true);
}

function nuLoadBody($debug = false) {

        if ( !$debug ) {
                $content = "<body id='nubody' onload='nuLoad()' onresize='nuResize()'>";
        } else {
                
		$content  = "<body>";
		$content .= '<b> Session name = ' . session_name() . '&nbsp; Session length = '   .strlen(session_name()) . '</b><br><br><hr><br><br>';
                $content .= '<textarea rows="50" cols="150">';
                $content .= print_r($_SESSION,true);
                $content .= '</textarea>';
		$content .= '<textarea rows="50" cols="150">';
                $content .= print_r($_SERVER,true);
                $content .= '</textarea>';
        }
	
	return $content;
}

function nuGetJS_plugin_login($nuBrowseFunction, $target) {

	$content  = "function nuLoad(){ \n";
	$content .= "	nuBindCtrlEvents(); \n";
	$content .= "	window.nuDefaultBrowseFunction  = '$nuBrowseFunction'; \n";
	$content .= "	window.nuBrowseFunction         = '$nuBrowseFunction'; \n";
	$content .= "	window.nuTARGET                 = '$target'; \n";
	$content .= "	nuLoginRequest(); \n";
	$content .= "} \n";
	
	return $content;
}

function nuUseUP($nuBrowseFunction, $target, $welcome, $u, $p) {

	$content  = "function nuLoad() { \n";
	$content .= "	nuBindCtrlEvents(); \n"; 
	$content .= "	window.nuDefaultBrowseFunction  = '$nuBrowseFunction'; \n";
	$content .= "	window.nuBrowseFunction       	= '$nuBrowseFunction'; \n";
	$content .= "	window.nuTARGET               	= '$target'; \n";
	$content .= "	var welcome                   	= `$welcome`; \n";
	$content .= "	nuLoginRequest('$u', '$p'); \n";
	$content .= "} \n";
	
	return $content;
}

function nuGetJS_action_screen($nuBrowseFunction, $target, $welcome, $opener, $search, $like) {

	$content  = "function nuLoad(){ \n";
	$content .= "	if(nuIsOpener(window)) { \n"; 
	$content .= "		var from = window.opener; \n"; 
	$content .= "	}else{ \n";
	$content .= "		var from = window.parent; \n";
	$content .= "	} \n";
	$content .= "	window.nuFORM.caller = from.nuFORM.getCurrent(); \n";
	$content .= "	nuFORM.tableSchema	= from.nuFORM.tableSchema; \n";
	$content .= "	nuFORM.formSchema = from.nuFORM.formSchema; \n";
	$content .= "	window.nuDefaultBrowseFunction = '$nuBrowseFunction'; \n";
	$content .= "	window.nuBrowseFunction = '$nuBrowseFunction'; \n";
	$content .= "	window.nuTARGET = '$target'; \n";
	$content .= "	window.nuSESSION = from.nuSESSION; \n";
	$content .= "	window.nuSuffix = 1000; \n";
	$content .= "	if('$opener' != '') { \n";
	$content .= "		var p = nuGetOpenerById(from.nuOPENER, Number($opener)); \n";
	$content .= "		nuRemoveOpenerById(from.nuOPENER, Number($opener)); \n";
	$content .= "	} else { \n";
	$content .= "		var p = from.nuOPENER[from.nuOPENER.length -1]; \n";
	$content .= "		nuRemoveOpenerById(from.nuOPENER, from.nuOPENER[from.nuOPENER.length -1]); \n";
	$content .= "	} \n";
	$content .= "	nuBindCtrlEvents(); \n";
	$content .= "	if (p.type == 'R') { \n";
	$content .= "		nuRunReport(p.record_id, p.parameters); \n";
	$content .= "	} else if (p.type == 'P') { \n";
	$content .= "		nuRunPHP(p.record_id, p.parameters); \n";
	$content .= "	} else { \n";
	$content .= "		window.filter		= p.filter; \n";
	$content .= "		window.nuFILTER		= p.filter; \n";
	$content .= "		nuForm(p.form_id, p.record_id, p.filter, '$search', 0, '$like'); \n";
	$content .= "	} \n";
	$content .= "	if( p.record_id == '-2' ){ \n";
	$content .= "		nuBindDragEvents(); \n";		
	$content .= "	} \n";
	$content .= "}\n";
	
	return $content;
} 

function nuCreateViews($drop = false) {
	
	if ( $drop ) {
		
		$sql = "DROP VIEW `zzzzsys_report_data`, `zzzzsys_run_list`";
		nuRunQuery($sql);
	}

	// View 1 zzzzsys_report_data
	$sql = "
	CREATE VIEW `zzzzsys_report_data` AS SELECT CONCAT('PROCEDURE:',`zzzzsys_php`.`zzzzsys_php_id`) AS `id`,`zzzzsys_php`.`sph_code` AS `code`,`zzzzsys_php`.`sph_description` AS `description` 
	FROM `zzzzsys_php` 
	WHERE ((`zzzzsys_php`.`sph_system` <> '1') and (locate('#TABLE_ID#',`zzzzsys_php`.`sph_php`) > '0')) 
	UNION SELECT CONCAT('SQL:',`zzzzsys_select`.`zzzzsys_select_id`) AS `id`,'nuSQL' AS `code`,`zzzzsys_select`.`sse_description` AS `description` FROM `zzzzsys_select` 
	UNION SELECT CONCAT('TABLE:',`zzzzsys_table`.`zzzzsys_table_id`) AS `id`,'nuTABLE' AS `code`,`zzzzsys_table`.`zzzzsys_table_id` AS `description` FROM `zzzzsys_table`
	";
	nuCreateViewsHelper('zzzzsys_report_data', $sql);

	// View 2 zzzzsys_run_list
	$sql = "
	CREATE VIEW `zzzzsys_run_list` 
	AS SELECT `zzzzsys_form`.`zzzzsys_form_id` AS `id`,'Form' AS `run`,`zzzzsys_form`.`sfo_code` 
	AS `code`,`zzzzsys_form`.`sfo_description` AS `description` FROM `zzzzsys_form` UNION SELECT `zzzzsys_report`.`zzzzsys_report_id` 
	AS `id`,'Report' AS `run`,`zzzzsys_report`.`sre_code` AS `code`,`zzzzsys_report`.`sre_description` 
	AS `description` FROM `zzzzsys_report` UNION SELECT `zzzzsys_php`.`zzzzsys_php_id` 
	AS `id`,'Procedure' AS `run`,`zzzzsys_php`.`sph_code` AS `code`,`zzzzsys_php`.`sph_description` 
	AS `description` FROM `zzzzsys_php` WHERE (`zzzzsys_php`.`sph_system` <> 1) ORDER BY `code`
	";
	nuCreateViewsHelper('zzzzsys_run_list', $sql);
}

function nuCreateViewsHelper($name, $sql) {

	$rs     = nuRunQuery("SHOW TABLES LIKE '$name' ");
        $row    = db_fetch_row($rs);

        if ( $row[0] !== $name ) {
		nuRunQuery($sql);
	}
}

function nubuilderInitDB() {


	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][DB_HOST]) ) {
		$DBHost = $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_HOST];
	} else {
		$DBHost = DB_HOST;
	}

	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][DB_NAME]) ) {
                $DBName = $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_NAME];
        } else {
                $DBName = DB_NAME;
        }

	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][DB_USER]) ) {
                $DBUser = $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_USER];
        } else {
                $DBUser = DB_USER;
        }

	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][DB_PASSWORD]) ) {
                $DBPassword = $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_PASSWORD];
        } else {
                $DBPassword = DB_PASSWORD;
        }

	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][DB_CHARSET]) ) {
                $DBCharset = $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_CHARSET];
        } else {
                $DBCharset = DB_CHARSET;
        }

	$nuDB 		= new PDO("mysql:host=$DBHost;dbname=$DBName;charset=$DBCharset", $DBUser, $DBPassword, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES $DBCharset"));
	$nuDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$GLOBALS[NU_NUBUILDER_GLOBALS][NU_GLOBAL_DB] = $nuDB;
	
	return $nuDB;	
}

function nuRunQueryJson($column, $sql, $values = array() ) {

	$obj = nuRunQueryObject($sql, $values);

	return json_decode($obj->$column);
}

function nuRunQueryObject($sql, $values = array() ) {

	if ( !is_array($values) ) {
		$values = [$values];
	}
	
	$rs = nuRunQuery($sql, $values);
	return db_fetch_object($rs);
}

function nuRunQueryPDOExceptionHelper($message, $sql, $trace) {

$debug  = "
===USER==========

$user

===PDO MESSAGE===

$message

===SQL===========

$s

===BACK TRACE====

$trace

";
	return $debug;
}

function nuRunQueryPDOException(PDOException $ex) {

	$user		= $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_LOGIN'];
	$message 	= $ex->getMessage();
	$array       	= debug_backtrace();
	$trace       	= '';

	for ($i = 0; $i < count($array); $i++) {

		$trace  .= $array[$i]['file'] . ' - line ' . $array[$i]['line'] . ' (' . $array[$i]['function'] . ")\n\n";
	}

	$debug 	= nuRunQueryPDOExceptionHelper($message, $sql, $trace);
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ERROR_FOUND][] = $debug;
	nuDebug($debug, true);
}

function nuRunQuery($sql, $values = array(), $isInsert = false){

	if ( !is_array($values) ) {
                $values = [$values];
        }

	$nuDB		= $GLOBALS[NU_NUBUILDER_GLOBALS][NU_GLOBAL_DB];
	$object 	= $nuDB->prepare($sql);

	try {
		$object->execute($values);

	}catch(PDOException $ex){
	
		nuRunQueryPDOException($ex);
		return -1;
	}

        if ( $isInsert ) {
            
            return $nuDB->lastInsertId();
            
        } else {
            
            return $object;
        }
}

function db_is_auto_id($table, $pk){

	//-- mysql's way of checking if its an auto-incrementing id primary key
	$s	= "SHOW COLUMNS FROM `$table` WHERE `Field` = ? ";
	$r      = nuRunQueryObject($s, [$pk]);   		
	
	return $r->Extra == 'auto_increment';
}

function db_fetch_array($o){

	if (is_object($o)) {
		return $o->fetch(PDO::FETCH_ASSOC);
	} else {
		return array();
	}
}

function db_fetch_object($o){

	if (is_object($o)) {
		return $o->fetch(PDO::FETCH_OBJ);
	} else {
		return false;
	}
}
	
function db_fetch_row($o){

	if (is_object($o)) {
		return $o->fetch(PDO::FETCH_NUM);
	} else {
		return false;
	}
}

function db_field_names($n){
    
    $a       = array();
    $s       = "DESCRIBE $n";
    $t       = nuRunQuery($s);

    while($r = db_fetch_row($t)){
        $a[] = $r[0];
    }

    return $a;
}

function db_field_types($n){
    
    $a       = array();
    $s       = "DESCRIBE $n";
    $t       = nuRunQuery($s);

    while($r = db_fetch_row($t)){
        $a[] = $r[1];
    }
    
    return $a;
}

function db_primary_key($n){
    
    $a       = array();
    $s       = "DESCRIBE $n";
    $t       = nuRunQuery($s);

    while($r = db_fetch_row($t)){
		
		if($r[3] == 'PRI'){
			$a[] = $r[0];
		}
		
    }
    
    return $a;
}

function db_num_rows($o) {

	if(!is_object($o)){return 0;}
		
	return $o->rowCount();
}

function nuUpdateTables(){
	
	$a	= [];
	$t 	= nuRunQuery('SHOW TABLES');
	
	while($r = db_fetch_row($t)){
		$a[] = $r[0];
	}
		
	nuRunQuery('DELETE FROM zzzzsys_table ');
	
	for($i = 0 ; $i < count($a) ; $i ++){
		
		nuRunQuery('INSERT INTO zzzzsys_table (zzzzsys_table_id) VALUES (?) ', [$a[$i]]);
		
	}
}

function nuDebugResult($t){
	
	if(is_object($t)){
		$t	= print_r($t,1);
	}

 	$i		= nuID();

	nuRunQuery('INSERT INTO zzzzsys_debug (zzzzsys_debug_id, deb_message, deb_added) VALUES (? , ?, ?)', array($i, $t, time()));
	
	return $i;
}

function nuPrint_rHelper($var) {
	
	if ( is_array($var) ) {
		return print_r($var,true);
	}

	if ( is_object($var) ) {
                return print_r($var,true);
        }

        return $var;
}

function nuPrint_r_die($more = false, $die = true) {

	if ( false === $more ) {

		$info   = nuPrint_rHelper($_SESSION[NU_NUBUILDER_SESSION_DATA]);

	} else {

		$info 	= nuPrint_rHelper($more);
	}
	
	echo '<textarea rows="50" cols="150">';
        echo nuPrint_rHelper($more);
        echo '</textarea>';
	
	if ( true === $die ) {
		die();
	}
}

function nuDebug($message, $error_in_nuRunQuery = false) {

	$nuProcedureEval = '';
	$nuSystemEval = '';
	
	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_SYSTEM_EVAL]) ) {

		$nuSystemEval = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_SYSTEM_EVAL];
	}

	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PROC_EVAL]) ) {
		
		$nuProcedureEval = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PROC_EVAL];
	}

        $debug_line_breaker     = "\n\n<br>\n";
        $date                   = date("Y-m-d H:i:s");
	$debug_backtrace	= debug_backtrace();
        $debug_backtrace_file   = $debug_backtrace[0]['file'];
        $debug_backtrace_line   = $debug_backtrace[0]['line'];
	$debug_backtrace_func   = $debug_backtrace[1]['function'];
        $debug_message          = "$date :: $debug_backtrace_file line $debug_backtrace_line :: function $debug_backtrace_func $debug_line_breaker";

        if ( $error_in_nuRunQuery ) {

                $debug_message                 .= "$date - SQL Error in <b>nuRunQuery</b>" . $debug_line_breaker;

        } else {

                $debug_message                 .= "$date - $nuProcedureEval $nuSystemEval line $debug_backtrace_line" . $debug_line_breaker;
        }

        if ( is_array($message) || is_object($message) ) {

                $debug_message .= print_r($message,true);

        } else {

                $debug_message .= $message;
        }

        $debug_message .= $debug_line_breaker;

        nuDebugResult($debug_message);
}

function nuID(){

	$i   = uniqid();
	$s   = md5($i);

    while($i == uniqid()){}

    return uniqid().$s[0].$s[1];
}

function nuClientTimeZone(){

	// get time zone setting
	if ( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_timezone ) {

		$zone	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_timezone;

	} else {

		$zone	= NU_DEFAULT_TIMEZONE;
	}

	// set time zone setting for PHP
    	date_default_timezone_set($zone);

	$now = new DateTime();
	$mins = $now->getOffset() / 60;
	$sgn = ($mins < 0 ? -1 : 1);
	$mins = abs($mins);
	$hrs = floor($mins / 60);
	$mins -= $hrs * 60;
	$offset = sprintf('%+d:%02d', $hrs*$sgn, $mins);
	
	// set timezone setting for MYSQL
    	nuRunQuery('SET time_zone = ?', array($offset) );       
}

function nuTT(){

	$fn	= '___nu'.uniqid('1').'___';
	
	return $fn;                                                         //--create a unique name for a Temp Table
}

function nuErrorFound() {
    
	if( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ERROR_FOUND]) ){

		if ( is_array($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ERROR_FOUND]) ) {

			return count($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ERROR_FOUND]) > 0;
		}
    	}
	return false;
}

class nuSqlString{

    public  $from         = '';
    public  $where        = '';
    public  $groupBy      = '';
    public  $having       = '';
    public  $orderBy      = '';
    public  $fields       = array();
    public  $Dselect      = '';
    public  $Dfrom        = '';
    public  $Dwhere       = '';
    public  $DgroupBy     = '';
    public  $Dhaving      = '';
    public  $DorderBy     = '';
    public  $Dfields      = array();
    public  $SQL          = '';

    function __construct($sql){

        $sql              = str_replace(chr(13), ' ', $sql);//----remove carrige returns
        $sql              = str_replace(chr(10), ' ', $sql);//----remove line feeds

        $select_string    = $sql;
        $from_string      = stristr($sql, ' from ');
        $where_string     = stristr($sql, ' where ');
        $groupBy_string   = stristr($sql, ' group by ');
        $having_string    = stristr($sql, ' having ');
        $orderBy_string   = stristr($sql, ' order by ');

        $from             = str_replace($where_string,   '', $from_string);
        $from             = str_replace($groupBy_string, '', $from);
        $from             = str_replace($having_string,  '', $from);
        $from             = str_replace($orderBy_string, '', $from);
        
        $where            = str_replace($groupBy_string, '', $where_string);
        $where            = str_replace($having_string,  '', $where);
        $where            = str_replace($orderBy_string, '', $where);
        
        $groupBy          = str_replace($having_string,  '', $groupBy_string);
        $groupBy          = str_replace($orderBy_string, '', $groupBy);
        
        $having           = str_replace($orderBy_string, '', $having_string);
        
        $orderBy          = $orderBy_string;
        $this->from       = $from;
        $this->where      = $where == '' ? 'WHERE 1' : $where;
        $this->groupBy    = $groupBy;
        $this->having     = $having;
        $this->orderBy    = $orderBy;

        $this->Dfrom      = $this->from;
        $this->Dwhere     = $this->where;
        $this->DgroupBy   = $this->groupBy;
        $this->Dhaving    = $this->having;
        $this->DorderBy   = $this->orderBy;

    	$this->buildSQL();
    }

    public function restoreDefault($pString){

    	if($pString == 'f'){$this->from      = $this->Dfrom;}
    	if($pString == 'w'){$this->where     = $this->Dwhere;}
    	if($pString == 'g'){$this->groupBy   = $this->DgroupBy;}
    	if($pString == 'h'){$this->having    = $this->Dhaving;}
    	if($pString == 'o'){$this->orderBy   = $this->DorderBy;}
    	$this->buildSQL();

    }

    public function getTableName(){

    	return trim(substr($this->from, 5));

    }

    public function setFrom($pString){

    	$this->from          = $pString; 
    	$this->buildSQL();

    }

    public function setWhere($pString){

		$this->where		= $pString;
		$this->buildSQL();

    }

    public function getWhere(){
    	return $this->where; 
    }

    public function setGroupBy($pString){

    	$this->groupBy		= $pString; 
    	$this->buildSQL();

    }

    public function setHaving($pString){

    	$this->having		= $pString; 
    	$this->buildSQL();

    }

    public function setOrderBy($pString){

    	$this->orderBy		= $pString; 
    	$this->buildSQL();

    }

    public function addField($pString){

		$this->fields[]		= $pString; 
    	$this->buildSQL();

    }

    public function removeAllFields(){

		$this->fields		= array();

    }

    private function buildSQL(){
		
		$this->SQL		= 'SELECT '; 
		$this->SQL		= $this->SQL . nuSQLTrim(implode(',', $this->fields), 1);
		$this->SQL		= $this->SQL . nuSQLTrim($this->from);
		$this->SQL		= $this->SQL . nuSQLTrim($this->where);
		$this->SQL		= $this->SQL . nuSQLTrim($this->groupBy);
		$this->SQL		= $this->SQL . nuSQLTrim($this->having);
		$this->SQL		= $this->SQL . nuSQLTrim($this->orderBy);
			
    }

}

function nuSQLTrim($s, $noCR = 0){
	
	if(trim($s) == ''){
		return '';
	}else{
		if($noCR == 0){
			return "\n$s";
		}else{
			return $s;
		}
	}

}

function nuSetHashList($p){

	$fid		= addslashes($p['form_id']);
	$rid		= addslashes($p['record_id']);
	$r		= array();
	$A		= nuGetUserAccess();
	$t		= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', [$fid]);
	$R		= db_fetch_object($t);
	$h		= array();
	
	if($p['call_type'] == 'getform'){

		if(trim($R->sfo_table) != ''){
			
			$s		= "SELECT * FROM $R->sfo_table WHERE $R->sfo_primary_key = ? ";
			$t		= nuRunQuery($s, [$rid]);
			$f		= db_fetch_object($t);

			if(is_object($f) ){
				
				foreach ($f as $fld => $value ){								//-- This Edit Form's Object Values
					$r[$fld] = addslashes($value);
				}
			}
		}
	}

	foreach ($p as $key => $value){											//-- The 'opener' Form's properties

		if(gettype($value) == 'string'){
			$h[$key]			= addslashes($value);
		}else{
			$h[$key]			= '';
		}
		
	}

	if(isset($p['hash']) && gettype($p['hash']) == 'array'){
		
		foreach ($p['hash'] as $key => $value){								//-- The 'opener' Form's hash variables

			if(gettype($value) == 'string'){
				$h[$key]			= addslashes($value);
			}else{
				$h[$key]			= '';
			}
			
		}
		
	}
	
	$h['PREVIOUS_RECORD_ID']	= addslashes($rid);
	$h['RECORD_ID']			= addslashes($rid);
	$h['FORM_ID']			= addslashes($fid);
	$h['SUBFORM_ID']		= addslashes($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['object_id']);
	$h['ID']			= addslashes($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['primary_key']);
	$h['CODE']			= addslashes($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['code']);
	
	return array_merge($h, $r, $A);
}

function nuInstall(){

	$id									= nuID();
	$t									= nuRunQuery('SELECT * FROM zzzzsys_php WHERE sph_code = ?', [$procedure_code]);
	$ob									= db_fetch_object($t);
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['code']		= $ob->sph_code;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['description']	= $ob->sph_description;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['parentID']	= $ob->zzzzsys_php_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['nuInstall']	= '1';
	$j									= json_encode($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['nuHash']);
	
	nuSetJSONData($id, $j);
	
	return $id;
}

function nuAllowedActivities(){

	$r 	= nuRunQueryObject('SELECT * FROM zzzzsys_session WHERE zzzzsys_session_id = ?', array($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]));
	$a	= json_decode($r->sss_access);
	
	return $a;
}


function nuRunReport($code) {
	
	$id                                     = nuID();
        $ob                                     = nuRunQueryObject('SELECT * FROM zzzzsys_report WHERE sre_code = ? ', array($code));
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['code']         = $ob->sre_code;
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['description']          = $ob->sre_description;
        unset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['pages']);
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['sre_layout']           = nuReplaceHashVariables($ob->sre_layout);
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['parentID']             = $ob->sre_zzzzsys_php_id;
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['nuInstall']            = '0';
        $json_encode_ed                                      = json_encode($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]);

        nuSetJSONData($id, $json_encode_ed);

        return $id;
}

function nuRunPHP($sph_code){

	$id                                     					= nuID();
	$aa										= nuAllowedActivities();
	$p 										= nuProcedureAccessList($aa);
	$ob										= nuRunQueryObject('SELECT * FROM zzzzsys_php WHERE sph_code = ?', [$sph_code]);

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['code']              	= $ob->sph_code;
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['description']        	= $ob->sph_description;
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['parentID']           	= $ob->zzzzsys_php_id;
        $json_encode_ed                                                                 = json_encode($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]);

	if ( !$_SESSION[NU_NUBUILDER_SESSION_DATA]['isGlobeadmin'] and !in_array($ob->zzzzsys_php_id, $p) ) {

		nuDisplayError("Access To Procedure Denied... ($procedure_code)");
	}

	nuSetJSONData($id, $json_encode_ed);
	return $id;
}

function nuRunPHPHidden($sph_code){

	$aa 	= nuAllowedActivities();
	$p 	= nuProcedureAccessList($aa);
	$ob 	= nuRunQueryObject('SELECT * FROM zzzzsys_php WHERE sph_code = ?', [$sph_code]);

	if ( !$_SESSION[NU_NUBUILDER_SESSION_DATA]['isGlobeadmin'] and !in_array($ob->zzzzsys_php_id, $p) ) {

		nuDisplayError("Access To Procedure Denied... ($procedure_code)");
	} else {
		nuEval($ob->zzzzsys_php_id);
	}

	$f										= new stdClass;
	$f->id										= 1;
	return $f;
}

function nuJavascriptCallback($js){
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUCALLBACK] = $js;
}

function nuSetJSONData($i, $nj){
	
	$r					= nuRunQueryObject('SELECT * FROM zzzzsys_session WHERE zzzzsys_session_id = ?', array($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]));			 
	$j					= json_decode($r->sss_access, true);
	$j[$i]					= $nj;
	$J					= json_encode($j);
	$t					= nuRunQuery('UPDATE zzzzsys_session SET sss_access = ? WHERE zzzzsys_session_id = ?', array($J, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]));
}

function nuGetJSONData($i){

	$r					= nuRunQueryObject('SELECT * FROM zzzzsys_session WHERE zzzzsys_session_id = ?', array($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]));			 
	$j					= json_decode($r->sss_access, true);
	return $j[$i];
}

function nuGetProcedure($i){
	
	$t		= nuRunQuery('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?', [$i]);
	$r		= db_fetch_row($t);
	return $r[0];
}

function nuRunHTML(){

	$id 		= nuID();
	$P		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE];
	$o		= new stdClass;
	$o->sql		= $P['browse_sql'];
	$o->columns	= $P['browse_columns'];
	$o->hash	= nuHash();
	$j		= json_encode($o);
	nuRunQuery('INSERT INTO zzzzsys_debug (zzzzsys_debug_id, deb_message, deb_added) VALUES (? , ?, ?)', array($id, $j, time()) );

	return $id;
}

function nuReplaceHashVariables($s, $a = null){

	$s		= trim($s);
	
	if($s == ''){
		return '';
	}

	if ( null == $a ) {
		$a = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH];
	}

	if (!is_array($a)) {
		return $s;
	}

	foreach ($a as $k => $v) {
		if(!is_object ($a[$k])) {
			$s	= str_replace ('#' . $k . '#', $v, $s);
		}
	}

	return $s;
}

function hex2rgb($hexOrColor) {

    $hex   = ColorToHex($hexOrColor);
    $hex   = str_replace("#", "", $hex);

    if(strlen($hex) == 3) {
        $r = hexdec(substr($hex,0,1).substr($hex,0,1));
        $g = hexdec(substr($hex,1,1).substr($hex,1,1));
        $b = hexdec(substr($hex,2,1).substr($hex,2,1));
    } else {
        $r = hexdec(substr($hex,0,2));
        $g = hexdec(substr($hex,2,2));
        $b = hexdec(substr($hex,4,2));
    }
    $rgb   = array($r, $g, $b);

    return $rgb;
}


function ColorToHex($pColor){

    $vColor    = strtoupper($pColor);
   
    if($vColor =='ALICEBLUE'){return 'F0F8FF';}
    if($vColor == 'ANTIQUEWHITE'){return 'FAEBD7';}
    if($vColor == 'AQUA'){return '00FFFF';}
    if($vColor == 'AQUAMARINE'){return '7FFFD4';}
    if($vColor == 'AZURE'){return 'F0FFFF';}
    if($vColor == 'BEIGE'){return 'F5F5DC';}
    if($vColor == 'BISQUE'){return 'FFE4C4';}
    if($vColor == 'BLACK'){return '000000';}
    if($vColor == 'BLANCHEDALMOND'){return 'FFEBCD';}
    if($vColor == 'BLUE'){return '0000FF';}
    if($vColor == 'BLUEVIOLET'){return '8A2BE2';}
    if($vColor == 'BROWN'){return 'A52A2A';}
    if($vColor == 'BURLYWOOD'){return 'DEB887';}
    if($vColor == 'CADETBLUE'){return '5F9EA0';}
    if($vColor == 'CHARTREUSE'){return '7FFF00';}
    if($vColor == 'CHOCOLATE'){return 'D2691E';}
    if($vColor == 'CORAL'){return 'FF7F50';}
    if($vColor == 'CORNFLOWERBLUE'){return '6495ED';}
    if($vColor == 'CORNSILK'){return 'FFF8DC';}
    if($vColor == 'CRIMSON'){return 'DC143C';}
    if($vColor == 'CYAN'){return '00FFFF';}
    if($vColor == 'DARKBLUE'){return '00008B';}
    if($vColor == 'DARKCYAN'){return '008B8B';}
    if($vColor == 'DARKGOLDENROD'){return 'B8860B';}
    if($vColor == 'DARKGRAY'){return 'A9A9A9';}
    if($vColor == 'DARKGREY'){return 'A9A9A9';}
    if($vColor == 'DARKGREEN'){return '006400';}
    if($vColor == 'DARKKHAKI'){return 'BDB76B';}
    if($vColor == 'DARKMAGENTA'){return '8B008B';}
    if($vColor == 'DARKOLIVEGREEN'){return '556B2F';}
    if($vColor == 'DARKORANGE'){return 'FF8C00';}
    if($vColor == 'DARKORCHID'){return '9932CC';}
    if($vColor == 'DARKRED'){return '8B0000';}
    if($vColor == 'DARKSALMON'){return 'E9967A';}
    if($vColor == 'DARKSEAGREEN'){return '8FBC8F';}
    if($vColor == 'DARKSLATEBLUE'){return '483D8B';}
    if($vColor == 'DARKSLATEGRAY'){return '2F4F4F';}
    if($vColor == 'DARKSLATEGREY'){return '2F4F4F';}
    if($vColor == 'DARKTURQUOISE'){return '00CED1';}
    if($vColor == 'DARKVIOLET'){return '9400D3';}
    if($vColor == 'DEEPPINK'){return 'FF1493';}
    if($vColor == 'DEEPSKYBLUE'){return '00BFFF';}
    if($vColor == 'DIMGRAY'){return '696969';}
    if($vColor == 'DIMGREY'){return '696969';}
    if($vColor == 'DODGERBLUE'){return '1E90FF';}
    if($vColor == 'FIREBRICK'){return 'B22222';}
    if($vColor == 'FLORALWHITE'){return 'FFFAF0';}
    if($vColor == 'FORESTGREEN'){return '228B22';}
    if($vColor == 'FUCHSIA'){return 'FF00FF';}
    if($vColor == 'GAINSBORO'){return 'DCDCDC';}
    if($vColor == 'GHOSTWHITE'){return 'F8F8FF';}
    if($vColor == 'GOLD'){return 'FFD700';}
    if($vColor == 'GOLDENROD'){return 'DAA520';}
    if($vColor == 'GRAY'){return '808080';}
    if($vColor == 'GREY'){return '808080';}
    if($vColor == 'GREEN'){return '008000';}
    if($vColor == 'GREENYELLOW'){return 'ADFF2F';}
    if($vColor == 'HONEYDEW'){return 'F0FFF0';}
    if($vColor == 'HOTPINK'){return 'FF69B4';}
    if($vColor == 'INDIANRED'){return 'CD5C5C';}
    if($vColor == 'INDIGO'){return '4B0082';}
    if($vColor == 'IVORY'){return 'FFFFF0';}
    if($vColor == 'KHAKI'){return 'F0E68C';}
    if($vColor == 'LAVENDER'){return 'E6E6FA';}
    if($vColor == 'LAVENDERBLUSH'){return 'FFF0F5';}
    if($vColor == 'LAWNGREEN'){return '7CFC00';}
    if($vColor == 'LEMONCHIFFON'){return 'FFFACD';}
    if($vColor == 'LIGHTBLUE'){return 'ADD8E6';}
    if($vColor == 'LIGHTCORAL'){return 'F08080';}
    if($vColor == 'LIGHTCYAN'){return 'E0FFFF';}
    if($vColor == 'LIGHTGOLDENRODYELLOW'){return 'FAFAD2';}
    if($vColor == 'LIGHTGRAY'){return 'D3D3D3';}
    if($vColor == 'LIGHTGREY'){return 'D3D3D3';}
    if($vColor == 'LIGHTGREEN'){return '90EE90';}
    if($vColor == 'LIGHTPINK'){return 'FFB6C1';}
    if($vColor == 'LIGHTSALMON'){return 'FFA07A';}
    if($vColor == 'LIGHTSEAGREEN'){return '20B2AA';}
    if($vColor == 'LIGHTSKYBLUE'){return '87CEFA';}
    if($vColor == 'LIGHTSLATEGRAY'){return '778899';}
    if($vColor == 'LIGHTSLATEGREY'){return '778899';}
    if($vColor == 'LIGHTSTEELBLUE'){return 'B0C4DE';}
    if($vColor == 'LIGHTYELLOW'){return 'FFFFE0';}
    if($vColor == 'LIME'){return '00FF00';}
    if($vColor == 'LIMEGREEN'){return '32CD32';}
    if($vColor == 'LINEN'){return 'FAF0E6';}
    if($vColor == 'MAGENTA'){return 'FF00FF';}
    if($vColor == 'MAROON'){return '800000';}
    if($vColor == 'MEDIUMAQUAMARINE'){return '66CDAA';}
    if($vColor == 'MEDIUMBLUE'){return '0000CD';}
    if($vColor == 'MEDIUMORCHID'){return 'BA55D3';}
    if($vColor == 'MEDIUMPURPLE'){return '9370D8';}
    if($vColor == 'MEDIUMSEAGREEN'){return '3CB371';}
    if($vColor == 'MEDIUMSLATEBLUE'){return '7B68EE';}
    if($vColor == 'MEDIUMSPRINGGREEN'){return '00FA9A';}
    if($vColor == 'MEDIUMTURQUOISE'){return '48D1CC';}
    if($vColor == 'MEDIUMVIOLETRED'){return 'C71585';}
    if($vColor == 'MIDNIGHTBLUE'){return '191970';}
    if($vColor == 'MINTCREAM'){return 'F5FFFA';}
    if($vColor == 'MISTYROSE'){return 'FFE4E1';}
    if($vColor == 'MOCCASIN'){return 'FFE4B5';}
    if($vColor == 'NAVAJOWHITE'){return 'FFDEAD';}
    if($vColor == 'NAVY'){return '000080';}
    if($vColor == 'OLDLACE'){return 'FDF5E6';}
    if($vColor == 'OLIVE'){return '808000';}
    if($vColor == 'OLIVEDRAB'){return '6B8E23';}
    if($vColor == 'ORANGE'){return 'FFA500';}
    if($vColor == 'ORANGERED'){return 'FF4500';}
    if($vColor == 'ORCHID'){return 'DA70D6';}
    if($vColor == 'PALEGOLDENROD'){return 'EEE8AA';}
    if($vColor == 'PALEGREEN'){return '98FB98';}
    if($vColor == 'PALETURQUOISE'){return 'AFEEEE';}
    if($vColor == 'PALEVIOLETRED'){return 'D87093';}
    if($vColor == 'PAPAYAWHIP'){return 'FFEFD5';}
    if($vColor == 'PEACHPUFF'){return 'FFDAB9';}
    if($vColor == 'PERU'){return 'CD853F';}
    if($vColor == 'PINK'){return 'FFC0CB';}
    if($vColor == 'PLUM'){return 'DDA0DD';}
    if($vColor == 'POWDERBLUE'){return 'B0E0E6';}
    if($vColor == 'PURPLE'){return '800080';}
    if($vColor == 'RED'){return 'FF0000';}
    if($vColor == 'ROSYBROWN'){return 'BC8F8F';}
    if($vColor == 'ROYALBLUE'){return '4169E1';}
    if($vColor == 'SADDLEBROWN'){return '8B4513';}
    if($vColor == 'SALMON'){return 'FA8072';}
    if($vColor == 'SANDYBROWN'){return 'F4A460';}
    if($vColor == 'SEAGREEN'){return '2E8B57';}
    if($vColor == 'SEASHELL'){return 'FFF5EE';}
    if($vColor == 'SIENNA'){return 'A0522D';}
    if($vColor == 'SILVER'){return 'C0C0C0';}
    if($vColor == 'SKYBLUE'){return '87CEEB';}
    if($vColor == 'SLATEBLUE'){return '6A5ACD';}
    if($vColor == 'SLATEGRAY'){return '708090';}
    if($vColor == 'SLATEGREY'){return '708090';}
    if($vColor == 'SNOW'){return 'FFFAFA';}
    if($vColor == 'SPRINGGREEN'){return '00FF7F';}
    if($vColor == 'STEELBLUE'){return '4682B4';}
    if($vColor == 'TAN'){return 'D2B48C';}
    if($vColor == 'TEAL'){return '008080';}
    if($vColor == 'THISTLE'){return 'D8BFD8';}
    if($vColor == 'TOMATO'){return 'FF6347';}
    if($vColor == 'TURQUOISE'){return '40E0D0';}
    if($vColor == 'VIOLET'){return 'EE82EE';}
    if($vColor == 'WHEAT'){return 'F5DEB3';}
    if($vColor == 'WHITE'){return 'FFFFFF';}
    if($vColor == 'WHITESMOKE'){return 'F5F5F5';}
    if($vColor == 'YELLOW'){return 'FFFF00';}
    if($vColor == 'YELLOWGREEN'){return '9ACD32';}
    return $vColor;
}

function nuAddToHashList($json, $run){

        $hash                           = array();
        $ignore                         = array();
        $list                           = array('sre_layout','slp_php','sre_php');

        if ( is_array($json) || is_object($json) ) {

                foreach($json as $key => $v){

                        if(!in_array($key, $list)){
                                $hash['' . $key . '']     = $v;
                        }
                }

        } else {

                $debug_backtrace        = debug_backtrace();
                $debug_backtrace_func   = $debug_backtrace[1]['function'];
              	nuErrorLog("nuAddToHashList :: json should be an array or object, but it is not, this should not happen:: calling function $debug_backtrace_func");
        }

        $d                              = new DateTime();
        $hash['nu_date_time']           = $d->format('Y-m-d H:i:s');
        $hash['nu_date']                = $d->format('Y-m-d');
        $hash['nu_time']                = $d->format('H:i:s');
        $hash['nu_year']                = $d->format('Y');
        $hash['nu_month']               = $d->format('m');
        $hash['nu_day']                 = $d->format('d');
        $hash['nu_hour']                = $d->format('H');
        $hash['nu_minute']              = $d->format('i');

        if($run == 'report'){

                $hash['sre_layout']     = $json->sre_layout;
                $hash['slp_php']        = $json->slp_php;
        }

        if($run == 'php'){

                $hash['sph_php']        = $json->sph_php;
        }

        return $hash;
}

function nuGetUserAccess(){

	$A                                      = array();
        $A['USER_ID']                           = $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_ID'];
        $A['USER_GROUP_ID']                     = $_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_ID'];
        $A['HOME_ID']                           = $_SESSION[NU_NUBUILDER_SESSION_DATA]['HOME_FORM_ID'];
	$A['GLOBAL_ACCESS']                    	= $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBAL_ACCESS'];
	$A['ACCESS_LEVEL_CODE']                 = $_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_CODE'];

	return $A;
}

function nuGetFormProperties($i){
	
	return nuRunQueryObject('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', array($i));
}

function nuFormatList(){
	
	$f	= [['','']];
	$nuprepare	= 	'SELECT CONCAT(LEFT(srm_type, 1), "|", TRIM(srm_format)) AS a, srm_format AS b 
					FROM zzzzsys_format 
					ORDER BY srm_type';
	
	$t 	= nuRunQuery($nuprepare);
	
	while($r = db_fetch_object($t)){
		$f[] = [$r->a, $r->b];
	}

	return json_encode($f);
}

function nuAddFormatting($v, $f){

	if($v == '' || $f == ''){return $v;}
	
	if($f[0] == 'N'){									//-- number  '456.789','N|€ 1,000.00'

		$f			= substr($f, 2);
		$e			= explode(' ', $f);
		$s			= $e[0];							//-- sign
		$n			= $e[1];							//-- number
		$p			= nuPunctuation($f);				//-- returns [comma, decimal]
		$c			= $p[0];							//-- comma
		$dp			= $p[1];							//-- decimal point
		$o			= explode('.', $v);
		
		if(count($o) == 1){$o[1] = '';}
		
		$d			= $o[1];							//-- decimal number

		if($dp == ''){
			$p		= 0;								//-- decimal places
		}else{
			
			$pos	= strpos($f, $dp);					//-- decimal places
			$p		= strlen(substr($f, $pos));
		}

		$h			= nuAddThousandSpaces($o[0], $c);
		
		$ss			= substr($s, 0,2);
		
		if($ss == '10' || $ss == '1,' || $ss == '1.'){		// no sign
			$s		= '';
		}else{
			$s		= $s . ' ';
		}
		
		if($p == 0){ 									//-- no decimal numbers even if it has a decimal place
			$m		= $s . $h;
		}else{
			
			$suf	= substr($d . str_repeat('0', 20), 0, $p - 1);
			$m		= $s . $h . $dp . $suf;
			
		}

		return $m;
	
	}
	
	if($f[0] == 'D'){	//-- date

		if($v == '0000-00-00' or $v == ''){return '';}
		
		$split	= explode(' ', $v);
		$d		= explode('-', $split[0]);
		$t		= explode(':', $split[1]);

		if($t[0] == ''){
			$t	= [0, 0, 0];
		}
		
		$o	 	= new DateTime();

		$o->setDate($d[0], $d[1], $d[2]);
		$o->setTime($t[0], $t[1], $t[2]);
		
		
		$s 		= '';
		
		$s 		= str_replace('pp', 	$o->format('a'), $f);
		$s 		= str_replace('PP', 	$o->format('A'), $s);
		$s 		= str_replace('yyyy',	$o->format('Y'), $s);
		$s 		= str_replace('yy',		$o->format('y'), $s);
		$s 		= str_replace('mmmm',	$o->format('F'), $s);
		$s 		= str_replace('mmm',	$o->format('M'), $s);
		$s 		= str_replace('mm',		$o->format('m'), $s);
		$s 		= str_replace('dddd',	$o->format('l'), $s);
		$s 		= str_replace('ddd',	$o->format('D'), $s);
		$s 		= str_replace('dd',		$o->format('d'), $s);
		$s 		= str_replace('hh',		$o->format('h'), $s);
		$s 		= str_replace('nn',		$o->format('i'), $s);
		$s 		= str_replace('ss', 	$o->format('s'), $s);
		
		return substr($s,2);
		
	}
	
	return $v;
}

function nuAddThousandSpaces($s, $c){

	$r			= strrev($s);
	$a			= str_split($r, 3);
	$n			= [];
	
	for($i = 0 ; $i < count($a) ; $i++){
		
		$n[]	= strrev($a[$i]);
		
		if($i < count($a) - 1){
			
			$n[]	= $c;
		
		}
		
	}
		

	$r			= array_reverse($n);
	
	return implode('', $r);
}

function nuPunctuation($f){

	$c			= '';
	$d			= '';
		
	if(strpos($f , '1,' ) !== false){
		$c		= ',';
	}

	if(strpos($f , '1.' ) !== false){
		$c		= '.';
	}

	if(strpos($f , '0,' ) !== false){
		$d		= ',';
	}

	if(strpos($f , '0.' ) !== false){
		$d		= '.';
	}

	return [$c, $d];
}

function nuTTList($id, $l){
		
	$t										= nuRunQuery('SELECT * FROM zzzzsys_object WHERE sob_all_zzzzsys_form_id = ? ', [$l]);
	
	while($r = db_fetch_object($t)){						

		//-- add default empty hash variables
		$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH][$r->sob_all_id]	= '';
	}
	
	$tt										= nuTT();
	
	if ( !is_array( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH] ) ) {

		$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH] = array();
	}

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['TABLE_ID']		= $tt;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID']		= '';
	
	nuBuildTempTable($id, $tt, 1);

	$f										= db_field_names($tt);
	$f[]										= 'KEEP EXACT HEIGHT';

	nuRunQuery("DROP TABLE $tt");
	
	return json_encode($f);
}

function nuBuildTempTable($name_id, $tt, $rd = 0){
	
	$x				= explode (':', $name_id);
	$id				= substr(strstr($name_id, ':'),1);
	
	if($x[0] == 'PROCEDURE'){
		nuEval($id);
	}

	if($x[0] == 'TABLE'){
		
		$P			= "	nuRunQuery('CREATE TABLE $tt SELECT * FROM $id');;";
		
		eval($P);
		
	}
	
	if($x[0] == 'SQL'){
		
		$t			= nuRunQuery('SELECT sse_sql FROM zzzzsys_select WHERE zzzzsys_select_id = ? ',[$id]);
		$r			= db_fetch_row($t);
		$c			= $r[0];
		
		if($rd == 1){									//-- report designer
		
			$nocr	= str_replace("\n",' ', $c);
			$where	= strpos($nocr, ' WHERE ');
			
			if($where){
				$c	= substr ($nocr, 0, $where);
			}
			
		}
		
		$p			= nuReplaceHashVariables($c);
		$tt			= addslashes($tt);

		$P			 = '$sql = "CREATE TABLE '.$tt.' '.$p.'";';
		$P			.= 'nuRunQuery($sql);';
		
		eval($P);
		
	}
}

function nuJSInclude($pfile){

    $timestamp 		= date("YmdHis", filemtime($pfile));                                         //-- Add timestamp so javascript changes are effective immediately
    print "<script src='$pfile?ts=$timestamp' type='text/javascript'></script>\n";
    
}

function nuCSSInclude($pfile){

    $timestamp 		= date("YmdHis", filemtime($pfile));                                         //-- Add timestamp so javascript changes are effective immediately
    print "<link rel='stylesheet' href='$pfile?ts=$timestamp' />\n";
    
}

function nuImageList($f){

	$a			= [];	
	$t			= nuRunQuery('SELECT sfi_code FROM zzzzsys_file ORDER BY sfi_code ');
	
	while($r = db_fetch_object($t)){
		$a[]	= 'Image:' . $r->sfi_code;
	}

	$c								= json_encode(array_merge($a, $f,['KEEP EXACT HEIGHT']));

	return $c . ";\n";
}

function nuCreateFile($j){

	if($j == ''){return '';}

	$id		= nuID();
	$f		= json_decode($j);
	$t		= explode('/',$f->type)[1];
	$file		= sys_get_temp_dir()."/$id." . $t;
	$h		= fopen($file , 'w');
	$d		= base64_decode($f->file);
	$p		= explode(';base64,', $d)[1];
	$data 		= base64_decode($p);
	
	fwrite($h, $data);
	fclose($h);
	
	return $file;
}

function nuHash(){
	return $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH];
}

function nuBuildFormSchema(){

	$T				= nuRunQuery('SELECT * FROM zzzzsys_form ORDER BY sfo_code');
	$fs				= [];

	while($r = db_fetch_object($T)){
		
		$f 			= $r->zzzzsys_form_id;
		$a 			= array();
		$t 			= nuRunQuery('SELECT * FROM zzzzsys_object WHERE sob_all_zzzzsys_form_id = ? ORDER BY sob_all_id', [$f]);
		
		while($r = db_fetch_object($t)){
			
			if(in_array($r->sob_all_type, array('input', 'lookup', 'select', 'textarea'))){
				$a[]= array($r->zzzzsys_object_id, $r->sob_all_id, $r->sob_all_label, $r->sob_all_type, $r->sob_input_type); 
			}
			
		}
		
		$fs[$f]		= $a;
		
	}

	return $fs;
}

function nuBuildTableSchema(){

	$a				= array();
	$t				= nuRunQuery('SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = DATABASE()');

	while($r = db_fetch_object($t)){
		
		$tn			= $r->table_name;
		$a[$tn] 	= array('names' => db_field_names($tn), 'types' => db_field_types($tn), 'primary_key' => db_primary_key($tn), 'valid' => 1);
		
	}
	
	return $a;
}

function nuBuildViewSchema(){

	$a				= array();
	$t				= nuRunQuery('SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = "VIEW" AND table_schema = DATABASE() ');

	while($r = db_fetch_object($t)){
		$a[]		= $r->table_name;
	}
	
	return $a;
}


function nuUpdateFormSchema(){

	if($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['form_length'] == 0){
		return nuBuildFormSchema();
	}
	
	return [];
	
}

function nuUpdateTableSchema() {
	
	if($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['table_length'] == 0){
		return nuBuildTableSchema();
	}
	
	return [];
	
}

function nuListSystemTables(){

	$a				= array();
	$t				= nuRunQuery('SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = DATABASE()');

	while($r = db_fetch_object($t)){
		
		if(substr($r->table_name, 0, 8) == 'zzzzsys_'){
			$a[]	= $r->table_name;
		}
		
	}
	
	return $a;
}

function nuFontList(){

	$result         = array();
        $fonts          = array(['Helvetica','Helvetica'],['Courier','Courier'],['Times','Times'],['Symbol','Symbol']);
        $exclude        = array('..', '.',DIRECTORY_SEPARATOR);
        $folder         = __DIR__ . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR .  'tcpdf' . DIRECTORY_SEPARATOR . 'fonts';
        $list           = scandir($folder);

        for ( $x=0; $x<count($list); $x++) {

                if ( !in_array($list[$x], $exclude) )  {

                        $item           = trim($folder . DIRECTORY_SEPARATOR . $list[$x]);

			if ( is_file($item) )  {
                        	$path_parts     = pathinfo($item);
                        	$font_name      = $path_parts['filename'];
                        	$font_name      = explode('.', $path_parts['filename'])[0];
                        	if ( !in_array($font_name, $result) )  {
                                	array_push($result, $font_name);
                        	}	
			}
                }
        }

        for ( $x=0; $x<count($result); $x++) {

                $element    = array();
                $element[0] = $result[$x];
                $element[1] = $result[$x];
                array_push($fonts, $element);
        }

	return json_encode($fonts);
}

function nuEventName($e){

	$event['BB']	    =  'Before Browse';
	$event['AB']	    =  'After Browse';
	$event['BE']    	=  'Before Edit';
	$event['BS']    	=  'Before Save';
	$event['AS']    	=  'After Save';
	$event['BD']    	=  'Before Delete';
	$event['AD']    	=  'After Delete';
	
	return $event[$e];
}

function nuEval($phpid, $nuHash = null){

	$r						= nuRunQueryObject('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?', [$phpid]);
	
	if(trim($r->sph_php) == ''){return;}
	
	$code					= $r->sph_code;
	$php					= nuReplaceHashVariables($r->sph_php, $nuHash);
	nuEvalMessage($phpid, $code);
	
	try{
		eval($php); 
	}catch(Throwable $e){
		nuExceptionHandler($e, $code);   
	}catch(Exception $e){
		nuExceptionHandler($e, $code);
	}
}

function nuProcedure($c){

	$r								= nuRunQueryObject('SELECT * FROM zzzzsys_php WHERE sph_code = ?', [$c]);
	$php								= nuReplaceHashVariables($r->sph_php);
	$php								= "$php \n\n//--Added by nuProcedure()\n\n$"."_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PROC_EVAL] = '';";
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PROC_EVAL] 	= "Procedure <b>$r->sph_code</b> - run inside ";
	
	return $php;
}

function nuExceptionHandler($e, $code){
	
	$ce		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PROC_EVAL];
	$se		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_SYSTEM_EVAL];
	
	nuDisplayError("$ce $se<br>", "nuErrorPHP");
	nuDisplayError($e->getFile(), 'eval');
	nuDisplayError('<i>' . $e->getMessage() . '</i>', 'eval');
	nuDisplayError('<br><b><i>Traced from...</i></b><br>', 'nuErrorPHP');
	
	$a		= $e->getTrace();
	$t		= array_reverse($a);

	for($i = 0 ; $i < count($t) ; $i++){
		
		$m	= '(line:<i>' . $t[$i]['line'] . '</i>) ' . $t[$i]['file'] . ' <b> - ' . $t[$i]['function'] . '<b>';
		
		nuDisplayError($m . '<br>', 'eval');
		
	}
}

function nuEvalMessage($phpid, $code){
	
	$i			= explode('_', $phpid);
	
	if(count($i) == 1){
		return "Procedure <b>$code</b>";
	}
	
	if($i[1] != 'AB'){
		
		$event	= nuEventName($i[1]);
		$t		= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', [$i[0]]);
		$O		= db_fetch_object($t);
	
		return "<i>$event</i> of Form <b>$O->sfo_code</b>";
	}
	
	$nuprepare	= 	'SELECT * FROM zzzzsys_object 
					JOIN zzzzsys_form ON zzzzsys_form_id = sob_all_zzzzsys_form_id  
					WHERE zzzzsys_object_id = ?';
					
	$t			= nuRunQuery($nuprepare, [$i[0]]);
	$O			= db_fetch_object($t);

	$result 							= "<i>Before Browse</i> of Object <b>$O->sob_all_id</b> on Form <b>$O->sfo_code</b>";
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_SYSTEM_EVAL] 	= $result;	

	return $result;

}

function nuUpdateSystemIds(){

	nuUpdateObjectIds();
	nuUpdateTabIds();

	nuUpdateTableIds('zzzzsys_browse');
	nuUpdateTableIds('zzzzsys_event');
	nuUpdateTableIds('zzzzsys_file');
	nuUpdateTableIds('zzzzsys_translate');
}

function nuUpdateTabIds(){

	$t		= nuRunQuery('SELECT * FROM zzzzsys_tab WHERE zzzzsys_tab_id != "nufastforms"');
	
	while($r = db_fetch_object($t)){
		
		$v	= array();
		$v[]	= nuID('nu');
		$v[]	= $r->zzzzsys_tab_id;	
		
		nuRunQuery('UPDATE zzzzsys_object SET sob_all_zzzzsys_tab_id = ? WHERE sob_all_zzzzsys_tab_id = ? ', $v);
		print NU_SQL_UPDATE_TAB_OBJEC."<br>";
		nuRunQuery('UPDATE zzzzsys_tab SET zzzzsys_tab_id = ? WHERE zzzzsys_tab_id = ? ', $v);
		print 'UPDATE zzzzsys_tab SET zzzzsys_tab_id = ? WHERE zzzzsys_tab_id = ? '."<br>";
	}
}

function nuUpdateObjectIds(){

	$t		= nuRunQuery('SELECT * FROM zzzzsys_object');
	
	while($r = db_fetch_object($t)){
		
		$i	= $r->zzzzsys_object_id;
		$n	= nuID('nu');
		$a	= $i . '_AB';
		$pid    = $n . '_AB';

		$v1	= array();
		$v1[]	= $n;
		$v1[]	= $i;

		$v2	= array();
		$v2[]	= $pid;
		$v2[]	= $a;	

		nuRunQuery('UPDATE zzzzsys_object SET zzzzsys_object_id = ? WHERE sob_all_zzzzsys_form_id != "nusample" AND zzzzsys_object_id = ? ', $v1);
		nuRunQuery('UPDATE zzzzsys_event SET sev_zzzzsys_object_id = ? WHERE sev_zzzzsys_object_id = ? ', $v1);
		nuRunQuery('UPDATE zzzzsys_php SET zzzzsys_php_id = ? WHERE zzzzsys_php_id = ? ', $v2);
		print 'UPDATE zzzzsys_object SET zzzzsys_object_id = ? WHERE sob_all_zzzzsys_form_id != "nusample" AND zzzzsys_object_id = ? ' . "<br>";
	}
}

function nuUpdateTableIds($table){

	$id		= $table . '_id';
	$s		= "SELECT $id FROM $table";
	$t		= nuRunQuery($s);
		
	while($r = db_fetch_row($t)){
		
		$i	= $r[0];
		$n	= nuID();
		$u	= "UPDATE $table SET $id = 'nu$n' WHERE $id = '$i' ";
		
		nuRunQuery($u);
		
		print "$u<br>";
		
	}
}

function nuRunSystemUpdate(){
	
	$i					= nuID();
	
	nuSetJSONData($i, 'valid');
	
	return $i;
}

function nuSendEmail($to, $from, $fromname, $content, $subject, $filelist, $html = false, $cc = "", $bcc = "", $reply_to_addresses = array()) {

	// nuSendEmail function is being retired and replaced with nuEmail
	$to_list	= explode(',',$to);
	return nuEmail($to_list,$from,$fromname,$content,$subject,$filelist,$html,$reply_to_addresses);
}

function nuUser(){

	$user_id = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['USER_ID'];
	
	if ( !is_string($user_id) ) {
		nuErrorLog("nuUser() :: user_id is not a string");
	}
 		
	return nuRunQueryObject('SELECT * FROM zzzzsys_user WHERE zzzzsys_user_id = ?', $user_id);
}

function nuTranslate($t){

        $l      = nuGetJSONData('nuLanguage');
        $o      = nuRunQueryObject('SELECT * FROM zzzzsys_translate WHERE trl_language = ? AND trl_english = ? ', [$l, $t]);

		if($o->trl_translation == ''){
			return $t;
		}else{
			return $o->trl_translation;
		}
		
}

function nuBuildFastReport(){

	$t		= nuRunQueryObject('SELECT COUNT(*) AS fastreports FROM zzzzsys_report WHERE sre_code like "FR%" ');
	$fr		= $t->fastreports;

	$i		= nuID();
	$c		= "FR$fr";
	$d		= "Fast Report $fr";
	$g		= "Fast Report";
	$j		= str_replace('\"', '"', nuHash()['fieldlist']);
	$t		= nuHash()['table'];
	$f		= 'nublank';
	
	$nuprepare	= 	'INSERT INTO zzzzsys_report (
						zzzzsys_report_id,
						sre_code,
						sre_description,
						sre_group,
						sre_zzzzsys_php_id,
						sre_zzzzsys_form_id,
						sre_layout
					) VALUES (?,?,?,?,?,?,?)';
	
	
	
	nuRunQuery($nuprepare, [$i, $c, $d, $g, $t, $f, $j]);
	

	$js		= "

		var m1	= '<h1>A Fast Report been created!</h1>';
		var m2	= '<p>(There is now a Report with a Code of <b>$c</b> found in <b>Reports</b>)';

		nuMessage([m1, m2]);
		
		$('#nunuRunPHPHiddenButton').remove();

	";

	nuJavascriptCallback($js);
}

function nuBuildFastForm($table, $form_type){

	$form_id				= nuID();
	$PK					= $table . '_id';
	$newT					= $form_type != 'launch';
	
	if($form_type == 'launch'){
		$table 				= 'Launch Form ' . nuFastForms();
	}

	$q					= nuRunQuery('SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = DATABASE()');
	while($tableSchemaOBJ 			= db_fetch_object($q)){
		
		if($table == $tableSchemaOBJ->table_name){
			
			$tableSchema		= nuBuildTableSchema();
			$PK 			= $tableSchema[$table]['primary_key'][0];
			$newT			= false;
		}
	}

	$TT             			= nuTT();
	$SF             			= nuSubformObject('obj_sf');
	$tab_id         			= nuID();
	$t              			= nuRunQuery('SELECT COUNT(*) FROM zzzzsys_form WHERE SUBSTRING(sfo_code, 1, 2) = "FF"');
	$r              			= db_fetch_row($t);
	$form_code      			= 'FF' . $r[0];
	$form_desc      			= 'Fast Form ' . $r[0];
	$s              			= Array();

	//----------add tab--------------------
	$array          			= Array($tab_id, $form_id, 'Main', 10);
	nuRunQuery('INSERT INTO zzzzsys_tab (zzzzsys_tab_id, syt_zzzzsys_form_id, syt_title, syt_order) VALUES (?, ?, ?, ?)', $array);

	//----------add form--------------------
	$nuprepare	= 	'INSERT INTO zzzzsys_form (
							zzzzsys_form_id,
							sfo_type,
							sfo_code,
							sfo_description,
							sfo_table,
							sfo_primary_key,
							sfo_browse_sql
						) VALUES(?,?,?,?,?,?,?)';
	
	$array          			= Array($form_id, $form_type, $form_code, $form_desc, $form_type=='launch'?'':$table, $form_type=='launch'?'':$PK, "SELECT * FROM $table");
	nuRunQuery($nuprepare, $array);

	$sql            			= "CREATE TABLE $TT SELECT * FROM zzzzsys_object WHERE false";
	nuRunQuery($sql);

	for($i = 0 ; $i < count($SF->rows) ; $i++){
		
		if($SF->rows[$i][5] == 0){							//-- not ticked as deleted
			
			$r          		= $SF->rows[$i][3];
			$newid			= nuID();
			$SF->rows[$i][3]	= $newid;
			$sql			= "INSERT INTO $TT SELECT * FROM zzzzsys_object WHERE zzzzsys_object_id = '$r'";
			nuRunQuery($sql);
			$sql			= "UPDATE $TT SET zzzzsys_object_id = '$newid' WHERE zzzzsys_object_id = '$r'";
			nuRunQuery($sql);
		}
	}

	$sql            			= "UPDATE $TT ";
	$sql				       .= "SET sob_all_id = ?,sob_all_label = ?,sob_all_order = ?,sob_all_top = ?,sob_all_left = ?,sob_all_table = ?,sob_all_zzzzsys_form_id = ?,sob_all_zzzzsys_tab_id = ?,zzzzsys_object_id = ? ";
	$sql				       .= "WHERE zzzzsys_object_id = ? ";

	$gap            			= 30;
	$left					= 50;

	for($i = 0 ; $i < count($SF->rows) ; $i++){
		
		if($SF->rows[$i][5] == 0){							//-- not ticked as deleted
			
			$newid      = nuID();
			$label      = $SF->rows[$i][1];
			$field      = $SF->rows[$i][2];
			$oldid      = $SF->rows[$i][3];
			$corner		= $left + ($gap * $i);

			$array      = Array($field, $label, $corner, $corner, $corner + 100, $table, $form_id, $tab_id, $newid, $oldid);
			nuRunQuery($sql, $array);
		}
	}

	if($form_type == 'browse'){
		nuRunQuery("DELETE FROM $TT WHERE 1");
	}
	
	$t              = nuRunQuery("SELECT * FROM $TT");
	$a              = Array();
	$n              = 'number date';
	
	while($r = db_fetch_object($t)){
		
		$y          = $r->sob_all_type;
		$i          = $r->sob_input_type;
		$id         = $r->sob_all_id;
		$date       = ($i == 'date' || $i == 'nuDate');
		$norm       = ($y == 'input' && $i != 'date' && $i != 'nuDate' && $i != 'nuNumber' && $i != 'number' && $i != 'file');
		
		if($y == 'lookup'){                         $a[] = Array('name'=>$id, 'type'=>'id');}
		if($y == 'select'){                         $a[] = Array('name'=>$id, 'type'=>'varchar');}
		if($y == 'calc'){                           $a[] = Array('name'=>$id, 'type'=>'decimal');}
		if($y == 'textarea'){                       $a[] = Array('name'=>$id, 'type'=>'textarea');}
		if($y == 'input' && $norm){                 $a[] = Array('name'=>$id, 'type'=>'varchar');}
		if($y == 'input' && $date){                 $a[] = Array('name'=>$id, 'type'=>'date');}
		if($y == 'input' && $i == 'number'){        $a[] = Array('name'=>$id, 'type'=>'int');}
		if($y == 'input' && $i == 'nuNumber'){      $a[] = Array('name'=>$id, 'type'=>'decimal');}
		if($y == 'input' && $i == 'file'){      	$a[] = Array('name'=>$id, 'type'=>'longtext');}
	}

	if($newT){
		
		$mess		= 'Table and Form have';
		$create		= nuBuildNewTable($table, $a, $newT);
			
		nuRunQuery($create);
		nuRunQuery("ALTER TABLE $table ENGINE = MyISAM;");
		nuRunQuery("ALTER TABLE $table CONVERT TO CHARACTER SET UTF8 COLLATE utf8_general_ci");

	}else{
		$mess		= 'Form has';
	}

	$nuprepare	= 	'INSERT INTO zzzzsys_browse (
						zzzzsys_browse_id,
						sbr_zzzzsys_form_id,
						sbr_title,
						sbr_display,
						sbr_align,
						sbr_format,
						sbr_order,
						sbr_width
					)VALUES(?,?,?,?,?,?,?,?)';
	
	
	for($i = 0 ; $i < count($SF->rows) ; $i++){
		
		if($SF->rows[$i][4] == 1 and $SF->rows[$i][5] == 0){						//-- not ticked as deleted
			
			$lab	= $SF->rows[$i][1];
			$id	= $SF->rows[$i][2];
			//$array  = Array(nuID(), $form_id, $lab, $id, 'left', '', ($i+1) * 10, 250);
			$array  = Array(nuID(), $form_id, $lab, $id, 'l', '', ($i+1) * 10, 250);
			nuRunQuery($nuprepare, $array);
		}
	}
	
	if($form_type == 'subform' || $form_type == 'browse'){
			
		$js	= "
			var m1	= '<h1>A $mess been created!</h1>';
			var m2	= '<p>(There is now a Form with a Code of <b>$form_code</b> found in <b>Forms</b>)';
			nuMessage([m1, m2]);
			$('#nunuRunPHPHiddenButton').remove();
		";
		nuJavascriptCallback($js);
		
	}else{
			
		//----------make sure button has a tab--------------------
		nuRunQuery('REPLACE INTO zzzzsys_tab (zzzzsys_tab_id, syt_zzzzsys_form_id, syt_title, syt_order) VALUES ("nufastforms", "nuuserhome", "Fast Forms", -1)');

		//----------add run button--------------------
		$sql            = "

						INSERT 
						INTO $TT
						(zzzzsys_object_id,
						sob_all_zzzzsys_form_id,
						sob_all_zzzzsys_tab_id,
						sob_all_id,
						sob_all_label,
						sob_all_table,
						sob_all_order,
						sob_all_top,
						sob_all_left,
						sob_all_width,
						sob_all_height,
						sob_run_zzzzsys_form_id,
						sob_run_id,
						sob_run_method,
						sob_all_cloneable,
						sob_all_validate,
						sob_all_access,
						sob_all_align,
						sob_all_type)
						VALUES
						(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

		";
		
		$form_count		= nuFastForms() * 50;
		$record_id		= substr($form_type, 0, 6) == 'browse' ? '' : '-1';
		$array          	= Array(nuID(), 'nuuserhome', 'nufastforms', "ff$form_id", $table, $table, 11, 50 + $form_count, 50 + $form_count, 150, 30, $form_id, $record_id, 'b', 0, 0, 0, 'center', 'run');
		nuRunQuery($sql, $array);

		$js	= "
			var m1	= '<h1>A $mess been created!</h1>';
			var m2	= '<p>(There is now a Button called <b>$table</b> on the <b>Fast Forms</b> tab of the <b>User Home</b> Form)</p>';
			nuMessage([m1, m2]);
			$('#nunuRunPHPHiddenButton').remove();
		";
		nuJavascriptCallback($js);
	}

	nuRunQuery("INSERT INTO zzzzsys_object SELECT * FROM $TT");
	nuRunQuery("DROP TABLE $TT");

}

function nuFastForms(){

	$r			= nuRunQueryObject('SELECT COUNT(*) AS ff FROM zzzzsys_object WHERE sob_all_zzzzsys_tab_id = "nufastforms"');
	return $r->ff;
}

function nuBuildNewTable($tab, $array, $newT){

	$id			= $tab . '_id';
	$start		= "CREATE TABLE $tab";
	$a			= Array();
	$a[] 		= "$id VARCHAR(25) NOT NULL";

	$ff_type	= nuHash()['fastform_type'];
	$ff_fk		= nuHash()['fastform_fk'];

	if($ff_type == 'subform' && $newT){
		$a[] 	= "$ff_fk VARCHAR(25) NOT NULL";
	}

	for($i = 0 ; $i < count($array) ; $i++){

		$f		= $array[$i]['name'];
		$t		= $array[$i]['type'];
		
		if($t == 'id'){				$a[] = "$f VARCHAR(25) NOT NULL";}
		if($t == 'varchar'){		$a[] = "$f VARCHAR(1000) NOT NULL";}
		if($t == 'int'){			$a[] = "$f INT NOT NULL";}
		if($t == 'textarea'){		$a[] = "$f TEXT NOT NULL";}
		if($t == 'decimal'){		$a[] = "$f DECIMAL(12,4) NOT NULL";}
		if($t == 'date'){			$a[] = "$f DATE NOT NULL";}
		if($t == 'longtext'){		$a[] = "$f LONGTEXT NOT NULL";}
		
	}
	
	$a[]							= "PRIMARY KEY  ($id)";
	$im								= implode(',', $a);
	return "$start ($im)";
}

function nuEmail($to_list=array(),$from_address='',$from_name='',$content='',$subject='',$file_list=array(),$html=false,$reply_to_list=array(),$debug=0,$method='SMTP') {

	ob_start();

        $nuEmailSettings = nuMarshallEmailSettings($from_address, $from_name, $html, $reply_to_list);

        require_once($_SESSION[NU_NUBUILDER_SESSION_DATA]['PHP_MAILER_PATH']);

        $mail                   = new PHPMailer();
	$mail->SMTPDebug        = $debug;

	if ( $method == 'SMTP' ) {
        	$mail->isSMTP();
	} 

	if ( $method == 'sendmail' ) {
		$mail->isSendmail();
	}

        $mail->Subject          = $subject;
        $mail->Body             = $content;
        $mail->Username         = $nuEmailSettings->username;                   // defaults to ''
        $mail->Password         = $nuEmailSettings->password;                   // defaults to ''
        $mail->Host             = $nuEmailSettings->host;                       // defaults to 127.0.0.1
        $mail->From             = $nuEmailSettings->from_address;               // defaults to ''
        $mail->FromName         = $nuEmailSettings->from_name;                  // defaults to ''
        $mail->Port             = $nuEmailSettings->smtp_port;                  // defaults to 25
        $mail->SMTPSecure       = $nuEmailSettings->smtp_secure;                // defaults to '' otherwsie it will be tls or ssl
        $mail->SMTPAuth         = $nuEmailSettings->smtp_use_authentication;    // defaults to false
        $mail->WordWrap         = $nuEmailSettings->word_wrap;                  // defaults to 120
        $mail->CharSet          = $nuEmailSettings->charset;                    // defaults to UTF-8
        $mail->IsHTML($nuEmailSettings->html);

        nuEmailHelperAdd($mail, $to_list,                              'AddAddress');
        nuEmailHelperAdd($mail, $nuEmailSettings->reply_to_list, 	'AddReplyTo');
        nuEmailHelperAttach($mail, $file_list);

	$result = array();

	try {

        	$result[0]	= $mail->Send();
		$result[1]     	= "Message sent successfully";
		$result[2]      = $mail->ErrorInfo;	

	} catch(Exception $e) {

		$result[0]      = false;
                $result[1]      = $e->errorMessage();
		$result[2]      = $mail->ErrorInfo;
	}

        nuEmailHelperClean($file_list);

	$result[3]		= ob_get_contents();
	ob_end_clean();
        return $result;
}

function nuMarshallEmailSettingsHelper($obj, $key, $default = '') {

	if ( !is_object($obj) ) {
		return $default;
	}

	if ( !isset($obj->$key) ) { 
		return $default;	
	}

	if ( empty(trim($obj->$key)) ) {
		return $default;
	}
	return trim($obj->$key);
}

function nuMarshallEmailSettings( $from_address = '', $from_name = '', $html = false, $reply_to_list = array() ) {

	$setup 						= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP];
	$nuEmailSettings 				= new stdClass();
	$nuEmailSettings->error_text                    = '';
        $nuEmailSettings->username			= nuMarshallEmailSettingsHelper($setup, 'set_smtp_username');
        $nuEmailSettings->password			= nuMarshallEmailSettingsHelper($setup, 'set_smtp_password');
	$nuEmailSettings->host                      	= nuMarshallEmailSettingsHelper($setup, 'set_smtp_host', '127.0.0.1');
	$nuEmailSettings->from_address                  = nuMarshallEmailSettingsHelper($setup, 'set_smtp_from_address', $from_address);
        $nuEmailSettings->from_name			= nuMarshallEmailSettingsHelper($setup, 'set_smtp_from_name', $from_name);
        $nuEmailSettings->smtp_port			= nuMarshallEmailSettingsHelper($setup, 'set_smtp_port', '25');
        $nuEmailSettings->smtp_use_secure		= nuMarshallEmailSettingsHelper($setup, 'set_smtp_use_ssl', false);
        $nuEmailSettings->smtp_use_authentication 	= nuMarshallEmailSettingsHelper($setup, 'set_smtp_use_authentication', false);
	$nuEmailSettings->word_wrap			= 120;
	$nuEmailSettings->charset                    	= 'UTF-8';
	$nuEmailSettings->html				= $html;
	$nuEmailSettings->reply_to_list			= array();
	$nuEmailSettings->smtp_secure			= '';

	if ( $nuEmailSettings->smtp_port == '587' ) {
		$nuEmailSettings->smtp_secure 		= 'tls';
		$nuEmailSettings->verbose_host		= 'tls://'.$nuEmailSettings->host.':587';
	}

	if ( $nuEmailSettings->smtp_port == '465' ) {
                $nuEmailSettings->smtp_secure 		= 'ssl';
		$nuEmailSettings->verbose_host          = 'ssl://'.$nuEmailSettings->host.':465';
        }

	if ( empty($reply_to_list) ) {
		if ( $from_address != '' ) {
                	$nuEmailSettings->reply_to_list = array($from_address => $from_name);
		}
        }

	return $nuEmailSettings;
}

function nuEmailHelperAdd(&$mail, $names_addresses, $method) {

	if (nu_is_my_array_associative($names_addresses)) {
		nuEmailHelperAddAssociative($mail, $names_addresses, $method);	
	} else {
		nuEmailHelperAddOrdinal($mail, $names_addresses, $method);
	}
}

function nuEmailHelperAddOrdinal(&$mail, $names_addresses, $method) {

	for ( $x=0; $x<count($names_addresses); $x++ ) {
		$mail->$method($names_addresses[$x], '');
	}
}

function nuEmailHelperAddAssociative(&$mail, $names_addresses, $method) {

	foreach ( $names_addresses as $key => $value ) {
		$mail->$method($key, $value);
	}
}

function nuEmailHelperAttach(&$mail, $file_list = array() ) {

	if ( !is_array($file_list) ) {
		return;
	}

	if ( !nu_is_my_array_associative($file_list) ) {
		return;
	}  	
	
	foreach($file_list as $filename=>$filesource) {
		$mail->AddAttachment($filesource,$filename);
        }	
}

function nuEmailHelperClean($file_list = array() ) {

        if ( !is_array($file_list) ) {
                return;
        }

        if ( !nu_is_my_array_associative($file_list) ) {
                return;
        }

        foreach($file_list as $filename=>$filesource) {
		@unlink($filesource);
        }
}

function nu_is_my_array_associative($arr) {

        return array_key_exists('0',$arr) ? false : true;
}

class nuSqlClass{

    public  $STR			= '';
    public  $OBJ			= '';

    function __construct($sql){

		$this->STR			= $sql;
		$S					= new PHPSQLParser($sql, true);
		$this->OBJ			= $S->parsed;

    }
	
	public function setMulitArray($n){
		
		if(!isset($this->OBJ[$n])){
			$this->OBJ[$n]		= array();
		}
		
	}
	
    public function removeSelectElements(){
		
		$w							= $this->OBJ['SELECT'];
		$this->OBJ['SELECT']		= array();
		return $w;
		
    }

    public function addSelectElement($be){
		
		$this->setMulitArray('SELECT');
		
		$c							= array();
		$c['expr_type']				= ExpressionType::CONSTANT;
		$c['base_expr']				= $be;
		
		$this->OBJ['SELECT'][] 		= $c;
		
		for($i = 0 ; $i < count($this->OBJ['SELECT']) ; $i++){
			$this->OBJ['SELECT'][$i]['delim'] = ',';
		}
		
		$this->OBJ['SELECT'][$i-1]['delim'] = '';
		
    }

    public function addWhereElement($be){
		
		
		if(!isset($this->OBJ['WHERE'])){
			$this->OBJ['WHERE']		= array();
		}
		
		$c							= array();
		$c['expr_type']				= ExpressionType::CONSTANT;
		$c['base_expr']				= $be;
		$c['sub_tree']				= false;
		$c['nubuilder']				= 1;
		
		$this->OBJ['WHERE'][] 		= $c;
		
    }


    public function addBracketsToWhere(){
		
		if(!isset($this->OBJ['WHERE'])){
			
			$this->OBJ['WHERE']		= array();
			return;
			
		}
		
		$bo							= array();
		$bo['expr_type']			= ExpressionType::CONSTANT;
		$bo['base_expr']			= '(';
		$bo['sub_tree']				= false;
		$bo['nubuilder']			= 1;
		
		$bc							= array();
		$bc['expr_type']			= ExpressionType::CONSTANT;
		$bc['base_expr']			= ')';
		$bc['sub_tree']				= false;
		$bc['nubuilder']			= 1;
		
		array_unshift($this->OBJ['WHERE'], $bo);
		
		$this->OBJ['WHERE'][]		= $bc; 
		
    }

    public function SQL(){

			$s						= new PHPSQLCreator($this->OBJ);
			
			return $s->created;
			
    }

}

class nuSearchClass{
	
    private $where				= array();
    private $not				= array();
    private $columns			= array();
    private $search				= array();
	
    public function __construct($s){
 
		$q      = '"';
		$S      = str_split($s);
		$min    = '-';
		$dbl    = '"';
		$o      = array();
		$isP    = false;
		$isN    = false;
		
		for($i = 0 ; $i < count($S) ; $i++){
		
			$c          = new stdClass;
			$c->value   = $S[$i];
			$c->not     = false;
			$c->phrase  = false;
			$o[]        = $c;
			
		}
		
		for($i = 0 ; $i < count($o) ; $i++){
			$isP    = $this->phrase($o, $i, $isP);
		}
		
		$isN    = false;
		
		for($i = 0 ; $i < count($o) ; $i++){
		
		
			if($o[$i]->value == '-'){
				$isN    = true;
			}
			
			if(!$o[$i]->phrase and $o[$i]->value == ' '){
				$isN    = false;
			}
				
			$o[$i]->not = $isN;
		
		}
		
		$W  = '';
		$N  = '';
		$where  = true;
		
		for($i = 0 ; $i < count($o) ; $i++){
		
			$O = $o[$i];
			
			if($O->value == '"'){
				
			}else if($O->value == '-' and !$O->phrase){
			}else if($O->value == ' ' and !$O->phrase){
			
				if($W != ''){
					$this->where[]    = $W;
				}
				
				if($N != ''){
					$this->not[]    = $N;
				}
				
				$N = '';
				$W = '';
				
			}else if($O->not){
				$N .= $O->value;
			}else if(!$O->not){
				$W .= $O->value;
		
			}
			
		}
		
		if($W != ''){
			$this->where[]    = $W;
		}
		
		if($N != ''){
			$this->not[]    = $N;
		}
		
		return this;

	}


	
    public function phrase(&$o, $i, $isP){
    
		if($o[$i]->value != '"'){return $isP;}

		if($isP){                                                               //-- is ending quote

			$o[$i]->phrase      = true;
			return false;
			
		}else{
		
			if($this->hasNextQuoted($o, $i)){                                   //-- quote with matching quote
			
				$o[$i]->phrase  = true;
				return true;
				
			}else{
				return false;
			}
			
		}

	}


    public function hasNextQuoted($o, $i){
    
		$i++;
		$s  = $i;
		
		for($i ; $i < count($o) ; $i++){
		
			if($o[$i]->value == '"'){
			
				$this->addPhraseTag($o, $s, $i);
				
				return true;
				
			}
    
        }
    
		return false;
    
	}


    private function addPhraseTag(&$o, $s, $I){
    
		for($i = $s ; $i < $I ; $i++){
		
			$o[$i]->phrase = true;

		}

	}

}

function nuCopySystemFiles() {

	$t      	= nuSystemList();
	nuRunQuery('DROP VIEW IF EXISTS zzzzsys_report_data');
	nuRunQuery('DROP VIEW IF EXISTS zzzzsys_run_list');

	for($i = 0 ; $i < count($t) ; $i++){
        
        	$table  = $t[$i];
		$sql	= "DROP TABLE IF EXISTS sys_$table";
        	nuRunQuery($sql);

		$sql	= "CREATE TABLE sys_$table SELECT * FROM $table";
        	nuRunQuery($sql);
		
		if($table != 'zzzzsys_debug'){
			$sql= "DROP TABLE IF EXISTS $table";
			nuRunQuery($sql);
		}
    	}
}

function nubuilderWordpressImportNewDB() {

        $t = nuRunQuery('SHOW TABLES');
        while($r = db_fetch_row($t)){
                if($r[0] == 'zzzzsys_object'){return;}
        }
        $file                                           = realpath(dirname(__FILE__))."/nubuilder4.sql";
        @$handle                                        = fopen($file, "r");
        $temp                                           = "";
        if($handle){
                while(($line = fgets($handle)) !== false){
                        if($line[0] != "-" AND $line[0] != "/"  AND $line[0] != "\n"){
                                $line                   = trim($line);
                                $temp                   .= $line;
                                if(substr($line, -1) == ";"){
                                        $temp   = rtrim($temp,';');
                                        $temp   = str_replace('ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER','', $temp);
                                        nuRunQuery($temp);
                                        $temp   = "";
                                }
                        }
                }
        }
}

function nuImportSystemFiles() {

	try{
		$file						= realpath(dirname(__FILE__))."/nubuilder4.sql";
		@$handle					= fopen($file, "r");
		$temp						= "";
		if ( $handle ) {
			
			nuRunQuery('DROP TABLE IF EXISTS zzzzsys_debug');

			while(($line = fgets($handle)) !== false){

				if($line[0] != "-" AND $line[0] != "/"  AND $line[0] != "\n"){
					$line 			= trim($line);
					$temp 			.= $line;
					if(substr($line, -1) == ";"){
						$temp	= rtrim($temp,';');
						$temp	= str_replace('ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER','', $temp);
						nuRunQuery($temp);
						$temp	= "";
					}
				}
			}
		}else{
			throw new nuInstallException("error opening the file: $file");
		}

	}catch (Throwable $e) {
		nuInstallException($e);
	}catch (Exception $e) {
		nuInstallException($e);
	}
}

function nuInstallException($e){

	$ce		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_SYSTEM_EVAL];
	$se		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PROC_EVAL];
	print "$ce $se<br>" . $e->getFile() .'<i>' . $e->getMessage() . '</i>' . '<br><b><i>Traced from...</i></b><br>';
	$a		= $e->getTrace();
	$t		= array_reverse($a);
	for($i = 0 ; $i < count($t) ; $i++){
		$m	= '(line:<i>' . $t[$i]['line'] . '</i>) ' . $t[$i]['file'] . ' <b> - ' . $t[$i]['function'] . '<b>';
		print $m . '<br>';
	}
}

//-- after zzzzsys files have been imported
function nuUpdateSystemRecords(){									

	$ts			= nuBuildTableSchema();
	$t			= nuListSystemTables();

 	for($i = 0 ; $i < count($t) ; $i++){
        
        	$table  	= $t[$i];
		$new		= $ts["$table"]['names'];
		$old		= $ts["sys_$table"]['names'];
		//-- remove unused fields from old
		for($c = 0 ; $c < count($old) ; $c++){						
			$field	= $old[$c];
			if(!in_array($field, $new)){
				$sql= "ALTER TABLE sys_$table DROP COLUMN $field";
				nuRunQuery($sql);
			}
		}
	}
	
	$ts 			= nuBuildTableSchema();
	for($i = 0 ; $i < count($t) ; $i++){
        
		$table  	= $t[$i];
		$lfield		= 'FIRST';
	
		//-- insert extra new fields into old	
		for($c = 0 ; $c < count($new) ; $c++){			

			$new	= $ts["$table"]['names'];
			$newt	= $ts["$table"]['types'];
			$old	= $ts["sys_$table"]['names'];
			$oldt	= $ts["sys_$table"]['types'];
			$ofield	= $old[$c];
			$nfield	= $new[$c];
			$otype	= $oldt[$c];
			$ntype	= $newt[$c];

			if($ofield != $nfield){
				
				$sql= "ALTER TABLE sys_$table ADD COLUMN $nfield $ntype $lfield";
				nuRunQuery($sql);
				$ts	= nuBuildTableSchema();
				//-- start from the beginning again
				$c	= -1;					
				
			}else if($otype != $ntype){
				
				$sql= "ALTER TABLE sys_$table MODIFY COLUMN $nfield $ntype";
				nuRunQuery($sql);
			}
			
			if($ofield == ''){
				$lfield	= '';
			}else{
				$lfield	= "AFTER $ofield";
			}
		}
	}
}

function nuAddNewSystemTables(){
	
	$ts			= nuBuildTableSchema();
	foreach ($ts as $k => $v) {
		if(substr($k,0,8) == 'zzzzsys_'){
			$v	= $ts["sys_$k"]['valid'];
			if($v == ''){
				$sql	= "CREATE TABLE sys_$k SELECT * FROM $k";
				nuRunQuery($sql);
			}
		}
	}
}

function nuJustNuRecords(){
   
	nuRunQuery('DELETE FROM zzzzsys_event WHERE zzzzsys_event_id NOT LIKE "nu%" ');
	nuRunQuery('DELETE FROM zzzzsys_file WHERE zzzzsys_file_id NOT LIKE "nu%" ');
	nuRunQuery('DELETE FROM zzzzsys_format WHERE zzzzsys_format_id NOT LIKE "nu%"');
	nuRunQuery('DELETE FROM zzzzsys_php WHERE sph_zzzzsys_form_id NOT LIKE "nu%" AND zzzzsys_php_id NOT LIKE "nu%" ');
	nuRunQuery('DELETE FROM zzzzsys_setup');
	nuRunQuery('DELETE FROM zzzzsys_tab WHERE  syt_zzzzsys_form_id NOT LIKE "nu%" OR syt_zzzzsys_form_id = "nuuserhome" ');
	
}

function nuRemoveNuRecords(){
   
	//-- delete if attached to objects on forms with ids starting with 'nu'	  
    	nuRunQuery('DELETE FROM sys_zzzzsys_event WHERE zzzzsys_event_id LIKE "nu%" ');
    
    	nuRunQuery('DELETE FROM sys_zzzzsys_file WHERE zzzzsys_file_id LIKE "nu%" ');
    
    	nuRunQuery('DELETE FROM sys_zzzzsys_format WHERE zzzzsys_format_id LIKE "nu%" ');

	//-- delete all objects on forms with ids that start with 'nu'
    	nuRunQuery('DELETE FROM sys_zzzzsys_object WHERE sob_all_zzzzsys_form_id LIKE "nu%"  AND sob_all_zzzzsys_form_id != "nuuserhome" ');
   
	//-- delete all objects on forms with ids that start with 'nu'
    	nuRunQuery('DELETE FROM sys_zzzzsys_tab WHERE syt_zzzzsys_form_id LIKE "nu%" AND syt_zzzzsys_form_id != "nuuserhome" ');
	
	//-- delete all objects on forms with ids that start with 'nu'
    	nuRunQuery('DELETE FROM sys_zzzzsys_form WHERE zzzzsys_form_id LIKE "nu%" ');
    
	//-- delete records that start with ids starting with 'nu' or linked to forms starting with 'nu'
    	nuRunQuery('DELETE FROM sys_zzzzsys_php WHERE zzzzsys_php_id LIKE "nu%" AND zzzzsys_php_id != "nuuserhome_BE" ');

	//-- KEEP BROWSEs from FORMs with ids that start with 'nu'	    
    	nuRunQuery('DELETE FROM sys_zzzzsys_browse WHERE sbr_zzzzsys_form_id LIKE "nu%" ');

	//-- KEEP BROWSEs from FORMs with ids that start with 'nu'	    
    	nuRunQuery('DELETE FROM sys_zzzzsys_translate WHERE zzzzsys_translate_id LIKE "nu%" ');
    
	//-- delete all timezones
	nuRunQuery('DELETE FROM sys_zzzzsys_timezone');
}

function nuAppendToSystemTables(){

	try{
		$t      	= nuSystemList();
		for($i = 0 ; $i < count($t) ; $i++){
			$table  = $t[$i];

			//-- if duplicate records, use latest record from zzzzsys_object
			if($table == 'zzzzsys_object'){				
				nuRunQuery('REPLACE INTO sys_zzzzsys_object SELECT * FROM zzzzsys_object');
				nuRunQuery('DELETE FROM zzzzsys_object');
			}
			nuRunQuery("REPLACE INTO $table SELECT * FROM sys_$table");
			nuRunQuery("DROP TABLE sys_$table");
		}

		nuRunQuery('DROP TABLE sys_zzzzsys_report_data');
		nuRunQuery('DROP TABLE sys_zzzzsys_run_list');
		nuRunQuery('UPDATE zzzzsys_setup SET set_denied = "1" ');
			
	}catch (Throwable $e) {
		nuInstallException($e);
	}catch (Exception $e) {
		nuInstallException($e);
	}
}

function nuSystemList(){
	
	$t      = [];
    	$t[]	= 'zzzzsys_access';
    	$t[]	= 'zzzzsys_access_form';
    	$t[]	= 'zzzzsys_access_php';
    	$t[]	= 'zzzzsys_access_report';
    	$t[]	= 'zzzzsys_browse';
    	$t[]	= 'zzzzsys_debug';
    	$t[]	= 'zzzzsys_event';
    	$t[]	= 'zzzzsys_file';
    	$t[]	= 'zzzzsys_form';
    	$t[]	= 'zzzzsys_format';
    	$t[]	= 'zzzzsys_object';
    	$t[]	= 'zzzzsys_php';
    	$t[]	= 'zzzzsys_report';
    	$t[]	= 'zzzzsys_select';
    	$t[]	= 'zzzzsys_select_clause';
    	$t[]	= 'zzzzsys_session';
    	$t[]	= 'zzzzsys_setup';
    	$t[]	= 'zzzzsys_tab';
    	$t[]	= 'zzzzsys_table';
    	$t[]	= 'zzzzsys_timezone';
    	$t[]	= 'zzzzsys_translate';
    	$t[]	= 'zzzzsys_user';
	
	return $t;
}

function nuSetCollation(){

	$tbls   = nuRunQuery('SHOW FULL Tables WHERE Table_type = "BASE TABLE" ');
	$dbname	= $_SESSION[NU_NUBUILDER_SESSION_DATA][DB_NAME];

	nuRunQuery("ALTER DATABASE $dbname CHARACTER SET utf8 COLLATE utf8_general_ci");
	
	while($row = db_fetch_row($tbls)){

		$tab 	= $row[0];
		
		if(substr($tab, 0, 8) == 'zzzzsys_'){
			
			nuRunQuery("ALTER TABLE $tab ENGINE = MyISAM");
			nuRunQuery("ALTER TABLE $tab DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci");
			nuRunQuery("ALTER TABLE $tab CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci");
		}
	}
}

function nuValidateSubforms(){

	$nudata		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['nuFORMdata'];

	nuCheckAccessLevel($nudata[0]);
	
	$nuprepare	= 	'SELECT sob_subform_zzzzsys_form_id, sob_all_label,sob_all_access FROM zzzzsys_object WHERE zzzzsys_object_id = ?';
	$nuprepare2	= 	'SELECT 
						sob_all_id AS id, 
						sob_all_label AS label, 
						sob_all_validate AS validate 
					FROM zzzzsys_object 
					WHERE sob_all_zzzzsys_form_id  = ? ';
	
	for($d = 0 ; $d < count($nudata) ; $d++){
		
		$sf	= $nudata[$d];
		$a	= [];
		$L	= [];
		$t	= nuRunQuery($nuprepare, [$sf->object_id]);
		$r	= db_fetch_row($t);
		$f	= $r[0]==''?$sf->object_id:$r[0];
		$l	= $r[1];
		
		if($r[2] != 1){										//-- not readonly
				
			//-- get Objects
			$t	= nuRunQuery($nuprepare2, [$f]);
			
			while($r = db_fetch_object($t)){
				$a[$r->id]	= $r->validate;
				$L[$r->id]	= $r->label;
			}
			
			for($i = 0 ; $i < count($sf->rows) ; $i++){
					
				for($I = 1 ; $I < count($sf->fields) ; $I++){
					
					$fld			= $sf->fields[$I];
					$val			= $a[$fld];
					$label			= '<b>' . $L[$fld] . '</b>';
					$notDeleted 	= $sf->deleted[$i] == 0;
					$slabel			= $l == '' ? '' : "($l)";
					$noz			= $i + 1;
					
					if($val == 1 || $val == 2){													//-- no blanks
					
						if($sf->rows[$i][$I] == '' and $notDeleted){

							if($d == 0){
								nuDisplayError("$label " . nuTranslate('cannot be left blank'));
							}else{
								nuDisplayError("$label on row $noz " . nuTranslate('cannot be left blank') . " $slabel");
							}
							
						}
						
					}
					
					if($val == 2){																//-- no duplicates
					
						$dupe	= nuDuplicate($sf, $i, $I);
					
						if($dupe and $notDeleted){
							
							if($d == 0){
								nuDisplayError("$label has a duplicate");
							}else{
								nuDisplayError("$label on row $noz has a duplicate $slabel");
							}
							
						}
						
					}
					
				}
				
			}
		}
	}
	
}


function nuCheckAccessLevel($data){

	$u		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['USER_GROUP_ID'];
	$f		= $data->object_id;
	$a		= $data->action;

	if($u == ''){			//-- globeadmin
		return;
	}
	
	$r		= nuRunQueryObject('SELECT * FROM zzzzsys_access_form WHERE slf_zzzzsys_access_id = ? AND slf_zzzzsys_form_id = ? ', [$u, $f]);
	
	if($a == 'save' and $r->slf_save_button != 1){
		nuDisplayError("Save is disabled for this Access Level");
	}
	
	if($a == 'delete' and $r->slf_delete_button != 1){
		nuDisplayError("Delete is disabled for this Access Level");
	}
	
}


function nuDuplicate($S, $R, $F){
	
	$f		= $S->fields[$F];
	$i		= $S->rows[$R][0];
	$v		= $S->rows[$R][$F];
	$sql	= "SELECT $S->primary_key FROM $S->table WHERE $f = ? AND $S->primary_key != ? ";
	$t		= nuRunQuery($sql, [$v, $i]);
	$r		= db_num_rows($t);
	
	return $r > 0;
	
}


function nuUpdateDatabase(){

	nuValidateSubforms();
	$nudata			= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['nuFORMdata'];
	$nuMainID		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['record_id'];
	$form_type		= nuGetFormProperties($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['form_id'])->sfo_type;
	$nuDelAll		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['deleteAll'];
	$nuMainTable	= $nudata[0]->table;
	$EFid			= $nudata[0]->object_id;
	$cts			= nuBuildTableSchema();
	$user			= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['USER_ID'];
		
	for($d = 0 ; $d < count($nudata) ; $d++){
		
		$sf			= $nudata[$d];
		$action		= $sf->action;
		$rows		= $sf->rows;
		$edited		= $sf->edited;
		$deleted	= $sf->deleted;
		$fields		= $sf->fields;
		$table		= $sf->table;
		$pk			= $sf->primary_key;
		$fk			= $sf->foreign_key;
		$fv			= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['record_id'];
		$auto		= nuAutoNumbers($sf->object_id);
		$log		= in_array($table . '_nulog', $cts[$table]['names']);
		
		for($r = 0 ; $r < count($rows) ; $r++){
			
			if(nuEditedRow($edited[$r])){
				
				$F					= array();
				$I					= array();
				$V					= array();
				$edit				= $edited[$r];
				$row				= $rows[$r];
				$pv					= $row[0];
				$nv					= nuID();
				
				if($pv == '-1'){
					
					$nv				= nuBuildPrimaryKey($table, $pk);
					$id				= "'$nv'";
					
					if($d == 0){$nuMainID = $nv;}
					
				}else{
					
					$id				= "'$pv'";
					
					if($d == 0){$nuMainID = $pv;}
					
				}
				
				$V					= [];																//-- primary key id
				$I					= [];
				
				if($nv != 'autoid'){
						
					$V[]			= $id;																//-- primary key id
					$I[]			= $pk;
					
				}
				
				if($fk == ''){
					$rec_id			= $id;
				}else{
					
					$V[]			= "'$nuMainID'";
					$I[]			= "`$fk`";
					
				}
				
				for($R = 1 ; $R < count($row) ; $R++){

					$isAN			= in_array($fields[$R], $auto);

					if($edit[$R] == 1 or $isAN){														//-- has been edited
					
						if($cts[$table] == ''){															//-- not valid table name

							if($form_type == 'launch'){
								nuDisplayError("Launch Forms Cannot Be Saved");
							}else{
								nuDisplayError("<b>$table</b> is not a valid table name for a Subform");
							}
							
							return;

						}
						
						if(in_array($fields[$R], $cts[$table]['names'])){								//-- valid field names

							if($isAN){
								$v	= nuAutoNumber($sf->object_id, $fields[$R], $row[$R]);
							}else{
								$v	= $row[$R];
							}
							
							$add	= addslashes($v);
							$fld	= $fields[$R];
							$V[]	= "'$add'";
							$I[]	= "`$fld`";
							$F[]	= "`$fld` = '$add'";
							
						}
						
					}
					
				}

				if($log){

					$jd 		= new stdClass;
					$jd->added	= Array('user' => $user, 'time' => time());
					$je			= addslashes(json_encode($jd));
					$V[]		= "'$je'";
					$I[]		= "`$table"."_nulog`";

				}

				$fs				= implode(', ', $F);							//-- for update statement
				$vs				= ' VALUES (' . implode(', ', $V) . ')';
				$is				= '        (' . implode(', ', $I) . ')';

				if($action == 'save'){
					
					if($pv == '-1'){
						
						if($deleted[$r] == '0'){
							
							$sql	= "INSERT INTO $table $is $vs;";
							$S[]	= $sql;
							
						}
						
					}else{
						
						$sql		= "UPDATE $table SET $fs WHERE `$pk` = '$pv';";
						$S[]		= $sql;
						
						if($log){
							
							$sql	= "SELECT $table" . "_nulog FROM $table WHERE `$pk` = '$pv';";
							$logt	= nuRunQuery($sql);
							$logr	= db_fetch_row($logt);
							$jd		= json_decode($logr[0]);
							
							if(gettype($jd) == 'object'){
								$jd->edited	= Array('user' => $user, 'time' => time());								
							}else{
								
								$jd 		= new stdClass;
								$jd->added	= Array('user' => 'unknown', 'time' => 0);
								$jd->edited	= Array('user' => $user, 'time' => time());

							}
							
							$je		= addslashes(json_encode($jd));
							$sql	= "UPDATE $table SET $table" . "_nulog = '$je' WHERE `$pk` = '$pv';";
							$S[]	= $sql;
							
						}
						
					}
				
				}
				
				
			}
			
		}

		for($i = 0 ; $i < count($deleted) ; $i++){
			
			$id				= $rows[$i][0];

			if($action == 'delete' || $deleted[$i] == '1'){
			
				if($id != '-1'){
						
					$sql	= "DELETE FROM $table WHERE `$pk` = '$id';";
					$S[]	= $sql;
					
				}
				
			}
		
		}
		
	}
	
	
	if($nuDelAll == 'Yes'){
		
		nuEval($EFid . '_BD');
		$S				= array_reverse($S);				//-- delete children first
		
	}else{
		nuEval($EFid . '_BS');
	}

	if(count($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUERRORS]) > 0){return;}

	for($i = 0 ; $i < count($S) ; $i++){
		
		$sql			= $S[$i];
		$insert			= "INSERT INTO $nuMainTable";
		$length			= strlen($insert);
		
		nuRunQuery($sql);
		
		if(substr($sql, 0, $length) == $insert and $nuMainID == 'autoid'){
			$t			= nuRunQuery('SELECT LAST_INSERT_ID()');
			$nuMainID	= db_fetch_row($t)[0];
			
		}
	}

    nuChangeHashVariable('RECORD_ID', $nuMainID);

	if($nuDelAll == 'Yes'){
		nuEval($EFid . '_AD');
	}else{
		nuEval($EFid . '_AS');
	}

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUAFTEREVENT] = true;

	return $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID'];
	
}

function nuBuildPrimaryKey($t, $p){
	
	$autopk	= db_is_auto_id($t, $p);

	if($autopk){
		$v	= 'autoid';
	}else{
		$v	= nuID();
	}
	
	return $v;
	
}

function nuEditedRow($e){
	
	$t	= 0;
	
	for($i = 0 ; $i < count($e) ; $i++){
		$t	= $t + $e[$i];
	}
	
	return $t > 0;			//-- something has been edited
	
}

function nuDeleteRow($r, $p){

	nuRunQuery("DELETE FROM `$r->sfo_table` WHERE `$r->sfo_primary_key` = ? ", array($p));
	
}

function nuInsertRow($r, $p){
	
	$T	= nuRunQuery("SELECT COUNT(*) FROM `$r->sfo_table` WHERE `$r->sfo_primary_key` = ? ", array($p));
	$R	= db_fetch_row($T);
	
	if($R[0] == 0){
		nuRunQuery("INSERT INTO `$r->sfo_table` (`$r->sfo_primary_key`) VALUES (?) ", array($p));
	}

}

function nuUpdateRow($r, $p, $row, $FK){
	
	if($row['fk'] != ''){		//-- (if == it's not the parent record add foreign key)
	
		$row['f'][]	= $row['ff'];
		$row['v'][]	= $FK;
		
	}
	
	$set			= array();
	$columns		= db_field_names($r->sfo_table);
	$objects		= nuEditObjects($r->zzzzsys_form_id);
	$q				= array();
	
	for($i = 0 ; $i < count($row['f']) ; $i++){
		
		if(array_search($row['f'][$i], $columns) !== false){
			
			$set[] 	= $row['f'][$i] . ' = ? ';
			$q[]	= nuFormatValue($row, $i);
			
		}
		
	}

	if(count($set) > 0){
		
		$q[]		= $p;
		$s	= "UPDATE `$r->sfo_table` SET " . implode(', ', $set) . " WHERE `$r->sfo_primary_key` = ? ";
		nuRunQuery($s, $q);

	}
	
}

function nuEditObjects($id){

	$a	= array();
	$t	= nuRunQuery('SELECT sob_all_id FROM zzzzsys_object WHERE sob_all_zzzzsys_form_id = ? ORDER BY sob_all_order',[$id]);
	
	while($r = db_fetch_object($t)){
	
		$a[]	= $r->sob_all_id;
	
	}
	
	return $a;
}

function nuAutoNumber($form_id, $field_id, $value){
	
	$r		= nuRunQueryObject('SELECT * FROM zzzzsys_object WHERE sob_all_zzzzsys_form_id = ? AND sob_all_id = ?', array($form_id, $field_id));
	$input	= $r->sob_all_type == 'input';
	$auto	= $r->sob_input_type == 'nuAutoNumber';
	$newno	= nuHasNewRecordID() || nuHasNoRecordID();
	
	if($input and $auto and $newno){
		return nuUpdateCounter($r->zzzzsys_object_id);
	}
	
	return $value;
}

function nuUpdateCounter($id){

	$n		= nuID();
	
	for($i = 0 ; $i < 10 ; $i++){
		
		nuRunQuery('UPDATE zzzzsys_object SET sob_input_javascript = ?  WHERE zzzzsys_object_id = ? AND sob_input_javascript = "" ',array($n, $id));
		
		$t		= nuRunQuery('SELECT * FROM zzzzsys_object WHERE zzzzsys_object_id = ? ', [$id]);
		$r		= db_fetch_object($t);
		$c		= $r->sob_input_count + 1;
		$a		= $r->sob_input_javascript;

		if($a == $n){
			
			nuRunQuery('UPDATE zzzzsys_object SET sob_input_javascript = "", sob_input_count = ?  WHERE zzzzsys_object_id = ? ', array($c,$id));
			return $c;
		}
	}
	
	nuDisplayError('Could not get AutoNumber');
	
	return -1;
}

function nuAutoNumbers($form_id){

	$t			= nuRunQuery('SELECT sob_all_id FROM zzzzsys_object WHERE sob_all_zzzzsys_form_id = ? AND sob_all_type = "input" AND sob_input_type = "nuAutoNumber" ', array($form_id));
	$a			= [];
	
	while($r = db_fetch_object($t)){
		$a[]	= $r->sob_all_id;
	}
	
	return $a;
	
}

function nuFormatValue($row, $i){
	
	$form_id	= $row['fm'];
	$field		= $row['f'][$i];
	$t			= nuRunQuery('SELECT * FROM zzzzsys_object WHERE sob_all_zzzzsys_form_id = ? AND sob_all_id = ? ', array($form_id, $field));
	$r			= db_fetch_object($t);
	
	if($r->sob_all_type == 'select' and $r->sob_select_multiple == '1' and $row['v'][$i] != ''){
		return json_encode($row['v'][$i]);
		
	}else if($r->sob_all_type == 'input' and $r->sob_input_type == 'nuAutoNumber'){
		
		if(nuHasNewRecordID()){
			return nuUpdateCounter($r->zzzzsys_object_id);
		}
		
	}else{
		
		return $row['v'][$i];
		
	}

}


function nuHasNoRecordID(){
	return $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID'] == -1;
}


function nuHasNewRecordID(){
	return $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['PREVIOUS_RECORD_ID'] != $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID'];
}

function nuChangeHashVariable($h, $v){
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH][$h]	= $v;
}

function nuReturnNewRecord($i = -1){
	
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID'] = $i;
}


function nuDisplayError($m){
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUERRORS][] = $m;
}


function nuCheckAccess($f, $r = ''){

	$forms		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_FORMS];
	$reports 	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_REPORTS];
	$procedures	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_PHP];

	if(in_array($f, $forms)){

		return 1;
	}else{

		if($r == '' or $r == '-1' or in_array($r, array_merge($reports, $procedures))){

			return 2;
		}else{

			nuDisplayError("Access Denied..");
			return 3;
			
		}
		
		nuDisplayError("Access Denied..");
		return 4;
	}
}

function nuSubformObject($id){

	if($id == ''){
		$id	= 'nuBuilder4EditForm';
	}
	
	$sfs	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['nuFORMdata'];
	
	for($i = 0 ; $i < count($sfs) ; $i++){
		
		if($sfs[$i]->id == $id){
			return $sfs[$i];
		}
		
	}
	
	return false;
	
}


function nuDeleteForm($f){
	
	$t		= nuRunQuery('DELETE FROM zzzzsys_browse WHERE sbr_zzzzsys_form_id = ? ', [$f]);
	$t		= nuRunQuery('DELETE FROM zzzzsys_tab WHERE syt_zzzzsys_form_id = ? ', [$f]);
	$t		= nuRunQuery('DELETE FROM zzzzsys_php WHERE zzzzsys_php_id LIKE CONCAT(?, "_") ', [$f]);
	$t		= nuRunQuery('DELETE FROM zzzzsys_object WHERE sob_all_type = "run" AND sob_run_zzzzsys_form_id = ? ', [$f]);
	$t		= nuRunQuery('SELECT * FROM zzzzsys_object WHERE sob_all_zzzzsys_form_id = ? ', [$f]);

	while($r = db_fetch_object($t)){
		
		$i	= $r->zzzzsys_object;
		$t	= nuRunQuery('DELETE FROM zzzzsys_event WHERE sev_zzzzsys_object_id = ? ', [$i]);
		$t	= nuRunQuery('DELETE FROM zzzzsys_php WHERE zzzzsys_php_id  LIKE CONCAT(?, "_")', [$i]);
	}
}

function nuGetFile(){
	
	$f		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['fileCode'];
	$t		= nuRunQuery('SELECT * FROM zzzzsys_file WHERE sfi_code = ? ', [$f]);
	$r		= db_fetch_object($t);
	
	return $r->sfi_json;
}

function nuDragSave(){

	$data = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE];
	
    foreach($data['nuDragState']['tabs'] as $tab){
		
		if($tab['objects'] !== null){
			
			$tabID = $tab['tab_id'];

			$nuprepare	= 	'UPDATE zzzzsys_object SET 
								sob_all_order = ?, 
								sob_all_left = ?, 
								sob_all_top = ?, 
								sob_all_width = ?, 
								sob_all_height = ?, 
								sob_all_zzzzsys_tab_id = ? 
							WHERE zzzzsys_object_id = ? ';

			for($i = 0; $i < sizeof($tab['objects']); $i++) {
				
				$field = $tab['objects'][$i];
				nuRunQuery($nuprepare, array($field['tab_order'], $field['left'], $field['top'], $field['width'], $field['height'], $tabID, $field['object_id']));
				
			}
			
		}
		
    }
	
    return new stdClass;
}

function nuFormProperties($f){

	$t	= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', array($f));
	$r	= db_fetch_object($t);
	
	return $r;
}

function nuBeforeBrowse($f){
	
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['nuMessages']	= [];
	$r						= nuFormProperties($f);
	nuEval($f . '_BB');
}

function nuBeforeEdit() {
	
	$RID								= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID'];
	$FID								= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_FORMID];	
	$r								= nuFormProperties($FID);
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_EXTRAJS] 	= '';
	$ct								= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['call_type'];

	if ( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['call_type'] == 'getform' and $r == '' ) { return; }
	
	if($ct == 'getform'){
		
		$logfield					= $r->sfo_table . '_nulog';
		$cts						= nuBuildTableSchema();
		$user						= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['USER_ID'];

		if($cts[$r->sfo_table] !== NULL){
				
			if(in_array($logfield, $cts[$r->sfo_table]['names'])){								//-- valid log field name
				
				$S				= "SELECT $logfield FROM `$r->sfo_table` WHERE `$r->sfo_primary_key` = ? ";
				$T				= nuRunQuery($S, [$RID]);
				$J				= db_fetch_row($T)[0];
				$jd				= json_decode($J);
	
				if(gettype($jd) == 'object'){
					$jd->viewed	= Array('user' => $user, 'time' => time());								
				}else{
					$jd 		= new stdClass;
					$jd->added	= Array('user' => 'unknown', 'time' => 0);
					$jd->viewed	= Array('user' => $user, 'time' => time());
				}
				
				$je				= addslashes(json_encode($jd));
				$S				= "UPDATE `$r->sfo_table` SET $logfield = '$je' WHERE `$r->sfo_primary_key` = ? ";
				$T				= nuRunQuery($S, [$RID]);
			}
		}
	}

	if( $RID != '' ) {

		nuEval($FID . '_BE');
	}
	
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_EXTRAJS] .= $r->sfo_javascript;
}

function nuFormCode($f){
	
	$r	= nuFormProperties($f);
	
	return $r->sfo_code;
	
}

//function nuGetFormObject($F, $R, $OBJS, $P = stdClass){
function nuGetFormObject($F, $R, $OBJS){

	
    $tabs 			= nuBuildTabList($F);
    $f				= nuGetEditForm($F, $R);
    $f->form_id		= $F;
    $f->record_id	= $R;
	
	if($f->table == ''){
		$A 			= [];
	}else{
		
		$s 			= "Select * From `$f->table` Where `$f->primary_key` = '$R'";
		$t 			= nuRunQuery($s);
		$A 			= db_fetch_array($t);
		
	}


	if($R != ''){
		
		$nuprepare					= 	"
											SELECT * 
											FROM zzzzsys_form
											INNER JOIN zzzzsys_object ON sob_all_zzzzsys_form_id = zzzzsys_form_id
											INNER JOIN zzzzsys_tab ON zzzzsys_tab_id = sob_all_zzzzsys_tab_id
											WHERE zzzzsys_form_id = ?
											ORDER BY syt_order, (sob_all_type = 'run'), sob_all_zzzzsys_tab_id, sob_all_order    
										";
		
		$t 							= nuRunQuery($nuprepare, array($F));
		$a 							= array();
		$cloneable					= array();

		while($r = db_fetch_object($t)){
			
			$o 						= nuDefaultObject($r, $tabs);
			
			if($r->sob_all_cloneable == '0'){
				//$cloneable[]		= array(subform => $r->sob_all_type == 'subform', id => $r->sob_all_id);
				$cloneable[]            = array('subform' => $r->sob_all_type == 'subform', 'id' => $r->sob_all_id);
			}
			
			if($R == '-1'){
				$o->value			= '';//nuGetSQLValue($r->sob_all_default_value_sql);
			}else{
				$o->value			= $A[$r->sob_all_id];
			}

			if($r->sob_all_type == 'calc'){
				
				$o->formula			= $r->sob_calc_formula;
				$o->format			= $r->sob_calc_format;
				$o->align 			= $r->sob_all_align;
				$o->calc_order		= $r->sob_all_order;
				
				
			}
				
			if($r->sob_all_type == 'textarea' || $r->sob_all_type == 'run'){
				$o->align 			= $r->sob_all_align;
			}
				
			if($r->sob_all_type == 'input' || $r->sob_all_type == 'display'){

				$o->align 			= $r->sob_all_align;
				$o->format 			= '';
				
				if($r->sob_input_type == 'nuNumber' || $r->sob_input_type == 'nuDate'){
					$o->format 		= $r->sob_input_format;
				}
					
				if($r->sob_input_type == 'nuAutoNumber'){
					
					$o->counter 	= $o->value;
					
				}
					
				$o->input 			= $r->sob_input_type;

				if($r->sob_input_type == 'button' && $r->sob_all_type == 'input'){
					$o->value		= $r->sob_all_label;
				}

				if($r->sob_input_type == 'nuScroll' && $r->sob_all_type == 'input'){
					$o->scroll		= $r->sob_input_javascript;
				}

				if($r->sob_all_type == 'display'){
					
					$disS			= nuReplaceHashVariables($r->sob_display_sql);
					$disT			= nuRunQuery($disS);
					$disR			= db_fetch_row($disT);
					$o->value		= $disR[0];
					
				}

			}
			if($r->sob_all_type == 'html'){
				
				if($r->sob_html_chart_type == ''){
					$o->html 		= nuReplaceHashVariables($r->sob_html_code);
				}else{
					
					$o->html 		= '';
					$htmljs			= addSlashes($r->sob_html_javascript);
					
					if($r->sob_html_chart_type == 'p'){
						$htmlj	= "\nnuChart('$r->sob_all_id', 'PieChart', '$htmljs', '$r->sob_html_title', '$r->sob_html_horizontal_label', '$r->sob_html_vertictal_label', 'bars', false);";
					}

					if($r->sob_html_chart_type == 'l'){
						$htmlj	= "\nnuChart('$r->sob_all_id', 'ComboChart', '$htmljs', '$r->sob_html_title', '$r->sob_html_horizontal_label', '$r->sob_html_vertictal_label', 'lines', false);";
					}

					if($r->sob_html_chart_type == 'b'){
						$htmlj	= "\nnuChart('$r->sob_all_id', 'ComboChart', '$htmljs', '$r->sob_html_title', '$r->sob_html_horizontal_label', '$r->sob_html_vertictal_label', 'bars', false);";
					}

					if($r->sob_html_chart_type == 'bs'){
						$htmlj	= "\nnuChart('$r->sob_all_id', 'ComboChart', '$htmljs', '$r->sob_html_title', '$r->sob_html_horizontal_label', '$r->sob_html_vertictal_label', 'bars', true);";
					}

					if($r->sob_html_chart_type == 'bh'){
						$htmlj	= "\nnuChart('$r->sob_all_id', 'BarChart', '$htmljs', '$r->sob_html_title', '$r->sob_html_horizontal_label', '$r->sob_html_vertictal_label', 'bars', false);";
					}

					if($r->sob_html_chart_type == 'bhs'){
						$htmlj	= "\nnuChart('$r->sob_all_id', 'BarChart', '$htmljs', '$r->sob_html_title', '$r->sob_html_horizontal_label', '$r->sob_html_vertictal_label', 'bars', true);";
					}

					nuAddJavascript($htmlj);
					
				}
				
			}

			if($r->sob_all_type == 'image'){
				$o->src 			= nuGetSrc($r->sob_image_zzzzsys_file_id);
			}

			if($r->sob_all_type == 'select'){

				$o->multiple		= $r->sob_select_multiple;
				$o->options			= nuSelectOptions(nuReplaceHashVariables($r->sob_select_sql));
				
			}

			if($r->sob_all_type == 'run'){
				
				$type				= $r->sob_run_zzzzsys_form_id;
				$o->form_id			= $type;
				$o->record_id		= nuReplaceHashVariables($r->sob_run_id);
				$o->parameters		= $r->sob_all_id;
				
				if(isProcedure($type)){
					
					$actt			= nuRunQuery('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?',[$type]);
					$act			= db_fetch_object($actt);
					$o->form_id		= $act->sph_zzzzsys_form_id;
					$o->record_id	= $act->sph_code;
					$o->run_type	= 'P';
					$runtab			= nuRunQuery('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?', [$r->sob_run_zzzzsys_form_id]);
					$o->run_hidden	= db_fetch_object($runtab)->sph_run == 'hide';
					
				}else if(isReport($type)){
					
					$actt			= nuRunQuery('SELECT * FROM zzzzsys_report WHERE zzzzsys_report_id = ?', [$type]);
					$act			= db_fetch_object($actt);
					$o->form_id		= $act->sre_zzzzsys_form_id;;
					$o->record_id	= $act->sre_code;
					$o->run_type	= 'R';
					
				}else{
					$o->run_type	= 'F';
				}

				$o->filter			= nuReplaceHashVariables($r->sob_run_filter);
				$o->run_method  	= $r->sob_run_method;

			}
			
				
			if($r->sob_all_type == 'lookup'){

				$o->description_width	= $r->sob_lookup_description_width;
				$o->form_id				= $r->sob_lookup_zzzzsys_form_id;
				$o->values				= nuGetLookupValues($r, $o);
				
			}

			if($r->sob_all_type == 'subform'){

				// need to set both subform_fk in $r and $o for later use
				$r->subform_fk      	= $R;
				$o->subform_fk      	= $R;
				$o->subform_type    	= $r->sob_subform_type;
				$o->delete          	= $r->sob_subform_delete;
				$f->foreign_key_name 	= $r->sob_subform_foreign_key;
				$o->foreign_key_name 	= $r->sob_subform_foreign_key;
				$o->primary_key_name	= nuFormProperties($r->sob_subform_zzzzsys_form_id)->sfo_primary_key;
				$f->primary_key_name	= $o->primary_key_name;
				$o->add             	= $r->sob_subform_add;
				$o->dimensions			= nuFormDimensions($r->sob_subform_zzzzsys_form_id);
				$o->forms           	= nuGetSubformRecords($r, $o->add, $R);
				$o->sf_form_id			= $r->sob_subform_zzzzsys_form_id;
				$o->browse_columns  	= array();
				
			}

			if($r->sob_all_type == 'word'){
				$o->word				= $r->sob_all_label;
				$o->align				= $r->sob_all_align;
			}

			$o->js						= nuObjectEvents($r->zzzzsys_object_id);
			$o->tab_order				= $r->sob_all_order;
			
			if($OBJS > 0){

				unset($o->type);
				unset($o->id);
				unset($o->label);
				unset($o->top);
				unset($o->left);
				unset($o->width);
				unset($o->height);
				unset($o->align);
				
			}

			$a[]    		= $o;
			
		}
		
	}

    $f->tabs 				= nuRefineTabList($tabs);
	$f->noclone				= $cloneable;
    $f->browse_columns		= nuBrowseColumns($f);
    $B						= nuBrowseRows($f);
    $f->browse_rows			= $B[0];
    $f->browse_height		= $B[1];
    $f->browse_sql			= $B[2];
    $f->browse_table_id		= nuHash()['TABLE_ID'];
    $f->pages				= ceil($B[1]/$f->rows);
    $f->objects 			= $a;
    $O 						= new stdClass();
    $O->forms[] 			= $f;

    return $O->forms[0];
}

function nuGetSrc($i){

	$t	= nuRunQuery('SELECT * FROM zzzzsys_file WHERE zzzzsys_file_id = ? ', [$i]);
	$r	= db_fetch_object($t);
	$j	= JSON_decode($r->sfi_json);
	
	return $j->file;
}

function nuObjectEvents($i){

	$a	= array();
	$t	= nuRunQuery('SELECT sev_event AS event, sev_javascript AS js FROM zzzzsys_event WHERE sev_zzzzsys_object_id = ? ', [$i]);
	
	while($r = db_fetch_object($t)){
		$a[]	= $r;
	}

	return $a;
}

function nuDefaultObject($r, $t){
    
	$o					= new stdClass();
	$v					= $r->sob_all_validate;

	$o->type 	  		= $r->sob_all_type;
	$o->object_id		= $r->zzzzsys_object_id;
	$o->id  	 		= $r->sob_all_id;
	$o->label   		= $r->sob_all_label;
	$o->top   			= $r->sob_all_top;
	$o->left			= $r->sob_all_left;
	$o->width   		= $r->sob_all_width;
	$o->height			= $r->sob_all_height;
	$o->valid			= $r->sob_all_validate;
	$o->read 			= $r->sob_all_access;
	$o->format			= '';

	for($i = 0 ; $i < count($t) ; $i++){
		
		if($r->sob_all_zzzzsys_tab_id == $t[$i]->zzzzsys_tab_id){
			$o->tab     = $t[$i]->number;
		}

	}

	return $o;

}

function nuGetEditForm($F, $R){
	
	$r					= nuFormProperties($F);
    $SQL 				= new nuSqlString(nuReplaceHashVariables($r->sfo_browse_sql));
    $f              	= new stdClass();
    $f->id          	= $r->zzzzsys_form_id;
    $f->form_code       = $r->sfo_code;
    $f->form_description= $r->sfo_description;
    $f->form_type      	= $r->sfo_type;
    $f->table       	= nuReplaceHashVariables($r->sfo_table);
    $f->primary_key 	= $r->sfo_primary_key;
    $f->redirect_form_id= $r->sfo_browse_redirect_form_id == '' ? $r->zzzzsys_form_id : $r->sfo_browse_redirect_form_id;
    $f->order			= $SQL->orderBy;
    $f->where			= $SQL->where;
    $f->from			= $SQL->from;
    $f->javascript		= $r->sfo_javascript;

	if(intval($r->sfo_browse_row_height) == 0){
		$f->row_height	= 25;
	}else{
		$f->row_height	= intval($r->sfo_browse_row_height);
	}
    
	if($r->sfo_browse_rows_per_page == 0){
		$f->rows	= 20;
	}else{
		$f->rows	= $r->sfo_browse_rows_per_page;
	}

    $f->title		= nuBreadcrumbDescription($r, $R);

    return $f;
    
}

function nuBreadcrumbDescription($r, $R){
	
	if($R 								== '')	{return $r->sfo_description;}		//-- Browse Form
	if($R 								== '-1'){return $r->sfo_description;}		//-- new record
	if(trim($r->sfo_breadcrumb_title) 	== '')	{return $r->sfo_description;}		//-- no breadcrumb
	
	$b		= nuReplaceHashVariables($r->sfo_breadcrumb_title);
	
	if(strtolower(substr(trim($b), 0, 6)) == 'select'){
		
		$t	= nuRunQuery($b);
		$r	= db_fetch_row($t);
		
		return $r[0];
	
	}

	return nuReplaceHashVariables($r->sfo_breadcrumb_title);
	
}


function nuGetOtherLookupValues($o) {

	$p					= $o->object_id;
	$l                                      = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['LOOKUP_RECORD_ID'];
	$s					= "SELECT sob_lookup_zzzzsys_form_id as form_id FROM zzzzsys_object WHERE zzzzsys_object_id  = ? ";
	$t					= nuRunQuery('SELECT sob_lookup_zzzzsys_form_id as form_id FROM zzzzsys_object WHERE zzzzsys_object_id  = ? ', [$p]);
	$r					= db_fetch_object($t);
	$i					= $r->form_id;
	$f					= nuFormProperties($i);
	$s					= "SELECT * FROM $f->sfo_table WHERE $f->sfo_primary_key  = ? ";
	$t					= nuRunQuery($s, [$l]);
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['lookup_row'] = db_fetch_object($t);
	
	if(db_num_rows($t) == 1){
		$_SESSION[NU_NUBUILDER_SESSION_DATA]['lookup_row']->ID	= $l;
	}
	
	if(db_num_rows($t) == 0){

		$_SESSION[NU_NUBUILDER_SESSION_DATA]['lookup_row']		= new stdClass;
		$_SESSION[NU_NUBUILDER_SESSION_DATA]['lookup_row']->ID	= '';
		
	}
	
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['lookup_values']			= array();

	nuEval($p . '_AB');

	return $_SESSION[NU_NUBUILDER_SESSION_DATA]['lookup_values'];
}

function nuGetAllLookupValues(){

	$a			= array();
	$OID			= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['object_id'];
	$PK			= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['primary_key'];
	$t			= nuRunQuery('SELECT * FROM zzzzsys_object WHERE zzzzsys_object_id = ? ', $OID);
	$r			= db_fetch_object($t);
	$o			= nuDefaultObject($r, array());
	$o->description_width	= $r->sob_lookup_description_width;
	$o->form_id		= $r->sob_lookup_zzzzsys_form_id;
	$o->value		= $PK;
	$l			= nuGetLookupValues($r, $o);

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['LOOKUP_RECORD_ID'] = $l[0][1];

	$e			= nuGetOtherLookupValues($o);
	$f			= new stdClass;
	$f->lookup_values	= array_merge($l, $e);
	$f->lookup_javascript	= $r->sob_lookup_javascript;
	
	return $f;
}

function nuGetLookupValues($R, $O){

	$was		= isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['TABLE_ID']) ? $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['TABLE_ID'] : '';

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT]['TABLE_ID'] = nuTT();

	nuBeforeBrowse($O->form_id);
	
    $t 			= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', [$O->form_id]);
    $r 			= db_fetch_object($t);
    $S 			= new nuSqlString(nuReplaceHashVariables($r->sfo_browse_sql));
	
    $s 			= "
		SELECT 
			$r->sfo_primary_key,
			$R->sob_lookup_code,
			$R->sob_lookup_description
			$S->from
		WHERE 
			`$r->sfo_primary_key` = '$O->value'
    ";
	$s			= nuReplaceHashVariables($s);
    $t 			= nuRunQuery($s);
    $l 			= db_fetch_row($t);
	$f			= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['prefix'] . $O->id;

	nuRunQuery(nuReplaceHashVariables('DROP TABLE if EXISTS #TABLE_ID#'));

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT]['TABLE_ID'] = $was;

	$v			= array();
	$v[]		= array($f, 				isset($l[0]) ? $l[0] : '');
	$v[]		= array($f . 'code', 		isset($l[1]) ? $l[1] : '');
	$v[]		= array($f . 'description', isset($l[2]) ? $l[2] : '');
	
	return $v;
}

function nuGetAllLookupList() {
	
	$O				= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['object_id'];
	$PK				= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['primary_key'];
	$C				= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['code'];
	$was				= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['TABLE_ID'];

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['TABLE_ID'] = nuTT();

	$t				= nuRunQuery('SELECT * FROM zzzzsys_object WHERE zzzzsys_object_id = ? ', [$O]);
	$r				= db_fetch_object($t);
	$code			= $r->sob_lookup_code;
	$description	= $r->sob_lookup_description;
	$form_id		= $r->sob_lookup_zzzzsys_form_id;
	$js				= $r->sob_lookup_javascript;

	nuBeforeBrowse($form_id);
	
	$t				= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', [$form_id]);
	$r	 			= db_fetch_object($t);
	$id	 			= $r->sfo_primary_key;
    $SQL			= new nuSqlString(nuReplaceHashVariables($r->sfo_browse_sql));
	$s				= "
					SELECT $id, $code, $description
					$SQL->from
					$SQL->where
					AND $code = ?
					ORDER BY $code
					";

	$s				= nuReplaceHashVariables($s);
	$t				= nuRunQuery($s, [$C]);
	$like			= '';
	$a				= array();

	if(db_num_rows($t) == 0){
			
		$s			= "
					SELECT $id, $code, $description
					$SQL->from
					$SQL->where
					AND ($code LIKE ? OR $description LIKE ?)
					AND '$C' != ''
					ORDER BY $code
					";

		$t			= nuRunQuery($s, ['%' . $C . '%', '%' . $C . '%']);

	}
	
	nuRunQuery(nuReplaceHashVariables('DROP TABLE if EXISTS #TABLE_ID#'));

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['TABLE_ID'] = $was;
	
	while($r = db_fetch_row($t)){
		$a[]		= $r;
	}

	$f						= new stdClass;
	$f->lookup_like			= $like;
	$f->lookup_values		= $a;
	$f->lookup_javascript	= $js;

	return $f;
}

function nuLookupRecord(){
	
	return $_SESSION[NU_NUBUILDER_SESSION_DATA]['lookup_row'];
}

function nuSetFormValue($f, $v){

	$f							=  str_replace('#ROW#', $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['prefix'], $f);

	$_SESSION[NU_NUBUILDER_SESSION_DATA]['lookup_values'][]	= array($f, $v);
}

function nuSelectOptions($sql) {

    $a 				= array();
	
    if (substr(strtoupper(trim($sql)), 0, 6) == 'SELECT') {                      //-- sql statement
	
        $t			= nuRunQuery($sql);
		
        if (nuErrorFound()) {
            return;
        }

        while ($r = db_fetch_row($t)) {
            $a[]	= $r;
        }

    } else {                                                                     //-- comma delimited string

        $t 			= explode('|', nuRemoveNonCharacters($sql));

        for ($i = 0; $i < count($t); $i++) {

            $r    	= array();
            $r[0] 	= $t[$i];
            $r[1] 	= $t[$i + 1];
            $a[]  	= $r;
            $i++;

        }

    }
	
    return $a;
	
}

function nuRemoveNonCharacters($s){

	$snip = str_replace("\t", '', $s); // remove tabs
	$snip = str_replace("\n", '', $snip); // remove new lines
	$snip = str_replace("\r", '', $snip); // remove carriage returns	
	
	return $snip;

}


function nuGetSubformRecords($R, $A){

    $f = nuGetEditForm($R->sob_subform_zzzzsys_form_id, '');
	$w = $f->where == '' ? '' : ' AND (' . substr($f->where, 6) . ')';
    $s = "SELECT `$f->primary_key` $f->from WHeRE (`$R->sob_subform_foreign_key` = '$R->subform_fk') $w $f->order";
	$I = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID'];


    $t = nuRunQuery($s);
    $a = array();
	
    while($r = db_fetch_row($t)){

		$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID']	= $r[0];
		$o									= nuGetFormObject($R->sob_subform_zzzzsys_form_id, $r[0], count($a));
		$o->foreign_key								= $R->subform_fk;
		$o->foreign_key_name							= $R->sob_subform_foreign_key;
		$a[] 									= $o;

    }

    if($A == 1){  //-- add blank record
    
		$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID']			= -1;
        $o										= nuGetFormObject($R->sob_subform_zzzzsys_form_id, -1, count($a));
        $o->foreign_key							= $R->subform_fk;
        $o->foreign_key_name					= $R->sob_subform_foreign_key;
        $a[] 									= $o;
        
    }
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]['RECORD_ID'] 				= $I;
	
    return $a;

}

function nuBuildTabList($i){

    $o 				= 0;
    $a 				= array();
	$nuprepare		=	'SELECT * FROM zzzzsys_tab 
						INNER JOIN zzzzsys_object ON sob_all_zzzzsys_form_id = syt_zzzzsys_form_id 
						WHERE syt_zzzzsys_form_id = ? 
						GROUP BY syt_zzzzsys_form_id, syt_title 
						ORDER BY syt_order';
	

    $t = nuRunQuery($nuprepare, [$i]);

    while($r = db_fetch_object($t)){
        
        $r->number	= $o;
        $o++;
        $a[]		= $r;
        
    }
	
    return $a;
    
}


function nuRefineTabList($t){

    $a 			= array();

    for($i = 0 ; $i < count($t) ; $i++){
		
		//$a[]	= array(title => $t[$i]->syt_title, id => $t[$i]->zzzzsys_tab_id, help => $t[$i]->syt_help);
		//changed SG 10/10/2018
		$a[]	= array('title' => $t[$i]->syt_title, 'id' => $t[$i]->zzzzsys_tab_id, 'help' => $t[$i]->syt_help);
        
    }

    return $a;
   
}


function nuGetSQLValue($s){
	
	$s		= nuReplaceHashVariables(trim($s));
    
    if(trim($s) == ''){
        return '';
    }else{
    
        $t	= nuRunQuery($s);
        $r	= db_fetch_row($t);

        return $r[0];
        
    }
    
}

function nuBrowseColumns($f){
	
	if($f->record_id != ''){return array();}

	nuBeforeBrowse($f->id);
	
	$t				= nuRunQuery('SELECT * FROM zzzzsys_browse WHERE sbr_zzzzsys_form_id = ? ORDER BY sbr_order', [$f->id]);
	$a				= array();

	while($r = db_fetch_object($t)){
	
		$r->title	= $r->sbr_title;
		$r->display	= $r->sbr_display;
		$r->align	= $r->sbr_align;
		$r->width	= $r->sbr_width;
		$r->order	= $r->sbr_order;
		$r->format	= $r->sbr_format;

		unset($r->zzzzsys_browse_id);
		unset($r->sbr_zzzzsys_form_id);
		unset($r->sbr_title);
		unset($r->sbr_display);
		unset($r->sbr_align);
		unset($r->sbr_format);
		unset($r->sbr_sort);
		unset($r->sbr_order);
		unset($r->sbr_width);

		$a[]		= $r;

	}
	
	return $a;
	
}

function nuBrowseRows($f){
	
	if(trim($f->record_id) != ''){return array();}
	
	$P				= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE];
	$rows			= $P['rows'];
	$rowsw			= $P['rows'];


	if($rows == -1){
		$rows		= nuFormProperties($f->form_id)->sfo_browse_rows_per_page;
	}

	if($rows == 0){
		$rows		= 20;
	}

	$page_number	= $P['page_number'];
	$start			= $page_number * $rows;
	$search			= str_replace('&#39;', "'", $P['search']);
	$filter			= str_replace('&#39;', "'", $P['filter']);
	$t 				= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', [$f->id]);
	$r 				= db_fetch_object($t);
	
	if(trim($r->sfo_browse_sql) == ''){
		return array(array(), 0);
	}
	
    $S 				= new nuSqlString(nuReplaceHashVariables($r->sfo_browse_sql));

	$S->addField($f->primary_key);
	
	for($i = 0 ; $i < count($f->browse_columns) ; $i++){
		$S->addField($f->browse_columns[$i]->display);
	}
	
	$flds			= array();
	$fields 		= array_slice($S->fields,1);
	
//	if(count($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['nosearch_columns']) == 0){
	if($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['nosearch_columns'] === null){
		$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['nosearch_columns']	= array();
	}
	
	for($i = 0 ; $i < count($fields) ; $i++){
		
		if(!in_array($i, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['nosearch_columns'])){
			$flds[]	= $fields[$i];
		}
		
	}

	$where			= trim(nuBrowseWhereClause($flds, $filter . ' ' . $search));
	$like			= str_replace('\\"','"',nuHash()['like']);
	$haswhere		= $where !=  '()';
	$haslike		= $like != '';
	$hardwhere		= $S->getWhere();
	
	if($haslike 	&& $haswhere){	$S->setWhere(" $hardwhere AND $like AND $where");}
	if($haslike 	&& !$haswhere){	$S->setWhere(" $hardwhere AND $like");}
	if(!$haslike 	&& $haswhere){	$S->setWhere(" $hardwhere AND $where");}
	
	if($P['sort'] != '-1'){
		$S->setOrderBy(' ORDER BY ' . $S->fields[$P['sort'] + 1] . ' ' . $P['sort_direction']);
	}
	
	$a				= array();
	$s				= nuReplaceHashVariables($S->SQL);
	
	$t 				= nuRunQuery($s);
	$rowData		= db_num_rows($t);
	$s				.= " LIMIT " . ($start<0?0:$start) . ", $rows";
	$t 				= nuRunQuery($s);

	while($r = db_fetch_row($t)){
		$a[] 		= $r;
	}
	
	nuRunQuery(nuReplaceHashVariables('DROP TABLE if EXISTS #TABLE_ID#'));

	return array($a, $rowData, $S->SQL);
	
}

function nuBrowseWhereClause($searchFields, $searchString, $returnArray = false) {

    $pos					= -1;
    $start					= -1;
	$where					= array();
    $phrases      			= array();
    $SEARCHES     			= array();
    $wordSearches 			= array();
    $highlight    			= array();

    while (true) {
		
        $pos = strpos($searchString, '"', $pos + 1);                              //-- search for double quotes
		
        if ($pos === false) {
			
            break;                                                                            //-- stop searching
			
        } else {
			
            if ($start == -1) {
				
                $start     	= $pos;                                                            //-- find start position of phrase
				
            } else {
				
                $phrases[] 	= "$start," . ($pos + 1);                                             //-- add start and end to array
                $start     	= -1;
				
            }
			
        }
		
    }

    for ($i = 0; $i < count($phrases); $i++) {

        $p          		= explode(',', $phrases[$i]);
        $SEARCHES[] 		= substr($searchString, $p[0], $p[1] - $p[0]);
    }
    
    for ($i = 0; $i < count($SEARCHES); $i++) {

        $pos = strpos($searchString, '-' . $SEARCHES[$i]);                                      //-- check for a preceeding minus
		
        if ($pos === false) {
			
            $task[]       	= 'include';
            $searchString 	= str_replace($SEARCHES[$i], ' ', $searchString);             //-- include phrase
            $highlight[]  	= substr($SEARCHES[$i], 1, -1);
			
        } else {
			
            $task[]			= 'exclude';
            $searchString	= str_replace('-' . $SEARCHES[$i], ' ', $searchString);                   //-- remove phrase
			
        }
		
        $SEARCHES[$i] 		= ' "%' . substr($SEARCHES[$i], 1, -1) . '%" ';
        
    }

    $wordSearches 			= explode(' ', $searchString);
    $quo 					= '"';
    
    for ($i = 0; $i < count($wordSearches); $i++) {

        if (strlen($wordSearches[$i]) > 0) {
			
            if (substr($wordSearches[$i], 0, 1) == '-' and strlen($wordSearches[$i]) > 1) {       //-- check for a preceeding minus
			
                $task[]      = 'exclude';
                $SEARCHES[]  = $quo . '%' . addslashes(substr($wordSearches[$i], 1)) . '%' . $quo;      //-- add word to exclude
				
            } else {
				
                $task[]      = 'include';
                $SEARCHES[]  = $quo . '%' . addslashes($wordSearches[$i]) . '%' . $quo;                //-- add word to include
                $highlight[] = $wordSearches[$i];
				
            }
			
        }
		
    }
    
    for ($i = 0; $i < count($SEARCHES); $i++) {                                                //-- search for (or exclude) these strings
	
        $include = array();
        $exclude = array();
        
        for ($SF = 0; $SF < count($searchFields); $SF++) {                                     //-- loop through searchable fields

            if ($task[$i] == 'include') {																	//-- changed by KEE
                $include[] = 'CONVERT(' . $searchFields[$SF] . ' USING utf8) LIKE  ' . $SEARCHES[$i];
            } else {
                $exclude[] = 'CONVERT(' . $searchFields[$SF] . ' USING utf8) NOT LIKE  ' . $SEARCHES[$i];
            }
			
        }
		
		
        if (count($include) > 0) {
            $where[] = ' (' . implode(' OR ', $include) . ') ';
        }
		
        if (count($exclude) > 0) {
            $where[] = ' (' . implode(' AND ', $exclude) . ') ';
        }
		
    }

    if ($returnArray) {
        return $highlight;
    } else {
        return ' (' . implode(' AND ', $where) . ') ';
    }

}


function nuFormType($form_id){

	$t = nuRunQuery('SELECT sfo_type FROM zzzzsys_form WHERE zzzzsys_form_id = ?', [$form_id]);
	
	return db_fetch_row($t)[0];
	
}


function nuGatherFormAndSessionData($home) {

	nuUpdateTables();
	
	$formAndSessionData 					= new stdClass;

	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['record_id']) ) {

        	$formAndSessionData->record_id  	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['record_id'];

	} else {

		if(substr(nuFormType($home), 0, 1) == 'b'){
			$formAndSessionData->record_id  	= '';
		}else{
			$formAndSessionData->record_id  	= '-1';
		}
		
	}

    	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['form_id']) ) {

        	$formAndSessionData->form_id 	 	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['form_id'];

    	} else {

		$formAndSessionData->form_id 		= $home == '' ? 'nuhome' : $home;
    	}

    	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['login_form_id']) ) {
		
		if( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['login_form_id'] != '' ) {

			$formAndSessionData->form_id	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['login_form_id'];
		}
	}


	
	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['login_form_id']) ) {//-- check empty form_id not empty record_id
		
		if ( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['login_form_id'] != '' ) {

			$formAndSessionData->record_id  = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['login_record_id'];
		}
    	}

	$formAndSessionData->session_id 	= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID];
	$formAndSessionData->call_type 		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['call_type'];
	$formAndSessionData->filter 		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_FILTER];
	$formAndSessionData->errors 		= array();
	$formAndSessionData->translation 	= $_SESSION[NU_NUBUILDER_SESSION_DATA]['translation'];
	$formAndSessionData->dimensions 	= nuFormDimensions($formAndSessionData->form_id);

	if ( !$_SESSION[NU_NUBUILDER_SESSION_DATA]['isGlobeadmin'] ) {

        	$getAccessFromSessionTableQRY 	= nuRunQuery('SELECT sss_access FROM zzzzsys_session WHERE zzzzsys_session_id = ? ', array($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]));

        	$getAccessFromSessionTableOBJ 	= db_fetch_object($getAccessFromSessionTableQRY);
        	$access 			= json_decode($getAccessFromSessionTableOBJ->sss_access);

		if ( $formAndSessionData->call_type == 'getreport' ) {
			
			$r 							= nuReportAccessList($access);
			
			if(!in_array($formAndSessionData->record_id, $r)) { //form_id is record_id for getreport

				$nuT					= nuRunQuery('SELECT * FROM zzzzsys_report WHERE zzzzsys_report_id = ?',[$formAndSessionData->record_id]);
				$nuR					= db_fetch_object($nuT);
				
				nuDisplayError("Access To Report Denied... ($nuR->sre_code)");
			}	
		}

 		if ( $formAndSessionData->call_type == 'getphp' ) {

			$p = nuProcedureAccessList($access);
            		if ( !in_array($formAndSessionData->record_id, $p) ) { //form_id is record_id for getphp
                		$nuT					= nuRunQuery('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?', [$formAndSessionData->record_id]);
                		$nuR					= db_fetch_object($nuT);
                		nuDisplayError("Access To Procedure Denied... ($nuR->sph_code)");
            		}
        	}

		$f = nuFormAccessList($access); //-- form list including forms id used in reports and procedures
		
		if ( !in_array($formAndSessionData->form_id, $f) && ($formAndSessionData->call_type == 'getform' || $formAndSessionData->call_type == 'login') ) {
			$nuT						= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', [$formAndSessionData->form_id]);
			$nuR						= db_fetch_object($nuT);
			nuDisplayError("Access To Form Denied... ($nuR->sfo_code)");
		}
	}
    
    	$formAndSessionData->errors 		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUERRORS];
	
	return $formAndSessionData;
}

function nuFormAccessList($j){

	$a			= array();
	$t			= nuRunQuery('SELECT zzzzsys_form_id FROM zzzzsys_form WHERE sfo_type = "subform" ');
	
	while($r = db_fetch_row($t)){
		$a[]	= $r[0];
	}
	
	for($i = 0 ; $i < count($j->forms) ; $i++){
		$a[]	= $j->forms[$i][0];
	}

	for($i = 0 ; $i < count($j->reports) ; $i++){
		$a[]	= $j->reports[$i][1];
	}

	for($i = 0 ; $i < count($j->procedures) ; $i++){
		$a[]	= $j->procedures[$i][1];
	}

	$a[]		= nuGetUserAccess()['HOME_ID'];
	
	return $a;
}

function nuProcedureAccessList($j){
	
	$a			= array();

	for($i = 0 ; $i < count($j->procedures) ; $i++){
		$a[]	= $j->procedures[$i][0];
	}
	
	return $a;
}

function nuReportAccessList($j){
	
	$a			= array();
	
	for($i = 0 ; $i < count($j->reports) ; $i++){
		$a[]	= $j->reports[$i][0];
	}

	return $a;
}

function nuButtons() {
	
	$formid 					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_FORMID];
	$_call_type					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['call_type'];
	$_record_id					= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_NUSTATE]['record_id'];
	
	$code						= '';
	$description					= '';
	$access						= nuFormAccess($formid, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_FORMS]);
	$f						= nuFormProperties($formid);
	
	if ( $_call_type == 'getphp' or $_call_type == 'getreport' ) {
			
		$php					= nuRunQueryObject('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?',[$_record_id]);
		$report					= nuRunQueryObject('SELECT * FROM zzzzsys_report WHERE zzzzsys_report_id = ?',[$_record_id]);
	} else {
			
		$php					= nuRunQueryObject('SELECT * FROM zzzzsys_php WHERE sph_code = ?',[$_record_id]);
		$report					= nuRunQueryObject('SELECT * FROM zzzzsys_report WHERE sre_code = ? ', [$_record_id]);
	}
	
	if ( $_call_type == 'getphp' ) {

		$code					= $php->sph_code;
		$description				= $php->sph_description;
		
		if($php->sph_run == 'hide') {
			return [array('Add' => 0, 'Print' => 0, 'Save' => 0, 'Clone' => 0, 'Delete' => 0, 'Run' => '', 'RunHidden' => 'nuRunPHPHidden("'.$code.'")'), $code, $description];
		}else{
			return [array('Add' => 0, 'Print' => 0, 'Save' => 0, 'Clone' => 0, 'Delete' => 0, 'Run' => 'nuRunPHP("'.$code.'")', 'RunHidden' => ''), $code, $description];
		}
	}
	
	if ( $_call_type == 'getreport' ) {
		
		$code					= $report->sre_code;
		$description				= $report->sre_description;

		return [array('Add' => 0, 'Print' => 0, 'Save' => 0, 'Clone' => 0, 'Delete' => 0, 'Run' => 'nuRunReport("'.$code.'")', 'RunHidden' => ''), $code, $description];
	}
	
	if ( $_call_type != 'getphp' and $_call_type != 'getreport' ) {
		return [array('Add' => $access[0], 'Print' => $access[1], 'Save' => $access[2], 'Clone' => $access[3], 'Delete' => $access[4], 'Run' => '', 'RunHidden' => ''), $code, $description];
	}
}

function nuRunCode($P){
	
	$f						= nuFormProperties($formid);
	$t						= nuRunQuery('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?',[$P['record_id']]);
	$c						= db_fetch_object($t)->sph_code;
	$t						= nuRunQuery('SELECT * FROM zzzzsys_report WHERE zzzzsys_report_id = ?',[$P['record_id']]);
	
	if(db_fetch_object($t)->sre_code != ''){
		$c					= db_fetch_object($t)->sre_code;
	}
	
	return $c;
}

function nuRunDescription($P){
	
	$f						= nuFormProperties($formid);
	$t						= nuRunQuery('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?',[$P['record_id']]);
	$d						= db_fetch_object($t)->sph_description;
	$t						= nuRunQuery('SELECT * FROM zzzzsys_report WHERE zzzzsys_report_id = ?', [$P['record_id']]);
	
	if(db_fetch_object($t)->sre_code != ''){
		$d					= db_fetch_object($t)->sre_description;
	}
	
	return $d;
}

function nuFormAccess($s, $a){

	$sess = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_SESSION];

	if( $sess->zzzzsys_user_id == $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBEADMIN_NAME'] ){
		return array('1', '1', '1', '1', '1');
	}

	for($i = 0 ; $i < count($a) ; $i++){
		
		$F	= $a[$i];
		
		if($s == $F[0]){
			return array($F[1], $F[2], $F[3], $F[4], $F[5]);
		}
		
	}
	
	return array('0', '0', '0', '0', '0');
}

function nuFormDimensions($f){

	$d			= array();
	$t			= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', [$f]);
	$r			= db_fetch_object($t);
	
	$bt			= 57; 	//-- browse title
	$rh			= intval($r->sfo_browse_row_height)    == 0 ? 25 : $r->sfo_browse_row_height;
	$rs			= intval($r->sfo_browse_rows_per_page) == 0 ? 25 : $r->sfo_browse_rows_per_page;
	$bb			= 25;   //-- browse footer
	$t			= nuRunQuery('SELECT * FROM zzzzsys_object WHERE sob_all_zzzzsys_form_id = ? ', [$f]);
	$h			= 0;
	$w			= 0;
	$gh			= 0;
	$gw			= 0;
	
	while($r	= db_fetch_object($t)){
		
		if($r->sob_all_type == 'lookup'){
			
			$w 	= max($w, $r->sob_all_left + $r->sob_all_width + $r->sob_lookup_description_width + 40);
			$gw	= $gw + $r->sob_all_width + $r->sob_lookup_description_width + 40;
			
		}else{
			
			$w 	= max($w, $r->sob_all_left + $r->sob_all_width + 40);
			$gw = $gw + $r->sob_all_width + 4;
			
		}

		$h		= max($h, $r->sob_all_top + $r->sob_all_height);
		$gh 	= max($r->sob_all_height, 25, $gh);

	}

	$bh			= $bt + ($rs * $rh) + $bb;
	$bw			= nuGetBrowseWidth($f);	

	$grid		= ['height'=>$gh, 'width'=> $gw];
	$browse		= ['height'=>$bh, 'width'=> $bw];
	$edit		= ['height'=>$h,  'width'=> $w];


	
	$d[]		= $bt + ($rs * $rh) + $bb;    		//-- lookup browse height
	$d[]		= nuGetBrowseWidth($f);	
	$d[]		= $h  + 0;							//-- lookup form height
	$d[]		= $w  + 0;							//-- lookup form width
	$d[]		= $h  + 0;							//-- form height
	$d[]		= $w  + 50;							//-- form width
	$d[]		= $gh + 0;							//-- grid height
	$d[]		= $gw + 55;							//-- grid width
	
	$d[]		= ['browse'=>$browse, 'edit'=>$edit, 'grid'=>$grid];

	return ['browse'=>$browse, 'edit'=>$edit, 'grid'=>$grid];
}


function nuGetBrowseWidth($f){
	
	$w			= 0;
	$t			= nuRunQuery('SELECT * FROM zzzzsys_browse WHERE sbr_zzzzsys_form_id = ? ORDER BY sbr_order', [$f]);
	
	while($r	= db_fetch_object($t)){
		$w = $w + $r->sbr_width;
	}
	
	return $w;
}

function isForm($i){

	$t	= nuRunQuery('SELECT * FROM zzzzsys_form WHERE zzzzsys_form_id = ? ', [$i]);
	$r	= db_fetch_object($t);
	
	return db_num_rows($t) > 0;

}

function isProcedure($i){

	$s	= "SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = '$i'";
	$t	= nuRunQuery('SELECT * FROM zzzzsys_php WHERE zzzzsys_php_id = ?', [$i]);
	$r	= db_fetch_object($t);
	
	return db_num_rows($t) > 0;
}

function isReport($i){

	$t	= nuRunQuery('SELECT * FROM zzzzsys_report WHERE zzzzsys_report_id = ?', [$i]);
	$r	= db_fetch_object($t);
	
	return db_num_rows($t) > 0;
}

function nuSetupButtons($f, $t) {
	
	if($t == 'Report') {
		
		nuAddPrintButtons($f, 'Run', 'Report');
		nuAddPrintButtons($f, 'Email', 'Report');
		
	} else if($t == 'PHP') {
		
		nuAddPrintButtons($f, 'Run', 'PHP');
	}
}

function nuAddPrintButtons($f, $t, $a){
	
	$i = sizeof($f->forms[0]->buttons);
	
	$f->forms[0]->buttons[$i][0] = $t;
	$f->forms[0]->buttons[$i][1] = $t.$a;
}

function nuAddJavascript($js){
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_EXTRAJS] = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_EXTRAJS] ."\n\n" . $js;
}

function nuPreloadImages($a){
	
	$js = '';

	for($i = 0 ; $i < count($a) ; $i++){
		
		$t  = nuRunQuery('SELECT * FROM zzzzsys_file WHERE sfi_code = ? ', [$a[$i]]);
		$r	= db_fetch_object($t);
		$tr	= trim($r->sfi_code);
		$js = $js . "\nnuImages['$tr'] = '" . addslashes($r->sfi_json) . "';";

		nuAddJavascript($js);
	}
}

function nuLoginSetupGlobeadmin() {

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]         	= nuIDTEMP();
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_TIMESTAMP]  	= time();
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['isGlobeadmin'] 		= true;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['translation']       	= nuGetTranslation($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_language);
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_LOGIN']              = $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBEADMIN_NAME'];
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_DISPLAY_NAME']       = $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBEADMIN_NAME'];
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_EMAIL']		= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_smtp_from_address;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_CODE']	= '';
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_ID']		= '';
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_ID']                 = $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBEADMIN_NAME'];
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['HOME_FORM_ID']            = 'nuhome';
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBAL_ACCESS']           = '1';

        $sessionIds 							= new stdClass;
        $sessionIds->zzzzsys_access_id 					= '';
        $sessionIds->zzzzsys_user_id 					= $_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBEADMIN_NAME'];
        $sessionIds->zzzzsys_form_id 					= 'nuhome';
        $sessionIds->global_access 					= '1';
        $storeSessionInTable 						= new stdClass;
        $storeSessionInTable->session 					= $sessionIds;

	// forms 
	$getAllFormsQRY 						= nuRunQuery('SELECT zzzzsys_form_id AS id FROM zzzzsys_form');
        $formAccess 							= array();
	while( $getAllFormsOBJ 						= db_fetch_object($getAllFormsQRY) ) {
		$formAccess[] 						= [$getAllFormsOBJ->id];
        }
        $storeSessionInTable->forms 					= $formAccess;

	// reports
        $getAllReportsQRY 						= nuRunQuery('SELECT zzzzsys_report_id AS id, sre_zzzzsys_form_id AS form_id FROM zzzzsys_report');
        $reportAccess 							= array();
        while( $getAllReportsOBJ 					= db_fetch_object($getAllReportsQRY) ){
        	$reportAccess[] 					= [$getAllReportsOBJ->id, $getAllReportsOBJ->form_id];
        }
	$storeSessionInTable->reports 					= $reportAccess;

	// procedures
        $getAllPHPsQRY 							= nuRunQuery('SELECT zzzzsys_php_id AS id, sph_zzzzsys_form_id AS form_id FROM zzzzsys_php');
        $phpAccess 							= array();
	while ( $getAllPHPsOBJ 						= db_fetch_object($getAllPHPsQRY) ){
		$phpAccess[] 						= [$getAllPHPsOBJ->id, $getAllPHPsOBJ->form_id];
	}
	$storeSessionInTable->procedures 				= $phpAccess;
	$storeSessionInTable->access_level_code				= '';
       	$storeSessionInTableJSON 					= json_encode($storeSessionInTable);

	$values								= array(time(), $storeSessionInTableJSON, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID] );
	
	nuRunQuery('INSERT INTO zzzzsys_session SET sss_time = ?, sss_access = ?, zzzzsys_session_id = ?', $values);
}

function nuLoginGetForms($zzzzsys_access_id, $formAccess = array() ) {

	$nuprepare                                                      = 'SELECT ';
        $nuprepare                                                     .= 'slf_zzzzsys_form_id AS id, ';
        $nuprepare                                                     .= 'slf_add_button AS a, ';
        $nuprepare                                                     .= 'slf_save_button AS s, ';
        $nuprepare                                                     .= 'slf_delete_button AS d, ';
        $nuprepare                                                     .= 'slf_clone_button AS c, ';
        $nuprepare                                                     .= 'slf_print_button AS p ';
        $nuprepare                                                     .= 'FROM zzzzsys_access_form ';
        $nuprepare                                                     .= 'WHERE slf_zzzzsys_access_id = ? ';

        $getFormsQRY                                                    = nuRunQuery($nuprepare, [$zzzzsys_access_id] );
        while ( $getFormsOBJ                                            = db_fetch_object($getFormsQRY) ) {
                $formAccess[]                                           = [$getFormsOBJ->id, $getFormsOBJ->a, $getFormsOBJ->p, $getFormsOBJ->s, $getFormsOBJ->c, $getFormsOBJ->d];
        }

	return $formAccess;
}

function nuLoginGetReports($zzzzsys_access_id, $reportAccess = array() ) {

	$nuprepare                                                      = 'SELECT ';
        $nuprepare                                                     .= 'sre_zzzzsys_report_id AS id, ';
	$nuprepare                                                     .= 'sre_zzzzsys_form_id AS form_id ';
	$nuprepare                                                     .= 'FROM zzzzsys_access_report ';
	$nuprepare                                                     .= 'INNER JOIN zzzzsys_report ON zzzzsys_report_id = sre_zzzzsys_report_id ';
	$nuprepare                                                     .= 'WHERE sre_zzzzsys_access_id = ? ';
        $getReportsQRY                                                  = nuRunQuery( $nuprepare, $zzzzsys_access_id );
        while($getReportsOBJ                                            = db_fetch_object($getReportsQRY)){
                $reportAccess[]                                         = [$getReportsOBJ->id, $getReportsOBJ->form_id];
        }
	
	return $reportAccess;
}

function nuLoginGetPHPs($zzzzsys_access_id, $phpAccess = array() ) {

	$nuprepare                                                      = 'SELECT ';
	$nuprepare                                                     .= 'slp_zzzzsys_php_id AS id, ';
	$nuprepare                                                     .= 'sph_zzzzsys_form_id AS form_id ';
	$nuprepare                                                     .= 'FROM zzzzsys_access_php ';
	$nuprepare                                                     .= 'INNER JOIN zzzzsys_php ON zzzzsys_php_id = slp_zzzzsys_php_id ';
	$nuprepare                                                     .= 'WHERE slp_zzzzsys_access_id = ? ';
        $getPHPsQRY                                                     = nuRunQuery($nuprepare, $zzzzsys_access_id);
        while($getPHPsOBJ                                               = db_fetch_object($getPHPsQRY)){
                $phpAccess[]                                            = [$getPHPsOBJ->id, $getPHPsOBJ->form_id];
        }

	return $phpAccess;
}

function nuLoginSetupShortCodeAccess() {

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]             = nuIDTEMP();
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_TIMESTAMP]      = time();
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['isGlobeadmin']            = false;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBAL_ACCESS']           = '0';
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_ID']                 = '';
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_LOGIN']              = '';
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_EMAIL']              = '';
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_DISPLAY_NAME']       = '';
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['translation']           	= nuGetTranslation($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_language);
	$sal_code                                                       = $_SESSION[NU_NUBUILDER_SESSION_DATA]['SHORT_CODE_ACCESS_LEVEL'];
	$nuprepare 							= "SELECT * FROM zzzzsys_access WHERE sal_code = ? ";
	$getAccessLevelQRY 						= nuRunQuery($nuprepare, [$sal_code] );	

	if(db_num_rows($getAccessLevelQRY) == 0){
                nuDie($msg = 'No access levels setup for short code');
        }
	$getAccessLevelOBJ                                              = db_fetch_object($getAccessLevelQRY);
	$zzzzsys_access_id						= $getAccessLevelOBJ->zzzzsys_access_id;
        $sessionIds                                                     = new stdClass;
        $sessionIds->zzzzsys_access_id                                  = $getAccessLevelOBJ->zzzzsys_access_id;
        $sessionIds->zzzzsys_user_id                                    = $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_LOGIN'];
        $sessionIds->zzzzsys_form_id                                    = $getAccessLevelOBJ->sal_zzzzsys_form_id;
        $sessionIds->global_access                                      = '0';
        $storeSessionInTable                                            = new stdClass;
        $storeSessionInTable->session                                   = $sessionIds;
        $storeSessionInTable->access_level_code                         = $getAccessLevelOBJ->zzzzsys_access_id;
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_CODE']       = $getAccessLevelOBJ->sal_code;
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_ID']         = $getAccessLevelOBJ->zzzzsys_access_id;
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['HOME_FORM_ID']            = $getAccessLevelOBJ->sal_zzzzsys_form_id;
	$storeSessionInTable->forms                                     = nuLoginGetForms($zzzzsys_access_id);
	$storeSessionInTable->reports                                   = nuLoginGetReports($zzzzsys_access_id);
	$storeSessionInTable->procedures                                = nuLoginGetPHPs($zzzzsys_access_id);
        $storeSessionInTableJSON                			= json_encode($storeSessionInTable);

        nuRunQuery('INSERT INTO zzzzsys_session SET sss_time = ?, sss_access = ?, zzzzsys_session_id = ?', array(time(), $storeSessionInTableJSON, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]));
}

function nuLoginSetupNOTGlobeadmin() {

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]         	= nuIDTEMP();
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_TIMESTAMP]  	= time();

	$checkLoginDetailsSQL                                           = "SELECT * FROM zzzzsys_user JOIN zzzzsys_access ON zzzzsys_access_id = sus_zzzzsys_access_id WHERE sus_login_name = ? ";
        $this_username                                                  = $_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_LOGIN'];
        $checkLoginDetailsValues                                        = array($this_username);
        $checkLoginDetailsOBJ                                           = nuRunQueryObject($checkLoginDetailsSQL, $checkLoginDetailsValues);

	$_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_LOGIN']		= $checkLoginDetailsOBJ->sus_login_name;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_EMAIL']		= $checkLoginDetailsOBJ->sus_email;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_DISPLAY_NAME']	= $checkLoginDetailsOBJ->sus_name;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['translation'] 		= nuGetTranslation($checkLoginDetailsOBJ->sus_language);
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['isGlobeadmin'] 		= false;
        //$translationQRY 						= nuRunQuery(NU_SELECT_LANGUAGE, [$checkLoginDetailsOBJ->sus_language]);
	$nuprepare							= 'SELECT sal_code, zzzzsys_access_id, zzzzsys_user_id, sal_zzzzsys_form_id AS zzzzsys_form_id FROM zzzzsys_user 
									   INNER JOIN zzzzsys_access ON zzzzsys_access_id = sus_zzzzsys_access_id 
							                   WHERE zzzzsys_user_id = ? 
									   GROUP BY sus_zzzzsys_access_id';
        $getAccessLevelQRY 						= nuRunQuery($nuprepare, [$checkLoginDetailsOBJ->zzzzsys_user_id]);
        if(db_num_rows($getAccessLevelQRY) == 0){
       		nuDie($msg = 'No access levels setup.');				
	}
	$getAccessLevelOBJ 						= db_fetch_object($getAccessLevelQRY);
        $sessionIds 							= new stdClass;
        $sessionIds->zzzzsys_access_id 					= $getAccessLevelOBJ->zzzzsys_access_id;
        $sessionIds->zzzzsys_user_id 					= $checkLoginDetailsOBJ->zzzzsys_user_id;
        $sessionIds->zzzzsys_form_id 					= $getAccessLevelOBJ->zzzzsys_form_id;
        $sessionIds->global_access 					= '0';
        $storeSessionInTable                    			= new stdClass;
        $storeSessionInTable->session           			= $sessionIds;
	$storeSessionInTable->access_level_code                         = $getAccessLevelOBJ->zzzzsys_access_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_CODE']       = $getAccessLevelOBJ->sal_code;
        $_SESSION[NU_NUBUILDER_SESSION_DATA]['ACCESS_LEVEL_ID']         = $getAccessLevelOBJ->zzzzsys_access_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['USER_ID']         	= $getAccessLevelOBJ->zzzzsys_user_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['HOME_FORM_ID']		= $getAccessLevelOBJ->zzzzsys_form_id;
	$_SESSION[NU_NUBUILDER_SESSION_DATA]['GLOBAL_ACCESS']		= '0';

        $storeSessionInTable->forms 					= nuLoginGetForms($getAccessLevelOBJ->zzzzsys_access_id);
       	$storeSessionInTable->reports 					= nuLoginGetReports($getAccessLevelOBJ->zzzzsys_access_id);
        $storeSessionInTable->procedures 				= nuLoginGetPHPs($getAccessLevelOBJ->zzzzsys_access_id);

        $storeSessionInTableJSON 					= json_encode($storeSessionInTable);

	nuRunQuery('INSERT INTO zzzzsys_session SET sss_time = ?, sss_access = ?, zzzzsys_session_id = ?', array(time(), $storeSessionInTableJSON, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_ID]));
}

function nuDie($msg = 'Invalid login!', $drop_session = true ) {

	if ( $drop_session ) {

        	if ( isset($_SESSION[NU_NUBUILDER_SESSION_DATA]) ) {

			$_SESSION[NU_NUBUILDER_SESSION_DATA] =  array();
		}
	}

	nuErrorLog($msg);

        header("Content-Type: text/html");
        header('HTTP/1.0 403 Forbidden');
	echo $msg;

        die();
}

function nuAccessLevelCode($u){

	$nuprepare	= 	'SELECT sal_code FROM zzzzsys_user 
					JOIN zzzzsys_access ON zzzzsys_access_id = sus_zzzzsys_access_id 
					WHERE zzzzsys_user_id = ? ';
	
	$t	= nuRunQuery($nuprepare, [$u]);
	
	return db_fetch_row($t)[0];
	
}

function nuIDTEMP(){

	return 's' . time() . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT);
}

function nuGetTranslation($l){
	
	$a	= [];
	$t	= nuRunQuery('SELECT * FROM zzzzsys_translate WHERE trl_language = ? ', [$l]);

	while($r = db_fetch_object($t)){
		$a[]	= ['english' => $r->trl_english, 'translation' => $r->trl_translation];
	}
	
	return $a;
}

function nuPhpResponse() {

        $jsonID                 = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_GET_I];
        $J                      = nuGetJSONData($jsonID);
        $JSON                   = json_decode($J);
        $TABLE_ID               = nuTT();
        $hashData               = nuAddToHashList($JSON, 'php');
        $hashData['TABLE_ID']   = $TABLE_ID;

        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_TABLE_ID]       = $TABLE_ID;
        $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]         = $hashData;

        $return                 = array();
        $return[0]              = $JSON->parentID;
        $return[1]              = NU_RESPONSE_TYPE_EVAL;

        return $return;
}

function nuPdfResponse() {

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT]		= array();
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_COLUMNS]	= array();
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_FILES]		= array();

	$jsonID             						= $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_GET_I];

	$J								= nuGetJSONData($jsonID);
	$TABLE_ID              						= nuTT();
	$JSON                 						= json_decode($J);
	$LAYOUT								= json_decode($JSON->sre_layout);

	$hashData              						= nuAddToHashList($JSON, 'report');


	$hashData[NU_SESSION_TABLE_ID] 					= $TABLE_ID;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_TABLE_ID]  	= $TABLE_ID;
	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUHASH]		= $hashData;

	$PDF                						= new TCPDF($LAYOUT->orientation, 'mm', $LAYOUT->paper, true, 'UTF-8', false);
	$PDF->SetAutoPageBreak(true);
	$PDF->setPrintHeader(false);
	$PDF->setPrintFooter(false);
	$REPORT              						= nuSetPixelsToMM($LAYOUT);
	$PDF->SetMargins(1,1,1);
	$fl								= json_decode(nuFontList());

	for($i = 0 ; $i < count($fl) ; $i++){
	
		$fnt		= $fl[$i][0];
		$PDF->AddFont($fnt, '', '', true);
	}
	$justID			= strstr($JSON->parentID, ':');

	nuBuildTempTable($JSON->parentID, $TABLE_ID);

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_COLUMNS] 	= nuAddCriteriaValues($hashData, $TABLE_ID); 

	nuRunQuery("ALTER TABLE $TABLE_ID ADD `nu__id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST");

	nuBuildReport($PDF, $REPORT, $TABLE_ID);

	$hashData['nu_pages'] 						= nuGetTotalPages(); //

	nuReplaceLabelHashVariables($REPORT, $hashData);

	nuPrintReport($PDF, $REPORT, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT], $JSON);

	nuRunQuery("DROP TABLE IF EXISTS $TABLE_ID");
	nuRunQuery("DROP TABLE IF EXISTS $TABLE_ID".'_nu_summary');
	nuRemoveFiles();

	$return		= array();
	$return[0]	= $PDF;
	$return[1]	= NU_RESPONSE_TYPE_PDF;		

	return $return;
}

function nuPrintReport($PDF, $LAY, $DATA, $JSON){

	$lastSectionTop = 10000;
	$pageNumber     = 0;
    
	for($s = 0 ; $s < count($DATA) ; $s++){
       
        	if($lastSectionTop > $DATA[$s]->sectionTop){
			$pageNumber++;
		}
		
        	$lastSectionTop=$DATA[$s]->sectionTop;
		
		for($o = 0 ; $o < count($DATA[$s]->objects) ; $o++){
            		$O  = nuGetObjectProperties($LAY, $DATA[$s]->objects[$o]->id);
            		if($O->objectType == 'label') {
                		$DATA[$s]->objects[$o]->lines[0] = str_replace('#page#' , $pageNumber, $DATA[$s]->objects[$o]->lines[0]);
            		}
        	}	
    	}

 	for($s = 0 ; $s < count($DATA) ; $s++) {
        
        	for($o = 0 ; $o < count($DATA[$s]->objects) ; $o++){

            		$O 	= nuGetObjectProperties($LAY, $DATA[$s]->objects[$o]->id);
            
			if($O->objectType == 'label'){
            
                		$label        = $DATA[$s]->objects[$o]->lines[0];
                		$label        = str_replace('#pages#',       $pageNumber, $label);
                		$label        = str_replace('#description#', $JSON->sre_description, $label);
                		$label        = str_replace('#code#',        $JSON->sre_code, $label);
                		$label        = str_replace('#year#',        date('y'), $label);
                		$label        = str_replace('#month#',       date('m'), $label);
                		$label        = str_replace('#day#',         date('d'), $label);
                		$label        = str_replace('#hour#',        date('h'), $label);
                		$label        = str_replace('#minute#',      date('i'), $label);
                		$label        = str_replace('#second#',      date('s'), $label);
                		$DATA[$s]->objects[$o]->lines[0] = $label;
            		}	
        	}	
    	}

	$lastSectionTop = 10000;
    
	for($s = 0 ; $s < count($DATA) ; $s++) {
        
        	if($lastSectionTop > $DATA[$s]->sectionTop){
            		$PDF->AddPage();
        	}

        	$lastSectionTop      = $DATA[$s]->sectionTop;
        	$grp                 = $DATA[$s]->group;
        	$sec                 = $DATA[$s]->section;
        	$color               = $LAY->groups[$grp]->sections[$sec]->color;

        	nuPrintBackground($PDF, $DATA[$s]->sectionTop, $DATA[$s]->sectionHeight, $color);
        
		for($o = 0 ; $o < count($DATA[$s]->objects) ; $o++){

			$O               = nuGetObjectProperties($LAY, $DATA[$s]->objects[$o]->id);
			if($O->objectType == 'field' or $O->objectType == 'label'){
				nuPrintField($PDF, $DATA[$s], $DATA[$s]->objects[$o], $O, $LAY);
			}
			if($O->objectType == 'image'){
				nuPrintImage($PDF, $DATA[$s], $DATA[$s]->objects[$o], $O);                                                           //-- print graphic
			}
		}
    	}
}

function nuBuildReport($PDF, $REPORT, $TABLE_ID){

	$groupBy                                = array();
	$groups                                 = array();
    	$sectionValue                           = array();
    	$print_group                            = 1;
    	$order_by                               = '';
    	$group_by                               = '';
    	$order['a']                             = 'asc ';
    	$order['d']                             = 'desc ';
    
    	for($i = 3 ; $i < 8 ; $i++){
        	if($REPORT->groups[$i]->sortField != ''){              //-- loop through groups
            
            		$order_by                       = ' ORDER BY ';
            		$groupBy[]                      = $REPORT->groups[$i]->sortField . ' ' . $order[$REPORT->groups[$i]->sortBy];
            		$groups[]                       = $REPORT->groups[$i]->sortField;
            		nuRunQuery("ALTER TABLE $TABLE_ID  ADD INDEX `".$REPORT->groups[$i]->sortField."` (`".$REPORT->groups[$i]->sortField."`)");
        	}
    	}
    	$group_by                               = implode(',', $groupBy);
    	$DATA                                   = nuRunQuery("CREATE TABLE a$TABLE_ID SELECT * FROM $TABLE_ID $order_by $group_by");
    	$DATA                                   = nuRunQuery("DROP TABLE $TABLE_ID");
    	$DATA                                   = nuRunQuery("CREATE TABLE $TABLE_ID SELECT * FROM a$TABLE_ID");
    	$DATA                                   = nuRunQuery("DROP TABLE a$TABLE_ID");
    	$DATA                                   = nuRunQuery("SELECT * FROM $TABLE_ID");
	
    	nuMakeSummaryTable($REPORT, $TABLE_ID);
    	$sectionTop                             = 0;
    	$ROW                                    = db_fetch_array($DATA);                                                         //-- first row
	//======================================================    
	//      REPORT HEADER
	//======================================================    
    	$S                                      = new nuSECTION($PDF, $ROW, $REPORT, 1, 0, 0, $TABLE_ID);                                   //-- report header
    	$sectionTop                             = $S->buildSection();
    	$firstRecord                            = true;

	//======================================================    
	//      PAGE HEADER
	//======================================================    
    	$S                                      = new nuSECTION($PDF, $ROW, $REPORT, 2, 0, $sectionTop, $TABLE_ID);                                   //-- page header
    	$sectionTop                             = $S->buildSection();
    	$firstRecord                            = true;

	//======================================================    
	//      FIRST SECTION HEADERS
	//======================================================    
    	for($g = 0 ; $g < count($groups) ; $g++){
        
        	$S                                  = new nuSECTION($PDF, $ROW, $REPORT, 3 + $g, 0, $sectionTop, $TABLE_ID);                   //-- section headers
        	$sectionTop                         = $S->buildSection();
        	$sectionValue[$groups[$g]]          = $ROW[$groups[$g]];
    	}

	//======================================================    
	//      LOOP THROUGH TABLE
	//======================================================    
    	$DATA                                   = nuRunQuery("SELECT * FROM (SELECT * FROM $TABLE_ID $order_by $group_by) AS tmp ");
    	while($ROW = db_fetch_array($DATA)){
    
        	if(!$firstRecord){
            
            		$backUpTo                       = nuLowestGroupChange($sectionValue, $ROW, $groups);
            
			//======================================================    
			//      FOOTERS AND HEADERS AS GROUPS CHANGE
			//======================================================    
            		for($g = count($groups) - 1 ; $g >= $backUpTo ; $g--){

                		$S                           = new nuSECTION($PDF, $lastROW, $REPORT, 3 + $g, 1, $sectionTop, $TABLE_ID);                   //-- section footers
                		$sectionTop                  = $S->buildSection();
                		$sectionValue[$groups[$g]]   = $ROW[$groups[$g]];
            		}
            
            		for($g = $backUpTo ; $g < count($groups) ; $g++){
                
                		$S                           = new nuSECTION($PDF, $ROW, $REPORT, 3 + $g, 0, $sectionTop, $TABLE_ID);                   //-- section headers
                		$sectionTop                  = $S->buildSection();
               			$sectionValue[$groups[$g]]   = $ROW[$groups[$g]];
            		}
            
        	}
    
		//======================================================    
		//      DETAIL SECTION
		//======================================================    
        	$S                                  = new nuSECTION($PDF, $ROW, $REPORT, 0, 0, $sectionTop, $TABLE_ID);
        	$sectionTop                         = $S->buildSection();
        	$lastROW                            = $ROW;
        	$firstRecord                        = false;
    	}
    
	//======================================================    
	//      LAST GROUP FOOTERS
	//======================================================    
    	for($g = count($groups) - 1 ; $g > -1 ; $g--){

        	$S                                  = new nuSECTION($PDF, $lastROW, $REPORT, 3 + $g, 1, $sectionTop, $TABLE_ID);                   //-- section footers
		// last group doesn't need a page break
		if($g == 0) {
			nuRemovePageBreak($S);
		}
        	$sectionTop                         = $S->buildSection();
    	}
            
	//======================================================    
	//      REPORT FOOTER
	//======================================================    
    	$S                                      = new nuSECTION($PDF, $lastROW, $REPORT, 1, 1, $sectionTop, $TABLE_ID);
    	$sectionTop                             = $S->buildSection();
}    

function nuLowestGroupChange($lastROW, $thisROW, $groups) {   //-- lowest = group 3
    
	$lastString              = '';
    	$thisString              = '';
    
	for($g = 0 ; $g < count($groups) ; $g ++){
        	if($lastROW[$groups[$g]] != $thisROW[$groups[$g]]){
            		return $g;
        	}
    	}
    	return count($groups);
}

//================================================================================
//            Classes
//================================================================================
class nuSECTION{

    public $group             = 0;
    public $section           = 0;
    public $sectionHeight     = 0;
    public $sectionTop        = 0;
    public $O                 = array();
    public $PDF               = array();
    public $ROW               = array();
    public $LAY               = array();
    public $SECTIONS          = array();                                             //-- this Section split over pages
    public $OBJECTS           = array();
    public $TABLE_ID          = '';
	
    function __construct($PDF, $ROW, $LAY, $group, $section, $sectionTop, $TABLE_ID){
    
        $this->PDF            = $PDF;
        $this->ROW            = $ROW;
        $this->LAY            = $LAY;
        $this->TABLE_ID       = $TABLE_ID;
        $this->group          = $group;
        $this->section        = $section;
        $this->O              = $this->LAY->groups[$group]->sections[$section]->objects;
        $this->pageHeight     = $this->LAY->height;
        $this->sectionTop     = $sectionTop;
        $this->sectionHeight  = $this->LAY->groups[$group]->sections[$section]->height;
		
    }

    public function buildSection(){
		
        $this->O              = $this->setObjectLines($this->O);
        $nextTop              = $this->chopSectionOverPages();

	$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT] = array_merge( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT], $this->SECTIONS );

        return $nextTop;
        
    }
    
	
	private function nuGetFormatting($O){
	
		$f                     = array();
		$f['B']                = '';
		$f['F']                = '';
		$f['S']                = '';
		$v                     = $this->ROW[$O->fieldName];
	
		while(substr($v,0,1) == '#' and substr($v,2,1) == '#' and substr($v,9,1) == '|'){       //-- conditional formatting used
			$f[strtoupper(substr($v,1,1))] = substr($v,3,6);                                    //-- set background color, font color or font style
			$v                 = substr($v,10);                                                 //-- chop format off
		}
		
		$f['V']                = $v;                                                            //-- all formatting removed
		
		return $f;
	}
	
	
    private function setObjectLines($O, $stopGrow = false){

        for($i = 0 ; $i < count($O) ; $i++){
        
            $O[$i]->path                        = '';
			
            if($O[$i]->objectType == 'field' or $O[$i]->objectType == 'label'){

				//-- conditional formatting used
				if($O[$i]->objectType == 'field'  and substr($this->ROW[$O[$i]->fieldName],0,1) == '#' and substr($this->ROW[$O[$i]->fieldName],2,1) == '#' and substr($this->ROW[$O[$i]->fieldName],9,1) == '|'){       
				
					$format                     = $this->nuGetFormatting($O[$i]);
					
					if($format['B'] != ''){
						$O[$i]->B               = '#' . $format['B'];
					}
					if($format['F'] != ''){
						$O[$i]->F               = '#' . $format['F'];
					}
					
				}
			
            
                $O[$i]->LINES                   = $this->getObjectRows($O[$i], $stopGrow);
				
            }else if($O[$i]->objectType == 'image'){                                        //-- image
			
				$O[$i]->LINES                   = array('');
                $path                           = '';
                $fld                            = $O[$i]->fieldName;
				$img	                        = $this->ROW[$fld];

				
                if(nuIsField($fld)){                                                        //-- FIELD NAME

					$path                   	= nuCreateFile($img);
					$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_FILES][]          = $path;

                }else{
					
					$j							= nuIsImage($fld);							//--CODE in zzzzsys_file

                    if($j != ''){
						
                        $path                   = nuCreateFile($j);
						$_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_FILES][]          = $path;
                        
                    }else if(nuIsFile($fld)){                                               //-- FILE NAME on hard drive
                        $path                   = $fld;
                    }
                    
                }
				
                $O[$i]->path              = $path;
				
            }

        }
        return $O;
    }

    private function chopSectionOverPages(){
		
        $sectionObjects                       = array();
        $sectionTop                           = $this->sectionTop;
        $objectParts                          = array();
        $pages                                = 0;
        $expandedSectionHeight                = $this->sectionHeight + $this->extendedHeight() - .25;
        $pageBreak                            = 0;
		
        if( property_exists($this->LAY->groups[$this->group]->sections[$this->section], 'page_break') ) {
            $pageBreak                        = $this->LAY->groups[$this->group]->sections[$this->section]->page_break;
        }

        for($i = 0 ; $i < count($this->O) ; $i++){
            $sectionObjects[]                 = $this->O[$i]->id;
        }

        for($i = 0 ; $i < count($this->O) ; $i++){
        
            $OID                              = $this->O[$i]->id;
            $availableHeight                  = $this->paperBottom() - $sectionTop - $this->O[$i]->top;

            while(count($this->O[$i]->LINES) > 0){

                
                if(($this->paperBottom() - $sectionTop < $this->sectionHeight) or $pageBreak == 1){          //-- if a section's original height won't fit, start a new page.
                
                    if("$this->group$this->section" != '10'){                                            //-- the report header
                    
                        $this->pageHeaderFooter(1);
                        $this->pageHeaderFooter(0);

                    }
                    $sectionTop               = $this->paperTop();
                    $availableHeight          = $this->paperBottom() - $this->paperTop();
                    $pageBreak                = 0;
                }
                
				if($this->O[$i]->height == 0){
					$fit                      = $availableHeight;
				}else{
					$fit                      = floor($availableHeight / $this->O[$i]->height);            //-- rows that will fit this page
				}
				
                $o                            = pdfObject($this->O[$i]->id, $this->O[$i]->top);            //-- create Object
				
				if(isset($this->O[$i]->B)){$o->B = $this->O[$i]->B;$this->O[$i]->B = null;}
				if(isset($this->O[$i]->F)){$o->F = $this->O[$i]->F;$this->O[$i]->F = null;}
				
                $fittingLines                 = array_splice($this->O[$i]->LINES, 0, $fit);                //-- get rows
                $o->lines                     = $fittingLines;                                             //-- add rows
                $o->path                      = $this->O[$i]->path;                                        //-- add path
                
                if($fit > 0){
                    $objectParts[$OID][]          = $o;                                                        //-- add Object
                }else{
                    $sectionTop                   = $this->paperTop();
                }

                $availableHeight              = $this->paperBottom() - $this->paperTop();
                
            }

            $pages                            = Max($pages, count($objectParts[$OID]));

        }
        
        for($i = 0 ; $i < $pages ; $i++){
        
            $sectionTop                       = $i == 0           ? $sectionTop            : $this->paperTop();                  //-- first page
            $sectionHeight                    = $i + 1 == $pages  ? $expandedSectionHeight : $this->paperBottom() - $sectionTop; //-- last page
            
            $expandedSectionHeight            = $expandedSectionHeight - $sectionHeight;

            $s                                = pdfSection($this->group, $this->section, $sectionTop, $sectionHeight);
            $sectionTop                       = $sectionTop + $sectionHeight;
            $os                               = array();
            
            for($obj = 0 ; $obj < count($sectionObjects) ; $obj++){
            
                if(count($objectParts[$sectionObjects[$obj]]) <= $pages){
                    $os[]                     = $objectParts[$sectionObjects[$obj]][$i];
                }
                
            }
            
            $s->objects                       = $os;                                                                         //-- add objects to section
            $this->SECTIONS[]                 = $s;
            
            if($expandedSectionHeight > 0){
            
                $s                            = pdfSection($this->group, $this->section, $sectionTop, $expandedSectionHeight);
                $sectionTop                   = $sectionTop + $expandedSectionHeight;
                $os                           = array();
                $s->objects                   = $os;                                                                         //-- add objects to section
                $this->SECTIONS[]             = $s;
                
            }

            if($sectionTop >= $this->paperBottom()){

                if("$this->group$this->section" != '10'){                                                                  //-- the report header
                
                    $this->pageHeaderFooter(1);
                    
                    if($i + 1 != $pages){
                    
                        $this->pageHeaderFooter(0);
                        
                    }
                }
            }
        }
        
        if("$this->group$this->section" == '11'){                                                                         //-- the report footer
            $this->pageHeaderFooter(1);
        }
        
        return $sectionTop;

    }


    
    private function pageHeaderFooter($section){                                 //-- 0 = header 1 = footer

        $S                 = $this->LAY->groups[2]->sections[$section];
        $O                 = $this->setObjectLines($S->objects, true);
        $newOs             = array();
        
        for($i = 0 ; $i < count($O) ; $i ++){
        
            $newO          = pdfObject($O[$i]->id, $O[$i]->top);                 //-- create Object
            $newO->lines   = $O[$i]->LINES;
            $newOs[]       = $newO;
            
        }
        
        $newsec            = pdfSection(2, $section, $section == 0 ? 0 : $this->pageHeight - $S->height, $S->height);
        $newsec->objects   = $newOs;                                                                         //-- add objects to section
        $this->SECTIONS[]  = $newsec;
    
    }
    
    private function extendedHeight(){
    
        if(count($this->O) == 0){return 0;}
        
        $bottomMostObject          = 0;
        $bottomID                  = 0;

        for($i = 0 ; $i < count($this->O) ; $i++){
        
            $thisBottom            = $this->O[$i]->top + (count($this->O[$i]->LINES) * $this->O[$i]->height);
            
            if($bottomMostObject < $thisBottom){                                                                //-- if $i goes lower
                $bottomID          = $i;
                $bottomMostObject  = $thisBottom;
            }
            
        }

        $extend                    = (count($this->O[$bottomID]->LINES) - 1) * $this->O[$bottomID]->height;
        
        return $extend;

    }

    
    private function paperTop(){
        
        if(($this->group == 1 or $this->group == 2) and $this->section == 0){                                   //-- report or page header
            return 0;
        }else{
            return $this->LAY->groups[2]->sections[0]->height+1;
        }
        
    }
    
    private function paperBottom(){

		if(($this->group == 1 and $this->section == 0) or ($this->group == 2 and $this->section == 1)){         //-- report header or page footer
            return $this->pageHeight;
        }else{
            return $this->pageHeight - $this->LAY->groups[2]->sections[1]->height;                          //-- start of page footer
        }
        
    }
    
    private function getObjectRows($O, $stopGrow){

//-- break one Object's paragraph into lines

        $rows               = array();

        if($O->objectType == 'field'){
		
            $text           = $this->nuGetFieldValue($O);
            
            $lineNoNR       = str_replace ("\n\r", "\r", $text);
            $lineNoRN       = str_replace ("\r\n", "\r", $lineNoNR);
            $lineJustR      = str_replace ("\n", "\r", $lineNoRN);
            $lines          = explode("\r", $lineJustR);                               //-- add empty array elements for carriage returns
            
        }else{
            
            $lines          = array($O->fieldName);
            
        }

        for($i = 0 ; $i < count($lines) ; $i ++){                                      //-- loop through current lines
            
            $thisLine       = $lines[$i];
            $forceRow       = true;

            while(strlen($thisLine) > 0){
                
                $result    = $this->getOneRow($thisLine, $O);
                $rows[]    = trim($result[0]);                                          //-- return row as a string [0]
                $thisLine  = $result[1];                                                //-- and then remaining paragraph as a string [1]
                $forceRow  = false;
                
            }

            if($forceRow){
                $rows[]    = '';                                                       //-- return row as a string [0]
                $thisLine  = '';                                                       //-- and then remaining paragraph as a string [1]
            }

        }
        
        if($stopGrow){                                                                 //-- return just 1 row
        
            return array($rows[0]);
            
        }

        if($O->minRows > 0){                                                           //-- must be a minimum size

            while (count($rows) < $O->minRows){
                $rows[] = ' ';
            }
			
        }

        if($O->maxRows > 0){                                                           //-- must not have more rows than this
            $rows      = array_splice($rows, 0, $O->maxRows);
        }
        
		if($O->minRows == -1 and $rows[0] == '' ){                                    //-- reduce height to zero 
			$rows = array();
		}

		return $rows;
        
    }


    private function getOneRow($text, $O){

//-- return an array 
//-- 0 = a line that fits within the width of the Object        
//-- 1 = remaining part of the paragraph

        $this->PDF->SetFont($O->fontFamily, $O->fontWeight, $O->fontSize);
        
        if($O->width - 2 > $this->PDF->GetStringWidth($text)){                         //-- all paragraph fits in 1 line
            return array($text, '');
        }

        $to             = 1;
        while($O->width - 2 > $this->PDF->GetStringWidth(substr($text, 0, $to))){       //-- keep getting wider until too wide
            $to++;
        }

        $widestLine         = substr($text, 0, $to);
        $foundSeperator     = false;
        $foundLongestWord   = false;
        $wordSplit          = $to;

        for($i = strlen($widestLine) - 1 ; $i > 1 ; $i--){
            if (!$foundLongestWord && $this->PDF->GetStringWidth(substr($widestLine, 0, $i)) < $O->width - 2) {
                $wordSplit          = $i;
                $foundLongestWord   = true;
            }
            $break = strpos(", ;-", $widestLine[$i]);                                                                                       //-- look for breakable points

            if($break === false){
            }else{
                $to             = $i;
                $foundSeperator = true;
                break;
            }
        }

        if (!$foundSeperator)
            $to = $wordSplit;

        $remaining      = substr($text, $to);
        $line           = substr($text, 0, $to);                                                                                                 //-- add empty array elements for carriage returns

        return array($line, $remaining);
        
    }
    
    private function nuGetFieldValue($O){

        $type               = '';
        $value              = '';

        if(strtoupper(substr($O->fieldName,0,4)) == 'SUM('){
            $type           = 's';
            $field          = substr($O->fieldName,4, -1);
        }
        if(strtoupper(substr($O->fieldName,0,8)) == 'AVERAGE('){
            $type           = 'p';
            $fields         = explode(',', substr($O->fieldName, 8, -1));
        }
        if($type == ''){                                                                //-- normal value
	
		//Add the 'is_array' check by SG 8th May 2015	
		if ( is_array($this->ROW) ) {	    

			if(array_key_exists($O->fieldName, $this->ROW)) {
				
				$v = $this->nuGetFormatting($O);
           		$value = $v['V'];
//           		$value = mb_convert_encoding($v['V'], "WINDOWS-1252", "UTF-8");
            		}
		}

        }else{                                                                          //-- summed value
            $groups         = array();
            $where          = '';
            
            if($type == 'p'){
                
                $count      = 'SUM(nu_sum_'.trim($fields[0]).') AS the_sum_a, SUM(nu_sum_'.trim($fields[1]).') AS the_sum_b';
            }else{
                $count      = 'SUM(nu_sum_'.trim($field).') AS the_sum_a';
            }
            for($i = 3 ; $i <= $this->group ; $i++){

                $groups[]   = $this->LAY->groups[$i]->sortField . " = '" . str_replace("'", "\\'", $this->ROW[$this->LAY->groups[$i]->sortField] ) . "'";
                $where      = ' WHERE ';

            }

            $sql            = "SELECT $count FROM $this->TABLE_ID"."_nu_summary $where " . implode(' AND ',$groups);
            $t              = nuRunQuery($sql);
            $r              = db_fetch_row($t);
            
            if($r[1] == 0 and $type == 'p'){
                
                $value      = 0;
                
            }else{
                
                if($type == 'p'){
                    $value  = ($r[0] / $r[1]);
                }else{
                    $value  = $r[0];
                }
				
            }
            
        }
        
        if($O->format != ''){                                                            //-- format value
			$value			= nuAddFormatting($value, $O->format);
        }
		
        return $value;

    }        
}


//================================================


function pdfSection($g, $s, $t, $h){  //-- section

	$c                = new stdClass;  
	$c->objects       = array();
    $c->group         = $g;
    $c->section       = $s;
    $c->sectionTop    = $t;
    $c->sectionHeight = $h;

    return $c;

}

function pdfObject($id, $t){

	$c             = new stdClass;  
	$c->lines      = array();
	$c->id         = $id;
	$c->top        = $t;
	$c->path       = '';

    return $c;

}


function nuSetPixelsToMM($pxREPORT){

    $ratio = .25;
    
    for($g = 0 ; $g < count($pxREPORT->groups) ; $g++){
        
        for($s = 0 ; $s < count($pxREPORT->groups[$g]->sections) ; $s++){
            
            $pxREPORT->groups[$g]->sections[$s]->height                          = $pxREPORT->groups[$g]->sections[$s]->height                * $ratio;

            for($o = 0 ; $o < count($pxREPORT->groups[$g]->sections[$s]->objects) ; $o++){
                
                $pxREPORT->groups[$g]->sections[$s]->objects[$o]->fontSize       = $pxREPORT->groups[$g]->sections[$s]->objects[$o]->fontSize;
                $pxREPORT->groups[$g]->sections[$s]->objects[$o]->height         = $pxREPORT->groups[$g]->sections[$s]->objects[$o]->height   * $ratio;
                $pxREPORT->groups[$g]->sections[$s]->objects[$o]->left           = $pxREPORT->groups[$g]->sections[$s]->objects[$o]->left     * $ratio;
                $pxREPORT->groups[$g]->sections[$s]->objects[$o]->top            = ($pxREPORT->groups[$g]->sections[$s]->objects[$o]->top)     * $ratio;
                $pxREPORT->groups[$g]->sections[$s]->objects[$o]->width          = $pxREPORT->groups[$g]->sections[$s]->objects[$o]->width    * $ratio;
            }
        }
        
    }

    return $pxREPORT;
}




function nuPrintBackground($PDF, $sectionTop, $sectionHeight, $color){

    $backcolor                   = hex2rgb($color);
    
    $PDF->SetFillColor($backcolor[0], $backcolor[1], $backcolor[2]);
    //$PDF->Rect(0, $sectionTop, 1000, $sectionHeight, 'F');

}



function nuGetObjectProperties($REPORT, $id){

    for($g = 0 ; $g < count($REPORT->groups) ; $g++){
        for($s = 0 ; $s < count($REPORT->groups[$g]->sections) ; $s++){
            for($o = 0 ; $o < count($REPORT->groups[$g]->sections[$s]->objects) ; $o++){
                if($REPORT->groups[$g]->sections[$s]->objects[$o]->id   == $id)
                    return $REPORT->groups[$g]->sections[$s]->objects[$o];
            }
        }
    }
    
    return '';
}



function nuPrintField($PDF, $S, $contents, $O, $LAY){

    $PROP              = nuGetObjectProperties($LAY, $O->id);
    $fontFamily        = $PROP->fontFamily;
    $fontWeight        = $PROP->fontWeight;
    $fontSize          = $PROP->fontSize;
    $borderWidth       = $PROP->borderWidth;
	$hasBorder         = $borderWidth == 0 ? 0 : 1;
    $borderColor       = $PROP->borderColor;
    $backgroundColor   = $PROP->backgroundColor;
    $fontColor         = $PROP->fontColor;
    $width             = $PROP->width;
    $height            = $PROP->height;
    $textAlign         = strtoupper($PROP->textAlign[0]);
    $left              = $PROP->left;
    $top               = $S->sectionTop + $contents->top;
	
	if(isset($contents->B)){$backgroundColor = $contents->B;}
	if(isset($contents->F)){$fontColor       = $contents->F;}

    $drawcolor         = hex2rgb($borderColor);
    $backcolor         = hex2rgb($backgroundColor);
    $textcolor         = hex2rgb($fontColor);
	
    $PDF->SetDrawColor($drawcolor[0], $drawcolor[1], $drawcolor[2]);
    $PDF->SetTextColor($textcolor[0], $textcolor[1], $textcolor[2]);
    $PDF->SetFillColor($backcolor[0], $backcolor[1], $backcolor[2]);
    $PDF->SetFont($fontFamily, $fontWeight, $fontSize, '', false);
    $PDF->SetLineWidth($borderWidth / 5);
    $PDF->SetXY($left, $top);

	$l = 'Hleď, toť přízračný kůň v mátožné póze šíleně úpí';
	$t = implode("\n", $contents->lines);
	$txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

	

	if($t == 'KEEP EXACT HEIGHT'){
		$PDF->Rect($left, $top, $width, $height, 'DF');
	}else{
	    $PDF->MultiCell($width, $height, $t, $hasBorder, $textAlign, 1, 0, '', '', true, 0, false, false); 
	}

}

function nuPrintImage($PDF, $S, $contents, $O){

	$width             = $O->width;
	$height            = $O->height;
	$left              = $O->left;
	$path              = $contents->path;
	$top               = $S->sectionTop + $contents->top;

	if($O->path != ''){
		$PDF->Image($O->path, $left, $top, $width, $height);
	}

}

function nuGetTotalPages(){
    
    $pages                     = 0;
    for($i = 0 ; $i < count( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT] ) ; $i++){
        if( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT][$i]->sectionTop == 0){
            $pages++;
        }
    }
    
    return $pages;
}


function nuReplaceLabelHashVariables($LAY, $hashData){
    
    for($i = 0 ; $i < count( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT] ) ; $i++){

        for($o = 0 ; $o < count( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT][$i]->objects ) ; $o++){

            $O = nuGetObjectProperties($LAY, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT][$i]->objects[$o]->id);
        
            if($O->objectType == 'label'){
				
                for($l = 0 ; $l < count($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT][$i]->objects[$o]->lines) ; $l++){
                    $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT][$i]->objects[$o]->lines[$l] = nuReplaceHashes($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_REPORT][$i]->objects[$o]->lines[$l], $hashData);
                }
            }
        }
    }
    
}

function nuReplaceHashes($str, $arr){

	while(list($key, $value) = each($arr)){

		if( !is_object($value) and !is_array($value) and $str != '' and $key != ''){
			
			$newValue	= addslashes($value);
			$str 		= str_replace('#'.$key.'#', $newValue, $str);
			
		}
		
	}

    $_SESSION[NU_NUBUILDER_SESSION_DATA]['latest_hashData'] = $arr;
    
	return $str;
	
}


function nuMakeSummaryTable($REPORT, $TABLE_ID){
    
    $sum              = array();
    $field            = array();
    
    for($i = 3 ; $i < 8 ; $i++){
    
        if($REPORT->groups[$i]->sortField != ''){              //-- loop through groups
        
            $groups[] = $REPORT->groups[$i]->sortField;
        
        }
    
    }
    
    
    for($g = 0 ; $g < count($REPORT->groups) ; $g++){
        
        for($s = 0 ; $s < count($REPORT->groups[$g]->sections) ; $s++){
            
            for($o = 0 ; $o < count($REPORT->groups[$g]->sections[$s]->objects) ; $o++){
                
                $obj = $REPORT->groups[$g]->sections[$s]->objects[$o];

                if($obj->objectType == 'field'){
                    if(strtoupper(substr($obj->fieldName,0,4)) == 'SUM('){
                        $sum[substr($obj->fieldName,4, -1)]  = substr($obj->fieldName,4, -1);
                    }
                    if(strtoupper(substr($obj->fieldName,0,8)) == 'AVERAGE('){
                        $ex                                   = explode(',',substr($obj->fieldName, 8, -1));
                        $sum[trim($ex[0])]  = trim($ex[0]);
                        $sum[trim($ex[1])]  = trim($ex[1]);
                    }
                }
                
            }
        }
        
    }
    
    foreach ($sum as $k => $v) {
    
        $field[] = "SUM(`$v`) AS `nu_sum_$v` ";
        
    }
    
    if(count($field) > 0 and count($groups) > 0){   //-- a reason to have a summary table
        
        nuRunQuery("CREATE TABLE $TABLE_ID"."_nu_summary SELECT count(*) as nu_count, " . implode(',',$field) . ", " . implode(',',$groups) . " FROM $TABLE_ID group by " . implode(',',$groups));
        
        for($i = 0 ; $i < count($groups) ; $i++){

            nuRunQuery("ALTER TABLE $TABLE_ID"."_nu_summary  ADD INDEX `".$groups[$i]."` (`".$groups[$i]."`)");

        }
    
    }
    
}


function nuAddCriteriaValues($hashData, $T){

    $c = db_field_names($T);

    $a = array();

    foreach($hashData AS $key => $value){
    
		if( !in_array(strtolower($key), $c) and !is_array($value) and !is_object($value)){

				$v   = substr(addslashes($value),0,199);
				
				if(substr($v,(strlen($v)-1),1) == '\\')
					
					$v = substr($v,0,strlen($v)-1);
					$l = min(strlen($v), 200);
					
				if($l > 0){
					
					$a[] = " ADD `$key` VARCHAR($l) DEFAULT '$v' ";
					
				}
				
				$c[] = strtolower($key);

			}

			
		}
		
		if(count($a) > 0){
			
			nuRunQuery("ALTER TABLE $T " . implode(',', $a)); 
			
		}

		return $c;

}

function nuIsField($i){

    return in_array($i, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_COLUMNS]);
    
}

function nuIsImage($i){
	
	if(substr($i, 0, 6) == 'Image:'){
			
		$c = substr($i, 6);
		$t = nuRunQuery("SELECT * FROM zzzzsys_file WHERE sfi_code = ? ", [$c]);
		$r = db_fetch_object($t);
		
		return $r->sfi_json;
		
	}else{
		return '';
	}

    
}


function nuIsFile($i){

    $file_headers = @get_headers($i);

    if($file_headers[0] == 'HTTP/1.0 404 Not Found'){
          return false;
    } else if ($file_headers[0] == 'HTTP/1.0 302 Found'){
          return false;
    } else {
          return true;
    }    
}


function nuRemoveFiles(){

    for($i = 0 ; $i < count($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_FILES]) ; $i++){
        @unlink($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_FILES][$i]);
    }
    
}

function nuRemovePageBreak($S){
    if( property_exists($S->LAY->groups[$S->group]->sections[$S->section], 'page_break')) {
        if(count($S->LAY->groups[1]->sections[1]->objects) == 0)
	       $S->LAY->groups[$S->group]->sections[$S->section]->page_break = 0;
	}
}

function nuPrintBrowseHtmlResponseHelper($columns, $sql) {

        $content = "<meta charset='utf-8'>";
        $content .= "<style>\n";

        for($col = 0 ; $col < count($columns) ; $col++){

                $wd             = ($columns[$col]->width) . 'px';

                if($columns[$col]->align == 'l'){$align = 'left';}
                if($columns[$col]->align == 'r'){$align = 'right';}
                if($columns[$col]->align == 'c'){$align = 'center';}

                $class[$col]    = "style='font-size:12px;width:$wd;text-align:$align'";
        }
        $content .= "</style>\n";

        $content .= "<TABLE border=1>\n";
        $content .= "<TR>\n";

        for($col = 0 ; $col < count($columns) ; $col++){

                $st     = $class[$col];
                $content .= "<TH $st>";
                $content .= $columns[$col]->title;
                $content .= "</TH>\n";
        }
        $content .= "</TR>";

        $t = nuRunQuery($sql);

        while($r = db_fetch_array($t)){

                $content .= "\n<TR>\n";
                for($col = 0 ; $col < count($columns) ; $col++){
                        $st       = $class[$col];
                        $content .= "<TD $st>" . $r[$columns[$col]->display] . "</TD>\n";
                }
                $content .= "</TR>";
        }
        $content .= "</TABLE>";

        return $content;
}

function nuPrintBrowseHtmlResponse() {

	$return         = array();
	$return[0]    	= NU_MSG_NO_ACCESS_PRINT_HTML_INVALID;
        $return[1]      = NU_RESPONSE_TYPE_ECHO;

	$nuprepare				= 'SELECT deb_message AS json FROM zzzzsys_debug WHERE zzzzsys_debug_id = ?';
	$json					= nuRunQueryJson('json', $nuprepare, array($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_GET_I]) );
	$local_hash_data			= (array) $json->hash;
	$local_hash_data[NU_SESSION_TABLE_ID]	= $local_hash_data['browse_table_id'];
	$id 					= $local_hash_data['form_id'] . '_BB';

	if ( false === nuCheckFormPermission( $local_hash_data['form_id'] ) ) {
		return $return;
	}

	nuEval($id, $local_hash_data);
	$content = nuPrintBrowseHtmlResponseHelper($json->columns, $json->sql);

	nuRunQuery('DELETE FROM zzzzsys_debug WHERE zzzzsys_debug_id = ?', array($nuSanitizedGet[NU_GET_I]) );
	nuRunQuery('DROP TABLE IF EXISTS ', [$local_hash_data[NU_SESSION_TABLE_ID]]   );

	$return		= array();
	$return[0]	= $content;
	$return[1]      = NU_RESPONSE_TYPE_ECHO;

	return $return;
}

function nuCallResponseHelper() {

	if ( array_key_exists( NU_POST_PROCEDURE_CODE, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT]) ) {

		return $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_POST_PROCEDURE_CODE];
	}

	if ( array_key_exists( NU_GET_PROCEDURE_CODE, $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT]) ) {

                return $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_GET_PROCEDURE_CODE];
        }

	return false;
}

function nuCallResponse() {

	$return         	= array();
	$sph_code 		= nuCallResponseHelper();

	if ( false === $sph_code ) { 

		$return[0] 	= NU_MSG_NO_CODE_PROVIDED_INVALID;
		$return[1]    	= NU_RESPONSE_TYPE_BAD;
		return $return;
	}

	$obj = nuRunQueryObject('SELECT zzzzsys_php_id FROM zzzzsys_php WHERE sph_code = ?', array($sph_code) );
	if ( false === $obj ) {
	
		$return[0]      = NU_MSG_CODE_NOT_FOUND_INVALID;
		$return[1]      = NU_RESPONSE_TYPE_BAD;
                return $return;
	}

	if ( false === in_array($obj->zzzzsys_php_id, nuProcedureAccessList(nuAllowedActivities()))  ) {

		$return[0]      = NU_MSG_NO_ACCESS_TO_CODE_INVALID;
                $return[1]      = NU_RESPONSE_TYPE_BAD;
                return $return;
	}

	$return[0] 		= $obj->zzzzsys_php_id;
	$return[1] 		= NU_RESPONSE_TYPE_EVAL;

	return $return;
}

function nuSystemUpdateResponse() {

	$return 		= array();

	if ( !nuIsGlobeadmin() ) {

		$return[0]      = NU_MSG_NO_ACCESS_SYSUPDATE_INVALID;
        	$return[1]      = NU_RESPONSE_TYPE_ECHO;
		return $return;
	}
		
	nuCopySystemFiles();
	nuImportSystemFiles();
	nuAddNewSystemTables();
	nuUpdateSystemRecords();
	nuRemoveNuRecords();
	nuJustNuRecords();
	nuAppendToSystemTables();
	nuSetCollation();

	// this is just a tempory function to update the database
     	nuMigrateSQL();

	nuCreateViews(true);

	$return 		= array();
	$return[0] 		= nuSystemUpdateResponseHelper();
	$return[1] 		= NU_RESPONSE_TYPE_ECHO;
	
	return $return;
}

function nuSystemUpdateResponseHelper() {
	
	$style1		= ' style="font-family:Helvetica;padding:10px;"';
        $style2		= ' style="font-family:Helvetica;font-style:italic;font-size:20px;font-weight:bold;padding:10px"';

        $content	= "
		<br><span $style1>Copied SYSTEM FILES to TEMP FILES <br></span>
		<br><span $style1>Copied SYSTEM FILES to TEMP FILES <br></span>
		<br><span $style1>Copied SYSTEM FILES to TEMP FILES for any new tables added from the import. <br></span>
		<br><span $style1>Updated TEMP FILE table structure\'s to SYSTEM FILES <br></span>
		<br><span $style1>Removed all ids starting with nu from TEMP FILES <br></span>
		<br><span $style1>Removed all ids not starting with nu from SYSTEM FILES <br></span>
		<br><span $style1>Inserted TEMP FILES into SYSTEM FILES <br></span>
		<br><span $style2>You will need to log in again for the changes to take effect.</span><br>
	";	
	
	return $content;
}

function nuReportDesignerResponse() {

	if ( !nuIsGlobeadmin() ) {

                $return[0]      = NU_MSG_NO_ACCESS_DESIGNER_INVALID;
                $return[1]      = NU_RESPONSE_TYPE_ECHO;
                return $return;
        }

	$content  = "<!DOCTYPE html><html><head>";

	$content .= nuDefaultJSIncludes();	

	$f		= nuFormatList();
	$ft 		= nuFontList();
	$tt		= nuTTList($_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_GET_TABLE_LIST], $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_VALIDATED_INPUT][NU_GET_LAUNCH]);
	$i		= nuImageList(json_decode($tt));

	$content .= "<script>";
	$content .= "window.nuFormats	= $f;  ";
	$content .= "window.nuFonts	= $ft; ";
	$content .= "window.nuTT	= $tt; ";
	$content .= "window.nuImages	= $i;  ";
	$content .= "</script>";

	$content .= "
	<script>
		\$(document).ready(function() {
			if(window.opener){
				if(String(window.opener.document.getElementById('sre_layout').value) == '') {
					window.nuREPORT = window.nuREPORTdefault;
				}else{
					window.nuREPORT = \$.parseJSON(window.opener.sre_layout.value);
				}
			}else{
				window.nuREPORT 	= window.nuREPORTdefault;
   	 		}
			nuLoadReport();
		});

		function nuStringify(){
			if(window.opener.\$('#sre_layout').length == 1){
				window.opener.\$('#sre_layout').val(JSON.stringify(window.nuREPORT)).change();
				alert('Copied to Report Successfully..');
				window.close();
			}else{
				alert('Cannot be saved to Report Form');
    			}
		}
	</script>
	";

	$content .= "</head><body onscroll=\"moveToolbar()\" style=\"margin:0px\"></body></html>";

	$return	= array();
	$return[0] = $content;
	$return[1] = NU_RESPONSE_TYPE_ECHO;

	return $return;
}

function nuCheckFormPermission($form_id) {

	for ( $x=0; $x < count( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_FORMS] ); $x++ ) {
	
		$this_array = $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_FORMS][$x];

		if ( in_array( $form_id , $this_array ) ) {
                	return true;
		}
        }		
	
        return false;
}

function nuCheckPHPPermission($php_id) {
	
	if ( in_array( $php_id ,  $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_PHP] ) ) {
                return true;
        }
        return false;
}

function nuCheckReportPermission($report_id) {

	if ( in_array( $php_id ,  $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_PERMISSIONS][NU_SESSION_PERMS_REPORTS] ) ) {
                return true;
        }
        return false;
}

function nuGetGraphicsList() {

	$return = '["ab.png","ad.png","ajax-loader.gif","as.png","bb.png","bd.png","be.png","bottom.png","bro.png","bs.png","ch.png","close.png","db.png","dd.png","desktop.png","display.png","down.png","f.png","ff.png","file.png","fmt.png","fr.png","grid.png","hor.png","html.png","input.png","js.png","key.png","left.png","logo.png","lookup.png","lujs.png","magnify.png","nu_box_close.png","nu_box_size.png","nu_less.png","nu_more.png","nu_option_arrange.png","nu_option_button.png","nu_option_debug.png","nu_option_help.png","nu_option_objects.png","nu_option_password.png","nu_option_properties.png","nu_option_refresh.png","nu_option_searchable.png","nu_undo.png","nubackbutton.png","nublackerror.png","nuclose.png","nuerror.png","numessage.png","nuoptions.png","nuoptions_red.png","nuperson.png","ob.png","p.png","pb.png","pe.png","point.png","r.png","rd.png","resize-arrow.png","right.png","rp.png","rr.png","run.png","select.png","set.png","short.png","sql.png","su.png","subform.png","tall.png","textarea.png","thin.png","top.png","tr.png","trash_can.png","u.png","uh.png","up.png","ver.png","wide.png","word.png"]';
	return $return;
}

function nuErrorLog($msg) {

	if ( NU_USE_APACHE_ERROR_LOG ) {
		error_log($msg);
	}
}

// This gets called while running the updater, it is used to convert nubuilder setups that were originally using the
// standalone version of nubuilder to work inside wordpress as a plugin.
function nuMigrateSQL() {

        $set    = "nuStartDatabaseAdmin();";
        $where  = 'nu5bad6cb37966261';;
        $values = array($set,$where);
        nuRunQuery('UPDATE zzzzsys_event SET sev_javascript = ? WHERE zzzzsys_event_id = ? ', $values);

        $set    = "<iframe id='sqlframe' src='index.php?rt=nuselect' style='height:180px;width:700px'></iframe>";
        $where  = 'nu5bad6cb359e7a1a';
        $values = array($set,$where);
        nuRunQuery('UPDATE zzzzsys_object SET sob_html_code = ? WHERE zzzzsys_object_id = ? ', $values);

        $set    = 'window.open(\'index.php?rt=nureportdesigner&tt=\' + $("#sre_zzzzsys_php_id").val() + \'&launch=\' + $("#sre_zzzzsys_form_id").val());';
        $where  = 'nu5bad6cb3797b0a7';
        $values = array($set,$where);
        nuRunQuery('UPDATE zzzzsys_event SET sev_javascript = ? WHERE zzzzsys_event_id = ? ', $values);

        $set  = '$s  = "CREATE TABLE #TABLE_ID# SELECT zzzzsys_object_id AS theid FROM zzzzsys_object WHERE ";';
        $set .= "\n";
        $set .= '$w  = "1";';
        $set .= "\n";
        $set .= 'if ( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_denied == 1 )  { ';
        $set .= "\n";
        $set .= '$w  = "sob_all_zzzzsys_form_id NOT LIKE \'nu%\' OR sob_all_zzzzsys_form_id = \'nuuserhome\'"; ';
        $set .= "\n";
        $set .= '}';
        $set .= "\n";
        $set .= 'nuRunQuery("$s$w");';
        $set .= "\n";
        $where  = 'nuobject_BB';
        $values = array($set,$where);
        nuRunQuery('UPDATE zzzzsys_php SET sph_php = ? WHERE zzzzsys_php_id = ? ', $values);

        $set  = '$s  = "CREATE TABLE #TABLE_ID# SELECT zzzzsys_form_id AS theid FROM zzzzsys_form WHERE ";';
        $set .= "\n";
        $set .= '$w  = "1";';
        $set .= "\n";
        $set .= 'if ( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_denied == 1 )  { ';
        $set .= "\n";
        $set .= '$w  = "zzzzsys_form_id NOT LIKE \'nu%\' OR zzzzsys_form_id = \'nuuserhome\'"; ';
        $set .= "\n";
        $set .= '}';
        $set .= "\n";
        $set .= 'nuRunQuery("$s$w");';
        $set .= "\n";
        $where  = 'nuform_BB';
        $values = array($set,$where);
        nuRunQuery( 'UPDATE zzzzsys_php SET sph_php = ? WHERE zzzzsys_php_id = ? ', $values);
		
	$set  = '$s  = "CREATE TABLE #TABLE_ID# SELECT zzzzsys_form_id AS theid FROM zzzzsys_form WHERE ";';
        $set .= "\n";
        $set .= '$w  = "1";';
        $set .= "\n";
        $set .= 'if ( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_SESSION_NUSETUP]->set_denied == 1 )  { ';
        $set .= "\n";
        $set .= '$w  = "zzzzsys_form_id NOT LIKE \'nu%\' OR zzzzsys_form_id = \'nuuserhome\'"; ';
        $set .= "\n";
        $set .= '}';
        $set .= "\n";
        $set .= 'nuRunQuery("$s$w");';
        $set .= "\n";
        $where  = 'nutablookup_BB';
        $values = array($set,$where);
        nuRunQuery('UPDATE zzzzsys_php SET sph_php = ? WHERE zzzzsys_php_id = ? ', $values);

	$sql = "UPDATE `zzzzsys_form` SET `sfo_javascript` = 'function nuOnLoad(){\r\n\r\n	if(nuFormType() == \'edit\'){\r\n\r\n		nuDisable(\'sus_name\');\r\n		nuDisable(\'sus_email\');\r\n		nuDisable(\'sus_login_name\');	\r\n		nuHide(\'new_password\');\r\n		nuHide(\'check_password\');	\r\n		nuHide(\'nuDeleteButton\');\r\n		nuHide(\'nuCloneButton\');\r\n\r\n	} else {\r\n		nuHide(\'nuAddButton\');\r\n	}\r\n\r\n}\r\n' WHERE `zzzzsys_form`.`zzzzsys_form_id` = ?";
	$values	= 'nuuser';
	nuRunQuery($sql, $values);
}

?>

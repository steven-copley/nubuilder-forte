<?php	
	// include nubuilder funcions, classes and constants
	require_once('nubuilder-include.php');

	// setup session, database and validate input
	nuInitialization();

	switch ( $_SESSION[NU_NUBUILDER_SESSION_DATA][NU_ACTION] ) {

		case NU_REQUEST_TYPE_LOGOUT;
			$responseArry   = nuLogoutResponse();
                        break;

    		case NU_REQUEST_TYPE_PMA;
			$responseArry   = nuPmaLoginResponse();
        		break;

    		case NU_REQUEST_TYPE_API;
			$responseArry   = nuApiResponse();
        		break;

    		case NU_REQUEST_TYPE_PDF;
        		$responseArry   = nuPdfResponse();
        		break;

		case NU_REQUEST_TYPE_PHP;
			$responseArry   = nuPhpResponse();
			break;

		case NU_REQUEST_TYPE_HTML;
			$responseArry   = nuPrintBrowseHtmlResponse();
			break;

		case NU_REQUEST_TYPE_SELECT;
			$responseArry   = nuSelectResponse();
			break;

		case NU_REQUEST_TYPE_ACE;
			$responseArry   = nuAceResponse();
			break;

		case NU_REQUEST_TYPE_CALL;
			$responseArry   = nuCallResponse();
			break;

		case NU_REQUEST_TYPE_SYSTEM_UPDATE;
			$responseArry   = nuSystemUpdateResponse();	
			break;

		case NU_REQUEST_TYPE_REPORT_DESIGNER;
			$responseArry   = nuReportDesignerResponse();
			break;

		case NU_REQUEST_ILLEGAL;
			$responseArry	= nuIllegalResponse();
			break;

		default;	
			$responseArry   = nuIndexContentResponse();
			break;				
	}		

	nuRouteResponse($responseArry);
?>

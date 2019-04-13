<?php

if ( !defined( 'WP_UNINSTALL_PLUGIN' ) ) {

	exit();

} else {

	nubuilderCleanUpTables();

}

function nubuilderCleanUpTables() {

	global $wpdb;

	$nubuilder_tables      = array();
	$nubuilder_tables[]    = 'zzzzsys_access';
	$nubuilder_tables[]    = 'zzzzsys_access_form';
	$nubuilder_tables[]    = 'zzzzsys_access_php';
	$nubuilder_tables[]    = 'zzzzsys_access_report';
	$nubuilder_tables[]    = 'zzzzsys_browse';
	$nubuilder_tables[]    = 'zzzzsys_debug';
	$nubuilder_tables[]    = 'zzzzsys_event';
	$nubuilder_tables[]    = 'zzzzsys_file';
	$nubuilder_tables[]    = 'zzzzsys_form';
	$nubuilder_tables[]    = 'zzzzsys_format';
	$nubuilder_tables[]    = 'zzzzsys_object';
	$nubuilder_tables[]    = 'zzzzsys_php';
	$nubuilder_tables[]    = 'zzzzsys_report';
	$nubuilder_tables[]    = 'zzzzsys_select';
	$nubuilder_tables[]    = 'zzzzsys_select_clause';
	$nubuilder_tables[]    = 'zzzzsys_session';
	$nubuilder_tables[]    = 'zzzzsys_setup';
	$nubuilder_tables[]    = 'zzzzsys_tab';
	$nubuilder_tables[]    = 'zzzzsys_table';
	$nubuilder_tables[]    = 'zzzzsys_timezone';
	$nubuilder_tables[]    = 'zzzzsys_translate';
	$nubuilder_tables[]    = 'zzzzsys_user';

	// drop tables
	for ( $x=0; $x<count($nubuilder_tables); $x++ ) { 
	
		$nubuilder_table 		= $nubuilder_tables[$x];
		$nubuilder_drop_table_sql 	= "DROP TABLE IF EXISTS `$nubuilder_table` ";

		$wpdb->query($nubuilder_drop_table_sql);
	}
	
	// drop views
	$wpdb->query("DROP VIEW `zzzzsys_report_data`, `zzzzsys_run_list");
}

?>

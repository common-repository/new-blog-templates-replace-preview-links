<?php
/**
 * Plugin Name: Replace Preview Links of New Blog Templates 
 * Plugin URI: http://wpsoft.com.br
 * Description: Replace Preview Links of New Blog Templates
 * Version: 1.0
 * Author: diegpl, pkelbert
 * Author URI: http://wpsoft.com.br
 * License: GPL2
 */
 

function replacePreviewLinks() {
	echo "<script type='text/javascript' src='".plugins_url( 'replace-preview-links.js' , __FILE__ )."'></script>";
	echo "<link rel='stylesheet' id='style-css'  href='".plugins_url( 'style.css' , __FILE__ )."' type='text/css' media='all' />";
}

add_action('wp_footer', 'replacePreviewLinks');

?>
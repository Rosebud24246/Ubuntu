<?php
/**
 * Plugin Name: PDF Embed Block
 * Description: Show PDF file on you web page.
 * Version: 1.0.1
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: pdf-embed-block
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'PEB_PLUGIN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.1' );
define( 'PEB_ASSETS_DIR', plugin_dir_url( __FILE__ ) . 'assets/' );

// PDF Embed
class PEB_PDFEmbed{
	function __construct(){
		add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
		add_action( 'script_loader_tag', [$this, 'scriptLoaderTag'], 10, 3 );
		add_action( 'init', [$this, 'onInit'] );
	}

	// Block assets
	function enqueueBlockAssets(){
		wp_register_script( 'adobe-viewer', 'https://documentcloud.adobe.com/view-sdk/viewer.js', [], PEB_PLUGIN_VERSION );
	}
	function scriptLoaderTag( $tag, $handle, $src ){
		if($handle === 'adobe-viewer'){
			return "<script src='https://documentcloud.adobe.com/view-sdk/viewer.js'></script>";
		}
		return $tag;
	}

	function onInit() {
		// Plugin Settings
		register_setting(
			'pebPluginSettings',
			'pebAPIKey',
			[
				'default'		=> '',
				'show_in_rest'	=> true,
				'type'			=> 'string'
			]
		);

		// Block registration
		wp_register_style( 'peb-pdf-embed-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'wp-edit-blocks' ], PEB_PLUGIN_VERSION ); // Backend Style
		wp_register_style( 'peb-pdf-embed-style', plugins_url( 'dist/style.css', __FILE__ ), [], PEB_PLUGIN_VERSION ); // Frontend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'peb-pdf-embed-editor-style',
			'style'				=> 'peb-pdf-embed-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'peb-pdf-embed-editor-script', 'pdf-embed-block', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
	}

	// Render Block
	function render( $attributes ){
		extract( $attributes );

		$className = $className ?? '';
		$blockClassName = 'wp-block-peb-pdf-embed ' . $className . ' align' . $align;

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='pebPDFEmbed-<?php echo esc_attr( $cId ) ?>' data-props='<?php echo esc_attr( wp_json_encode( [ 'attributes' => $attributes, 'pebAPIKey' => get_option( 'pebAPIKey' ) ] ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new PEB_PDFEmbed();
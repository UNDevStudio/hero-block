
<?php
/**
 * Plugin Name: Hero Block
 * Description: A reusable responsive Gutenberg Hero block with style variations and preview controls.
 * Version: 1.1.0
 * Author: UNDevStudio
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the Hero block.
 */
function hero_block_register() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'hero_block_register' );

/**
 * Enqueue Hero block styles on the frontend.
 */
function hero_block_enqueue_styles() {
	wp_enqueue_block_style(
		'hero-block/hero',
		array(
			'handle' => 'hero-block-frontend-styles',
			'src'    => plugin_dir_url( __FILE__ ) . 'build/style-index.css',
			'path'   => __DIR__ . '/build/style-index.css',
			'ver'    => file_exists( __DIR__ . '/build/style-index.css' )
				? filemtime( __DIR__ . '/build/style-index.css' )
				: '1.1.0',
		)
	);
}
add_action( 'init', 'hero_block_enqueue_styles' );

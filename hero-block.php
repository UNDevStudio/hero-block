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
 * Register Hero block style variations.
 */
function hero_block_register_styles() {
	register_block_style(
		'hero-block/hero',
		array(
			'name'       => 'dark',
			'label'      => __( 'Dark', 'hero-block' ),
			'is_default' => true,
		)
	);

	register_block_style(
		'hero-block/hero',
		array(
			'name'  => 'light',
			'label' => __( 'Light', 'hero-block' ),
		)
	);

	register_block_style(
		'hero-block/hero',
		array(
			'name'  => 'outline',
			'label' => __( 'Outline', 'hero-block' ),
		)
	);
}
add_action( 'init', 'hero_block_register_styles' );

/**
 * Enqueue the base Hero block stylesheet.
 */
function hero_block_enqueue_base_styles() {
	$css_file = __DIR__ . '/build/style-index.css';

	if ( file_exists( $css_file ) ) {
		wp_enqueue_block_style(
			'hero-block/hero',
			array(
				'handle' => 'hero-block-base-styles',
				'src'    => plugin_dir_url( __FILE__ ) . 'build/style-index.css',
				'path'   => $css_file,
				'ver'    => filemtime( $css_file ),
			)
		);
	}
}
add_action( 'init', 'hero_block_enqueue_base_styles' );

/**
 * Enqueue the separate Hero block theme stylesheets.
 */
function hero_block_enqueue_theme_styles() {
	$styles = array(
		'dark'    => 'style-dark.css',
		'light'   => 'style-light.css',
		'outline' => 'style-outline.css',
	);

	foreach ( $styles as $style_name => $filename ) {
		$css_file = __DIR__ . '/' . $filename;

		if ( ! file_exists( $css_file ) ) {
			continue;
		}

		wp_enqueue_block_style(
			'hero-block/hero',
			array(
				'handle' => 'hero-block-' . $style_name . '-styles',
				'src'    => plugin_dir_url( __FILE__ ) . $filename,
				'path'   => $css_file,
				'ver'    => filemtime( $css_file ),
			)
		);
	}
}
add_action( 'init', 'hero_block_enqueue_theme_styles' );
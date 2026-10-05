<?php
/**
 * Plugin Name: Hero Block
 * Description: A reusable responsive Gutenberg Hero block.
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function hero_block_register() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'hero_block_register' );
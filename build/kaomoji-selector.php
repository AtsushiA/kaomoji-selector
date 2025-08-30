<?php
/**
 * Plugin Name:       顔文字セレクター
 * Description:       エディタ上で簡単に顔文字（kaomoji）を選び、記事に挿入できるブロックです。
 * Version:           0.1.0
 * Author:            w0 block authoring tool
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kaomoji-selector-block-wp
 *
 * @package KaomojiSelector
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function kaomoji_selector_block_init() {
	register_block_type( __DIR__ . '/build/' );
}
add_action( 'init', 'kaomoji_selector_block_init' );
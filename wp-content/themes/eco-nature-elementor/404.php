<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Eco Nature Elementor
 */

get_header(); ?>

<div class="header-image-box text-center">
  <div class="container">
    <?php if ( get_theme_mod('eco_nature_elementor_header_page_title')) : ?>
      <h1><?php esc_html_e('404 Error!', 'eco-nature-elementor'); ?></h1>
    <?php endif; ?>
    <?php if ( get_theme_mod('eco_nature_elementor_header_breadcrumb')) : ?>
      <div class="crumb-box mt-3">
        <?php eco_nature_elementor_the_breadcrumb(); ?>
      </div>
    <?php endif; ?>
  </div>
</div>

<div id="content">
	<div class="container">
		<div class="py-5 text-center">
			<p><?php esc_html_e('The page you are looking for may have been moved, deleted, or possibly never existed.', 'eco-nature-elementor'); ?></p>
			<?php get_search_form(); ?>
		</div>
	</div>
</div>

<?php get_footer(); ?>
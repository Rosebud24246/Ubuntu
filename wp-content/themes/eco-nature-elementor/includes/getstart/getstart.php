<?php
//about theme info
add_action( 'admin_menu', 'eco_nature_elementor_gettingstarted' );
function eco_nature_elementor_gettingstarted() {
	add_theme_page( esc_html__('Eco Nature Elementor', 'eco-nature-elementor'), esc_html__('Eco Nature Elementor', 'eco-nature-elementor'), 'edit_theme_options', 'eco_nature_elementor_about', 'eco_nature_elementor_mostrar_guide');
}

// Add a Custom CSS file to WP Admin Area
function eco_nature_elementor_admin_theme_style() {
	wp_enqueue_style('eco-nature-elementor-custom-admin-style', esc_url(get_template_directory_uri()) . '/includes/getstart/getstart.css');
	wp_enqueue_script('eco-nature-elementor-tabs', esc_url(get_template_directory_uri()) . '/includes/getstart/js/tab.js');
	wp_enqueue_style( 'font-awesome-css', get_template_directory_uri().'/assets/css/fontawesome-all.css' );
}
add_action('admin_enqueue_scripts', 'eco_nature_elementor_admin_theme_style');

// Changelog
if ( ! defined( 'ECO_NATURE_ELEMENTOR_CHANGELOG_URL' ) ) {
    define( 'ECO_NATURE_ELEMENTOR_CHANGELOG_URL', get_template_directory() . '/readme.txt' );
}

function eco_nature_elementor_changelog_screen() {	
	global $wp_filesystem;
	$changelog_file = apply_filters( 'eco_nature_elementor_changelog_file', ECO_NATURE_ELEMENTOR_CHANGELOG_URL );
	if ( $changelog_file && is_readable( $changelog_file ) ) {
		WP_Filesystem();
		$changelog = $wp_filesystem->get_contents( $changelog_file );
		$changelog_list = eco_nature_elementor_parse_changelog( $changelog );
		echo wp_kses_post( $changelog_list );
	}
}

function eco_nature_elementor_parse_changelog( $content ) {
	$content = explode ( '== ', $content );
	$changelog_isolated = '';
	foreach ( $content as $key => $value ) {
		if (strpos( $value, 'Changelog ==') === 0) {
	    	$changelog_isolated = str_replace( 'Changelog ==', '', $value );
	    }
	}
	$changelog_array = explode( '= ', $changelog_isolated );
	unset( $changelog_array[0] );
	$changelog = '<div class="changelog">';
	foreach ( $changelog_array as $value) {
		$value = preg_replace( '/\n+/', '</span><span>', $value );
		$value = '<div class="block"><span class="heading">= ' . $value . '</span></div><hr>';
		$changelog .= str_replace( '<span></span>', '', $value );
	}
	$changelog .= '</div>';
	return wp_kses_post( $changelog );
}

//guidline for about theme
function eco_nature_elementor_mostrar_guide() { 
	//custom function about theme customizer
	$eco_nature_elementor_return = add_query_arg( array()) ;
	$eco_nature_elementor_theme = wp_get_theme( 'eco-nature-elementor' );
?>

    <div class="top-head">
		<div class="top-title">
			<h2><?php esc_html_e( 'Eco Nature Elementor', 'eco-nature-elementor' ); ?></h2>
		</div>
		<div class="top-right">
			<span class="version"><?php esc_html_e( 'Version', 'eco-nature-elementor' ); ?>: <?php echo esc_html($eco_nature_elementor_theme['Version']);?></span>
		</div>
    </div>

    <div class="inner-cont">
	    <div class="tab-sec">
	    	<div class="tab">
				<button class="tablinks" onclick="eco_nature_elementor_open_tab(event, 'setup_customizer')"><?php esc_html_e( 'Setup With Customizer', 'eco-nature-elementor' ); ?></button>
				<button class="tablinks" onclick="eco_nature_elementor_open_tab(event, 'wpelemento_importer_editor')"><?php esc_html_e( 'Demo Import', 'eco-nature-elementor' ); ?></button>
				<button class="tablinks" onclick="eco_nature_elementor_open_tab(event, 'changelog_cont')"><?php esc_html_e( 'Changelog', 'eco-nature-elementor' ); ?></button>
			</div>			
			<div id="setup_customizer" class="tabcontent open">
				<div class="tab-outer-box">
				  	<div class="lite-theme-inner">
						<h3><?php esc_html_e('Theme Customizer', 'eco-nature-elementor'); ?></h3>
						<p><?php esc_html_e('To begin customizing your website, start by clicking "Customize".', 'eco-nature-elementor'); ?></p>
						<div class="info-link">
							<a target="_blank" href="<?php echo esc_url( admin_url('customize.php') ); ?>"><?php esc_html_e('Customizing', 'eco-nature-elementor'); ?></a>
						</div>
						<hr>
						<h3><?php esc_html_e('Help Docs', 'eco-nature-elementor'); ?></h3>
						<p><?php esc_html_e('The complete procedure to configure and manage a WordPress Website from the beginning is shown in this documentation .', 'eco-nature-elementor'); ?></p>
						<div class="info-link">
							<a href="<?php echo esc_url( ECO_NATURE_ELEMENTOR_FREE_THEME_DOC ); ?>" target="_blank"><?php esc_html_e('Documentation', 'eco-nature-elementor'); ?></a>
						</div>
						<hr>
						<h3><?php esc_html_e('Need Support?', 'eco-nature-elementor'); ?></h3>
						<p><?php esc_html_e('Our dedicated team is well prepared to help you out in case of queries and doubts regarding our theme.', 'eco-nature-elementor'); ?></p>
						<div class="info-link">
							<a href="<?php echo esc_url( ECO_NATURE_ELEMENTOR_SUPPORT ); ?>" target="_blank"><?php esc_html_e('Support Forum', 'eco-nature-elementor'); ?></a>
						</div>
						<hr>
						<h3><?php esc_html_e('Reviews & Testimonials', 'eco-nature-elementor'); ?></h3>
						<p> <?php esc_html_e('All the features and aspects of this WordPress Theme are phenomenal. I\'d recommend this theme to all.', 'eco-nature-elementor'); ?></p>
						<div class="info-link">
							<a href="<?php echo esc_url( ECO_NATURE_ELEMENTOR_REVIEW ); ?>" target="_blank"><?php esc_html_e('Review', 'eco-nature-elementor'); ?></a>
						</div>
						<hr>
						<div class="link-customizer">
							<h3><?php esc_html_e( 'Link to customizer', 'eco-nature-elementor' ); ?></h3>
							<div class="first-row">
								<div class="row-box">
									<div class="row-box1">
										<span class="dashicons dashicons-buddicons-buddypress-logo"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[control]=custom_logo') ); ?>" target="_blank"><?php esc_html_e('Upload your logo','eco-nature-elementor'); ?></a>
									</div>
									<div class="row-box2">
										<span class="dashicons dashicons-menu"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=nav_menus') ); ?>" target="_blank"><?php esc_html_e('Menus','eco-nature-elementor'); ?></a>
									</div>
								</div>
							
								<div class="row-box">
									<div class="row-box1">
										<span class="dashicons dashicons-align-center"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=header_image') ); ?>" target="_blank"><?php esc_html_e('Header Image','eco-nature-elementor'); ?></a>
									</div>
									<div class="row-box2">
										<span class="dashicons dashicons-screenoptions"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=widgets') ); ?>" target="_blank"><?php esc_html_e('Footer Widget','eco-nature-elementor'); ?></a>
									</div>
								</div>
							</div>
						</div>
				  	</div>
				</div>
			</div>
			<div id="wpelemento_importer_editor" class="tabcontent">
				<?php if(!class_exists('WPElemento_Importer_ThemeWhizzie')){
					$plugin_ins = Eco_Nature_Elementor_Plugin_Activation_WPElemento_Importer::get_instance();
					$eco_nature_elementor_actions = $plugin_ins->recommended_actions;
					?>
					<div class="eco-nature-elementor-recommended-plugins ">
							<div class="eco-nature-elementor-action-list">
								<?php if ($eco_nature_elementor_actions): foreach ($eco_nature_elementor_actions as $key => $eco_nature_elementor_actionValue): ?>
										<div class="eco-nature-elementor-action" id="<?php echo esc_attr($eco_nature_elementor_actionValue['id']);?>">
											<div class="action-inner plugin-activation-redirect">
												<h3 class="action-title"><?php echo esc_html($eco_nature_elementor_actionValue['title']); ?></h3>
												<div class="action-desc"><?php echo esc_html($eco_nature_elementor_actionValue['desc']); ?></div>
												<?php echo wp_kses_post($eco_nature_elementor_actionValue['link']); ?>
											</div>
										</div>
									<?php endforeach;
								endif; ?>
							</div>
					</div>
				<?php }else{ ?>
					<div class="tab-outer-box">
						<h2><?php esc_html_e( 'Welcome to Elemento Theme!', 'eco-nature-elementor' ); ?></h2>
						<p><?php esc_html_e( 'For setup the theme, First you need to click on the Begin activating plugins', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '1. Install Kirki Customizer Framework ', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '>> Then click to Return to Required Plugins Installer ', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '2. Install WPElemento Importer', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '>> Then click to Return to Required Plugins Installer ', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '3. Activate Kirki Customizer Framework ', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '4. Activate WPElemento Importer ', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '>> Then click to Return to the Dashboard', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '>> Click on the start now button', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '>> Click install plugins', 'eco-nature-elementor' ); ?></p>
						<p><?php esc_html_e( '>> Click import demo button to setup the theme and click visit your site button', 'eco-nature-elementor' ); ?></p>
					</div>
				<?php } ?>
			</div>

			<div id="changelog_cont" class="tabcontent">
				<div class="tab-outer-box">
					<?php eco_nature_elementor_changelog_screen(); ?>
				</div>
			</div>

		</div>

		<div class="inner-side-content">
			<h2><?php esc_html_e('Premium Theme', 'eco-nature-elementor'); ?></h2>
			<div class="tab-outer-box">
				<img src="<?php echo esc_url(get_template_directory_uri()); ?>/screenshot.png" alt="" />
				<h3><?php esc_html_e('Eco Nature WordPress Theme', 'eco-nature-elementor'); ?></h3>
				<div class="iner-sidebar-pro-btn">
					<span class="premium-btn"><a href="<?php echo esc_url( ECO_NATURE_ELEMENTOR_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('Buy Now', 'eco-nature-elementor'); ?></a>
					</span>
					<span class="demo-btn"><a href="<?php echo esc_url( ECO_NATURE_ELEMENTOR_LIVE_DEMO ); ?>" target="_blank"><?php esc_html_e('Live Demo', 'eco-nature-elementor'); ?></a>
					</span>
					<span class="doc-btn"><a href="<?php echo esc_url( ECO_NATURE_ELEMENTOR_PRO_DOC ); ?>" target="_blank"><?php esc_html_e('Pro Doc', 'eco-nature-elementor'); ?></a>
					</span>
				</div>
				<hr>
				<div class="premium-coupon">
					<div class="premium-features">
						<h3><?php esc_html_e('premium Features', 'eco-nature-elementor'); ?></h3>
						<ul>
							<li><?php esc_html_e( 'Multilingual', 'eco-nature-elementor' ); ?></li>
							<li><?php esc_html_e( 'Drag and drop features', 'eco-nature-elementor' ); ?></li>
							<li><?php esc_html_e( 'Zero Coding Required', 'eco-nature-elementor' ); ?></li>
							<li><?php esc_html_e( 'Mobile Friendly Layout', 'eco-nature-elementor' ); ?></li>
							<li><?php esc_html_e( 'Responsive Layout', 'eco-nature-elementor' ); ?></li>
							<li><?php esc_html_e( 'Unique Designs', 'eco-nature-elementor' ); ?></li>
						</ul>
					</div>
					<div class="coupon-box">
						<h3><?php esc_html_e('Use Coupon Code', 'eco-nature-elementor'); ?></h3>
						<a class="coupon-btn" href="<?php echo esc_url( ECO_NATURE_ELEMENTOR_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('UPGRADE NOW', 'eco-nature-elementor'); ?></a>
						<div class="coupon-container">
							<h3><?php esc_html_e( 'elemento20', 'eco-nature-elementor' ); ?></h3>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>

<?php } ?>
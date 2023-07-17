<?php
/**
 * Singleton class for handling the theme's customizer integration.
 *
 * @since  1.0.0
 * @access public
 */
final class Eco_Nature_Elementor_Customize {

	/**
	 * Returns the instance.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return object
	 */
	public static function get_instance() {

		static $instance = null;

		if ( is_null( $instance ) ) {
			$instance = new self;
			$instance->setup_actions();
		}

		return $instance;
	}

	/**
	 * Constructor method.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function __construct() {}

	/**
	 * Sets up initial actions.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function setup_actions() {

		// Register panels, sections, settings, controls, and partials.
		add_action( 'customize_register', array( $this, 'sections' ) );

		// Register scripts and styles for the controls.
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'enqueue_control_scripts' ), 0 );
	}

	/**
	 * Sets up the customizer sections.
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object  $manager
	 * @return void
	*/
	public function sections( $manager ) {

		// Load custom sections.
		load_template( trailingslashit( get_template_directory() ) . '/includes/go-pro/upgrade-pro.php' );

		// Register custom section types.
		$manager->register_section_type( 'Eco_Nature_Elementor_Customize_Section_Pro' );

		$manager->add_section(
			new Eco_Nature_Elementor_Customize_Section_Pro(
				$manager,
				'eco_nature_elementor_upgrade_pro',
				array(
					'title'       => esc_html__( 'Eco Nature Elementor Pro', 'eco-nature-elementor' ),
					'pro_text'    => esc_html__( 'GO PRO', 'eco-nature-elementor' ),
					'pro_url'     => 'https://www.wpelemento.com/elementor/eco-nature-wordpress-theme/',
					'priority'    => 5,
				)
			)
		);

		$manager->add_section(
			new Eco_Nature_Elementor_Customize_Section_Pro(
				$manager,
				'eco-nature-elementor-documentation',
				array(
					'title'       => esc_html__( 'Documentation', 'eco-nature-elementor' ),
					'pro_text'    => esc_html__( 'DOCS', 'eco-nature-elementor' ),
					'pro_url'     => 'https://www.wpelemento.com/theme-documentation/eco-nature-elementor/',
					'priority'    => 5,
				)
			)
		);

		$manager->add_section(
			new Eco_Nature_Elementor_Customize_Section_Pro(
				$manager,
				'eco-nature-elementor-demo',
				array(
					'title'       => esc_html__( 'Demo link', 'eco-nature-elementor' ),
					'pro_text'    => esc_html__( 'Demo', 'eco-nature-elementor' ),
					'pro_url'     => 'https://www.wpelemento.com/demo/eco-nature-elementor/',
					'priority'    => 5,
				)
			)
		);
	}

	/**
	 * Loads theme customizer CSS.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function enqueue_control_scripts() {

		wp_enqueue_script( 'eco-nature-elementor-customize-controls', trailingslashit( get_template_directory_uri() ) . '/assets/js/customize-controls.js', array( 'customize-controls' ) );

		wp_enqueue_style( 'eco-nature-elementor-customize-controls', trailingslashit( get_template_directory_uri() ) . '/assets/css/customize-controls.css' );
	}
}

// Doing this customizer thang!
Eco_Nature_Elementor_Customize::get_instance();
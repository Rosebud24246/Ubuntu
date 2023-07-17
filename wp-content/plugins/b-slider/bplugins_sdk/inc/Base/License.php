<?php

class License extends BSDK{

    protected $permalinks = [];
    function __construct($config, $__FILE__){
        parent::__construct($config, $__FILE__);
        $this->permalinks = $config->permalinks;
        $this->register();
    }
    
    public function register(){
        add_action('admin_footer', [$this, 'form']);
        add_action('admin_enqueue_scripts', [$this, 'admin_enqueue_scripts']);
        add_filter("plugin_action_links_$this->base_name", [$this, 'addButtonInPlugin'] );
        add_action("wp_ajax_{$this->prefix}_active_license_key", [$this, 'activeLicense']);
        add_action('admin_footer', [$this, 'admin_footer']);
    }

    public function activeLicense(){
        if(isset($_POST['nonce']) && !wp_verify_nonce( $_POST['nonce'], 'wp_ajax' )){
            echo wp_json_encode(['success' => false, 'message' => 'invalid nonce']);
            wp_die();
            return;
        }

        $data = isset($_POST['data']) ? stripslashes(sanitize_text_field( $_POST['data'])) : "{}";
        
        if(!$data){
            echo wp_json_encode(['success' => false, 'message' => 'invalid data']);
            wp_die();
            return;
        }

        $result = \update_option($this->prefix."_pipe", $data);
        echo wp_json_encode(['success' => true]);
        wp_die();
    }

    public function addButtonInPlugin($links){
        $settings_link = '<a href="#" class="'.$this->prefix.'_modal_opener">'. (get_option($this->prefix."_pipe", false) ? ($this->isPipe ? 'Deactive License' : 'Active License') : 'Upgrade to pro').'</a>';
        array_unshift($links, $settings_link); 
        return $links;
    }

    public function admin_enqueue_scripts($page){
        if($page === 'plugins.php'){
            wp_enqueue_script( 'bsdk-license',  plugin_dir_url( plugin_dir_path( __DIR__ ) ) . 'dist/license.js', array(), '1.0.0' , true ); 
            wp_enqueue_style( 'bsdk-license',  plugin_dir_url( plugin_dir_path( __DIR__ ) ) . 'dist/license.css', array(), '1.0.0' , 'all' ); 

            wp_localize_script('bsdk-license', 'BSDK', array(
                'ajaxURL' => admin_url('admin-ajax.php'),
                'website' => site_url(),
                'email' => get_option('admin_email'),
                'nonce' => wp_create_nonce( 'wp_ajax' ),
            ));
        }
    }

    public function form(){
		$screen = \get_current_screen();
		if($screen->base === 'plugins'){
			?>
			<div class="<?php echo esc_attr($this->prefix) ?>_license_popup">
			<div id="bLicensePopup" class="popupWrapper">
				<div class="overlay"></div>
					<div class="license_form">
						<div class="popup_header">
							<h2><?php _e("Active License", "bsdk") ?></h2>
							<span class="closer">&times;</span>
						</div>
						<div class="popup_body">
							<p><?php _e('Please enter the license key that you received in the email right after the purchase:', 'bsdk') ?></p>
							<input type="<?php echo $this->_upgraded ? 'password' : 'text' ?>" value="<?php echo esc_attr($this->key) ?>" class="license_key" name="<?php echo esc_attr($this->prefix) ?>-license-key" />
							<div class="license_notice"></div>
							<div class="terms">
								<input type="checkbox" id="agree" class="input agree">
								<label for="agree"><?php $this->isPipe ? _e("Remove Data", 'bsdk') :  _e("I agreed to send the website url, email, and the License key to '$this->plugin_name' plugin server to verify the license key.", "bsdk"); ?></label>
							</div>
						</div>
						<div class="popup_footer">
                            <span class="bpl_loader"></span>
							<?php if($this->isPipe): ?>
								<input type="submit" class="button button-primary btn-deactivate" value="<?php _e("Deactive License", "bsdk") ?>" />
							<?php else: ?>
								<input type="submit" disabled="true" class="button button-primary btn-activate" value="<?php _e("Active License", "bsdk") ?>" />
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
			</div>
			<?php
		}
	}

    public function admin_footer(){
        ?>
            <script>
                document.addEventListener('DOMContentLoaded', function(){
                    if(typeof LicenseHandler === 'function'){
                        const license = new LicenseHandler('<?php echo esc_html($this->prefix); ?>', <?php echo wp_json_encode($this->permalinks)  ?>);
                        license.initialize();
                    }
                })
            </script>

        <?php
    }


}




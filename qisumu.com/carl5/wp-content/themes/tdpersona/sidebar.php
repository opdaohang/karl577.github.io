<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package tdpersona
 * @since tdpersona 1.0
 */
?>

		<div id="secondary" class="widget-area" role="complementary">			
			<div id="sidebar-content" class="widget-inner">
				<?php if ( ! dynamic_sidebar( 'sidebar-4' ) ) : ?>
	
					<aside id="search" class="widget widget_search">
						<?php get_search_form(); ?>
					</aside>
	
					<aside id="archives" class="widget">
						<h1 class="widget-title"><?php _e( 'Archives', 'tdsimple' ); ?></h1>
						<ul>
							<?php wp_get_archives( array( 'type' => 'monthly' ) ); ?>
						</ul>
					</aside>
	
					<aside id="meta" class="widget">
						<h1 class="widget-title"><?php _e( 'Meta', 'tdsimple' ); ?></h1>
						<ul>
							<?php wp_register(); ?>
							<li><?php wp_loginout(); ?></li>
							<?php wp_meta(); ?>
						</ul>
					</aside>
	
				<?php endif; // end sidebar widget area ?>
			</div>
		</div><!-- #secondary .widget-area -->
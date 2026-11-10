<?php
/**
 * Template Name: React Router
 * Description: A React Router entry point. Assign it to each WordPress page used by the React routes.
 */

defined('ABSPATH') || exit;
get_header();
$router_base = wp_parse_url(home_url('/'), PHP_URL_PATH);
$router_base = untrailingslashit($router_base ?: '/');
?>

<section id="react-router-app" data-router-base="<?php echo esc_attr($router_base ?: '/'); ?>"></section>
<?php
get_footer();

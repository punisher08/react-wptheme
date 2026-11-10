<?php
/**
 * Template Name: Landing Page (React)
 * Description: Landing page rendered with React and Vite.
 */

defined('ABSPATH') || exit;
$contact_form_fields = [
    [
        'name'         => 'name',
        'label'        => 'Your name',
        'type'         => 'text',
        'required'     => true,
        'placeholder'  => 'Full name',
        'autoComplete' => 'name',
    ],
    [
        'name'         => 'email',
        'label'        => 'Email address',
        'type'         => 'email',
        'required'     => true,
        'placeholder'  => 'you@example.com',
        'autoComplete' => 'email',
    ],
    [
        'name'     => 'service',
        'label'    => 'What can we help you with?',
        'type'     => 'select',
        'required' => false,
        'options'  => [
            ['label' => 'Landing page design', 'value' => 'Landing page design'],
            ['label' => 'Custom website development', 'value' => 'Custom website development'],
            ['label' => 'SEO optimization', 'value' => 'SEO optimization'],
            ['label' => 'Website maintenance and support', 'value' => 'Website maintenance and support'],
            ['label' => 'Other project', 'value' => 'Other project'],
        ],
    ],
    [
        'name'        => 'message',
        'label'       => 'Tell us about your project',
        'type'        => 'textarea',
        'required'    => true,
        'rows'        => 5,
        'placeholder' => 'What are you looking to build or improve?',
    ],
];

get_header();
?>

<div id="landingpage-react-sections">
    <div id="landingpage-hero-root"></div>
    <div id="landingpage-about-root"></div>
    <div id="landingpage-benefits-root"></div>
    <div id="landingpage-services-root"></div>
    <div id="landingpage-process-root"></div>
    <div id="landingpage-pricing-root"></div>
    <div id="landingpage-testimonials-root"></div>
    <div id="landingpage-team-root"></div>
    <div
        id="landingpage-contact-root"
        data-contact-fields="<?php echo esc_attr(wp_json_encode($contact_form_fields)); ?>"
        data-contact-endpoint="<?php echo esc_url(rest_url('prowptheme/v1/contact')); ?>"
    ></div>
    <div id="landingpage-final-cta-root"></div>
    <div id="landingpage-footer-root"></div>
</div>
<?php
get_footer();

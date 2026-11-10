<?php
/**
 * Contact form REST endpoint and email delivery.
 */

defined('ABSPATH') || exit;

add_action('rest_api_init', function () {
    register_rest_route('prowptheme/v1', '/contact', [
        'methods'             => WP_REST_Server::CREATABLE,
        'callback'            => 'prowptheme_handle_contact_submission',
        'permission_callback' => '__return_true',
    ]);
});

function prowptheme_handle_contact_submission(WP_REST_Request $request) {
    $data = $request->get_json_params();

    if (!is_array($data) || count($data) > 30) {
        return new WP_Error(
            'invalid_contact_submission',
            'Please check your form and try again.',
            ['status' => 400]
        );
    }

    $honeypot = $data['website'] ?? '';
    if (!is_string($honeypot)) {
        return new WP_Error(
            'invalid_contact_submission',
            'Please check your form and try again.',
            ['status' => 400]
        );
    }

    if (trim($honeypot) !== '') {
        return new WP_REST_Response([
            'success' => true,
            'message' => 'Your message has been sent.',
        ]);
    }

    $values = [];
    foreach ($data as $key => $value) {
        if (
            !is_string($key) ||
            !preg_match('/\A[a-z][a-z0-9_]{0,49}\z/', $key) ||
            !is_string($value) ||
            strlen($value) > 10000
        ) {
            return new WP_Error(
                'invalid_contact_submission',
                'Please check your form and try again.',
                ['status' => 400]
            );
        }

        if ($key === 'message') {
            $values[$key] = sanitize_textarea_field($value);
        } else {
            $values[$key] = sanitize_text_field($value);
        }
    }

    $name = $values['name'] ?? '';
    $email = sanitize_email($values['email'] ?? '');
    $message = $values['message'] ?? '';

    if ($name === '' || !is_email($email) || $message === '') {
        return new WP_Error(
            'contact_required_fields',
            'Please provide your name, a valid email address, and a message.',
            ['status' => 400]
        );
    }

    $field_labels = [
        'name'    => 'Name',
        'email'   => 'Email',
        'service' => 'Service',
        'message' => 'Message',
    ];
    $body_lines = [];

    foreach ($values as $key => $value) {
        if ($value === '') {
            continue;
        }

        $label = $field_labels[$key] ?? ucwords(str_replace('_', ' ', $key));
        $body_lines[] = $label . ":\n" . $value;
    }

    $recipient = apply_filters(
        'prowptheme_contact_recipient',
        'summitwebsolution18@gmail.com'
    );

    if (!is_string($recipient) || !is_email($recipient)) {
        return new WP_Error(
            'contact_email_not_configured',
            'We could not send your message right now. Please try again later.',
            ['status' => 500]
        );
    }

    $subject = sprintf(
        'New contact form enquiry from %s',
        $name
    );
    $headers = ['Reply-To: ' . $email];

    if (!wp_mail($recipient, $subject, implode("\n\n", $body_lines), $headers)) {
        return new WP_Error(
            'contact_email_failed',
            'We could not send your message right now. Please try again later.',
            ['status' => 500]
        );
    }

    return new WP_REST_Response([
        'success' => true,
        'message' => 'Your message has been sent.',
    ]);
}

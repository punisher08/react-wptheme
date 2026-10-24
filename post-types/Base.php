<?php

abstract class Base {

	protected $post_type = '';

	protected $args = [];

	public function __construct() {
		add_action( 'init', [ $this, 'register' ] );
	}

	public function register() {

		if ( empty( $this->post_type ) ) {
			return;
		}

		register_post_type(
			$this->post_type,
			$this->args
		);
	}
}
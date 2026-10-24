<?php

class Services extends Base {

	public function __construct() {

		$this->post_type = 'team';

		$this->args = [
			'labels' => [
				'name'          => 'Team',
				'singular_name' => 'Team Member',
			],
			'public'       => true,
			'show_in_rest' => true,
			'menu_icon'    => 'dashicons-groups',
			'supports'     => [
				'title',
				'editor',
				'thumbnail',
			],
		];

		parent::__construct();
	}
}

new Services();
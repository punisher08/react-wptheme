<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
</head>
<?php include  PROWPDEV_THEME_PATH.'/icons.php'; ?>
<?php
$header = get_field('header','option');

?>
<body <?php body_class(); ?>>
<header id="site-header"></header>
<main class="site-main">

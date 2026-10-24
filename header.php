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
<header id="site-header" class="site-header fixed top-0 left-0 w-full z-[9999] py-3 bg-transparent transition-all duration-300">
   <div class="top-header bg-[#293250] text-white py-3 barlow hidden">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-content-between justify-between">
        <p class="text-[16px]"><?= esc_html( $header['welcome_text'] ) ?></p>
        <div class="group-items flex flex-wrap gap-[20px]">
          <div class="group flex flex-wrap gap-[10px]"><?= $email_icon ?><span><?= esc_html( $header['email']['label'] ) ?></span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-4 sm:px-6">
    <div class="flex items-center justify-between">
      
      <div class="flex items-center gap-[50px]">
        <div class="logo shrink-0">
          <a href="/">
            <img src="<?= esc_url( $header['logo']['url'] ?? '' ) ?>" alt="Logo" class="logo-img h-[65px] w-[65px] md:h-[75px] md:w-[75px] transition-all duration-300">
          </a>
        </div>
        
        <div class="navigation hidden lg:block">
          <?php
          wp_nav_menu(array(
              'theme_location' => 'primary', 
              'container'      => false,    
              'menu_class'     => 'flex items-center justify-center gap-[30px]', 
              'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
              'fallback_cb'    => '__return_false',
          ));
          ?>
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="cta hidden sm:block">
          <a href="tel:+123456789" class="text-white dm-sans text-[16px] md:text-[18px] flex items-center gap-3 group">
            <div class="animate-custom-ping">
              <?=$email_icon;?>
            </div>
            <span class="group-hover:text-gray-300 transition-colors"> summitwebsolutions18@gmail.com</span>
          </a>
        </div>

        <button id="mobile-menu-toggle" class="lg:hidden text-white focus:outline-none p-2 z-[10000]" aria-label="Toggle Menu">
          <svg id="hamburger-icon" class="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg id="close-icon" class="w-7 h-7 hidden transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

    </div>
  </div>

  <div id="mobile-menu-drawer" class="fixed top-0 right-0 h-screen w-[280px] bg-slate-950/95 backdrop-blur-lg transform translate-x-full transition-transform duration-300 ease-in-out z-[9999] lg:hidden flex flex-col pt-24 px-6 shadow-2xl">
    <nav class="mobile-navigation mb-8">
      <?php
      wp_nav_menu(array(
          'theme_location' => 'primary', 
          'container'      => false,    
          'menu_class'     => 'flex flex-col gap-6 text-left', /* Vertically stacked list */
          'items_wrap'     => '<ul id="mobile-%1$s" class="%2$s">%3$s</ul>',
          'fallback_cb'    => '__return_false',
      ));
      ?>
    </nav>
    <div class="sm:hidden border-t border-white/10 pt-6">
      <a href="tel:+123456789" class="text-white dm-sans text-[16px] flex items-center gap-3">
        <div class="animate-custom-ping">
          <?=$phone_icon;?>
        </div>
        <span>+123 456 789</span>
      </a>
    </div>
  </div>
</header>
<main class="site-main">
  <section id="landingpage-app"></section>
  <section id="services"></section>

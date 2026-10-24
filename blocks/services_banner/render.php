<?php
$background_image = get_field('background_image');

$subheading_text = get_field('subheading_text');
$heading = get_field('heading');
$paragraph = get_field('paragraph');
$buttons = get_field('buttons'); 
$banner_image = get_field('banner_image');

$clients_image = get_field('clients_image');

include PROWPDEV_THEME_PATH.'/icons.php';
?>
<style>
  .block-services_banner {
    background-image: url('<?= esc_url($background_image['url'] ?? ''); ?>');   
    /* overflow:hidden; */
    position:relative;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    /* min-height:475px; */
}
</style><section class="block-services_banner bg-[#333] py-[10px] px-3" >
    <div class="container mx-auto">
     <div class="main grid grid-cols-1 gap-8 items-center lg:grid-cols-2 justify-center">
        <div class="item py-[80px] lg:px-0">
          <div class="subheading flex flex-row items-center mb-4 text-white">
            <span class="mr-2"><?= $subheading_icon; ?></span>
            <?= esc_html($subheading_text); ?>
          </div>
          <h1 class="font-bold mb-4 text-white"><?= esc_html($heading); ?></h1>
          <div class="text text-lg mb-6 text-white paragraph">
            <?= esc_html($paragraph); ?>
          </div>

          <div class="buttons flex flex-wrap gap-4 mt-[30px]">
            <?php if ($buttons): ?>
              <?php foreach ($buttons as $button): ?>
                <a href="<?= esc_url($button['link_url']); ?>" class="<?= esc_attr($button['style']); ?>  w-[max-content] btn btn-primary  flex items-center gap-2 transition duration-300 ease-in-out">
                  <?= esc_html($button['link_text']); ?>
                  <span class="icon transition duration-300 ease-in-out"><?= $arrow_icon; ?></span>
                </a>
              <?php endforeach; ?>
            <?php endif; ?>
          </div>
        </div>
        <div class="hidden item flex justify-center items-center img_container absolute top-0 right-0 w-full h-full lg:relative lg:w-auto lg:h-auto lg:relative">
          <img src="<?= esc_url($banner_image['url'] ?? ''); ?>" alt="<?= esc_attr($banner_image['alt'] ?? 'Banner Image'); ?>" class="w-full h-auto" />
        </div>
     </div>
    </div>
</section>


<?php

include PROWPDEV_THEME_PATH.'/icons.php';

?>
<?php
$subheading_text = get_field('subheading_text');
$heading = get_field('heading');

$items = get_field('items');
?>

<section class="block-servicesV2 py-[80px] px-3" id="servicesv2-block">
  <div class="container mx-auto">
    <div class="heading-container text-center mb-[80px]">
      <div class="subheading flex flex-row justify-center items-center mb-4 text-black text-[16px] gap-0 outfit font-bold">
        <span class="mr-2 slide-from-left"><?= $subheading_icon; ?></span>
          <?= esc_html($subheading_text); ?>
      </div>
      <h1 class="heading mb-4 text-black text-[20px] lg:text-[50px] gap-0 outfit font-bold w-full mx-auto leading-[30px] lg:leading-[60px]">
          <?= esc_html($heading); ?>
      </h1>
    </div>
    <?php $count = 0; ?>
      <?php foreach ($items as $item): ?>
        <?php
          $count++;
          $image = $item['image'];
          $title = $item['title'];
          $text = $item['text'];
          $reverse_layout = $item['reverse_layout'];
        ?>
          <div class="grid grid-cols-1 lg:grid-cols-2  gap-[40px] items-center justify-center lg:grid-cols-2 my-[60px]">
              <div class="item with-img <?= esc_attr($reverse_layout ? 'lg:order-2' : ''); ?>"><img src="<?= esc_url($image['url'] ?? ''); ?>" alt="<?= esc_attr($image['alt'] ?? 'Image'); ?>" class="w-full  h-auto" /></div>
              <div class="item with-text <?= esc_attr($reverse_layout ? 'lg:order-1' : ''); ?>">
                <h2 class="heading text-[18px] lg:text-[48px] text-[#000] font-bold outfit"><?= esc_html($count); ?>. <?= esc_html($title); ?></h2>
                <div class="text dm-sans text-[18px]"><?= esc_html($text); ?></div>
              </div>
            </div>
          
        
        <?php endforeach; ?>
    </div>
    </div>
</section>

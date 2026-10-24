<?php
$subheading_icon = get_field('subheading_icon');
$subheading_label = get_field('subheading_label');
$heading = get_field('heading');
$text = get_field('text');
$items = get_field('items');
include PROWPDEV_THEME_PATH.'/icons.php';
?>

<section class="block-projects py-[80px]" id="projects-block">
  <div class="container mx-auto">
    <div class="heading-container text-center mb-[30px]">
      <div class="subheading flex flex-row justify-center items-center mb-4 text-black text-[16px] gap-0 outfit font-bold">
        <span><img src="<?= esc_url($subheading_icon['url'] ?? ''); ?>" alt="<?= esc_attr($subheading_icon['alt'] ?? 'Icon'); ?>" class=" mr-2"> </span>
        <span class="subheading-text"><?= esc_html($subheading_label); ?></span>
      </div>
      <h1 class="heading mb-4 text-black text-[20px] lg:text-[50px] gap-0 outfit font-bold w-full mx-auto leading-[30px] lg:leading-[60px]">
        <?= esc_html($heading); ?>
      </h1>
      <div class="text dm-sans"><?= esc_html($text); ?></div>
    </div>
    <div class="grid grid-cols-3">
      <?php if(!empty($items)):?>
        <?php foreach($items as $item): ?>
          <div class="item card">
            <img src="<?= esc_url($item['image']['url'] ?? ''); ?>" alt="<?= esc_attr($item['title']); ?>" class="mb-4 w-full h-auto">
            <h2 class="text-2xl font-bold mb-4 text-left m-0 p-0 text-[20px] lg:text-[32px] outfit"><?= esc_html($item['title']); ?></h2>
            <div class="buttons my-5">
                  <a href="#" class="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                    <button type="button" class="flex flex-wrap justify-center items-center gap-2 text-body bg-neutral-primary border border-[#000] hover:bg-neutral-secondary-soft hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    <?=$mail;?> Website
                  </button>
                </a>
            </div>
          <?php endforeach;?>
        </div>
      <?php endif;?>
    </div>
  </div>
</section>

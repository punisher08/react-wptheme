<?php
// ACF fields for this block can be used like:
// get_field('field_name');
include PROWPDEV_THEME_PATH.'/icons.php';

$subheading_text = get_field('subheading_text');
$heading = get_field('heading');
$text = get_field('text');
$buttons = get_field('buttons');

?>

<section class="block-cta bg-[#0C1C36] py-[100px] px-3" id="cta-block">
  <div class="container mx-auto">
      <div class="subheading flex flex-row items-center mb-4 text-black text-[16px] gap-0 outfit font-bold text-white">
        <span class="mr-2 slide-from-left"><?= $subheading_icon; ?></span>
          <?= esc_html($subheading_text); ?>
      </div>
      <h1 class="heading text-white font-bold text-[25px] lg:text-[50px] outfit"><?= esc_html($heading); ?></h1>
      <div class="text dm-sans text-[18px] text-white my-[25px]"><?= wp_kses_post($text); ?></div>
      <div class="buttons flex flex-wrap gap-4 font-normal">
         <div class="buttons flex flex-wrap gap-4 ">
          <?php if ($buttons): ?>
            <?php foreach ($buttons as $button): ?>
              <?php if ($button['style'] != 'btn-primary'): ?>
                <a href="<?= esc_url($button['link_url']); ?>" class="group inline-flex h-[56px] items-center gap-4 rounded-full border border-white/15 bg-white/[0.03] pl-7 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">
                  <span> <?= esc_html($button['link_text']); ?> </span>
                  <span class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              <?php else: ?>
                <a
                  href="#"
                  class="group inline-flex h-[56px] items-center gap-4 rounded-full bg-[#FFB21A] pl-7 pr-2 text-sm font-bold text-[#07162F] shadow-[0_12px_30px_rgba(255,178,26,.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFC43D] hover:shadow-[0_18px_40px_rgba(255,178,26,.22)]">
                  <span> <?= esc_html($button['link_text']); ?> </span>

                  <span
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-[#07162F] text-lg text-white transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              <?php endif; ?>

            <?php endforeach; ?>
          <?php endif; ?>
        </div>
      </div>
  </div>
</section>

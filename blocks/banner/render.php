<?php

include PROWPDEV_THEME_PATH . '/icons.php';

?>
<?php
// ACF fields for this block can be used like:
$background_image = get_field('background_image');
$subheading_icon = get_field('subheading_icon');
$subheading_text = get_field('subheading_text');
$heading = get_field('heading');
$paragraph = get_field('paragraph');
$buttons = get_field('buttons');
$banner_image = get_field('banner_image');

$clients_image = get_field('clients_image');

?>
<style>
  .block-banner {
    background-image: url('<?= esc_url($background_image['url'] ?? ''); ?>');
    overflow: hidden;
    position: relative;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  .image {
    background-image: url('<?= esc_url($banner_image['url'] ?? ''); ?>');
    height: 100%;
    width: 100%;
    background-size: cover;
  }
</style>
<!-- Calendly link widget begin -->


<!-- Calendly link widget end -->
<section class="block-banner landing-page">
  <div class="container mx-auto">
    <div class="pointer-events-none absolute inset-0 opacity-[0.035]" style="
            background-image:
                linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px);
            background-size: 70px 70px;
        "></div>
    <div class="main grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
      <div class="content px-5 z-[999]">
        <div class="absolute left-[8%] top-[25%] h-[400px] w-[50%] rounded-full bg-blue-800/25 blur-[100px]"></div>
        <div class="subheading flex flex-row items-center mb-4 text-white">
          <span><img src="<?= esc_url($subheading_icon['url'] ?? ''); ?>" alt="<?= esc_attr($subheading_icon['alt'] ?? 'Icon'); ?>" class="w-6 h-6 mr-2"> </span>
          <?= esc_html($subheading_text); ?>
        </div>
        <h1 class="font-bold mb-4 text-white"><?= esc_html($heading); ?></h1>
        <div class="text-lg mb-6 text-white paragraph">
          <?= esc_html($paragraph); ?>
        </div>
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
      <div class="image px-5 block lg:relative">

        <!-- start of card -->
         
        <div class="hover:pointer transition-transform duration-500 hover:-translate-y-2 block lg:absolute bottom-[50px] left-0 z-30 rounded-[18px] border border-white/10 bg-[#0C1D3A]/95 px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,.25)] backdrop-blur-xl sm:px-5 sm:py-4">
          <div class="flex flex-wrap items-center gap-4">
            <!-- Simple client avatars -->

            <div class="flex -space-x-2 ">
              <div
                class="flex h-9 w-9 lg:h-[3.25rem] lg:w-[3.25rem] items-center justify-center rounded-full border-2 border-[#0C1D3A] bg-[#D7B08A] text-[10px] font-bold text-white">
                A
              </div>

              <div
                class="flex h-9 w-9 lg:h-[3.25rem] lg:w-[3.25rem] items-center justify-center rounded-full border-2 border-[#0C1D3A] bg-[#8294A8] text-[10px] font-bold text-white">
                J
              </div>

              <div
                class="flex h-9 w-9 lg:h-[3.25rem] lg:w-[3.25rem] items-center justify-center rounded-full border-2 border-[#0C1D3A] bg-[#B87556] text-[10px] font-bold text-white">
                M
              </div>

              <div
                class="flex h-9 w-9 lg:h-[3.25rem] lg:w-[3.25rem] items-center justify-center rounded-full border-2 border-[#0C1D3A] bg-[#5C708A] text-[10px] font-bold text-white">
                S
              </div>
            </div>

            <div>
              <div class="flex items-center gap-2">
                <div class="text-[20px] tracking-[1px] text-[#FFB21A]">★★★★★</div>

                <span class="text-[15px] font-semibold text-white/45"> 5.0 </span>
              </div>

              <div class="mt-1 max-w-[145px] text-[14px] leading-4 text-white/50">Our Satisfaction Clients Worldwide</div>
            </div>
          </div>
        </div>

        <div class="hidden lg:block lg:absolute bottom-[95px] right-50 z-30 w-[290px] rounded-[20px] border border-white/30 bg-white p-4 text-[#07162F] shadow-[0_25px_70px_rgba(0,0,0,.28)] transition-transform duration-500 hover:-translate-y-2 sm:w-[320px]">
          <div class="flex flex-nowrap items-center gap-4">
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFB21A]/10 text-[#FF9F00]">
              <svg class="h-7 w-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="24" cy="19" r="10"></circle>

                <path d="m19 19 3 3 6-7"></path>

                <path d="M17 28v13l7-5 7 5V28"></path>
              </svg>
            </div>

            <div>
              <h3 class="font-display text-base font-bold">Premium Services</h3>

              <p class="mt-1 text-xs leading-5 text-[#07162F]/55">Accelerate innovation with world-class remote teams.</p>
            </div>
          </div>
        </div>
        <!-- eo card -->
      </div>
      <div class="floating bg-white h-[100px] absolute w-[40%] bottom-0 left-0 hidden lg:block">
        <div class="grid grid-cols-6 items-center gap-1">
          <div class="col-span-3 flex items-center justify-end">
            <!-- <img src="<?= esc_url($clients_image['url'] ?? ''); ?>" alt="<?= esc_attr($clients_image['alt'] ?? 'Icon'); ?>" class="mr-2 mt-4 ml-4 img-fluid"> -->
          </div>
          <div class="col-span-2">
            <!-- <p class="text-md leading-tight">Our Satisfaction Clients Worldwide</p> -->
          </div>
          <div class="col-span-1">
            <div class="box bg-[#192033] h-[100px] w-[100px]"></div>
          </div>
        </div>
      </div>
    </div>
</section>
<div class="group-mb flex items-center justify center p-5">
  <div class="block lg:hidden z-30  rounded-[20px] border border-white/30 bg-white p-4 text-[#07162F] shadow-[0_25px_70px_rgba(0,0,0,.28)] transition-transform duration-500 hover:-translate-y-2 sm:w-[320px]">
    <div class="flex flex-nowrap items-center gap-4">
      <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFB21A]/10 text-[#FF9F00]">
        <svg class="h-7 w-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="24" cy="19" r="10"></circle>

          <path d="m19 19 3 3 6-7"></path>

          <path d="M17 28v13l7-5 7 5V28"></path>
        </svg>
      </div>

      <div>
        <h3 class="font-display text-base font-bold">Premium Services</h3>

        <p class="mt-1 text-xs leading-5 text-[#07162F]/55">Accelerate innovation with world-class remote teams.</p>
      </div>
    </div>
  </div>
</div>
<?php
// ACF fields for this block can be used like:
// get_field('field_name');

$check = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4_726)"><path d="M7.50005 11.3791L14.394 4.48438L15.4553 5.54488L7.50005 13.5001L2.72705 8.72712L3.78755 7.66663L7.50005 11.3791Z" fill="#FFB400"/></g><defs><clipPath id="clip0_4_726"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>';
$check_lists = [
  "Custom website",
  "Mobile optimization",
  "Hosting included",
  "SSL/security",
  "Contact forms",
  "Basic SEO setup",
  "Analytics setup",
  "Ongoing edits/support",
  "Scheduling setup (optional)",
  "Basic speed optimization",
  "Google Maps embed"
];

$icon = get_field('icon');
$subheading = get_field('subheading');
$heading = get_field('heading');
$text = get_field('text');

$website_package = get_field('website_package');



include PROWPDEV_THEME_PATH.'/icons.php';
?>

<section class="block-pricing py-[80px]" id="pricing-block">
  <div class="container mx-auto">
    <div class="heading-container text-center">
        <div class="subheading flex flex-row justify-center items-center mb-4 text-black text-[16px] gap-0 outfit font-bold">
          <span class="mr-2"><?= $subheading_icon; ?></span>
          <?= esc_html($subheading); ?>
        </div>
        <h1 class="heading mb-4 text-black text-[20px] lg:text-[50px] gap-0 outfit font-bold w-full mx-auto leading-[30px] lg:leading-[60px]">
          <?= esc_html($heading); ?>
        </h1>
        <div class="text text-center w-full md:w-[60%] mx-auto dm-sans text-[18px] leading-[25px]">
          <?= wp_kses_post($text); ?>
        </div>
    </div>
    <div class="flex flex-wrap  gap-[30px] p-3 mt-5">
      <div class="item card w-full md:w-[30%]  rounded-lg rounded-[25px] bg-[#0C1C36] ">
        <div class="card-heading  text-white text-center dm-sans p-3 font-bold bg-[#FFAA17] rounded-t-[15px]"><?= esc_html($website_package['label']); ?></div>
        <div class="card-body bg-[#0C1C36] p-5 text-white text-center  flex flex-col justify-center items-center rounded-b-[25px] relative p-2 md:p-[60px]">
          <div class="group p-4 lg:p-0">
            <div class="headline tex-white text-[3rem] md:text-[4.5rem] font-bold dm-sans lg:leading-[85px]"><?= esc_html($website_package['price']); ?></div>
            <div class="text text-white dm-sans text-[24px] md:text-[36px] lg:mt-[30px] font-bold"><?= wp_kses_post($website_package['text']); ?></div>
          </div>
        </div>
      </div>
      <!-- 2nd -->
      <div class="item card w-70 flex-auto w-[calc(100% - (30% - 40px)] p-[30px] bg-[#0C1C36] rounded-[15px] h-full relative">
        <div class="card-heading  text-white">
          <ul class="grid grid-cols-1 md:grid-cols-2 lg:p-[30px] gap-[10px]">
            <?php if(!empty($website_package['checklist'])):?>
              <?php foreach($website_package['checklist'] as $list):?>
                <li class="m-0 flex flex-wrap items-center gap-5 dm-sans leading-[normal] font-normal"><?=$check;?><?= esc_html($list['label']); ?></li>
              <?php endforeach;?>
            <?php endif;?>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

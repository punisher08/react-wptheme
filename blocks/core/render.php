<?php
// ACF fields for this block can be used like:
// get_field('field_name');

include PROWPDEV_THEME_PATH.'/icons.php';
$mission = get_field('mission');
$vision = get_field('vision');
?>

<section class="block-core bg-[#0C1C36] text-white py-5 lg:py-[80px]" id="core-block">
  <!-- Add your HTML here -->
   <div class="container mx-auto p-5">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-auto  justify-center items-start gap-10">
      <div class="item order-1">
        <div class="item-1 group">
          <div class="subheading flex flex-row items-center mb-4 text-white text-[20px] gap-0 outfit">
            <span class="mr-2"><?= $subheading_icon; ?></span>
             <?= esc_html($mission['label']); ?>
          </div>
          <div class="text-1 dm-sans text-[12px] lg:text-[18px] lg:leading-[30px] font-normal">
            <?= wp_kses_post($mission['text']); ?>
          </div>
          <img src="<?= esc_url($mission['image']['url'] ?? ''); ?>" alt="<?= esc_attr($mission['image']['alt'] ?? ''); ?>" class="mt-5 img-fluid w-full">
          <div class="heading">
            <h2 class="mt-3 text-[16px] lg:text-[36px] font-bold text-white dm-sans leading-[20px] lg:leading-[40px]"><?= esc_html($mission['image_label']); ?></h2>
          </div>
          <ul>
            <?php if (!empty($mission['checklists'])) : ?>
              <?php foreach ($mission['checklists'] as $checklist) : ?>
              <li class="flex items-center gap-2 mt-5">
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_138)">
                    <path d="M8.75982 0.618873C8.7936 0.334399 9.2064 0.334399 9.24018 0.618873L9.52334 3.00535C9.88899 6.08694 12.3186 8.51653 15.4001 8.88217L17.7866 9.16534C18.0711 9.19912 18.0711 9.61191 17.7866 9.6457L15.4001 9.92886C12.3186 10.2945 9.88899 12.7241 9.52334 15.8057L9.24018 18.1921C9.2064 18.4766 8.7936 18.4766 8.75982 18.1921L8.47666 15.8057C8.11101 12.7241 5.68142 10.2945 2.59983 9.92886L0.213355 9.6457C-0.0711184 9.61191 -0.0711184 9.19912 0.213355 9.16534L2.59983 8.88217C5.68142 8.51653 8.11101 6.08694 8.47666 3.00535L8.75982 0.618873Z" fill="#FFAA17"/></g>
                    <defs><clipPath id="clip0_0_138"><rect width="18" height="19" fill="white"/></clipPath></defs>
                  </svg>
                </span>
                <p class="text-[12px] lg:text-[18px] lg:leading-[30px] dm-sans font-normal"><?php echo esc_html($checklist['label']); ?></p>
              </li>
              <?php endforeach; ?>
            <?php endif; ?>
          </ul>
        </div>
      </div>
      <div class="item order-2">
        <div class="item-1 group">
          <div class="subheading flex flex-row items-center mb-4 text-white text-[20px] gap-0 outfit">
            <span class="mr-2"><?= $subheading_icon; ?></span>
              <?= esc_html($vision['label']); ?>
          </div>
          <div class="text-1 dm-sans text-[12px] lg:text-[18px] lg:leading-[30px] font-normal">
            <?= wp_kses_post($vision['text']); ?>
          </div>
          <div class="heading">
            <h2 class="mt-3 text-[16px] lg:text-[36px] font-bold text-white dm-sans leading-[20px] lg:leading-[40px]"><?= esc_html($vision['image_label']); ?></h2>
          </div>
          <ul>
            <?php if (!empty($vision['checklists'])) : ?>
              <?php foreach ($vision['checklists'] as $checklist) : ?>
              <li class="flex items-center gap-2 mt-5">
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_138)">
                    <path d="M8.75982 0.618873C8.7936 0.334399 9.2064 0.334399 9.24018 0.618873L9.52334 3.00535C9.88899 6.08694 12.3186 8.51653 15.4001 8.88217L17.7866 9.16534C18.0711 9.19912 18.0711 9.61191 17.7866 9.6457L15.4001 9.92886C12.3186 10.2945 9.88899 12.7241 9.52334 15.8057L9.24018 18.1921C9.2064 18.4766 8.7936 18.4766 8.75982 18.1921L8.47666 15.8057C8.11101 12.7241 5.68142 10.2945 2.59983 9.92886L0.213355 9.6457C-0.0711184 9.61191 -0.0711184 9.19912 0.213355 9.16534L2.59983 8.88217C5.68142 8.51653 8.11101 6.08694 8.47666 3.00535L8.75982 0.618873Z" fill="#FFAA17"/></g>
                    <defs><clipPath id="clip0_0_138"><rect width="18" height="19" fill="white"/></clipPath></defs>
                  </svg>
                </span>
                <p class="text-[12px] lg:text-[18px] lg:leading-[30px] dm-sans font-normal"><?php echo esc_html($checklist['label']); ?></p>
              </li>
              <?php endforeach; ?>
            <?php endif; ?>
          </ul>
          <img src="<?= esc_url($vision['image']['url'] ?? ''); ?>" alt="<?= esc_attr($vision['image']['alt'] ?? ''); ?>" class="mt-5 img-fluid w-full">
        </div>
      </div>
    </div>
   </div>
</section>

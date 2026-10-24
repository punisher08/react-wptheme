<?php
// ACF fields for this block can be used like:
// get_field('field_name');
  
include PROWPDEV_THEME_PATH.'/icons.php';
$subheading_icon = get_field('subheading_icon');
$subheading_text = get_field('subheading_text');
$heading = get_field('heading');

$items = get_field('items'); 
?>


<section class="block-services" id="services-block">
  <div class="container mx-auto py-5 lg:py-[80px]">
    <div class="heading-container text-center">
      <div class="subheading flex flex-row justify-center items-center mb-4 text-black text-[16px] gap-0 outfit font-bold">
        <span><?= $subheading_icon; ?></span>
        <span class="subheading-text"><?= esc_html($subheading_text); ?></span>
      </div>
      <h1 class="heading mb-4 text-black text-[20px] lg:text-[50px] gap-0 outfit font-bold w-full mx-auto leading-[30px] lg:leading-[60px]">
        <?= esc_html($heading); ?>
      </h1>
    </div>
    <!-- splide -->
    <div class="flex flex-nowrap justify-center gap-[10px] overflow-x-auto lg:gap-[30px] services splide mt-5 pt-5" aria-label="Services slider">
      <div class="splide__track">
        <ul class="splide__list">
          <?php if(!empty($items)):?>
            <?php foreach($items as $item):?>
              <li class="splide__slide card border border-[#D9D9D9] border-1 ">
                <img src="<?= esc_url($item['image']['url'] ?? ''); ?>" alt="<?= esc_attr($item['title']); ?>" class="mb-4 w-full h-auto">
                <div class="group p-5">
                  <h2 class=" text-2xl font-bold mb-4 text-left m-0 p-0"><?= esc_html($item['title']); ?></h2>
                  <p class="text-gray-700 text-base text-1 dm-sans text-[12px] lg:text-[18px] lg:leading-[30px] font-normal"><?= wp_kses_post($item['text']); ?></p>
                  <div class="buttons flex flex-wrap gap-4 mt-5 pt-5">
                  <a href="<?= esc_url($item['url']); ?>" class="animate-bounce btn-primary bg-[#FFAA17] text-white w-[max-content] btn btn-primary  flex items-center gap-2 transition duration-300 ease-in-out hover:bg-[#FFAA17] hover:text-white hover:shadow-lg">
                    Read More
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out">
                    <path d="M26.75 33.25L33.25 26.75C33.7083 26.2917 33.9375 25.7083 33.9375 25C33.9375 24.2917 33.7083 23.7083 33.25 23.25L26.6875 16.6875C26.2292 16.2292 25.6567 16.01 24.97 16.03C24.2817 16.0517 23.7083 16.2917 23.25 16.75C22.7917 17.2083 22.5625 17.7917 22.5625 18.5C22.5625 19.2083 22.7917 19.7917 23.25 20.25L25.5 22.5H17.4375C16.7292 22.5 16.1458 22.7392 15.6875 23.2175C15.2292 23.6975 15 24.2917 15 25C15 25.7083 15.24 26.3017 15.72 26.78C16.1983 27.26 16.7917 27.5 17.5 27.5H25.5L23.1875 29.8125C22.7292 30.2708 22.51 30.8442 22.53 31.5325C22.5517 32.2192 22.7917 32.7917 23.25 33.25C23.7083 33.7083 24.2917 33.9375 25 33.9375C25.7083 33.9375 26.2917 33.7083 26.75 33.25ZM25 50C21.5417 50 18.2917 49.3433 15.25 48.03C12.2083 46.7183 9.5625 44.9375 7.3125 42.6875C5.0625 40.4375 3.28167 37.7917 1.97 34.75C0.656667 31.7083 0 28.4583 0 25C0 21.5417 0.656667 18.2917 1.97 15.25C3.28167 12.2083 5.0625 9.5625 7.3125 7.3125C9.5625 5.0625 12.2083 3.28083 15.25 1.9675C18.2917 0.655833 21.5417 0 25 0C28.4583 0 31.7083 0.655833 34.75 1.9675C37.7917 3.28083 40.4375 5.0625 42.6875 7.3125C44.9375 9.5625 46.7183 12.2083 48.03 15.25C49.3433 18.2917 50 21.5417 50 25C50 28.4583 49.3433 31.7083 48.03 34.75C46.7183 37.7917 44.9375 40.4375 42.6875 42.6875C40.4375 44.9375 37.7917 46.7183 34.75 48.03C31.7083 49.3433 28.4583 50 25 50Z" fill="#0B1521"></path></svg>
                  </a>                 
                </div>
                </div>
              </li>
            <?php endforeach;?>
          <?php endif;?>
        </ul>
      </div>
    </div>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script>
  var splide = new Splide( '.services', {
    // type   : 'loop',
    // padding: '5rem',
    perPage: 3,
    perMove: 1,
    gap    : '1rem',
    drag   : 'free',
    snap   : true,
    // arrows:false,
    breakpoints: {
       767: { 
        perPage: 1,
        gap    : '1rem',
        padding: 0, 
      },
      768: { 
        perPage: 2,
        gap    : '1rem',
        padding: 0,  
      },
      1024: { // 
        perPage: 3,
        gap    : '2rem',
        padding: 0,
      }
    }
  } );

  splide.mount();
  </script>

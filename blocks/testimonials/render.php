<?php
// ACF fields for this block can be used like:
// get_field('field_name');
include PROWPDEV_THEME_PATH.'/icons.php';
$subheading = "Testimonials";
$heading = "What Our Clients Say";
$text = "Our clients' success is our greatest achievement. Read their experiences and see why businesses trust us with their digital presence.";
$testimonials = [
  [
    "author"=> "Keya Islam",
    "text"=> "“Thank you so much for creating this beautiful website for my crochet business. I really appreciate the time and effort you put into it!”",
    "url"=>"#",
    "company" => "",
    "image" => "",
    'rating' => 5
  ],
  [
    "author"=> "Andrew Cunich",
    "text"=> "Summit Web Solutions got right to work on my website. Starting it ahead of schedule. Finished quickly and was diligent with going over my prefences. They have even been readily available for any needed updates. Even helping with my scheduling set up to work with my wesite.",
    "url"=>"#",
    "company" => "",
    'rating' => 5
  ],
  [
    "author"=> "Joseph Turk",
    "text"=> "Great with communication and very easy to work with. I would recommend to anyone trying to get a website for their business!",
    "url"=>"#",
    'rating' => 5,
    "company" => ""
  ],
  [
    "author"=> "Jason Saitta",
    "text"=> "Great with communication and very easy to work with. I would recommend to anyone trying to get a website for their business!",
    "url"=>"#",
    "company" => "",
    'rating' => 5
  ],
 

];
?>

<section class="block-testimonials py-[30px]" id="testimonials-block">
  <div class="container mx-auto">
    <div class="heading-container text-center">
      <div class="subheading flex flex-row justify-center items-center mb-4 text-black text-[16px] gap-0 outfit font-bold">
       <span class="mr-2 slide-from-left"><?= $subheading_icon; ?></span>
        Testimonials
      </div>
      <h1 class="heading mb-4 text-black text-[20px] lg:text-[50px] gap-0 outfit font-bold w-full mx-auto leading-[30px] lg:leading-[60px]">
        <?= esc_html($heading); ?>
      </h1>
       <div class="text text-center w-full md:w-[60%] mx-auto dm-sans text-[18px] leading-[25px]"><?= esc_html($text); ?></div>
    </div>
       <div class="flex flex-nowrap justify-center gap-[10px] overflow-x-auto lg:gap-[30px] testimonials splide mt-5 pt-5" aria-label="Services slider">
      <div class="splide__track">
        <ul class="splide__list">
          <?php if(!empty($testimonials)):?>
            <?php foreach($testimonials as $testimonial):?>
              <li class="splide__slide card border border-[#D9D9D9] border-1 bg-[#0b1521] p-[30px] rounded-[25px] min-h-[412px] grid items-center">
                <img src="/wp-content/uploads/2026/06/Image-Placeholder.png" alt="">
                <h3 class="text-white dm-sans flex flex-row items-center gap-2 text-[12px] lg:text-[18px] leading-[30px] mb-5">
                  <?=$google ?>
                  <?php for($i=1; $i<=$testimonial['rating']; $i++):?>
                    <?=$star_icon;?>
                  <?php endfor;?>
                </h3>
                <p class="text text-white dm-sans text-[12px] lg:text-[18px] leading-[30px] mb-5"><?= esc_html($testimonial['text']); ?></p>
                <div class="author-details">
                  <div class="name dm-sans text-[#FFAA17]"><?= esc_html($testimonial['author']); ?></div>
                  <div class="company text-[#FFAA17]"><?= esc_html($testimonial['company']); ?></div>
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
  var splide = new Splide( '.testimonials', {
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

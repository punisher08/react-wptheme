<?php

include PROWPDEV_THEME_PATH.'/icons.php';

?>
<?php
// ACF fields for this block can be used like:
// get_field('field_name');
$subheading = "Team";
$heading = "Meet Our Team";
$text = "Get to know the people who bring ideas to life. We're a passionate team committed to helping your business grow.";

$teams = [
  [
    'name' => "Eric Hartman",
    'position' => 'CEO & FOUNDER',
    'text' => 'SWS CEO and founder, Eric Hartman, is a visionary leader with a passion for digital innovation.',
    'profile_image' => '/wp-content/uploads/2026/08/eric-ceo.png',
    'socmed' => [
      'fb'=> ['image' => '/wp-content/uploads/2026/08/Facebook.png','url'=> "facebook.com/erichartman"],
      'x'=> ['image' => '/wp-content/uploads/2026/08/Twitter.png','url'=> "x.com/erichartman"],
      'linkedin'=> ['image' => '/wp-content/uploads/2026/08/LinkedIn.png','url'=> "linkedin.com/erichartman"],
      'instagram'=> ['image' => '/wp-content/uploads/2026/08/Instagram.png','url'=> "instagram.com/erichartman"],
    ]
  ],
  [
    'name' => "Jhomel Ignacio",
    'position' => 'Sr. Web Developer',
    'text' => 'Senior web developer with extensive experience in creating dynamic and responsive websites.',
    'profile_image' => '/wp-content/uploads/2026/08/jhom.png',
    'socmed' => [
      'fb'=> ['image' => '/wp-content/uploads/2026/08/Facebook.png','url'=> "facebook.com/jhomelignacio"],
      'x'=> ['image' => '/wp-content/uploads/2026/08/Twitter.png','url'=> "x.com/jhomelignacio"],
      'linkedin'=> ['image' => '/wp-content/uploads/2026/08/LinkedIn.png','url'=> "linkedin.com/jhomelignacio"],
      'instagram'=> ['image' => '/wp-content/uploads/2026/08/Instagram.png','url'=> "instagram.com/jhomelignacio"],
    ]
  ]
];
?>

<section class="block-team py-[30px]" id="team-block">
  <div class="container mx-auto">
    <div class="heading-container text-center">
      <div class="subheading flex flex-row justify-center items-center mb-4 text-black text-[16px] gap-0 outfit font-bold">
        <span><img src="/wp-content/uploads/2026/06/subheadingicon.png" alt="Icon" class=" mr-2"> </span>
        <?= esc_html($subheading); ?>
      </div>
      <h1 class="heading mb-4 text-black text-[20px] lg:text-[50px] gap-0 outfit font-bold w-full mx-auto leading-[30px] lg:leading-[60px]">
        <?= esc_html($heading); ?>
      </h1>
       <div class="text text-center w-full md:w-[60%] mx-auto dm-sans text-[18px] leading-[25px]"><?= esc_html($text); ?></div>
    </div>
    <div class="grid  grid-cols-1 md:grid-cols-2 gap-4 p-3">
      <!-- 1st col -->
      <?php if(!empty($teams)):?>
        <?php foreach($teams as $team):?>
        <div class="item order-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 card border border-[#eeeeee] shadow-md rounded-[15px] p-5 justify-center items-center">
            <div class="child-item">
              <img src="<?= esc_url($team['profile_image']); ?>" alt="<?= esc_attr($team['name']); ?>">
            </div>
            <!-- -->
            <div class="details">
                <div class="name text-[#000] outfit font-bold text-[28px]"><?= esc_html($team['name']); ?></div>
                <div class="position text-[#FFAA17] text-[16px] dm-sans uppercase font-bold my-2"><?= esc_html($team['position']); ?></div>
                <div class="text dm-sans text-[18px] leading-[30px] my-5"><?= esc_html($team['text']); ?></div>
              
                <div class="socmed">
                  <ul class="flex flex-wrap gap-[10px]">
                    <?php if(!empty($team['socmed'])):?>
                      <?php foreach($team['socmed'] as $item):?>
                      <li><a href="<?= esc_url($item['url']); ?>" target="_blank"><img src="<?= esc_url($item['image']); ?>" alt="<?= esc_attr($item['url']); ?>"></a></li>
                      <?php endforeach;?>
                    <?php endif;?>
                  </ul>
                </div>
            </div>
            <!-- -->
          </div>
        </div>
        <?php endforeach;?>
      <?php endif;?>
    </div>
  </div>
</section>

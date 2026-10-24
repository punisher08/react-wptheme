<?php
// ACF fields for this block can be used like:
// get_field('field_name');

include PROWPDEV_THEME_PATH.'/icons.php';

?>

<section class="block-contact p-3 md:py-[30px] md:px-[20px] my-[60px]" id="contact-block">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="item  ">
        <div class="subheading flex flex-row items-center mb-4 text-black text-[18px] gap-0 font-bold">
          <span><img src="/wp-content/uploads/2026/06/subheadingicon.png" alt="Icon" class=" mr-2"> </span>
          Contact
        </div>
        <div class="text-black text-[50px] gap-0 outfit font-bold">Message Us</div>
        <ul class="flex flex-wrap gap-[10px]">
          <li><a href="facebook.com/jhomelignacio" target="_blank"><img decoding="async" src="/wp-content/uploads/2026/06/Facebook.png" alt=""></a></li>
          <li><a href="x.com/jhomelignacio" target="_blank"><img decoding="async" src="/wp-content/uploads/2026/06/Twitter.png" alt=""></a></li>
          <li><a href="linkedin.com/jhomelignacio" target="_blank"><img decoding="async" src="/wp-content/uploads/2026/06/LinkedIn.png" alt=""></a></li>
          <li><a href="instagram.com/jhomelignacio" target="_blank"><img decoding="async" src="/wp-content/uploads/2026/06/Instagram.png" alt=""></a></li>
        </ul>
        <div class="text dm-sans text-dark text-[18px] mt-[20px]">
          We'd love to hear from you! Reach out anytime and let's talk about your ideas or questions.
        </div>
        <ul class="mt-5 flex flex-col gap-4">
          <li class="dm-sans text-[18px]"><a href="mailto: summitwebsolutions18@gmail.com" target="_blank" class="flex items-center  gap-3 "><span><?=$email_icon;?></span> summitwebsolutions18@gmail.com</a></li>
          <!-- <li class="dm-sans text-[18px]"><a href="tel:(123) 456 - 789" target="_blank" class="flex items-center  gap-3 "><span><?=$phone_icon;?></span> (123) 456 - 789</a></li> -->
          <li class="dm-sans text-[18px]"><a href="#" target="_blank" class="flex items-center  gap-3 "><span><?=$location_icon;?></span> Coraopolis PA</a></li>
        </ul>
        <div class="mapouter mt-5"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Coraopolis PA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionssports.net/">Sports Connection Game</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {width:100%!important;height:400px!important;}</style></div>
      </div>
      <div class="item contact-form ">
       <div class="bg-[#0B1521] text-white dm-sans p-5 h-full rounded-[25px] grid items-center">
         <?php echo do_shortcode( '[contact-form-7 id="d7bc4b5" title="Contact form 1"]');?>
       </div>
      </div>
    </div>
  </div>
</section>

<script>
  // json_encode safely wraps the HTML/SVG in quotes and escapes any characters
  var arrowIconHtml = <?php echo json_encode($arrow_icon); ?>;
  var submit_btn = document.getElementById('wpforms-submit-64');
  
  if (submit_btn) {
    submit_btn.insertAdjacentHTML('beforeend', arrowIconHtml);
  }
</script> 
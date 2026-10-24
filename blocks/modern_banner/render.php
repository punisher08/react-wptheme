<?php
// ACF fields for this block can be used like:
// get_field('field_name');

$eyebrow       = get_field('eyebrow') ?: 'Web Development Services';
$heading       = get_field('heading') ?: 'Ready to Grow Your Business?';
$description   = get_field('description') ?: 'Let’s build a high-performing website that brings real results. Get in touch today and start turning your ideas into a powerful online presence.';
$primary_text  = get_field('primary_button_text') ?: 'Book a meeting';
$primary_url   = get_field('primary_button_url') ?: '#contact';
$secondary_text = get_field('secondary_button_text') ?: 'Explore Services';
$secondary_url  = get_field('secondary_button_url') ?: '#services';

$hero_image    = get_field('hero_image');
?>

<section class="block-modern_banner relative min-h-[300px] overflow-hidden bg-[#05091D] text-white lg:min-h-[300px]">

    <!-- Background grid -->
    <div
        class="pointer-events-none absolute inset-0 opacity-[0.035]"
        style="
            background-image:
                linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px);
            background-size: 70px 70px;
        "
    ></div>


    <!-- Purple ambient glow -->
    <div
        class="
            pointer-events-none
            absolute
            -right-40
            top-[-100px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-purple-600/20
            blur-[140px]
        "
    ></div>


    <!-- Orange ambient glow -->
    <div
        class="
            pointer-events-none
            absolute
            right-[15%]
            top-[35%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-orange-500/15
            blur-[120px]
        "
    ></div>


    <!-- Decorative circular rings -->
    <div
        class="
            pointer-events-none
            absolute
            -right-[180px]
            top-[60px]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-purple-400/10
        "
    >
        <div
            class="
                absolute
                inset-[55px]
                rounded-full
                border
                border-purple-400/10
            "
        ></div>

        <div
            class="
                absolute
                inset-[120px]
                rounded-full
                border
                border-purple-400/10
            "
        ></div>

        <div
            class="
                absolute
                inset-[185px]
                rounded-full
                border
                border-purple-400/10
            "
        ></div>
    </div>


    <!-- Decorative wave -->
    <div class="pointer-events-none absolute bottom-0 left-0 w-full opacity-30">

        <svg
            class="h-auto w-full"
            viewBox="0 0 1440 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
                d="M-50 190C130 80 270 250 445 145C620 40 735 235 900 125C1060 20 1190 220 1490 65"
                stroke="url(#banner-wave)"
                stroke-width="2"
            />

            <path
                d="M-50 215C130 105 270 275 445 170C620 65 735 260 900 150C1060 45 1190 245 1490 90"
                stroke="url(#banner-wave)"
                stroke-width="1"
                opacity=".5"
            />

            <defs>
                <linearGradient
                    id="banner-wave"
                    x1="0"
                    y1="0"
                    x2="1440"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#635BFF" stop-opacity="0"/>
                    <stop offset=".45" stop-color="#A855F7"/>
                    <stop offset=".75" stop-color="#FFB21A"/>
                    <stop offset="1" stop-color="#FFB21A" stop-opacity="0"/>
                </linearGradient>
            </defs>
        </svg>

    </div>


    <!-- Main container -->
    <div class="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">

        <div class="grid min-h-[300px] items-center gap-12 py-5 lg:min-h-[300px] lg:grid-cols-[.95fr_1.05fr] lg:gap-8 lg:py-5">


            <!-- ========================= -->
            <!-- LEFT CONTENT -->
            <!-- ========================= -->

            <div class="relative z-20 max-w-[680px]">

                <!-- Eyebrow -->
                <div class="mb-7 flex items-center gap-3">

                    <span class="h-px w-10 bg-[#FFB21A]"></span>

                    <span class="text-xs font-bold uppercase tracking-[0.25em] text-[#FFB21A]">
                        <?php echo esc_html($eyebrow); ?>
                    </span>

                </div>


                <!-- Heading -->
                <h1
                    class="
                        max-w-[680px]
                        font-display
                        text-[48px]
                        font-bold
                        leading-[0.98]
                        tracking-[-0.045em]
                        sm:text-[60px]
                        md:text-[68px]
                        lg:text-[72px]
                        xl:text-[82px]
                    "
                >
                    <?php echo wp_kses_post($heading); ?>
                </h1>


                <!-- Description -->
                <p
                    class="
                        mt-7
                        max-w-[560px]
                        text-base
                        leading-7
                        text-white/60
                        sm:text-lg
                    "
                >
                    <?php echo esc_html($description); ?>
                </p>


                <!-- Buttons -->
                <div class="mt-9 flex flex-wrap items-center gap-4">

                    <!-- Primary -->
                    <a
                        href="<?php echo esc_url($primary_url); ?>"
                        class="
                            group
                            inline-flex
                            items-center
                            gap-4
                            rounded-full
                            bg-[#FFB21A]
                            px-6
                            py-3.5
                            text-sm
                            font-bold
                            text-black
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-[#FFC43D]
                            hover:shadow-[0_15px_40px_rgba(255,178,26,.25)]
                        "
                    >

                        <span>
                            <?php echo esc_html($primary_text); ?>
                        </span>

                        <span
                            class="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                bg-black
                                text-white
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        >
                            →
                        </span>

                    </a>


                    <!-- Secondary -->
                    <a
                        href="<?php echo esc_url($secondary_url); ?>"
                        class="
                            group
                            inline-flex
                            items-center
                            gap-4
                            rounded-full
                            border
                            border-white/15
                            bg-white/[0.03]
                            px-5
                            py-3.5
                            text-sm
                            font-medium
                            text-white
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-white/30
                            hover:bg-white/[0.08]
                        "
                    >

                        <span>
                            <?php echo esc_html($secondary_text); ?>
                        </span>

                        <span
                            class="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/20
                                text-sm
                                transition-transform
                                duration-300
                                group-hover:rotate-45
                            "
                        >
                            →
                        </span>

                    </a>

                </div>


                <!-- Stats -->
                <div
                    class="
                    hidden
                        mt-11
                        flex
                        flex-wrap
                        gap-x-8
                        gap-y-5
                        border-t
                        border-white/10
                        pt-7
                    "
                >

                    <div>
                        <div class="font-display text-2xl font-bold">
                            120+
                        </div>

                        <div class="mt-1 text-xs text-white/40">
                            Projects Completed
                        </div>
                    </div>


                    <div>
                        <div class="font-display text-2xl font-bold">
                            98%
                        </div>

                        <div class="mt-1 text-xs text-white/40">
                            Client Satisfaction
                        </div>
                    </div>


                    <div>
                        <div class="font-display text-2xl font-bold">
                            5+
                        </div>

                        <div class="mt-1 text-xs text-white/40">
                            Years Experience
                        </div>
                    </div>

                </div>

            </div>


            <!-- ========================= -->
            <!-- RIGHT VISUAL -->
            <!-- ========================= -->

            <div class="relative mx-auto h-[500px] w-full max-w-[700px] lg:h-[650px]">


                <!-- Main glow -->
                <div
                    class="
                        absolute
                        right-[5%]
                        top-[10%]
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-purple-600/25
                        blur-[100px]
                    "
                ></div>


                <!-- Orange light -->
                <div
                    class="
                        absolute
                        right-[5%]
                        top-[30%]
                        h-[200px]
                        w-[200px]
                        rounded-full
                        bg-orange-500/20
                        blur-[90px]
                    "
                ></div>


                <?php if ($hero_image) : ?>

                    <?php
                    $image_url = is_array($hero_image)
                        ? $hero_image['url']
                        : wp_get_attachment_image_url($hero_image, 'full');

                    $image_alt = is_array($hero_image)
                        ? ($hero_image['alt'] ?? '')
                        : '';
                    ?>

                    <img
                        src="<?php echo esc_url($image_url); ?>"
                        alt="<?php echo esc_attr($image_alt); ?>"
                        class="
                            relative
                            z-10
                            mx-auto
                            h-auto
                            w-full
                            max-w-[700px]
                            object-contain
                            drop-shadow-[0_30px_80px_rgba(99,50,180,.35)]
                        "
                    >

                <?php else : ?>

                    <!-- Device mockup -->
                    <div
                        class="
                            absolute
                            right-[-5%]
                            top-[12%]
                            z-10
                            w-[90%]
                            rotate-[3deg]
                            transition-transform
                            duration-700
                            hover:rotate-0
                        "
                    >

                        <!-- Laptop -->
                        <div
                            class="
                                overflow-hidden
                                rounded-[24px]
                                border
                                border-white/20
                                bg-[#15182E]
                                p-2
                                shadow-[0_40px_100px_rgba(30,10,80,.6)]
                            "
                        >

                            <div
                                class="
                                    overflow-hidden
                                    rounded-[18px]
                                    bg-[#080C20]
                                "
                            >

                                <!-- Browser bar -->
                                <div
                                    class="
                                        flex
                                        h-9
                                        items-center
                                        gap-2
                                        border-b
                                        border-white/10
                                        px-4
                                    "
                                >

                                    <span class="h-2.5 w-2.5 rounded-full bg-red-400"></span>
                                    <span class="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                                    <span class="h-2.5 w-2.5 rounded-full bg-green-400"></span>

                                </div>


                                <!-- Website screen -->
                                <div
                                    class="
                                        relative
                                        min-h-[300px]
                                        overflow-hidden
                                        bg-gradient-to-br
                                        from-[#080C20]
                                        via-[#12164A]
                                        to-[#260C3D]
                                        p-7
                                        sm:min-h-[360px]
                                        sm:p-10
                                    "
                                >

                                    <!-- Mini nav -->
                                    <div class="flex items-center justify-between">

                                        <div class="font-display font-bold">
                                            <img class="h-10" src="http://joinsummitweb.test/wp-content/uploads/2026/08/sws-logo.png" alt="SWS Logo">
                                        </div>

                                        <div class="hidden gap-5 text-[9px] text-white/50 sm:flex">
                                            <span>Home</span>
                                            <span>Services</span>
                                            <span>About</span>
                                            <span>Contact</span>
                                        </div>

                                    </div>


                                    <!-- Mini content -->
                                    <div class="mt-12 max-w-[300px]">

                                        <div class="text-[8px] uppercase tracking-[.25em] text-orange-400">
                                            Digital Experiences
                                        </div>

                                        <h3 class="mt-3 font-display text-2xl font-bold sm:text-3xl">
                                            Building digital
                                            <span class="text-orange-400">
                                                products
                                            </span>
                                            & brands.
                                        </h3>

                                        <p class="mt-3 text-[9px] leading-4 text-white/50">
                                            We create modern websites and digital experiences
                                            that drive real business results.
                                        </p>

                                        <div class="mt-5 inline-flex rounded-full bg-orange-400 px-4 py-2 text-[8px] font-bold text-black">
                                            Get Started →
                                        </div>

                                    </div>


                                    <!-- Floating card -->
                                    <div
                                        class="
                                            absolute
                                            bottom-6
                                            right-6
                                            hidden
                                            h-24
                                            w-36
                                            rounded-xl
                                            border
                                            border-purple-400/20
                                            bg-purple-500/10
                                            p-3
                                            backdrop-blur
                                            sm:block
                                        "
                                    >

                                        <div class="h-1.5 w-12 rounded-full bg-white/20"></div>

                                        <div
                                            class="
                                                mt-3
                                                h-9
                                                rounded-lg
                                                bg-gradient-to-r
                                                from-purple-500
                                                to-orange-400
                                                opacity-70
                                            "
                                        ></div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <!-- Laptop base -->
                        <div
                            class="
                                mx-auto
                                h-3
                                w-[105%]
                                rounded-b-[50%]
                                bg-gradient-to-r
                                from-gray-700
                                via-gray-300
                                to-gray-700
                                shadow-2xl
                            "
                        ></div>

                    </div>


                    <!-- Phone -->
                    <div
                        class="
                            absolute
                            bottom-[7%]
                            left-[4%]
                            z-20
                            w-[125px]
                            -rotate-[8deg]
                            sm:w-[150px]
                        "
                    >

                        <div
                            class="
                                rounded-[28px]
                                border-[5px]
                                border-gray-800
                                bg-black
                                p-1.5
                                shadow-[0_30px_60px_rgba(20,10,80,.7)]
                            "
                        >

                            <div
                                class="
                                    min-h-[280px]
                                    overflow-hidden
                                    rounded-[21px]
                                    bg-gradient-to-b
                                    from-[#13183D]
                                    to-[#080A20]
                                    p-4
                                "
                            >

                                <div class="mt-5 text-center">

                                    <div class="text-[7px] uppercase tracking-widest text-orange-400 flex items-center justify-center">
                                            <img class="h-10 " src="http://joinsummitweb.test/wp-content/uploads/2026/08/sws-logo.png" alt="SWS Logo">
                                    </div>

                                    <div class="mt-4 font-display text-lg font-bold">
                                        Digital
                                        <span class="text-orange-400">
                                            Experiences
                                        </span>
                                    </div>

                                    <div
                                        class="
                                            mx-auto
                                            mt-5
                                            flex
                                            h-20
                                            w-20
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-gradient-to-br
                                            from-orange-400
                                            to-purple-600
                                            p-[1px]
                                        "
                                    >
                                        <div
                                            class="
                                                flex
                                                h-full
                                                w-full
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#10132F]
                                                text-lg
                                            "
                                        >
                                            &lt;/&gt;
                                        </div>
                                    </div>

                                    <div class="mt-5 space-y-2">

                                        <div class="h-1.5 rounded-full bg-white/10"></div>

                                        <div class="h-1.5 w-3/4 rounded-full bg-white/10"></div>

                                        <div class="mt-4 h-7 rounded-full bg-orange-400"></div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- Floating stat -->
                    <div
                        class="
                            absolute
                            bottom-[12%]
                            right-0
                            z-30
                            hidden
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.08]
                            px-5
                            py-4
                            shadow-2xl
                            backdrop-blur-xl
                            sm:block
                        "
                    >

                        <div class="text-[10px] text-white/40">
                            Client Satisfaction
                        </div>

                        <div class="mt-1 font-display text-2xl font-bold">
                            98%
                            <span class="text-orange-400">★</span>
                        </div>

                    </div>

                <?php endif; ?>

            </div>

        </div>

    </div>


    <!-- Bottom fade -->
    <div
        class="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-32
            w-full
            bg-gradient-to-t
            from-[#05091D]
            to-transparent
        "
    ></div>

</section>
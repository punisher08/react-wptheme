<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Modern Digital Agency</title>

    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['DM Sans', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            orange: '#FFB21A',
                            yellow: '#FFC83D',
                            navy: '#05091D',
                            blue: '#0A1030',
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-slow': 'float 8s ease-in-out infinite',
                        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                        'fade-up': 'fadeUp .9s ease-out forwards',
                        'fade-right': 'fadeRight .9s ease-out forwards',
                        'scale-in': 'scaleIn 1s ease-out forwards',
                        'spin-slow': 'spin 20s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': {
                                transform: 'translateY(0px)'
                            },
                            '50%': {
                                transform: 'translateY(-18px)'
                            }
                        },
                        pulseGlow: {
                            '0%, 100%': {
                                opacity: '.45',
                                transform: 'scale(1)'
                            },
                            '50%': {
                                opacity: '.8',
                                transform: 'scale(1.08)'
                            }
                        },
                        fadeUp: {
                            '0%': {
                                opacity: '0',
                                transform: 'translateY(35px)'
                            },
                            '100%': {
                                opacity: '1',
                                transform: 'translateY(0)'
                            }
                        },
                        fadeRight: {
                            '0%': {
                                opacity: '0',
                                transform: 'translateX(-35px)'
                            },
                            '100%': {
                                opacity: '1',
                                transform: 'translateX(0)'
                            }
                        },
                        scaleIn: {
                            '0%': {
                                opacity: '0',
                                transform: 'scale(.85)'
                            },
                            '100%': {
                                opacity: '1',
                                transform: 'scale(1)'
                            }
                        }
                    }
                }
            }
        }
    </script>

    <style>
        html {
            scroll-behavior: smooth;
        }

        body {
            background: #05091d;
        }

        .hero-grid {
            background-image:
                linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
            background-size: 70px 70px;
        }

        .hero-lines {
            position: absolute;
            width: 650px;
            height: 650px;
            border: 1px solid rgba(166, 102, 255, .18);
            border-radius: 50%;
        }

        .hero-lines::before,
        .hero-lines::after {
            content: "";
            position: absolute;
            inset: 45px;
            border: 1px solid rgba(166, 102, 255, .13);
            border-radius: 50%;
        }

        .hero-lines::after {
            inset: 100px;
        }

        .gradient-text {
            background: linear-gradient(
                90deg,
                #ffb21a,
                #ff8b00,
                #c75cff
            );
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .glow {
            box-shadow:
                0 0 60px rgba(255, 171, 25, .15),
                0 0 120px rgba(142, 67, 255, .12);
        }
    </style>
</head>

<body class="font-sans text-white">

<!-- HERO -->
<section class="relative min-h-screen overflow-hidden bg-brand-navy">

    <!-- Background -->
    <div class="absolute inset-0 hero-grid"></div>

    <!-- Purple glow -->
    <div class="
        absolute
        -right-40
        top-10
        h-[650px]
        w-[650px]
        rounded-full
        bg-purple-600/20
        blur-[150px]
        animate-pulse-glow
    "></div>

    <!-- Orange glow -->
    <div class="
        absolute
        right-[10%]
        top-[30%]
        h-[300px]
        w-[300px]
        rounded-full
        bg-orange-500/20
        blur-[120px]
    "></div>

    <!-- Decorative circles -->
    <div class="
        hero-lines
        -right-[180px]
        top-[100px]
        animate-spin-slow
    "></div>

    <!-- Decorative wave -->
    <svg
        class="absolute bottom-0 left-0 w-full opacity-30"
        viewBox="0 0 1440 250"
        preserveAspectRatio="none"
    >
        <path
            d="M0 170
               C150 90 280 240 430 150
               C580 60 700 220 850 135
               C1000 50 1150 210 1440 80"
            fill="none"
            stroke="url(#waveGradient)"
            stroke-width="2"
        />

        <defs>
            <linearGradient id="waveGradient">
                <stop offset="0%" stop-color="#6c5cff"/>
                <stop offset="50%" stop-color="#d45cff"/>
                <stop offset="100%" stop-color="#ff9d1a"/>
            </linearGradient>
        </defs>
    </svg>

    <!-- NAVIGATION -->
    <header class="relative z-30">
        <div class="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            py-6
            lg:px-8
        ">

            <!-- Logo -->
            <a href="#" class="flex items-center gap-3">
                <div class="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-brand-orange
                    text-xl
                    font-bold
                    text-black
                    shadow-lg
                    shadow-orange-500/20
                ">
                    S
                </div>

                <span class="
                    font-display
                    text-xl
                    font-bold
                    tracking-tight
                ">
                    SV3
                </span>
            </a>

            <!-- Menu -->
            <nav class="hidden items-center gap-10 md:flex">

                <a
                    href="#"
                    class="
                        relative
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:text-brand-orange
                    "
                >
                    Home

                    <span class="
                        absolute
                        -bottom-3
                        left-0
                        h-0.5
                        w-full
                        bg-brand-orange
                    "></span>
                </a>

                <a
                    href="#services"
                    class="
                        text-sm
                        font-medium
                        text-white/70
                        transition
                        hover:text-white
                    "
                >
                    Services
                </a>

                <a
                    href="#about"
                    class="
                        text-sm
                        font-medium
                        text-white/70
                        transition
                        hover:text-white
                    "
                >
                    About Us
                </a>

                <a
                    href="#blog"
                    class="
                        text-sm
                        font-medium
                        text-white/70
                        transition
                        hover:text-white
                    "
                >
                    Blog
                </a>

                <a
                    href="#contact"
                    class="
                        text-sm
                        font-medium
                        text-white/70
                        transition
                        hover:text-white
                    "
                >
                    Contact
                </a>

            </nav>

            <!-- Phone -->
            <a
                href="tel:+123456789"
                class="
                    hidden
                    items-center
                    gap-3
                    text-sm
                    font-semibold
                    md:flex
                "
            >
                <span class="text-brand-orange text-lg">
                    ☎
                </span>

                <span>
                    123 456 789
                </span>
            </a>

            <!-- Mobile button -->
            <button
                class="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    md:hidden
                "
            >
                ☰
            </button>

        </div>
    </header>


    <!-- HERO CONTENT -->
    <div class="
        relative
        z-20
        mx-auto
        flex
        min-h-[calc(100vh-88px)]
        max-w-7xl
        items-center
        px-6
        py-20
        lg:px-8
    ">

        <div class="
            grid
            w-full
            items-center
            gap-12
            lg:grid-cols-[.95fr_1.05fr]
        ">

            <!-- LEFT -->
            <div class="relative z-20 max-w-2xl">

                <!-- Eyebrow -->
                <div
                    class="
                        mb-7
                        flex
                        items-center
                        gap-3
                        animate-fade-right
                    "
                >

                    <span class="
                        h-px
                        w-10
                        bg-brand-orange
                    "></span>

                    <span class="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[.25em]
                        text-brand-orange
                    ">
                        Web Development Services
                    </span>

                </div>


                <!-- Heading -->
                <h1
                    class="
                        font-display
                        text-5xl
                        font-bold
                        leading-[.95]
                        tracking-[-.04em]
                        sm:text-6xl
                        lg:text-7xl
                        xl:text-[82px]
                        animate-fade-up
                    "
                    style="animation-delay:.15s"
                >
                    We Build

                    <span class="gradient-text block">
                        Digital
                    </span>

                    <span class="block">
                        Experiences
                    </span>

                    <span class="block">
                        That Drive Growth
                    </span>
                </h1>


                <!-- Description -->
                <p
                    class="
                        mt-8
                        max-w-xl
                        text-base
                        leading-7
                        text-white/60
                        sm:text-lg
                        animate-fade-up
                    "
                    style="animation-delay:.3s"
                >
                    Modern websites, powerful development, and smart
                    strategies to help your business stand out and
                    succeed online.
                </p>


                <!-- Buttons -->
                <div
                    class="
                        mt-10
                        flex
                        flex-wrap
                        items-center
                        gap-5
                        animate-fade-up
                    "
                    style="animation-delay:.45s"
                >

                    <!-- Primary -->
                    <a
                        href="#contact"
                        class="
                            group
                            flex
                            items-center
                            gap-4
                            rounded-full
                            bg-brand-orange
                            px-7
                            py-4
                            font-bold
                            text-black
                            shadow-xl
                            shadow-orange-500/20
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:bg-brand-yellow
                            hover:shadow-orange-500/40
                        "
                    >

                        <span>
                            Book a meeting
                        </span>

                        <span class="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            text-white
                            transition
                            group-hover:translate-x-1
                        ">
                            →
                        </span>

                    </a>


                    <!-- Secondary -->
                    <a
                        href="#services"
                        class="
                            group
                            flex
                            items-center
                            gap-4
                            rounded-full
                            border
                            border-white/20
                            bg-white/5
                            px-6
                            py-4
                            font-medium
                            backdrop-blur
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:border-white/40
                            hover:bg-white/10
                        "
                    >

                        <span>
                            Explore Services
                        </span>

                        <span class="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/30
                            text-sm
                            transition
                            group-hover:rotate-45
                        ">
                            →
                        </span>

                    </a>

                </div>


                <!-- Small stats -->
                <div
                    class="
                        mt-12
                        flex
                        flex-wrap
                        gap-8
                        border-t
                        border-white/10
                        pt-7
                        animate-fade-up
                    "
                    style="animation-delay:.6s"
                >

                    <div>
                        <div class="
                            font-display
                            text-2xl
                            font-bold
                        ">
                            120+
                        </div>

                        <div class="
                            mt-1
                            text-xs
                            text-white/40
                        ">
                            Projects Completed
                        </div>
                    </div>


                    <div>
                        <div class="
                            font-display
                            text-2xl
                            font-bold
                        ">
                            98%
                        </div>

                        <div class="
                            mt-1
                            text-xs
                            text-white/40
                        ">
                            Client Satisfaction
                        </div>
                    </div>


                    <div>
                        <div class="
                            font-display
                            text-2xl
                            font-bold
                        ">
                            5+
                        </div>

                        <div class="
                            mt-1
                            text-xs
                            text-white/40
                        ">
                            Years Experience
                        </div>
                    </div>

                </div>

            </div>


            <!-- RIGHT VISUAL -->
            <div class="
                relative
                min-h-[480px]
                lg:min-h-[650px]
            ">

                <!-- Main glow -->
                <div class="
                    absolute
                    right-[5%]
                    top-[15%]
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-purple-600/30
                    blur-[100px]
                    animate-pulse-glow
                "></div>


                <!-- Circle -->
                <div class="
                    absolute
                    right-[5%]
                    top-[8%]
                    h-[470px]
                    w-[470px]
                    rounded-full
                    border
                    border-purple-400/20
                    animate-spin-slow
                "></div>


                <!-- Laptop -->
                <div class="
                    absolute
                    right-[-5%]
                    top-[15%]
                    z-10
                    w-[90%]
                    animate-float
                    lg:w-[620px]
                ">

                    <div class="
                        relative
                        overflow-hidden
                        rounded-[24px]
                        border
                        border-white/20
                        bg-[#11152d]
                        p-2
                        shadow-2xl
                        shadow-purple-900/50
                        rotate-[3deg]
                    ">

                        <!-- Screen -->
                        <div class="
                            relative
                            overflow-hidden
                            rounded-[18px]
                            bg-[#070b20]
                        ">

                            <div class="
                                flex
                                h-10
                                items-center
                                gap-2
                                border-b
                                border-white/10
                                px-5
                            ">
                                <span class="
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-red-400
                                "></span>

                                <span class="
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-yellow-400
                                "></span>

                                <span class="
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-green-400
                                "></span>
                            </div>


                            <!-- Fake website -->
                            <div class="
                                min-h-[350px]
                                bg-gradient-to-br
                                from-[#090d27]
                                via-[#11154a]
                                to-[#260b39]
                                p-8
                            ">

                                <div class="
                                    flex
                                    items-center
                                    justify-between
                                ">
                                    <div class="
                                        font-bold
                                        text-white
                                    ">
                                        SV3
                                    </div>

                                    <div class="
                                        flex
                                        gap-4
                                        text-[9px]
                                        text-white/60
                                    ">
                                        <span>Home</span>
                                        <span>Services</span>
                                        <span>About</span>
                                        <span>Contact</span>
                                    </div>
                                </div>


                                <div class="
                                    mt-16
                                    max-w-xs
                                ">

                                    <div class="
                                        text-[9px]
                                        uppercase
                                        tracking-widest
                                        text-orange-400
                                    ">
                                        Digital Experiences
                                    </div>

                                    <div class="
                                        mt-3
                                        font-display
                                        text-3xl
                                        font-bold
                                    ">
                                        Building digital
                                        <span class="text-orange-400">
                                            products
                                        </span>
                                        & brands.
                                    </div>

                                    <p class="
                                        mt-4
                                        text-[10px]
                                        leading-5
                                        text-white/50
                                    ">
                                        We create modern websites and
                                        digital experiences that drive
                                        real business results.
                                    </p>

                                    <button class="
                                        mt-6
                                        rounded-full
                                        bg-orange-400
                                        px-5
                                        py-2
                                        text-[9px]
                                        font-bold
                                        text-black
                                    ">
                                        Get Started →
                                    </button>

                                </div>


                                <!-- Decorative card -->
                                <div class="
                                    absolute
                                    bottom-8
                                    right-8
                                    h-28
                                    w-44
                                    rounded-2xl
                                    border
                                    border-purple-400/20
                                    bg-purple-500/10
                                    p-4
                                    backdrop-blur
                                ">

                                    <div class="
                                        h-2
                                        w-16
                                        rounded
                                        bg-white/20
                                    "></div>

                                    <div class="
                                        mt-3
                                        h-10
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-purple-500
                                        to-orange-400
                                        opacity-60
                                    "></div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <!-- Laptop base -->
                    <div class="
                        mx-auto
                        h-3
                        w-[105%]
                        rounded-b-[50%]
                        bg-gradient-to-r
                        from-gray-700
                        via-gray-300
                        to-gray-700
                        shadow-2xl
                    "></div>

                </div>


                <!-- Phone -->
                <div class="
                    absolute
                    bottom-[8%]
                    left-[5%]
                    z-20
                    w-[145px]
                    animate-float-slow
                    lg:w-[175px]
                ">

                    <div class="
                        rounded-[32px]
                        border-[6px]
                        border-gray-800
                        bg-black
                        p-2
                        shadow-2xl
                        shadow-purple-900/60
                        -rotate-[8deg]
                    ">

                        <div class="
                            relative
                            min-h-[300px]
                            overflow-hidden
                            rounded-[22px]
                            bg-gradient-to-b
                            from-[#11163c]
                            to-[#080a20]
                            p-4
                        ">

                            <!-- Notch -->
                            <div class="
                                absolute
                                left-1/2
                                top-0
                                h-5
                                w-20
                                -translate-x-1/2
                                rounded-b-2xl
                                bg-black
                            "></div>

                            <div class="
                                mt-8
                                text-center
                            ">

                                <div class="
                                    text-[8px]
                                    uppercase
                                    tracking-widest
                                    text-orange-400
                                ">
                                    SV3
                                </div>

                                <div class="
                                    mt-5
                                    font-display
                                    text-xl
                                    font-bold
                                ">
                                    Digital
                                    <span class="text-orange-400">
                                        Experiences
                                    </span>
                                </div>

                                <div class="
                                    mx-auto
                                    mt-5
                                    h-24
                                    w-24
                                    rounded-full
                                    bg-gradient-to-br
                                    from-orange-400
                                    to-purple-600
                                    p-[1px]
                                ">
                                    <div class="
                                        flex
                                        h-full
                                        w-full
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#11142f]
                                        text-2xl
                                    ">
                                        &lt;/&gt;
                                    </div>
                                </div>

                                <div class="
                                    mt-6
                                    space-y-2
                                ">
                                    <div class="
                                        h-2
                                        rounded-full
                                        bg-white/10
                                    "></div>

                                    <div class="
                                        h-2
                                        w-3/4
                                        rounded-full
                                        bg-white/10
                                    "></div>

                                    <div class="
                                        h-8
                                        rounded-full
                                        bg-orange-400
                                    "></div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <!-- Floating badge -->
                <div class="
                    absolute
                    bottom-[12%]
                    right-[0]
                    z-30
                    hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    px-5
                    py-4
                    shadow-2xl
                    backdrop-blur-xl
                    sm:block
                    animate-float-slow
                ">

                    <div class="
                        text-xs
                        text-white/50
                    ">
                        Client Satisfaction
                    </div>

                    <div class="
                        mt-1
                        font-display
                        text-2xl
                        font-bold
                    ">
                        98%
                        <span class="text-orange-400">
                            ★
                        </span>
                    </div>

                </div>

            </div>

        </div>

    </div>


    <!-- Bottom fade -->
    <div class="
        absolute
        bottom-0
        left-0
        h-32
        w-full
        bg-gradient-to-t
        from-brand-navy
        to-transparent
    "></div>

</section>


<!-- Example next section -->
<section
    id="services"
    class="
        bg-white
        px-6
        py-32
        text-black
    "
>

    <div class="mx-auto max-w-5xl text-center">

        <span class="
            text-sm
            font-bold
            uppercase
            tracking-[.25em]
            text-orange-500
        ">
            What We Do
        </span>

        <h2 class="
            mt-5
            font-display
            text-4xl
            font-bold
            tracking-tight
            sm:text-5xl
        ">
            Empower Your Business With
            <span class="text-orange-500">
                Digital
            </span>
            Services
        </h2>

        <p class="
            mx-auto
            mt-6
            max-w-2xl
            text-gray-500
        ">
            From high-converting landing pages to complete web
            applications and SEO strategies, we create digital
            experiences designed around your business goals.
        </p>

    </div>

</section>

</body>
</html>
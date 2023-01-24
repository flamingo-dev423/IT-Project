<template>
    <div class="w-full h-full bg-black">

            <header class="bg-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 md:px-3 md:py-6">
                <div class="flex items-center justify-between px-4 py-6 sm:p-0">
                    <div>
                        <img src="../assets/fylo.svg" class="h-8" alt="">
                    </div>
                    <div class="sm:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1  0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <nav :class="isOpen ? 'block' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                    <a href="/home" class="block px-2 py-1 text-gray-400 font-semibold md:text-xl hover:text-white">Home</a>
                    <a href="/virtual" class="mt-1 block px-2 py-1 text-white font-semibold md:text-xl">Tour</a>
                    <a href="/services" class="mt-1 block px-2 py-1 text-gray-400 font-semibold hover:text-white md:text-xl ">Services</a>
                    <!-- <a href="register" class="mt-1 block px-2 py-1 text-gray-400 font-semibold hover:text-white md:text-xl">Register</a> -->
                    <button class="whitespace-nowrap text-white sm:text-base md:text-xl font-semibold tracking-wide bg-green-700 py-2 px-8 rounded-md">Sign Out</button>
                </nav>
            </header>
 

        <!-- <div class=" mb-12">
            <img src="../assets/images/pexels-gustavo-fring-4127634.jpg" class="w-full bg-center bg-no-repeat object-cover" style="height: 70vh;"  alt="">
        </div> -->
        <Carousel  :wrap-around="true" :autoplay="2000" :pause-autoplay-on-hover="1000">
            <Slide v-for="slide in slides" :key="slide.id">
                <div class="w-full bg-center bg-no-repeat object-cover" style="height: 70vh;">
                    <img :src="slide.icon" />
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

        <!-- tour intro -->
        <div class="-mt-48 sm:-mt-48 md:my-12 text-center lg:text-left pl-6 ">
            <h1 class="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider ">Welcome to Fylo Travels & Tours</h1>
            <p class="text-gray-400 sm:text-base md:text-xl md:font-normal tracking-wider leading-tight pt-1">We offer most competitive rates and offers for wonderful and beautiful places </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-36 py-12 ">
            <div class=" flex flex-col justify-center items-center">
                <GlobeAltIcon  class="custom-class h-12 w-12 text-green-700" />
                <h1 class="text-2xl md:text-2xl lg:text-3xl text-white font-semibold tracking-wider my-6 text-center">Unique Destination</h1>
                <p class="text-base md:text-lg lg:text-xl text-gray-500 text-center font-normal tracking-wider leading-tight">Fylo Travels and Tours Ltd is the Official Country Office and Exclusive Authorized Agent in Nigeria for Kingswood Education & Learning Group and Camp Beaumont and more.</p>
            </div>
            <div class=" flex flex-col justify-center items-center">
                <BuildingOfficeIcon  class="custom-class h-12 w-12 text-green-700" />
                <h1 class="text-2xl md:text-2xl lg:text-3xl text-white font-semibold tracking-wider my-6 text-center">Ticket Deliveries</h1>
                <p class="text-base md:text-lg lg:text-xl text-gray-500 text-center font-normal tracking-wider leading-tight">Fylo Travels and Tours Ltd is the Official Country Office and Exclusive Authorized Agent in Nigeria for Kingswood Education & Learning Group and Camp Beaumont and more.</p>
            </div>
            <div class=" flex flex-col justify-center items-center">
                <CheckCircleIcon  class="custom-class h-12 w-12 text-green-700" />
                <h1 class="text-2xl md:text-2xl lg:text-3xl text-white font-semibold tracking-wider my-6 text-center">Backup Team</h1>
                <p class="text-base md:text-lg lg:text-xl text-gray-500 text-center font-normal tracking-wider leading-tight">Fylo Travels and Tours Ltd is the Official Country Office and Exclusive Authorized Agent in Nigeria for Kingswood Education & Learning Group and Camp Beaumont and more.</p>
            </div>
        </div>

        <div class="mt-24 text-center lg:text-left pl-6 ">
            <h1 class="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider ">Feautured Packages</h1>
            <p class="text-gray-400 sm:text-base md:text-xl md:font-normal tracking-wider leading-tight pt-1">Our Featured Packages allow you to get away from routine, spend time with family and friends </p>
        </div>

        <div class="grid grid-cols-2 gap-12 mx-36 py-12 w-auto">
            <div v-for="Detail in Details" v-bind:key="Detail" class="">
                <div class="flex flex-col justify-center items-center w-auto">
                    <img :src="Detail.image" class="h-auto w-full rounded-t-none">
                    <div class="bg-white w-full shadow-slate-600 px-6 pt-12">
                    <h1 class="text-xl sm:text-xl md:text-3xl font-semibold text-black tracking-wide leading-none sm:leading-none"> {{ Detail.header }} </h1>
                    <h2 class="text-xs sm:text-base md:text-lg lg:text-xl text-gray-500 tracking-wide pt-4 leading-tight sm:leading-tight pb-24"> {{ Detail.text }} </h2>
                    <div class="sm:flex sm:flex-wrap sm:justify-between">
                    <p class="text-green-700 text-xs md:text-xl cursor-pointer float-left">{{ Detail.price }}</p>
                    <button class="bg-green-700 text-xs md:text-xl text-white px-4 py-2 md:px-6 md:py-2 float-right">{{ Detail.button }}</button>
                </div>
                </div>
                </div>
            </div>
        </div>

           <div class="my-24 mx-auto pl-6 ">
            <h1 class=" text-2xl md:text-4xl text-white font-semibold tracking-wider ">Our Trusted Partners</h1>
            <p class="text-base md:text-xl text-gray-400 font-light tracking-wide my-5 sm:text-center md:w-1/2 md:text-left">For over 10 years, we have been in good partnership with other reputable travel brands across the globe that we have continually teamed up with to provide the best of travel services to our numberous customers.</p>
        </div> 
        <carousel :items-to-show="2.75" :autoplay="2000" :wrap-around="true" :transition="500">
            <slide v-for="feedback in feedbacks" :key="feedback">
                        <!-- <div class="pb-6 mx-24 mt-6 flex flex-col justify-center items-center">
                            <img :src="feedback.image" class="w-32 h-32 mb-6 rounded-full" />
                            <h1 class="text-white text-lg md:text-xl font-normal">{{feedback.recipient }}</h1>
                            <blockquote class="text-gray-400 text-base md:text-lg font-light "> {{  feedback.comment  }} </blockquote>
                        </div> -->

                        <figure class="mx-12 pb-6">
                            <svg aria-hidden="true" class="mx-auto mb-13 w-12 h-12 text-gray-400 dark:text-gray-600" viewbox="0 0 24 27" fill="none" xmins="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                            <blockquote>
                                <p class="text-base md:text-lg italic font-medium text-gray-900 dark:text-white">{{  feedback.comment  }}</p>
                            </blockquote>
                            <figcaption class="flex justify-center items-center mt-6 space-x-3">
                                <img :src="feedback.image" class="w-6 h-6 rounded-full" />
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <cite class="pr-3 font-medium text-gray-900 dark:text-white">{{ feedback.recipient  }}</cite>
                                    <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{{ feedback.partner  }}</cite>
                                </div>
                            </figcaption>
                        </figure>
                </slide>
                <template #addons>
                  <navigation />
                </template>
        </carousel>

    </div>
</template>

<script>
import { ArrowLongDownIcon, GlobeAltIcon, BookOpenIcon, CheckCircleIcon, BuildingOfficeIcon  } from '@heroicons/vue/24/solid'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    name: 'virtual',
    components: {
        Carousel,
        Slide,
        Navigation,
        ArrowLongDownIcon,
         GlobeAltIcon,
          BookOpenIcon,
           CheckCircleIcon, 
           BuildingOfficeIcon,
    },
    data: function() {
        return {
            slides: [
                { id: '1', icon: require('../assets/images/pexels-gustavo-fring-4127634.jpg') },
                { id: '2', icon: require('../assets/images/pexels-gustavo-fring-4127637.jpg') },
                { id: '3', icon: require('../assets/images/pexels-gustavo-fring-4127640.jpg') },
                { id: '4', icon: require('../assets/images/pexels-gustavo-fring-4127642.jpg') },
                { id: '5', icon: require('../assets/images/pexels-gustavo-fring-4127643.jpg') },
                { id: '6', icon: require('../assets/images/pexels-gustavo-fring-4127644.jpg') },
                { id: '7', icon: require('../assets/images/pexels-gustavo-fring-4127645.jpg') },

            ],
            isOpen: false,
            Details: [
                {image: require('../assets/images/pexels-asad-photo-maldives-1266831.jpg'),
                 header: 'Luxurious London', 
                text: 'Join us for 10 days vacation tour to uk', 
                price: '$45,000' ,
                button: 'view more'
            },
                {image: require('../assets/images/pexels-streetwindy-2108832.jpg'),
                 header: 'Luxurious London', 
                text: 'Come and experience the beautiful life of California with this specially packed tour.', 
                price: '$Price on call' ,
                button: 'view more'
            },
                {image: require('../assets/images/pexels-haley-black-2087391.jpg'),
                 header: 'OBUDU Mountain Resort Christmas Package', 
                text: 'Experience 5 days/4 nights in the beautiful Obudu Mountain resort this christmas', 
                price: '$195,000' ,
                button: 'view more'
            },
                {image: require('../assets/images/pexels-julian-lobo-2407070.jpg'),
                 header: 'Luxurious London', 
                text: 'Join us for 10 days vacation tour to uk', 
                price: 'Price on call' ,
                button: 'view more'
            },
            ],

            feedbacks: [
                {image: require('../assets/images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg'), 
                recipient: 'Mazi Confidence ', 
                partner: 'CEO at Google',
                comment: 'I am glad dad and mum allowed me to join the Tour to the United States of America. I met children from other schools and had great fun.'},
                {image: require('../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'), 
                recipient: 'George Douglas', 
                partner: 'Flyo Consultant',
                comment: ' would have cried if I was not allowed to join others for this interesting trip. I enjoyed myself and learnt a lot of things.'},
                {image: require('../assets/images/may-gauthier-TACdQo62To0-unsplash.jpg'), 
                recipient: 'Harry Barry', 
                partner: 'SNS Alias',
                comment: 'Daddy should please pay for another trip for me and my sister. I really like it. I learnt a lot of new things and really played a lot. Daddy, I love you so much.'},
                {image: require('../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'),
                 recipient: 'Micheal Elstein',
                  partner: 'CEO at Bradmond plc',
                  comment: 'I am glad dad and mum allowed me to join the Tour to the United States of America. I met children from other schools and had great fun.'},
                  {image: require('../assets/images/may-gauthier-TACdQo62To0-unsplash.jpg'), 
                 recipient: 'Nicholas Brad',
                 partner: 'Twitter HR',
                  comment: 'I am glad dad and mum allowed me to join the Tour to the United States of America. I met children from other schools and had great fun.'},
            ],
        }
    }
}
</script>

<style scoped>
* {
  
    font-family: 'Montserrat' , sans-serif;
}
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel_slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

</style>
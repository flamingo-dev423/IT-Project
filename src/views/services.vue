<template>
    <div class="bg-black w-full h-full">
        <header class="bg-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 md:px-3 md:py-6">
            <div class="flex items-center justify-between px-4 py-6 sm:p-0">
                <div>
                    <img src="../assets/fylo.svg" class="h-4 md:h-8" alt="">
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
                <a href="/home" class="block px-2 py-1 text-gray-400 font-semibold text-sm md:text-xl hover:text-white">Home</a>
                <a href="/virtual" class="mt-1 block px-2 py-1 text-gray-400 hover:text-white text-sm font-semibold md:text-xl">Tour</a>
                <a
            href="/services"
            class="mt-1 block px-2 py-1 text-white font-semibold md:text-xl hover:text-white"
            >Services</a
          >
                <a href="/about" class="mt-1 block px-2 py-1 text-gray-400 font-semibold md:text-xl text-sm ">About Us</a>
                <!-- <a href="register" class="mt-1 block px-2 py-1 text-gray-400 font-semibold hover:text-white md:text-xl">Register</a> -->
                <button class="whitespace-nowrap text-white sm:text-base md:text-xl text-sm font-semibold tracking-wide bg-green-700 py-2 px-8 rounded-md">Sign Out</button>
            </nav>
        </header>

        <!-- second slide -->
        <div class=" mb-4">
            <img src="../assets/images/antonius-smal-AfMbndN8ICM-unsplash.jpg" class="w-full bg-center bg-no-repeat object-cover" style="height: 70vh;"  alt="">
            <div class="relative -top-80 mx-12 w-fit">
                <h1 class="uppercase text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-widest">Services</h1>
                <ul class="flex">
                    <li @click="$router.push('home')" class="text-gray-400 text-base md:text-lg lg:text-lg hover:cursor-pointer hover:text-white md:font-normal tracking-wide leading-tight">Home</li> <span class="text-white text-xl mx-4"> > </span>
                    <li @click="$router.push('services')" class="text-gray-400 text-base md:text-lg hover:cursor-pointer hover:text-white lg:text-xl md:font-normal tracking-wide leading-tight">Our Services</li>
                </ul>
            </div>
        </div>

        <!-- Third Slide -->
        <div class="mx-3 md:mx-32 bg-white py-10 pl-5 md:pl-10 pr-8 md:pr-36 rounded-md shadow shadow-gray-400">
            <div class="mb-10">
                <h1 class="text-black text-base md:text-lg font-semibold mb-3">Visa Advisory & Protocol</h1>
                <p class="text-gray-800 text-sm md:text-base font-light">We are able to assist in facilitating your travel visa through professional counsel and advice. Further, we provide ticket delivery to your destination, leaving you with enough time for other pressing matters.</p>
            </div>
            <div class="mb-10">
                <h1  class="text-black text-base md:text-lg font-semibold mb-3">Hotel & Flight Reservation</h1>
                <p class="text-gray-800 text-sm md:text-base font-light">We deliver your ticket to your destination, leaving you with enough time for other pressing matters and also make firm arrangements for hotel accomodation for the duration of your stay to any of our prime destinations.</p>
            </div>
            <div class="mb-10">
                <h1  class="text-black text-base md:text-lg font-semibold mb-3">Packaged Tours & Vacations</h1>
                <p class="text-gray-800 text-sm md:text-base font-light">We organize packaged holidays and tours to all major tourist attractions in Europe, America, South Africa and Nigeria. This services is also available to individual and families.</p>
            </div>
            <div class="mb-10">
                <h1  class="text-black text-base md:text-lg font-semibold mb-3">Corporate & Group Travels</h1>
                <p class="text-gray-800 text-sm md:text-base font-light">Fylo works with corporate organisations to plan hassle free group travels at attractive and subsidized rates for businesses, fan clubs and pilgrimage.</p>
            </div>
            <div class="mb-10">
                <h1 class="text-black text-base md:text-lg font-semibold mb-3">Conference & Event Planning</h1>
                <p class="text-gray-800 text-sm md:text-base font-light">We also organize group travels at attractive and subsidized rates for companies, fan clubs and pligrimage.</p>
            </div>
            <div class="">
                <h1 class="text-black text-base md:text-lg font-semibold mb-3">Tourism Consultancy & Training</h1>
                <p class="text-gray-800 text-sm md:text-base font-light">With our experience in Travel and tours, Fylo is able to provide specialised consultancy and advice on a wide range of topical issues relating to the leisure, tourism and entertainment industry.</p>
            </div>
        </div>

        <!-- Blog Post -->
        <div class="mx-3 md:mx-32 bg-white mt-16 py-10 pl-5 md:pl-10 pr-8 md:pr-36 rounded-md shadow shadow-gray-400">
            <h1 class="text-black font-semibold text-lg md:text-xl mb-3">Recents Posts</h1>
            <p class="font-normal text-sm md:text-base">No Posts Found!</p>
        </div>

        <!-- Footer -->
        <div class="mt-10 pb-10 px-6 md:px-0 md:grid md:grid-cols-3 md:gap-3 bg-zinc-800">
                <p class="text-gray-400 md:pl-16 md:w-96 pt-6 font-thin text-xs md:flex md:flex-col md:col-span-1 md:text-sm lg:text-base tracking-wider leading-tight">Welcome to your one stop travel platform where we love making your journey an experience. We would love to hear from you.</p>
                <div class="md:flex md:flex-col md:col-span-1 ">
                <h1 class="font-semibold text-md text-white mt-6">Contact Information</h1>
                <p class="text-xs md:text-sm font-thin text-gray-400 tracking-wider mt-3">chat with us on Whatsapp : <span class="text-blue-700">+234 (0) 708 136 8874</span></p>
                <p class="text-xs md:text-sm font-thin text-gray-400 tracking-wider mt-3">Speak to an agent : <span class="text-blue-700">+234 (0) 708 136 8874</span></p>
                <p class="text-xs md:text-sm font-thin text-gray-400 tracking-wider mt-3">Need our support : <span class="text-blue-700">+234 (0) 708 136 8874</span></p>
            </div>
            <div class="md:flex md:flex-col md:col-span-1 ">
                <h1 class="font-semibold text-md text-white mt-6">Useful Links</h1>
                <div class="flex flex-col py-3">
                <a href="/about" class="text-xs md:text-sm font-thin text-gray-400 tracking-wider mb-3">About Us</a>
                <a href="/virtual" class="text-xs md:text-sm font-thin text-gray-400 tracking-wider">Virtual Tour</a>
            </div>
        </div>
            </div>
    </div>

</template>

<script>
export default {
    data:function() {
        return {
            isOpen: false,
        }
    }
}
</script>

<style scoped>

</style>
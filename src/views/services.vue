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
                <a href="/virtual" class="mt-1 block px-2 py-1 text-gray-400 hover:text-white font-semibold md:text-xl">Tour</a>
                <a href="/services" class="mt-1 block px-2 py-1 text-white font-semibold md:text-xl ">Services</a>
                <!-- <a href="register" class="mt-1 block px-2 py-1 text-gray-400 font-semibold hover:text-white md:text-xl">Register</a> -->
                <button class="whitespace-nowrap text-white sm:text-base md:text-xl font-semibold tracking-wide bg-green-700 py-2 px-8 rounded-md">Sign Out</button>
            </nav>
        </header>
        
        <!-- service intro -->
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:gap-12 md:mt-24 px-6 ">
            <img src="../assets/illustration-intro.png" class="w-full hidden md:hidden lg:block" />
            <div class="text-center lg:text-left">
                <h1 class="text-white py-6 text-2xl md:text-4xl font-semibold tracking-wider">Fylo Travels and Tours Inc...</h1>
                <p class="text-gray-400 sm:text-base md:text-xl md:font-light tracking-wider leading-tight">Fylo Inc. is the best travel tour company in Nigeria. We remain a leading travels company in sub-Saharan Africa, established and located in the heart of Lagos, Nigeria since 1998. <br>
                    <br>
                    Powered by the expertise of highly skilled, resourceful and innovative staff, the company is breaking new grounds in regular and progressive proportion in its corporate business of curriculum based Education Study tours. <br>
                    <br>
                    
                    Fylo Travels and Tours Ltd is one of the most successful and foremost travel company in Nigeria, delivering customer-focused travel products. We remain the leading travel company in Nigeria that specializes on curriculum-focused educational tour for students within the range of 6 to 17 years. <br>
                    <br>
                    
                    We will appreciate your invitation to discuss your specific tour request with you by calling any of our hotlines 08022235119, 234 805 546 9754 or 234 901 794 2316.</p>
            </div>
        </div>
        <div class="mt-36 ml-6">
            <h1 class="text-white text-2xl md:text-4xl font-semibold tracking-wider text-center lg:text-left">Why Choose Fylo Travels and Tours Inc.</h1>
            <p class="text-gray-400 sm:text-base md:text-xl md:font-normal tracking-wider text-center lg:text-left leading-tight pt-6">There are numerous reasons several schools and other corporate bodies chose Fylo Travels and Tours <br> and have never regretted their decision:</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 w-full mt-10 mb-12 px-6 py-6 ">
            <div class="flex flex-col justify-center items-center px-6 py-6 mx-24 sm:mx-24 md:mx-0 lg:mx-0">
                <BuildingOfficeIcon  class="custom-class h-12 w-12 text-green-700" />
                <h1 class="text-2xl md:text-2xl lg:text-4xl text-white font-semibold tracking-wider my-6 text-center">International Partnership</h1>
                <p class="text-base md:text-lg lg:text-xl text-gray-500 text-center font-normal tracking-wider leading-tight">Fylo Travels and Tours Ltd is the Official Country Office and Exclusive Authorized Agent in Nigeria for Kingswood Education & Learning Group and Camp Beaumont and more.</p>
            </div>
            <div class="flex flex-col justify-center items-center px-6 py-6 mx-24 sm:mx-24 md:mx-0 lg:mx-0">
                <GlobeAltIcon  class="custom-class h-12 w-12  text-green-700" />
                <h1 class="text-2xl md:text-2xl lg:text-4xl text-white font-semibold tracking-wider my-6 text-center">Global Tour Packages</h1>
                <p class="text-base md:text-lg lg:text-xl text-gray-500 text-center font-normal tracking-wider leading-tight">Our products are curriculum-based vis-a-vis other tour organizers. Our products & packaging goes beyond mere sight-seeing and we ensure all tour products are global brands.</p>
            </div>
            <div class="flex flex-col justify-center items-center px-6 py-6 mx-24 sm:mx-24 md:mx-0 lg:mx-0">
                <BookOpenIcon class="custom-class h-12 w-12  text-green-700 object-center" />
                <h1 class="text-2xl md:text-2xl lg:text-4xl text-white font-semibold tracking-wider my-6 text-center">Learning Outside the Classroom</h1>
                <p class="text-base md:text-lg lg:text-xl text-gray-500 text-center font-normal tracking-wider leading-tight">Fylo Travels and Tours Ltd is the first and the only company in the sub Sahara Africa applying the principle of Learning Outside the Classroom to its student.</p>
            </div>
        </div>

        <!-- Subscription Section -->
        <div class="bg-hero-pattern-mobile sm:bg-hero-pattern object-cover bg-center bg-scroll bg-no-repeat sm:bg-center sm:bg-scroll sm:bg-auto sm:bg-no-repeat sm:object-cover ">
        <div class="content-center py-24 pl-6 ">
            <div class="">
                <h1 class="text-white text-2xl md:text-4xl font-semibold tracking-wider text-center lg:text-left">Join Our Subscribe List</h1>
            </div>
            <div class=" flex items-center justify-center mt-12 lg:w-1/2 px-12 sm:px-12 md:px-12 lg:px-0">
                <input type="email" name="email" id="email" placeholder="Enter Your Email To Subscribe" class="w-full bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-none px-4 py-3" aria-required>
                <button class="text-white bg-green-700 whitespace-nowrap rounded-none shadow border-none font-semibold px-14 py-3 ml-6 text-xl md:text-2xl uppercase">Send</button>
            </div>
     
        </div>
    </div>

    </div>
</template>

<script>
import { ArrowLongDownIcon, GlobeAltIcon, BookOpenIcon, CheckCircleIcon, BuildingOfficeIcon  } from '@heroicons/vue/24/solid'
export default {
    components: {  ArrowLongDownIcon, GlobeAltIcon, BookOpenIcon, CheckCircleIcon, BuildingOfficeIcon  },
    data:function() {
        return {
            isOpen: false,
        }
    }
}

</script>

<style scoped>
* {
  
    font-family: 'Montserrat' , sans-serif;
}
</style>
<template>
    <div class=" bg-white w-full h-screen flex flex-col md:flex-row items-center">
        <!-- RIGHT BANNER -->

        <div class="flex items-center justify-center md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-16 xl:px-12">
            <div class="w-full h-full lg:h-screen">
                <h1 class="text-black font-light uppercase mt-4">travel and tour <span class="text-green-900 px-4 font-medium text-xl lg:text-2xl">//</span>
                    jan 2023</h1>
                <div class="my-60">
                    <img src="../assets/fylo.svg" style="filter: brightness(0) invert(0);" class="h-8 mb-6">
                    <h1 class="font-bold text-black md:text-4xl lg:text-5xl uppercase">fylo travel and tour Inc.</h1>
                    <p class="font-light text-sm md:text-lg lg:text-xl text-gray-500 leading-loose my-6  ">Get started your exciting journey with us and get to checkoff your ultimate travel checklist with your travel partner.</p>
                    <button @click="$router.push('login')" class="bg-green-700 border-none text-xl text-white font-semibold rounded-md px-16 uppercase py-4 mt-6">Get started</button>
                </div>
            </div>
        </div>

        <!-- LEFT BANNER -->

        <div class="hidden lg:block md:w-1/2 xl:w-2/3 h-screen">
            <img src="../assets/images/pexels-haley-black-2087391.jpg" alt="" class="w-full h-full object-cover">
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}
</style>
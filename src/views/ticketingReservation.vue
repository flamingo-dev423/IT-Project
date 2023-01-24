<template>
    <div class="w-full h-full bg-black">
        <div class=" mb-4">
            <img src="../assets/images/pexels-asad-photo-maldives-1268855.jpg" class="w-full bg-center bg-no-repeat object-cover" style="height: 70vh;"  alt="">
            <div class="relative -top-80 mx-12 w-fit">
                <h1 class="uppercase text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-widest">Ticketing And Reservation</h1>
                <ul class="flex">
                    <li @click="$router.push('home')" class="text-gray-400 text-base md:text-xl lg:text-xl hover:cursor-pointer hover:text-white md:font-normal tracking-wide leading-tight">Home</li> <span class="text-white text-xl mx-4">/</span>
                    <li @click="$router.push('virtual')" class="text-gray-400 text-base md:text-xl hover:cursor-pointer hover:text-white lg:text-xl md:font-normal tracking-wide leading-tight">Tours</li>
                </ul>
            </div>
        </div>
        <div class="px-3 pb-6">
            <h1 class="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider pb-6">Ticketing & Reservation</h1>
            <p class="text-gray-400 sm:text-base md:text-xl md:font-normal tracking-wider leading-tight">As an IATA accredited Travel Agency, LeadTheway Inc. is strategically positioned to offer affordable and cheap flight tickets to our clients. Our ticketing and reservation executives are trained and equipped to provide seamless flight routing and connections even at a very short notice to our clients that will make their traveling a worthwhile and stress-free experience.  <br>
                <br>
                LeadTheRoad Inc. offers first-class ticketing services on both local and international flights. We provide the above stated service to both individuals and corporate bodies to enable them achieve their travel plans to any destination in the world. We ensure you get the best location most convenient for you and your family members amongst available seats.  <br>
                <br>
                Whether you are booking first-class, business or economy class, you can count on us for the most affordable fees you can ever get among our contemporaries. We will guide you through the booking conditions of interested airlines so that nothing catches you unaware.   <br>
                <br>
                Our Inventory Control System has a real time interface to major airlines - yield management system to support a permanent optimization of the offered booking classes in response to changes in demand or pricing strategies of a competitor. We therefore know the availability of airlines as well as the respective special offers of various airlines at real-time basis - this is why our clients enjoy the best price ever.   <br>
                <br>
                Our clients know that we effectively curb problems such as; unavailability of seats, missing of flights, and other several hassles at the airport. In fact, we help our clients plan far ahead and this has always saved them time, money as well as future aggravation.  <br>
                <br>
                We commence our ticketing service by understanding your corporate objectives. Working with your specific objectives, we then arrange and manage your travel by taking advantage of our extensive relationships with airlines, hotels, transport companies and regional authorities. In a nut shell, we match your desired goals with proper logistics.   <br>
                <br>
                Allow us to handle all your travel logistics. We concur that the best travel happens when travel decisions are made by efficient travel companies like ours. Using efficient approach, we will make sure your tickets and travel reservations are made according to your desires.</p>
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
<template>
    <div class="w-full h-full bg-black">
        <div class=" mb-4">
            <img src="../assets/images/pexels-julian-lobo-2407070.jpg" class="w-full bg-center bg-no-repeat object-cover" style="height: 70vh;"  alt="">
            <div class="relative -top-80 mx-12 w-fit">
                <h1 class="uppercase text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-widest">Holiday Packages</h1>
                <ul class="flex">
                    <li @click="$router.push('home')" class="text-gray-400 text-base md:text-xl lg:text-xl hover:cursor-pointer hover:text-white md:font-normal tracking-wide leading-tight">Home</li> <span class="text-white text-xl mx-4">/</span>
                    <li @click="$router.push('virtual')" class="text-gray-400 text-base md:text-xl hover:cursor-pointer hover:text-white lg:text-xl md:font-normal tracking-wide leading-tight">Tours</li>
                </ul>
            </div>
        </div>
        <div class="px-3 pb-6">
            <h1 class="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider pb-6">Holiday Packages</h1>
            <p class="text-gray-400 sm:text-base md:text-xl md:font-normal tracking-wider leading-tight">
                This is our niche. Educational and Holiday Tour is our specialty. We know all the intricacies of educational travel and student holiday tour packages like the back of our hands. With all modesty, we conceive, design, package and organize the largest curriculum linked education tours with over 5,000 school students travelling through our travel network to different destinations across the world annually. <br>
                <br>
                We basically infuse curriculum modules spiced with high dose of unlimited interactive and engaging games and fun in all our school trips, educational tours and holiday tour packages for school students. During every of our school trip, we ensure we link your school’s curriculum to all the places your students will be visiting which makes learning come alive. <br>
                <br>
                In order to make the trip more engaging for your students, we create series of teambuilding and learning skills. We provide work-pack to each student to aid their learning skills during every tour. Hence, we say we Bring Learning to Life. We curate over 65 school holiday related and educational tour products which your school can choose from and will be customized specifically to suit your school’s tour requirements and travel goals. We are the only African company member of the Council for Learning Outside the Classroom (CLOtC) and we are a recipient of Quality Badge Award of the Council for Learning Outside the Classroom (CLOtC). <br>
                <br>
                We have different curriculum linked and holiday tour packages we organize for schools and students to different destinations across the world, amongst which are the following from which you can choose for your students and wards: <br>
                <br>
                Summer Holiday Camp Educational Tours <br>
                <br>
                Easter Holiday Camp & Educational Tours <br>
                <br>
                Curriculum linked Tours <br>
                <br>
                Art & Design Tours <br>
                <br>
                Mid Term Break Tours <br>
                <br>    
                Musical Tours</p>
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
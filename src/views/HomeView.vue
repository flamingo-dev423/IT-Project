<template>
  <div class="relative w-full h-full bg-black">
    <div class="mx-3 md:mx-12">

      <!-- Navbar Slide -->

      <header
        class="bg-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 md:px-3 md:py-6"
      >
        <div class="flex items-center justify-between px-4 py-6 sm:p-0">
          <div>
            <img src="../assets/fylo.svg" class="h-5 md:h-8" alt="" />
          </div>
          <div class="sm:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  v-if="isOpen"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  v-if="!isOpen"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1  0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          :class="isOpen ? 'block' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <a
            href="/home"
            class="block px-2 py-1 text-white font-semibold md:text-xl"
            >Home</a
          >
          <a
            href="/virtual"
            class="mt-1 block px-2 py-1 text-gray-400 font-semibold md:text-xl hover:text-white"
            >Tour</a
          >
          <a
            href="/services"
            class="mt-1 block px-2 py-1 text-gray-400 font-semibold hover:text-white md:text-xl"
            >Services</a
          >
          <!-- <a
            href="/register"
            class="mt-1 block px-2 py-1 text-gray-400 font-semibold hover:text-white md:text-xl"
            >Register</a
          > -->
          <button
            v-on:click="Logout"
            class="whitespace-nowrap text-white sm:text-base md:text-xl font-semibold tracking-wide bg-green-700 py-2 px-8 hover:bg-transparent hover:border-green-700 hover:border-2"
          >
            Sign Out
          </button>
        </nav>
      </header>

      <!-- header-intro section -->
      
      <div class="flex">
        <h1
          class="w-full text-center lg:w-2/3 uppercase text-white lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-7xl mt-16 md:tracking-wider font-light md:leading-loose"
        >
          Ready To Explore The Beauty Of <br />Wonderful World
        </h1>
      </div>
      <div class="mt-12">
        <img
          src="../assets/images/pexels-gustavo-fring-4127637.jpg"
          class="w-full bg-center bg-no-repeat object-cover"
          style="height: 70vh"
          alt=""
        />
      </div>

      <!-- Destination section -->
      <div class="mt-12">
        <button
          class="bg-green-700 bg-opacity-20 text-green-700 font-medium text-md px-3 py-1 tracking-wide mb-6"
        >
          Destination
        </button>
        <!-- <p class="text-green-700 font-medium ">Destination</p> -->
        <h1 class="text-white text-2xl md:text-4xl font-semibold mb-6">
          Our Best Destination <br />
          For You
        </h1>
      </div>
      <div
        class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-8 mb-12"
      >
        <div class="grid grid-cols-2 gap-6">
          <img
            src="../assets/images/pexels-pixabay-302549.jpg"
            class="rounded-sm w-full shadow"
            alt=""
          />
          <div class="mb-2">
            <h1
              class="text-white sm:text-xl md:text-2xl tracking-wider font-semibold pb-1 md:pb-6"
            >
              Santorini Beach
            </h1>
            <p
              class="text-xs md:text-lg lg:text-xl text-gray-500 font-normal tracking-wider leading-tight"
            >
              Decorated with crystal blue waters and impressive rock formations.
              Santorini beach is a santuary for outdoor adventurers, beach
              loungers and wine lovers.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <img
            src="../assets/images/pexels-te-lensfix-1371360.jpg"
            class="rounded-sm w-full shadow"
            alt=""
          />
          <div>
            <h1
              class="text-white sm:text-xl md:text-2xl tracking-wider font-semibold pb-2"
            >
              Signature New Zealand
            </h1>
            <p
              class="text-xs md:text-lg lg:text-xl text-gray-500 font-normal tracking-wider leading-tight"
            >
              Signature New Zealand boasts ofthe best climates in New Zealand.
              Visitirs can enjoy the 428-mile-long coastline year round, whether
              they choose fine white sand beaches or dark volcanic shores.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <img
            src="../assets/images/pexels-iconcom-733203.jpg"
            class="rounded-sm w-full shadow"
            alt=""
          />
          <div>
            <h1
              class="text-white sm:text-xl md:text-2xl tracking-wider font-semibold pb-2"
            >
              Signature New Zealand
            </h1>
            <p
              class="text-xs md:text-lg lg:text-xl text-gray-500 font-normal tracking-wider leading-tight"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              laudantium delectus quisqu am exercitationem a amet. Laudantium
              architecto quaerat soluta ipsam!
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <img
            src="../assets/images/pexels-haley-black-2087391.jpg"
            class="rounded-sm w-full shadow"
            alt=""
          />
          <div>
            <h1
              class="text-white sm:text-xl md:text-2xl tracking-wider font-semibold pb-2"
            >
              Signature New Zealand
            </h1>
            <p
              class="text-xs md:text-lg lg:text-xl text-gray-500 font-normal tracking-wider leading-tight"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              fuga sed perspiciatis laborum, asperiores in veniam itaque nemo
              distinctio commodi.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-24 mb-12">
        <h1 class="text-white text-2xl md:text-4xl font-semibold">
          Our Tour Packages
        </h1>
        <button
          @click="$router.push('virtual')"
          class="bg-green-700 text-white uppercase tracking-wider px-12 py-4 hover:bg-transparent hover:border-green-700 hover:border-2 mt-6 text-lg hover:cursor-pointer"
        >
          Virtual Tour
        </button>
      </div>

      <carousel
        :items-to-show="2.75"
        :autoplay="2000"
        :wrap-around="true"
        :transition="500"
      >
        <slide v-for="slide in slides" :key="slide">
          <div class="w-full h-full object-cover">
            <img :src="slide.icon" class="rounded-sm" />
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>

      <div class="mt-24">
        <div class="">
          <h1
            class="capitalize font-semibold text-white text-2xl md:text-4xl mb-6"
          >
            BEST TRAVEL TOUR COMPANY IN NIGERIA
          </h1>
          <p
            class="text-gray-400 font-medium text-base md:text-xl sm:text-center md:w-1/2 md:text-left"
          >
            Fylo is the best travel tour company in Nigeria. Based on our wide
            network of professional partners across the world, vast experience,
            highly trained staff with deep knowledge and high level of expertise
            in educational tourism, we organize interesting tour packages for
            different global destinations.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 mt-12"
        >
          <div>
            <img
              src="../assets/images/pexels-julian-lobo-2407070.jpg"
              class="rounded-sm w-auto"
              alt=""
            />
            <h1
              class="text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-wider text-center my-5"
            >
              Holiday Packages
            </h1>
            <p
              class="text-sm md:text-base lg:text-xl text-gray-400 tracking-wide mb-6 text-center"
            >
              Highly interactive and fun-filled tours
            </p>
            <button
              @click="$router.push('holidayPackages')"
              class="w-full px-8 py-4 bg-green-700 text-white text-xl font-semibold hover:bg-transparent hover:border-green-700 hover:border-2"
            >
              Learn More
            </button>
          </div>

          <div>
            <img
              src="../assets/images/pexels-asad-photo-maldives-1268855.jpg"
              class="rounded-sm"
              alt=""
            />
            <h1
              class="text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-wider text-center my-5"
            >
              Ticketing and Reservation
            </h1>
            <p
              class="text-sm md:text-base lg:text-xl text-gray-400 tracking-wide mb-6 text-center"
            >
              Ticketing for Local and International Flights
            </p>
            <button
              @click="$router.push('ticketingReservation')"
              class="w-full px-8 py-4 bg-green-700 text-white text-xl font-semibold hover:bg-transparent hover:border-green-700 hover:border-2"
            >
              Learn More
            </button>
          </div>

          <div>
            <img
              src="../assets/images/pexels-gustavo-fring-4173229.jpg"
              class="rounded-sm"
              alt=""
            />
            <h1
              class="text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-wider text-center my-5"
            >
              Travel Insurance
            </h1>
            <p
              class="text-sm md:text-base lg:text-xl text-gray-400 tracking-wide mb-6 text-center"
            >
              Insurance policy for effective protection
            </p>
            <button
              @click="$router.push('travelInsurance')"
              class="w-full px-8 py-4 bg-green-700 text-white text-xl font-semibold hover:bg-transparent hover:border-green-700 hover:border-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div class="mt-24">
        <p class="text-gray-400 text-xl tracking-wider font-light">
          <span
            class="text-xl md:text-2xl text-red-700 font-semibold tracking-wider"
            >Fylo</span
          >
          travel & tours Inc.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router"; //import router

export default {
  name: "HomeView",
  methods: {
    Logout() {
      console.log("Sign Oggut");
      const auth = getAuth();

      const router = useRouter(); //get a reference to our router
      signOut(auth).then(() => {
        localStorage.clear();
        this.$router.push("/");
      });
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: function () {
    return {
      slides: [
        {
          id: "1",
          icon: require("../assets/images/pexels-gustavo-fring-4127634.jpg"),
        },
        {
          id: "2",
          icon: require("../assets/images/pexels-gustavo-fring-4127637.jpg"),
        },
        {
          id: "3",
          icon: require("../assets/images/pexels-gustavo-fring-4127640.jpg"),
        },
        {
          id: "4",
          icon: require("../assets/images/pexels-gustavo-fring-4127642.jpg"),
        },
        {
          id: "5",
          icon: require("../assets/images/pexels-gustavo-fring-4127643.jpg"),
        },
        {
          id: "6",
          icon: require("../assets/images/pexels-gustavo-fring-4127644.jpg"),
        },
        {
          id: "7",
          icon: require("../assets/images/pexels-gustavo-fring-4127645.jpg"),
        },
      ],
      isOpen: false,
    };
  },
};

//
// const isLoggedIn = ref(false);

// let auth;
// onMounted(() => {
//     auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             isLoggedIn.value = true;
//         } else {
//             isLoggedIn.value = false;
//         }
//     });
// });
// const handleSignOut = () => {
//     signOut(auth).then(() => {
//         router.push("/login");
//     });
// };
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
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

.carousel__slide--active ~ .carousel_slide {
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

p {
  font-family: "Open Sans", sans-serif;
}
</style>

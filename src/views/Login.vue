<template>

    <!-- section -->
    <div class="flex flex-col md:flex-row h-screen items-center">

    <!-- login left banner -->
    <div class="bg-blue-600 hidden lg:block md:w-1/2 xl:w-2/3 h-screen">
        <img src="../assets/filip-VHf4jqrUu7g-unsplash.jpg" class="w-full h-full object-cover hover:opacity-90 " />
    </div>

    <!-- login right banner -->
    <div class="bg-white flex items-center justify-center md:mx-auto md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 ">
        <div class="w-full h-100">
            <img src="../assets/fylo.svg" class="mt-6 md:mt-0 h-6 md:h-10" style="filter: brightness(0) invert(0);" />
            <!-- <h1 class="text-xl font-bold">Login Page</h1> -->
            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Sign in to your account</h1>

            <form class="mt-6" @submit.prevent="login">
                <div class="">
                    <label class="block text-gray-700">Email Address</label>
                    <input type="email" placeholder="Enter Email Address" id="email" v-model="email" class="w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3"  autofocus required>
                </div>

                <div class="mt-4">
                    <label class="block text-gray-700">Password</label>
                    <input type="password" minlength="6" placeholder="Enter Password" id="password" v-model="password" class="w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3" required>
                </div>

                <div v-if="errMsg">{{  errMsg   }}</div>
                <div class="text-right mt-2">
                    <a href="#" class="text-xs md:text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 focus:outline-none">Forget Password</a>
                </div>

                <button class="w-full block bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none" type="submit">Sign In</button>

                <hr class="my-6 border-gray-300 w-full">

                <button @click="signInWithGoogle" type="button" class="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 semibold rounded-lg px-4 py-3 border ">
                    <div class="flex items-center justify-center">
                        <img src="../assets/google-svgrepo-com.svg" class="h-5" alt="">
                        <span class="ml-4">
                            Sign in with Google
                        </span>
                    </div>
                </button>

                <p class="ml-32 mt-6 text-xs md:text-sm">
                    Need an account?  
                    <router-link to="/register" class="text-blue-500 text-sm md:text-lg hover:text-blue-700 font-semibold">Create account</router-link>
                </p>

                <p class="text-sm text-gray-500 mt-12">
                    &copy; 2022 Flamingo Community Landing Page
                </p>
            </form>
        </div>
    </div>
</div>
<router-view/>

</template>

<script setup>
import {  ref  } from "vue";
import {  getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import {  useRouter  } from 'vue-router'  //import router
const email = ref("");
const password = ref("");
const errMsg = ref() //ERROR MESSAGE
const router = useRouter()  //get a reference to our router


const login = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully sign in !");
            router.push('/home') //redirect to the homepage
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found ";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password are incorrect";
                    break;
            }
        });
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        router.push("/home");
    })
    .catch((error) => {
        //handle error
    });
};

//forgot psswrd


</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}
</style>
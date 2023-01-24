import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Vue3Transitions from 'vue3-transitions'
import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDrteq6kAS-TLys20Z4oxsa8N01Es6WWcs",
    authDomain: "fylo-vue-app.firebaseapp.com",
    projectId: "fylo-vue-app",
    storageBucket: "fylo-vue-app.appspot.com",
    messagingSenderId: "907868654508",
    appId: "1:907868654508:web:42abf11ef4d9ccf8e88809"
  };
  



 initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export {  auth, db  };


  
createApp(App).use(router).use(Vue3Transitions).mount('#app')

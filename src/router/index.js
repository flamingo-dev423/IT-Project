import { createRouter, createWebHistory } from 'vue-router'
import Disable from '../views/disable.vue';
import HomeView from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Virtual from '../views/virtual.vue';
import About from '../views/about.vue';
import TicketingReservation from '../views/ticketingReservation.vue';
import TravelInsurance from '../views/travelInsurance.vue';
import HolidayPackages from '../views/holidayPackages.vue';
import Services from '../views/services.vue';
import Package from '../views/package.vue';
import PackageOne from '../views/packageOne.vue';
import PackageTwo from '../views/packageTwo.vue';
import PackageThree from '../views/packageThree.vue';

const routes = [
  {
    path: '/',
    name: 'disable',
    component: Disable
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login  
  },
  {
    path: '/register',
    name: 'register',
    component: Register  
  },
  {
    path: '/virtual',
    name: 'virtual',
    component: Virtual  
  },
  {
    path: '/about',
    name: 'about',
    component: About  
  },
  {
    path: '/services',
    name: 'services',
    component: Services  
  },
  {
    path: '/ticketingReservation',
    name: 'ticketingReservation',
    component: TicketingReservation  
  },
  {
    path: '/travelInsurance',
    name: 'travelInsurance',
    component: TravelInsurance  
  },
  {
    path: '/holidayPackages',
    name: 'holidayPackages',
    component: HolidayPackages  
  },
  {
    path: '/package',
    name: 'package',
    component: Package  
  },
  {
    path: '/packageOne',
    name: 'packageOne',
    component: PackageOne  
  },
  {
    path: '/packageTwo',
    name: 'packageTwo',
    component: PackageTwo 
  },
  {
    path: '/packageThree',
    name: 'packageThree',
    component: PackageThree  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: "history",
  routes
})

const getCurrentUser = () => {
  return new promise((resolve, reject) => {
    const removeListener = onAuthStateChanged (
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  });
};


router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access!");
      next("/login");
    }
  } else {
    next();
  }
});
export default router

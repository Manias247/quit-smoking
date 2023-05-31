import { createRouter, createWebHistory } from 'vue-router';
//  import { useUserStore } from '../store/modules/user';
 import HomeView from '../components/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserDashboard from '../views/UserDashboard.vue';
import UsersGroup from '@/views/UsersGroup.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/AboutView",
    name: "AboutView",
    component: AboutView
  },
  {
    path: "/RegisterView",
    name: "RegisterView",
    component: RegisterView
  },
   {
    path: "/LoginView",
    name: "LoginView",
    component: LoginView
  },
  {
    path: "/UserDashboard",
    name: "UserDashboard",
    component: UserDashboard,
  },
  {
    path: "/UsersGroup",
    name: "UsersGroup",
    component: UsersGroup,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router

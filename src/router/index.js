import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants/pages
import Dashbord from '../views/Dashbord.vue';
import Users from '../views/Users.vue';
import Coache from '../views/Coache.vue';

// Configuration des routes
const routes = [
  {
    path: '/',
    name: 'Dashbord',
    component: Dashbord,
  },
  {
    path: '/coache',
    name: 'Coache',
    component: Coache, 
  },
  {
    path: '/users',
    name: 'Users',
    component: Users, 
  },
  
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Utilise le mode "History" (URL clean)
  routes,
});

export default router;

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ChiSono from './components/ChiSono.vue';
import "./style.css";
import App from "./App.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/chisono', component: ChiSono }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

const app = createApp(App);
app.use(router);

createApp(App).mount("#app");

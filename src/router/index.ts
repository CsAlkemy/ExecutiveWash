import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/*webpackChunkName:"Home"*/ "../views/Home.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
      import(/*webpackChunkName:"services"*/ "../views/Services.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/*webpackChunkName:"gallery"*/ "../views/Gallery.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/*webpackChunkName:"contact"*/ "../views/Contact.vue"),
  },
  {
    path: "/appointment",
    name: "Appointment",
    component: () =>
      import(/*webpackChunkName:"Appointment"*/ "../views/Appointment.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/*webpackChunkName:"about"*/ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 100);
      })
    );
  },
});

router.afterEach((to, from) => {
  window.document.title = `${String(to.name)} | Executive Car Wash & Details`;
});

export default router;

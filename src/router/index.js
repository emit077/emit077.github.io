import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: "Home"},
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return {top: 0}
  },
})


/* redirecting to home page if access token is not provided*/
router.beforeEach((to, from, next) => {
  next()
  //setting the title
  if (to && to.meta && to.meta.title)
    window.document.title = "Amit Kumar Sahu | " + to.meta.title;
});


export default router

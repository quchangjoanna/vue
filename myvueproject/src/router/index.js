import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import deng from '../pages/deng'
import zhuce from '../pages/zhuce'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
      },
    },
    {
      path: '/deng',
      component: deng,
      name:'deng'
    },
    {
      path: '/zhuce',
      component: zhuce,
      name:'zhuce'
    }
  ],
})

router.beforeEach((to, from, next) => {
  next()
})

export default router;

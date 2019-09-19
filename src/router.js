import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: {
        withChunkName: () => import(/* webpackChunkName: "nested/chunk" */ './views/WithChunkName.vue'),
        withoutChunkName: () => import('./views/WithoutChunkName.vue')
      }
    }
  ]
})

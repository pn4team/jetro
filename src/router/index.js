import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/Homepage'
import SinglePost from '@/pages/SinglePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HelloWorld
    },
    {
      path: '/post',
      name: 'SinglePost',
      component: SinglePost
    }
  ]
})

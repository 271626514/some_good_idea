import Vue from 'vue'
import Router from 'vue-router'
import routerImage from '@/page/image'
import css from '@/page/css'
import transform from '@/page/transform'
import other from '@/page/other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'image',
      component: routerImage
    },
    {
      path: '/css',
      name: 'css',
      component: css
    },
    {
      path: '/transform',
      name: 'transform',
      component: transform
    },
    {
      path: '/image',
      name: 'image',
      component: routerImage
    },
    {
      path: '/other',
      name: 'other',
      component: other
    }
  ]
})
